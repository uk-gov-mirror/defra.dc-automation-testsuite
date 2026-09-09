/**
 * What is the rebranded name? - reached via the "Change" link against
 * "Rebranded name" on the check fuel details page
 * (e.g. /0318/grillaedin/fuel-name). Input is pre-populated with the current
 * rebranded name, so tests should assert against the value they set.
 */
class FuelRebrandedNamePage {
  //
  // ===== SELECTORS =====
  //

  get pageHeading() {
    return $('h1')
  }

  get rebrandedNameInput() {
    return $('#rebrand-name')
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

  async enterRebrandedName(name) {
    await this.rebrandedNameInput.setValue(name)
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
    await expect(this.pageHeading).toHaveText('What is the rebranded name?')
  }

  async getRebrandedName() {
    return this.rebrandedNameInput.getValue()
  }

  //
  // ===== NAVIGATION =====
  //

  open(applicationReference, fuelCode) {
    return browser.url(
      `/admin/iteration-2/${applicationReference}/${fuelCode}/fuel-name`
    )
  }
}

export default new FuelRebrandedNamePage()
