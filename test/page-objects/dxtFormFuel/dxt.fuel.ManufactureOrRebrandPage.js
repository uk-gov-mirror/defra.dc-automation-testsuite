

class ManufactureOrRebrandPage {

    //
    // ===== SELECTORS =====
    //

    get heading() {
        return $('h1=Do you manufacture the fuel or rebrand fuel made by someone else?');
    }

    // Radio buttons by ID (unique & stable)
    get manufactureRadio() {
        return $('#AmmLSb');
    }

    get rebrandRadio() {
        return $('#AmmLSb-2');
    }

    // Buttons by visible text
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

    async selectOption(optionText) {
        const formatted = optionText.toLowerCase();

        if (formatted.includes('manufacture')) {
            await this.clickElement(this.manufactureRadio);
        } else if (formatted.includes('rebrand')) {
            await this.clickElement(this.rebrandRadio);
        } else {
            throw new Error(`Invalid radio selection: ${optionText}`);
        }
    }


    //
    // ===== ACTIONS =====
    //

    async chooseManufacture() {
        await this.clickElement(this.manufactureRadio);
    }

    async chooseRebrand() {
        await this.clickElement(this.rebrandRadio);
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
        await expect(this.manufactureRadio).toBeDisplayed();
        await expect(this.rebrandRadio).toBeDisplayed();
    }


    //
    // ===== NAVIGATION =====
    //

    open() {
        return super.open(
            '/form/preview/draft/get-a-solid-fuel-certified-for-use-in-smoke-control-areas/do-you-manufacture-the-fuel-or-rebrand-fuel-made-by-someone-else'
        );
    }

}

export default new ManufactureOrRebrandPage();