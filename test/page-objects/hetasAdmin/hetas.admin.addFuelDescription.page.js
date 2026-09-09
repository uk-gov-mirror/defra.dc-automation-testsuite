import SummaryListComponent from './summaryList.component.js'

/**
 * Add fuel description for {fuel} - reached via the "Add fuel description"
 * task under "Prepare public listing" on the fuel review detail page
 * (e.g. /0318/grillaedin/fuel-description). Unlike other summary lists, each
 * row's "Add" link sits directly in the value cell rather than a separate
 * actions column, so it is looked up relative to the row's own value cell.
 */
class AddFuelDescriptionPage {
  //
  // ===== SELECTORS =====
  //

  get pageHeading() {
    return $('h1')
  }

  // Read-only "Details of original fuel" list has no card wrapper, so it is scoped to the whole page
  get originalFuelDetails() {
    return new SummaryListComponent()
  }

  get markAsCompletedLink() {
    return $('a=Mark as completed')
  }

  get cancelLink() {
    return $('a=Cancel')
  }

  getAddAttributeLink(label) {
    return $(
      `//dt[normalize-space(text())="${label}"]/following-sibling::dd[1]//a`
    )
  }

  //
  // ===== ACTIONS =====
  //

  async getOriginalFuelDetail(label) {
    return this.originalFuelDetails.getValue(label)
  }

  async addFuelAttribute(label) {
    await this.getAddAttributeLink(label).click()
  }

  async markAsCompleted() {
    await this.markAsCompletedLink.click()
  }

  async cancel() {
    await this.cancelLink.click()
  }

  //
  // ===== ASSERTIONS =====
  //

  async verifyPageLoaded(fuelName) {
    await expect(this.pageHeading).toHaveText(
      `Add fuel description for ${fuelName}`
    )
  }

  //
  // ===== NAVIGATION =====
  //

  open(applicationReference, fuelCode) {
    return browser.url(
      `/admin/iteration-2/${applicationReference}/${fuelCode}/fuel-description`
    )
  }
}

export default new AddFuelDescriptionPage()
