/**
 * Devolved admin alternate path - set approval status for one country.
 * Reached from the appliance record detail page's "Change" link; the same template is
 * reused per country (England/Scotland/Wales/Northern Ireland) and per appliance.
 */
class DevolvedAdminAltSetCertificationStatusPage {
  //
  // ===== SELECTORS =====
  //

  get pageHeading() {
    return $('h1')
  }

  get currentStatusText() {
    return $('//h1/following-sibling::p[1]')
  }

  // Radio "value" is stable across countries/appliances; the "name" attribute is not
  get certifiedRadio() {
    return $('input[type="radio"][value="certified"]')
  }

  get uncertifiedRadio() {
    return $('input[type="radio"][value="uncertified"]')
  }

  get confirmButton() {
    return $('button[type="submit"]')
  }

  get cancelLink() {
    return $('//a[normalize-space(text())="Cancel"]')
  }

  //
  // ===== ACTIONS =====
  //

  // The "Certified" label's for attribute doesn't match its radio's id, so the input is selected directly
  async selectCertified() {
    await this.certifiedRadio.click()
  }

  async selectUncertified() {
    await this.uncertifiedRadio.click()
  }

  async confirm() {
    await this.confirmButton.click()
  }

  async cancel() {
    await this.cancelLink.click()
  }

  async getCurrentStatusText() {
    return (await this.currentStatusText.getText()).trim()
  }

  //
  // ===== ASSERTIONS =====
  //

  async verifyPageLoaded(country, applianceName) {
    await expect(this.pageHeading).toHaveText(
      `Set approval status in ${country} for ${applianceName}`
    )
  }

  async verifyCurrentStatus(expectedStatus) {
    await expect(this.currentStatusText).toHaveText(
      `Current status: ${expectedStatus}`
    )
  }
}

export default new DevolvedAdminAltSetCertificationStatusPage()
