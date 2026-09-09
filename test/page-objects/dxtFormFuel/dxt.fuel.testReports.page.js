import DxtFuelFormComponent from './dxtFuelForm.component.js'

/**
 * DXT fuel form - "Test reports". Follows brand-name, on the common tail.
 * Information-only page: test reports are emailed to HETAS separately, so there is nothing to
 * fill in and submit() takes no data.
 */
class DxtFuelTestReportsPage extends DxtFuelFormComponent {
  static SLUG = 'test-reports'

  static HEADING = 'Test reports'

  //
  // ===== ACTIONS =====
  //

  async submit() {
    await this.verifyPageLoaded()
    await this.clickContinue()
  }

  //
  // ===== ASSERTIONS =====
  //

  // Heading and Continue are the only stable anchors - the page has no form fields
  async verifyPageLoaded() {
    await super.verifyPageLoaded(DxtFuelTestReportsPage.HEADING)
    await expect(this.continueButton).toBeDisplayed()
  }

  //
  // ===== NAVIGATION =====
  //

  open() {
    return super.open(DxtFuelTestReportsPage.SLUG)
  }
}

export default new DxtFuelTestReportsPage()
