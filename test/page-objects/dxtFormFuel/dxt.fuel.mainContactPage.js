
class MainContactPage {

    //
    // ===== SELECTORS =====
    //

    get heading() {
        return $('h1=Main contact');
    }

    get descriptionText() {
        return $('p=We will contact this person if we have any questions about your fuel or your application.');
    }

    // Form inputs (use IDs — unique, resilient)
    get nameField() {
        return $('#lhhoTX');
    }

    get emailField() {
        return $('#zCPkvh');
    }

    get alternateEmailField() {
        return $('#FwtbfD');
    }

    get phoneField() {
        return $('#OIMWWP');
    }

    get phoneHint() {
        return $('#OIMWWP-hint');
    }

    // Buttons (visible text selectors)
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

    async enterName(value) {
        await this.setInput(this.nameField, value);
    }

    async enterEmail(value) {
        await this.setInput(this.emailField, value);
    }

    async enterAlternateEmail(value) {
        await this.setInput(this.alternateEmailField, value);
    }

    async enterPhone(value) {
        await this.setInput(this.phoneField, value);
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
        await expect(this.descriptionText).toBeDisplayed();
    }

    async verifyPhoneHint() {
        await expect(this.phoneHint).toHaveTextContaining('Enter a UK phone number');
    }

    async verifyFieldsEmpty() {
        await expect(this.nameField).toHaveValue('');
        await expect(this.emailField).toHaveValue('');
        await expect(this.alternateEmailField).toHaveValue('');
        await expect(this.phoneField).toHaveValue('');
    }


    //
    // ===== NAVIGATION =====
    //

    open() {
        return super.open(
            '/form/preview/draft/get-a-solid-fuel-certified-for-use-in-smoke-control-areas/main-contact'
        );
    }
}

export default new MainContactPage();