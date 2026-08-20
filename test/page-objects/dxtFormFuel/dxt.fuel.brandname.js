class WhatBrandNamePage  {

    //
    // ===== SELECTORS =====
    //

    get heading() {
        return $('label.govuk-label--l=What brand name will you be reselling the product under?');
    }

    get hintText() {
        return $('#gGFSnh-hint');
    }

    // Textarea (unique and stable ID)
    get brandNamesTextarea() {
        return $('#gGFSnh');
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

    async setInput(field, value) {
        await field.waitForDisplayed();
        await field.setValue(value);
    }

    async clickElement(element) {
        await element.waitForDisplayed();
        await element.click();
    }


    //
    // ===== ACTIONS =====
    //

    async enterBrandNames(value) {
        await this.setInput(this.brandNamesTextarea, value);
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
        await expect(this.hintText).toBeDisplayed();
    }

    async verifyBrandNamesEmpty() {
        await expect(this.brandNamesTextarea).toHaveValue('');
    }


    //
    // ===== NAVIGATION =====
    //

    open() {
        return super.open(
            '/form/preview/draft/get-a-solid-fuel-certified-for-use-in-smoke-control-areas/what-brand-name-will-you-be-reselling-the-product-under'
        );
    }
}

export default new WhatBrandNamePage();