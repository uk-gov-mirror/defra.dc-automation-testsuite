/**
 * Review instruction manuals for {appliance} - reached via the "Review
 * instruction manual" task on the appliance review detail page
 * (e.g. /1083/CS200i/review-instruction-manual). Note: "Mark as failed" and
 * "Cancel" are plain links outside the <form>, so they do not submit the
 * entered manual details - only "Mark as passed" does.
 */
class ReviewInstructionManualPage {
  //
  // ===== SELECTORS =====
  //

  get pageHeading() {
    return $('h1')
  }

  get manualTitleInput() {
    return $('#manual-title')
  }

  get includeVersionYesRadio() {
    return $('#enterVersionCS')
  }

  get includeVersionNoRadio() {
    return $('#enterVersionCS-2')
  }

  // Only present in the DOM once "Yes" is selected - a GOV.UK conditional reveal
  get versionInput() {
    return $('#conditional-version')
  }

  get publicationDayInput() {
    return $('#publication-date-day')
  }

  get publicationMonthInput() {
    return $('#publication-date-month')
  }

  get publicationYearInput() {
    return $('#publication-date-year')
  }

  get markAsPassedButton() {
    return $('button=Mark as passed')
  }

  get markAsFailedLink() {
    return $('a=Mark as failed')
  }

  get cancelLink() {
    return $('a=Cancel')
  }

  //
  // ===== ACTIONS =====
  //

  async enterManualTitle(title) {
    await this.manualTitleInput.setValue(title)
  }

  // Selecting "Yes" reveals the version field; setValue's own auto-wait covers the reveal
  async enterVersion(version) {
    await this.includeVersionYesRadio.click()
    await this.versionInput.setValue(version)
  }

  async skipVersion() {
    await this.includeVersionNoRadio.click()
  }

  async enterPublicationDate({ day, month, year }) {
    await this.publicationDayInput.setValue(day)
    await this.publicationMonthInput.setValue(month)
    await this.publicationYearInput.setValue(year)
  }

  async markAsPassed() {
    await this.markAsPassedButton.click()
  }

  async markAsFailed() {
    await this.markAsFailedLink.click()
  }

  async cancel() {
    await this.cancelLink.click()
  }

  //
  // ===== ASSERTIONS =====
  //

  async verifyPageLoaded(applianceName) {
    await expect(this.pageHeading).toHaveText(
      `Review instruction manuals for ${applianceName}`
    )
  }

  //
  // ===== NAVIGATION =====
  //

  open(applicationReference, applianceCode) {
    return browser.url(
      `/admin/iteration-2/${applicationReference}/${applianceCode}/review-instruction-manual`
    )
  }
}

export default new ReviewInstructionManualPage()
