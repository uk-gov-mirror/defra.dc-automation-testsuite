/**
 * Original fuel manufacturer - reached via the "Change" link against
 * "Original fuel manufacturer" on the check fuel details page
 * (e.g. /0318/grillaedin/original-manufacturer). Input is pre-populated with
 * the current manufacturer, so tests should assert against the value they set.
 */
class FuelOriginalManufacturerPage {
  //
  // ===== SELECTORS =====
  //

  get pageHeading() {
    return $('h1')
  }

  get originalManufacturerInput() {
    return $('#original-manu')
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

  async enterOriginalManufacturer(name) {
    await this.originalManufacturerInput.setValue(name)
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
    await expect(this.pageHeading).toHaveText('Original fuel manufacturer')
  }

  async getOriginalManufacturer() {
    return this.originalManufacturerInput.getValue()
  }

  //
  // ===== NAVIGATION =====
  //

  open(applicationReference, fuelCode) {
    return browser.url(
      `/admin/iteration-2/${applicationReference}/${fuelCode}/original-manufacturer`
    )
  }
}

export default new FuelOriginalManufacturerPage()
