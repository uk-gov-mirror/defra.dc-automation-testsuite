/**
 * Reusable GOV.UK summary list, either scoped to a summary card (e.g.
 * "Applicant details") or - when no cardTitle is given - the whole page, for
 * summary lists rendered without a card wrapper. Values and "Change" links
 * are read by their row label since summary list rows have no test attribute.
 */
class SummaryListComponent {
  constructor(cardTitle = null) {
    this.cardTitle = cardTitle
  }

  //
  // ===== SELECTORS =====
  //

  // Scopes to the summary card whose title matches this instance, or the whole page
  get card() {
    if (!this.cardTitle) {
      return $('body')
    }
    return $(
      `//h2[@class="govuk-summary-card__title" and normalize-space(text())="${this.cardTitle}"]/ancestor::div[contains(@class,"govuk-summary-card")]`
    )
  }

  //
  // ===== ACTIONS =====
  //

  async getValue(label) {
    const value = await this.card.$(
      `.//dt[normalize-space(text())="${label}"]/following-sibling::dd[1]`
    )
    return (await value.getText()).trim()
  }

  async changeField(label) {
    const changeLink = await this.card.$(
      `.//dt[normalize-space(text())="${label}"]/following-sibling::dd[contains(@class,"govuk-summary-list__actions")][1]//a`
    )
    await changeLink.click()
  }
}

export default SummaryListComponent
