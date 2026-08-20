

class CustomerComplaintsPage {

    //
    // ===== SELECTORS =====
    //

    get heading() {
        return $('h1=Do you have a system in place to deal with customer complaints?');
    }

    // Radio buttons (use ID selectors)
    get yesRadio() {
        return $('#BUaprr');
    }

    get noRadio() {
        return $('#BUaprr-2');
    }

    // Buttons (visible text)
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

    async selectRadio(option) {
        if (option.toLowerCase() === 'yes') {
            await this.clickElement(this.yesRadio);
        } else if (option.toLowerCase() === 'no') {
            await this.clickElement(this.noRadio);
        } else {
            throw new Error(`Invalid option passed to selectRadio: ${option}`);
        }
    }


    //
    // ===== ACTIONS =====
    //

    async chooseYes() {
        await this.clickElement(this.yesRadio);
    }

    async chooseNo() {
        await this.clickElement(this.noRadio);
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

    async verifyRadiosPresent() {
        await expect(this.yesRadio).toBeDisplayed();
        await expect(this.noRadio).toBeDisplayed();
    }


    //
    // ===== NAVIGATION =====
    //

    open() {
        return super.open(
            '/form/preview/draft/get-a-solid-fuel-certified-for-use-in-smoke-control-areas/do-you-have-a-system-in-place-to-deal-with-customer-complaints'
        );
    }

}

export default new CustomerComplaintsPage();