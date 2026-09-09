/**
 * What does the fuel look like? - reached via the "Add" link against "Fuel
 * appearance" on the add fuel description page (e.g. /0318/grillaedin/appearance).
 * The heading is a GOV.UK label-wrapper, not a plain heading - the text also
 * labels the textarea.
 */
class FuelAppearancePage {
  //
  // ===== SELECTORS =====
  //

  get pageHeading() {
    return $('h1')
  }

  get fuelAppearanceTextarea() {
    return $('#fuel-desc')
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

  async enterFuelAppearance(text) {
    await this.fuelAppearanceTextarea.setValue(text)
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
    await expect(this.pageHeading).toHaveText('What does the fuel look like?')
  }

  async getFuelAppearance() {
    return this.fuelAppearanceTextarea.getValue()
  }

  //
  // ===== NAVIGATION =====
  //

  open(applicationReference, fuelCode) {
    return browser.url(
      `/admin/iteration-2/${applicationReference}/${fuelCode}/appearance`
    )
  }
}

export default new FuelAppearancePage()
