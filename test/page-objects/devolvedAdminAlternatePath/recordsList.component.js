/**
 * Reusable records list page (Appliance records / Fuel records / ...), which share the same
 * search + status filter + table + pagination structure and only differ in table caption/heading.
 */
class RecordsListComponent {
  constructor(tableCaption) {
    this.tableCaption = tableCaption
  }

  //
  // ===== SELECTORS =====
  //

  get pageHeading() {
    return $('h1')
  }

  get backLink() {
    return $('.govuk-back-link')
  }

  get searchInput() {
    return $('#keywords')
  }

  get searchSubmitButton() {
    return $('[data-test-id="submit-button"]')
  }

  // Only paragraph directly preceding the table
  get recordsCountText() {
    return $('//table/preceding-sibling::p[1]')
  }

  // Scopes to the records table via its (visually hidden) caption
  get table() {
    return $(
      `//table[.//caption[normalize-space(text())="${this.tableCaption}"]]`
    )
  }

  get nextPageLink() {
    return $('.govuk-pagination__next a')
  }

  //
  // ===== HELPERS =====
  //

  // Checkbox ids are positional (filter, filter-1, filter-2...), so lookup is by value instead
  getStatusFilterCheckbox(status) {
    return $(`input[name="filters"][value="${status}"]`)
  }

  getPageLink(pageNumber) {
    return $(`.govuk-pagination__link[aria-label="Page ${pageNumber}"]`)
  }

  // Record ID is rendered in a <td scope="row"> rather than a <th>, so rows are matched on that td
  async getRow(recordId) {
    return this.table.$(
      `.//td[@scope="row" and normalize-space(text())="${recordId}"]/parent::tr`
    )
  }

  //
  // ===== ACTIONS =====
  //

  async search(keywords) {
    await this.searchInput.setValue(keywords)
    await this.searchSubmitButton.click()
  }

  async filterByStatus(status) {
    await this.getStatusFilterCheckbox(status).click()
  }

  async view(recordId) {
    const row = await this.getRow(recordId)
    await row.$('a').click()
  }

  async goToNextPage() {
    await this.nextPageLink.click()
  }

  async goToPage(pageNumber) {
    await this.getPageLink(pageNumber).click()
  }

  async goBack() {
    await this.backLink.click()
  }

  async getName(recordId) {
    const row = await this.getRow(recordId)
    const cells = await row.$$('td')
    return (await cells[1].getText()).trim()
  }

  async getStatus(recordId) {
    const row = await this.getRow(recordId)
    return (await row.$('.govuk-tag').getText()).trim()
  }

  async getRecordsCountText() {
    return (await this.recordsCountText.getText()).trim()
  }

  //
  // ===== ASSERTIONS =====
  //

  async verifyRecordListed(recordId) {
    await expect(await this.getRow(recordId)).toBeDisplayed()
  }

  async verifyRecordNotListed(recordId) {
    await expect(await this.getRow(recordId)).not.toExist()
  }

  async verifyStatus(recordId, expectedStatus) {
    const row = await this.getRow(recordId)
    await expect(row.$('.govuk-tag')).toHaveText(expectedStatus)
  }
}

export default RecordsListComponent
