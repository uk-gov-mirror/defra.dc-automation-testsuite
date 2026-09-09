/**
 * Reusable GOV.UK table component for one application status group (e.g. "Not
 * started", "In progress"). Shared by the appliance and fuel application pages,
 * which render the same table structure. Rows have no test attribute, so each
 * row is looked up by its application reference - the only stable per-row
 * identity in the DOM.
 */
class ApplicationsTableComponent {
  constructor(captionText) {
    this.captionText = captionText
  }

  //
  // ===== SELECTORS =====
  //

  // Scopes to the table whose caption matches this status group
  get table() {
    return $(
      `//table[.//caption[normalize-space(text())="${this.captionText}"]]`
    )
  }

  //
  // ===== HELPERS =====
  //

  async getRow(applicationReference) {
    return this.table.$(
      `.//th[normalize-space(text())="${applicationReference}"]/parent::tr`
    )
  }

  //
  // ===== ACTIONS =====
  //

  async getProductsForApplication(applicationReference) {
    const row = await this.getRow(applicationReference)
    return (await row.$('td').getText()).trim()
  }

  // Only present on tables with a "Reviewer" column (e.g. "In progress")
  async getReviewer(applicationReference) {
    const row = await this.getRow(applicationReference)
    const cells = await row.$$('td')
    return (await cells[1].getText()).trim()
  }

  async reviewApplication(applicationReference) {
    const row = await this.getRow(applicationReference)
    await row.$('a').click()
  }

  //
  // ===== ASSERTIONS =====
  //

  async verifyApplicationListed(applicationReference) {
    await expect(await this.getRow(applicationReference)).toBeDisplayed()
  }

  async verifyApplicationNotListed(applicationReference) {
    await expect(await this.getRow(applicationReference)).not.toExist()
  }
}

export default ApplicationsTableComponent
