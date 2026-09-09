/**
 * Devolved admin alternate path - appliance record detail page.
 * Reached from the appliance records list's "View" link.
 */
class DevolvedAdminAltApplianceRecordDetailPage {
  //
  // ===== SELECTORS =====
  //

  get pageHeading() {
    return $('h1')
  }

  // The overall approval status tag sits inside a caption span within the h1
  get statusTag() {
    return $('h1 .govuk-tag')
  }

  get backLink() {
    return $('.govuk-back-link')
  }

  // Scopes to the per-country certification table via its (visually hidden) caption
  get certificationTable() {
    return $(
      '//table[.//caption[normalize-space(text())="Certification status by country"]]'
    )
  }

  get detailsList() {
    return $('dl.govuk-summary-list')
  }

  // Label includes a dynamic application reference (e.g. "Application 0008 details")
  get applicationDetailsRow() {
    return this.detailsList.$(
      './/dt[starts-with(normalize-space(text()), "Application ") and contains(normalize-space(text()), " details")]/parent::div'
    )
  }

  get returnToRecordsLink() {
    return $('=Return to appliance records')
  }

  // Only present on the hidden record detail variant
  get makeLiveButton() {
    return $('=Make appliance live on public list')
  }

  //
  // ===== HELPERS =====
  //

  async getCountryRow(country) {
    return this.certificationTable.$(
      `.//td[normalize-space(text())="${country}"]/parent::tr`
    )
  }

  async getDetailRow(label) {
    return this.detailsList.$(
      `.//dt[normalize-space(text())="${label}"]/parent::div`
    )
  }

  //
  // ===== ACTIONS =====
  //

  async changeCertification(country) {
    const row = await this.getCountryRow(country)
    await row.$('a').click()
  }

  async viewDetail(label) {
    const row = await this.getDetailRow(label)
    await row.$('a').click()
  }

  async viewApplicationDetails() {
    await this.applicationDetailsRow.$('a').click()
  }

  // Some rows (e.g. "Date rejected", "Rejected by") are plain values rather than action links
  async getDetailValue(label) {
    const row = await this.getDetailRow(label)
    return (await row.$('.govuk-summary-list__value').getText()).trim()
  }

  async getApplicationReference() {
    const text = (await this.applicationDetailsRow.$('dt').getText()).trim()
    return text.replace(/^Application\s+(\S+)\s+details$/, '$1')
  }

  async returnToRecords() {
    await this.returnToRecordsLink.click()
  }

  async makeLive() {
    await this.makeLiveButton.click()
  }

  async goBack() {
    await this.backLink.click()
  }

  async getApplianceStatus() {
    return (await this.statusTag.getText()).trim()
  }

  async getCountryStatus(country) {
    const row = await this.getCountryRow(country)
    return (await row.$('.govuk-tag').getText()).trim()
  }

  async getCountryCertifiedDate(country) {
    const row = await this.getCountryRow(country)
    const cells = await row.$$('td')
    return (await cells[2].getText()).trim()
  }

  //
  // ===== ASSERTIONS =====
  //

  // h1 contains both the status caption and the appliance name, so this checks a substring
  async verifyPageLoaded(applianceName) {
    const headingText = (await this.pageHeading.getText()).trim()
    expect(headingText).toContain(applianceName)
  }

  async verifyCountryStatus(country, expectedStatus) {
    const row = await this.getCountryRow(country)
    await expect(row.$('.govuk-tag')).toHaveText(expectedStatus)
  }

  async verifyDetailListed(label) {
    await expect(await this.getDetailRow(label)).toBeDisplayed()
  }

  async verifyDetailValue(label, expectedValue) {
    const row = await this.getDetailRow(label)
    await expect(row.$('.govuk-summary-list__value')).toHaveText(expectedValue)
  }
}

export default new DevolvedAdminAltApplianceRecordDetailPage()
