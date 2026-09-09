/**
 * Reusable summary-list detail page base for the appliance record sub-pages (Appliance
 * details, Test results, Instruction manual, ...), which all share the same
 * govuk-summary-list + "Return to record" link structure and only differ in heading text.
 */
class SummaryListDetailComponent {
  //
  // ===== SELECTORS =====
  //

  get pageHeading() {
    return $('h1')
  }

  get detailsList() {
    return $('dl.govuk-summary-list')
  }

  get returnToRecordLink() {
    return $('=Return to record')
  }

  //
  // ===== HELPERS =====
  //

  async getRow(label) {
    return this.detailsList.$(
      `.//dt[normalize-space(text())="${label}"]/parent::div`
    )
  }

  //
  // ===== ACTIONS =====
  //

  async returnToRecord() {
    await this.returnToRecordLink.click()
  }

  async getDetailValue(label) {
    const row = await this.getRow(label)
    return (await row.$('.govuk-summary-list__value').getText()).trim()
  }

  //
  // ===== ASSERTIONS =====
  //

  async verifyDetailValue(label, expectedValue) {
    const row = await this.getRow(label)
    await expect(row.$('.govuk-summary-list__value')).toHaveText(expectedValue)
  }
}

export default SummaryListDetailComponent
