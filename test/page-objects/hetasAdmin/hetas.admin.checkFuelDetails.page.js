import SummaryListComponent from './summaryList.component.js'

/**
 * Check fuel details for {fuel} - reached via the "Check fuel details" task
 * under "Prepare public listing" on the fuel review detail page
 * (e.g. /0318/grillaedin/fuel-details). "Mark as completed" is a plain
 * link, not a form submission - there is no data entry on this page.
 */
class CheckFuelDetailsPage {
  //
  // ===== SELECTORS =====
  //

  get pageHeading() {
    return $('h1')
  }

  // Summary list has no card wrapper on this page, so it is scoped to the whole page
  get fuelDetails() {
    return new SummaryListComponent()
  }

  get markAsCompletedLink() {
    return $('a=Mark as completed')
  }

  get cancelLink() {
    return $('a=Cancel')
  }

  //
  // ===== ACTIONS =====
  //

  async getFuelDetail(label) {
    return this.fuelDetails.getValue(label)
  }

  async changeFuelDetail(label) {
    await this.fuelDetails.changeField(label)
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
      `Check fuel details for ${fuelName}`
    )
  }

  //
  // ===== NAVIGATION =====
  //

  open(applicationReference, fuelCode) {
    return browser.url(
      `/admin/iteration-2/${applicationReference}/${fuelCode}/fuel-details`
    )
  }
}

export default new CheckFuelDetailsPage()
