

class DeclarationPage  {

    //
    // ===== SELECTORS =====
    //

    get heading() {
        return $('h1=Declaration');
    }

    // The only checkbox on the page
    get agreeCheckbox() {
        return $('#dytkGm');
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


    //
    // ===== ACTIONS =====
    //

    async tickAgreement() {
        await this.clickElement(this.agreeCheckbox);
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
        await expect(this.agreeCheckbox).toBeDisplayed();
    }

    async verifyCheckboxNotTicked() {
        await expect(this.agreeCheckbox).not.toBeSelected();
    }


    //
    // ===== NAVIGATION =====
    //

    open() {
        return super.open(
            '/form/preview/draft/get-a-solid-fuel-certified-for-use-in-smoke-control-areas/declaration'
        );
    }
}

export default new DeclarationPage();