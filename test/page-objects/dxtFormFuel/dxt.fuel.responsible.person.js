
class ResponsiblePersonPage {

    //
    // ===== SELECTORS =====
    //

    get heading() {
        return $('h1=Responsible person');
    }

    get descriptionLine1() {
        return $('p=Certificates for fuels must include the name of the person who got the certificate from the approved certification organisation.');
    }

    get descriptionLine2() {
        return $('p=This might be the same person as the main contact for this application.');
    }

    // Inputs — stable unique IDs
    get nameField() {
        return $('#ChfkKZ');
    }

    get emailField() {
        return $('#OOrscG');
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
        await expect(this.descriptionLine1).toBeDisplayed();
        await expect(this.descriptionLine2).toBeDisplayed();
    }

    async verifyFieldsEmpty() {
        await expect(this.nameField).toHaveValue('');
        await expect(this.emailField).toHaveValue('');
    }


    //
    // ===== NAVIGATION =====
    //

    open() {
        return super.open(
            '/form/preview/draft/get-a-solid-fuel-certified-for-use-in-smoke-control-areas/responsible-person'
        );
    }
}

export default new ResponsiblePersonPage();