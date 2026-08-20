// companyName.page.js
 
export const CompanyNamePage = {
    // Selectors
    companyNameInput: () => $('#XpAWNK'),
    continueButton: () => $('button.govuk-button:not([name="action"])'),
    saveAndExitButton: () => $('button[name="action"][value="save-and-exit"]'),
    heading: () => $('label.govuk-label--l'),
 
    // Actions
    open: async () => {
        await browser.url('/form/preview/draft/get-a-solid-fuel-certified-for-use-in-smoke-control-areas/company-name');
    },
 
    enterCompanyName: async (text) => {
        await CompanyNamePage.companyNameInput().setValue(text);
    },
 
    clickContinue: async () => {
        await CompanyNamePage.continueButton().click();
    },
 
    clickSaveAndExit: async () => {
        await CompanyNamePage.saveAndExitButton().click();
    },
 
    getHeadingText: async () => {
        return CompanyNamePage.heading().getText();
    }
};