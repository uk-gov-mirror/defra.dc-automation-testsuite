/**
 * Will the fuel be sold under any additional rebrand names? - reached via the
 * "Change" link against that question on the check fuel details page
 * (e.g. /0318/grillaedin/brands). Selecting "Yes" reveals a textarea listing
 * the additional rebrand names - a GOV.UK conditional reveal.
 */
class FuelAdditionalBrandsPage {
  //
  // ===== SELECTORS =====
  //

  get pageHeading() {
    return $('h1')
  }

  get additionalBrandsYesRadio() {
    return $('#addBrands')
  }

  get additionalBrandsNoRadio() {
    return $('#addBrands-2')
  }

  // Only present in the DOM once "Yes" is selected - a GOV.UK conditional reveal
  get additionalBrandsTextarea() {
    return $('#additional-brands')
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

  // Selecting "Yes" reveals the textarea; setValue's own auto-wait covers the reveal
  async enterAdditionalBrands(brands) {
    await this.additionalBrandsYesRadio.click()
    await this.additionalBrandsTextarea.setValue(brands)
  }

  async skipAdditionalBrands() {
    await this.additionalBrandsNoRadio.click()
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
      'Will the fuel be sold under any additional rebrand names?'
    )
  }

  async getAdditionalBrands() {
    return this.additionalBrandsTextarea.getValue()
  }

  //
  // ===== NAVIGATION =====
  //

  open(applicationReference, fuelCode) {
    return browser.url(
      `/admin/iteration-2/${applicationReference}/${fuelCode}/brands`
    )
  }
}

export default new FuelAdditionalBrandsPage()
