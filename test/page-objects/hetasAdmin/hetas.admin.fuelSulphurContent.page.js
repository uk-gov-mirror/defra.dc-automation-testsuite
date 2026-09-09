/**
 * What is the fuel's sulphur content? - reached via the "Add" link against
 * "Sulphur content" on the add fuel description page
 * (e.g. /0318/grillaedin/sulphur). The input has a "% of total dry ash-free
 * weight" suffix rendered alongside it, not part of the input's own value.
 */
class FuelSulphurContentPage {
  //
  // ===== SELECTORS =====
  //

  get pageHeading() {
    return $('h1')
  }

  get sulphurContentInput() {
    return $('#sulphur-content')
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

  async enterSulphurContent(value) {
    await this.sulphurContentInput.setValue(value)
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
      "What is the fuel's sulphur content?"
    )
  }

  async getSulphurContent() {
    return this.sulphurContentInput.getValue()
  }

  //
  // ===== NAVIGATION =====
  //

  open(applicationReference, fuelCode) {
    return browser.url(
      `/admin/iteration-2/${applicationReference}/${fuelCode}/sulphur`
    )
  }
}

export default new FuelSulphurContentPage()
