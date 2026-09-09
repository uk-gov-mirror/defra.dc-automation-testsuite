/**
 * How is the fuel manufactured? - reached via the "Add" link against
 * "Manufacturing process" on the add fuel description page
 * (e.g. /0318/grillaedin/manufacture). The heading is a GOV.UK label-wrapper,
 * not a plain heading - the text also labels the textarea.
 */
class FuelManufacturingProcessPage {
  //
  // ===== SELECTORS =====
  //

  get pageHeading() {
    return $('h1')
  }

  get manufacturingProcessTextarea() {
    return $('#fuel-manu')
  }

  get saveChangesButton() {
    return $('button=Save changes')
  }

  get cancelLink() {
    return $('a=Cancel')
  }

  //
  // ===== ACTIONS =====
  //

  async enterManufacturingProcess(text) {
    await this.manufacturingProcessTextarea.setValue(text)
  }

  async saveChanges() {
    await this.saveChangesButton.click()
  }

  async cancel() {
    await this.cancelLink.click()
  }

  //
  // ===== ASSERTIONS =====
  //

  async verifyPageLoaded() {
    await expect(this.pageHeading).toHaveText('How is the fuel manufactured?')
  }

  async getManufacturingProcess() {
    return this.manufacturingProcessTextarea.getValue()
  }

  //
  // ===== NAVIGATION =====
  //

  open(applicationReference, fuelCode) {
    return browser.url(
      `/admin/iteration-2/${applicationReference}/${fuelCode}/manufacture`
    )
  }
}

export default new FuelManufacturingProcessPage()
