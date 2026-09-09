import DxtFuelFormComponent from './dxtFuelForm.component.js'

/**
 * DXT fuel form - "Form submitted", the confirmation page.
 * No reference number is shown, so created records must be correlated by unique field values
 * (company name / brand name).
 */
class DxtFuelFormSubmittedPage extends DxtFuelFormComponent {
  static SLUG = 'status'

  static HEADING = 'Form submitted'

  //
  // ===== SELECTORS =====
  //

  get confirmationPanel() {
    return $('.govuk-panel--confirmation')
  }

  //
  // ===== ASSERTIONS =====
  //

  async verifyPageLoaded() {
    await super.verifyPageLoaded(DxtFuelFormSubmittedPage.HEADING)
    await expect(this.confirmationPanel).toBeDisplayed()
  }

  //
  // ===== NAVIGATION =====
  //

  open() {
    return super.open(DxtFuelFormSubmittedPage.SLUG)
  }
}

export default new DxtFuelFormSubmittedPage()
