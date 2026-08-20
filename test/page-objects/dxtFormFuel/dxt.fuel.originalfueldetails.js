
class OriginalFuelDetailsPage  {

    //
    // ===== SELECTORS =====
    //

    get heading() {
        return $('h1=Original fuel details');
    }

    get descriptionText() {
        return $('p=This information is required for your application only, and will not be made public.');
    }

    // Input fields (IDs are stable and unique)
    get originalFuelManufacturer() {
        return $('#mGVwfX');
    }

    get originalFuelNameOrBrand() {
        return $('#qHMgAu');
    }

    // Buttons (use visible text selectors)
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

    async enterOriginalFuelManufacturer(value) {
        await this.setInput(this.originalFuelManufacturer, value);
    }

    async enterOriginalFuelNameOrBrand(value) {
        await this.setInput(this.originalFuelNameOrBrand, value);
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

    async verifyFieldsEmpty() {
        await expect(this.originalFuelManufacturer).toHaveValue('');
        await expect(this.originalFuelNameOrBrand).toHaveValue('');
    }


    //
    // ===== NAVIGATION =====
    //

    open() {
        return super.open(
            '/form/preview/draft/get-a-solid-fuel-certified-for-use-in-smoke-control-areas/original-fuel-details'
        );
    }

}

export default new OriginalFuelDetailsPage();