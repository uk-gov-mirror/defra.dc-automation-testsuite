/**
 * What does the fuel weigh? - reached via the "Add" link against "Fuel
 * weight" on the add fuel description page (e.g. /0318/grillaedin/weight).
 * The heading is a GOV.UK label-wrapper, not a plain heading - the text also
 * labels the textarea.
 */
class FuelWeightPage {
  //
  // ===== SELECTORS =====
  //

  get pageHeading() {
    return $('h1')
  }

  get fuelWeightTextarea() {
    return $('#fuel-weight')
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

  async enterFuelWeight(text) {
    await this.fuelWeightTextarea.setValue(text)
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
    await expect(this.pageHeading).toHaveText('What does the fuel weigh?')
  }

  async getFuelWeight() {
    return this.fuelWeightTextarea.getValue()
  }

  //
  // ===== NAVIGATION =====
  //

  open(applicationReference, fuelCode) {
    return browser.url(
      `/admin/iteration-2/${applicationReference}/${fuelCode}/weight`
    )
  }
}

export default new FuelWeightPage()
