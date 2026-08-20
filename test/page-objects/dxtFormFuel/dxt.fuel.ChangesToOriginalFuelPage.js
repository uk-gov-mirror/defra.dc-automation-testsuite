

class ChangesToOriginalFuelPage  {

    //
    // ===== SELECTORS =====
    //

    get heading() {
        return $('h1=Changes to original fuel');
    }

    // Radio options (unique & stable IDs)
    get noChangesRadio() {
        return $('#wSvNbv');
    }

    get yesChangesRadio() {
        return $('#wSvNbv-2');
    }

    // Textarea for explanation
    get changesExplanationTextarea() {
        return $('#UPvcFc');
    }

    // Buttons
    get continueBtn() {
        return $('button=Continue');
    }

    get saveAndExitBtn() {
        return $('button=Save and exit');
    }


    //
    // ===== HELPERS =====
    //

    async clickElement(element) {
        await element.waitForDisplayed();
        await element.click();
    }

    async setInput(field, value) {
        await field.waitForDisplayed();
        await field.setValue(value);
    }

    async selectOption(optionText) {
        const formatted = optionText.toLowerCase();

        if (formatted.includes('no')) {
            await this.clickElement(this.noChangesRadio);
        } else if (formatted.includes('yes')) {
            await this.clickElement(this.yesChangesRadio);
        } else {
            throw new Error(`Invalid optionText passed to selectOption(): ${optionText}`);
        }
    }


    //
    // ===== ACTIONS =====
    //

    async chooseNoChanges() {
        await this.clickElement(this.noChangesRadio);
    }

    async chooseYesChanges() {
        await this.clickElement(this.yesChangesRadio);
    }

    async enterExplanation(text) {
        await this.setInput(this.changesExplanationTextarea, text);
    }

    async clickContinue() {
        await this.clickElement(this.continueBtn);
    }

    async clickSaveAndExit() {
        await this.clickElement(this.saveAndExitBtn);
    }


    //
    // ===== ASSERTIONS =====
    //

    async verifyPageLoaded() {
        await expect(this.heading).toBeDisplayed();
    }

    async verifyRadioOptionsPresent() {
        await expect(this.noChangesRadio).toBeDisplayed();
        await expect(this.yesChangesRadio).toBeDisplayed();
    }

    async verifyExplanationEmpty() {
        await expect(this.changesExplanationTextarea).toHaveValue('');
    }


    //
    // ===== NAVIGATION =====
    //

    open() {
        return super.open(
            '/form/preview/draft/get-a-solid-fuel-certified-for-use-in-smoke-control-areas/changes-to-original-fuel'
        );
    }
}

export default new ChangesToOriginalFuelPage();