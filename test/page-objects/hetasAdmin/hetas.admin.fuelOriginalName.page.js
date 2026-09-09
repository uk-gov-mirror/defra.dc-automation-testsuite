/**
 * Original fuel name or brand - reached via the "Change" link against
 * "Original fuel name or brand" on the check fuel details page
 * (e.g. /0318/grillaedin/original-brand). Input is pre-populated with the
 * current name/brand, so tests should assert against the value they set.
 */
class FuelOriginalNamePage {
  //
  // ===== SELECTORS =====
  //

  get pageHeading() {
    return $('h1')
  }

  get originalNameInput() {
    return $('#original-name')
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

  async enterOriginalName(name) {
    await this.originalNameInput.setValue(name)
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
    await expect(this.pageHeading).toHaveText('Original fuel name or brand')
  }

  async getOriginalName() {
    return this.originalNameInput.getValue()
  }

  //
  // ===== NAVIGATION =====
  //

  open(applicationReference, fuelCode) {
    return browser.url(
      `/admin/iteration-2/${applicationReference}/${fuelCode}/original-brand`
    )
  }
}

export default new FuelOriginalNamePage()
