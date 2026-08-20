class HowDoYouSellFuelPage {

    //
    // ===== SELECTORS =====
    //

    get heading() {
        return $('h1=How do you sell this fuel?');
    }

    // Radio options (unique IDs)
    get looseUnbaggedRadio() {
        return $('#gefTHa');
    }

    get baggedAtSourceRadio() {
        return $('#gefTHa-2');
    }

    get baggedOrRebaggedRadio() {
        return $('#gefTHa-3');
    }

    // Buttons
    get continueBtn() {
        return $('button=Continue');
    }

    get saveAndExitBtn() {
        return $('button=Save and exit');
    }


    //
    // ===== HELPER METHODS =====
    //

    async clickElement(element) {
        await element.waitForDisplayed();
        await element.click();
    }

    async selectOption(optionText) {
        const formatted = optionText.toLowerCase();

        if (formatted.includes('loose')) {
            await this.clickElement(this.looseUnbaggedRadio);
        } else if (formatted.includes('source')) {
            await this.clickElement(this.baggedAtSourceRadio);
        } else if (formatted.includes('rebagged')) {
            await this.clickElement(this.baggedOrRebaggedRadio);
        } else {
            throw new Error(`Invalid option for radio selection: ${optionText}`);
        }
    }


    //
    // ===== ACTIONS =====
    //

    async chooseLooseUnbagged() {
        await this.clickElement(this.looseUnbaggedRadio);
    }

    async chooseBaggedAtSource() {
        await this.clickElement(this.baggedAtSourceRadio);
    }

    async chooseBaggedOrRebagged() {
        await this.clickElement(this.baggedOrRebaggedRadio);
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

    async verifyOptionsPresent() {
        await expect(this.looseUnbaggedRadio).toBeDisplayed();
        await expect(this.baggedAtSourceRadio).toBeDisplayed();
        await expect(this.baggedOrRebaggedRadio).toBeDisplayed();
    }


    //
    // ===== NAVIGATION =====
    //

    open() {
        return super.open(
            '/form/preview/draft/get-a-solid-fuel-certified-for-use-in-smoke-control-areas/how-do-you-sell-this-fuel'
        );
    }

}

export default new HowDoYouSellFuelPage();