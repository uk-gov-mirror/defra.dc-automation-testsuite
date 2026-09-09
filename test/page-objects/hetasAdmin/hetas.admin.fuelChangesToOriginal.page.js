/**
 * Has the original fuel been changed or mixed with another fuel? - reached via
 * the "Change" link against "Changes made to original fuel" on the check fuel
 * details page (e.g. /0318/grillaedin/changes). "Yes" is selected by default
 * here, revealing the details textarea, which is pre-populated with dynamic
 * text - so tests should assert against the value they set.
 */
class FuelChangesToOriginalPage {
  //
  // ===== SELECTORS =====
  //

  get pageHeading() {
    return $('h1')
  }

  get changedYesRadio() {
    return $('#changeOriginal')
  }

  get changedNoRadio() {
    return $('#changeOriginal-2')
  }

  // Only present in the DOM once "Yes" is selected - a GOV.UK conditional reveal
  get changeDetailsTextarea() {
    return $('#change-details')
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
  async enterChangeDetails(details) {
    await this.changedYesRadio.click()
    await this.changeDetailsTextarea.setValue(details)
  }

  async markAsNotChanged() {
    await this.changedNoRadio.click()
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
      'Has the original fuel been changed or mixed with another fuel?'
    )
  }

  async getChangeDetails() {
    return this.changeDetailsTextarea.getValue()
  }

  //
  // ===== NAVIGATION =====
  //

  open(applicationReference, fuelCode) {
    return browser.url(
      `/admin/iteration-2/${applicationReference}/${fuelCode}/changes`
    )
  }
}

export default new FuelChangesToOriginalPage()
