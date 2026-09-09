/**
 * What is the fuel's overall composition? - reached via the "Add" link
 * against "Fuel composition" on the add fuel description page
 * (e.g. /0318/grillaedin/composition). The heading is a GOV.UK label-wrapper,
 * not a plain heading - the text also labels the textarea.
 */
class FuelCompositionPage {
  //
  // ===== SELECTORS =====
  //

  get pageHeading() {
    return $('h1')
  }

  get fuelCompositionTextarea() {
    return $('#fuel-comp')
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

  async enterFuelComposition(text) {
    await this.fuelCompositionTextarea.setValue(text)
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
    await expect(this.pageHeading).toHaveText(
      "What is the fuel's overall composition?"
    )
  }

  async getFuelComposition() {
    return this.fuelCompositionTextarea.getValue()
  }

  //
  // ===== NAVIGATION =====
  //

  open(applicationReference, fuelCode) {
    return browser.url(
      `/admin/iteration-2/${applicationReference}/${fuelCode}/composition`
    )
  }
}

export default new FuelCompositionPage()
