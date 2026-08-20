
class SummaryPage  {

    //
    // ===== SELECTORS =====
    //

    get heading() {
        return $('h1=Check your answers before sending your form');
    }

    get confirmationEmailField() {
        return $('#userConfirmationEmailAddress');
    }

    get confirmationEmailHint() {
        return $('#userConfirmationEmailAddress-hint');
    }

    get submitBtn() {
        return $('button=Submit');
    }

    get saveAndExitBtn() {
        return $('button=Save and exit');
    }


    //
    // ===== SUMMARY LIST SELECTORS =====
    //

    /**
     * Returns the value element for a summary row by visible row title text.
     * Example usage: await SummaryPage.getSummaryValue('Company name');
     */
    summaryRowValue(title) {
        return $(
            `//dt[normalize-space()="${title}"]/following-sibling::dd[contains(@class,"govuk-summary-list__value")]`
        );
    }

    /**
     * Returns the Change link for a summary row
     */
    summaryRowChangeLink(title) {
        return $(
            `//dt[normalize-space()="${title}"]/following-sibling::dd/a[contains(text(),"Change")]`
        );
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

    async enterConfirmationEmail(value) {
        await this.setInput(this.confirmationEmailField, value);
    }

    async clickSubmit() {
        await this.clickElement(this.submitBtn);
    }

    async clickSaveAndExit() {
        await this.clickElement(this.saveAndExitBtn);
    }


    //
    // ===== ASSERTIONS =====
    //

    async verifyPageLoaded() {
        await expect(this.heading).toBeDisplayed();
        await expect(this.confirmationEmailField).toBeDisplayed();
    }

    async verifySummaryValue(title, expectedText) {
        const el = this.summaryRowValue(title);
        await expect(el).toHaveTextContaining(expectedText);
    }


    //
    // ===== NAVIGATION =====
    //

    open() {
        return super.open(
            '/form/preview/draft/get-a-solid-fuel-certified-for-use-in-smoke-control-areas/summary'
        );
    }
}

export default new SummaryPage();