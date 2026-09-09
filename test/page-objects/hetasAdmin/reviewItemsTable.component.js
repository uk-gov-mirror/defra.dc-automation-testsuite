/**
 * Reusable GOV.UK table within a "... for review" summary card (e.g. "Appliance
 * for review"). Rows have no test attribute, so each row is looked up by its
 * item name - the only stable per-row identity in the DOM. The Action column
 * link text varies by status ("Start review" / "Continue review" / "Edit
 * review"), but reviewItem() clicks whichever link is present regardless of text.
 */
class ReviewItemsTableComponent {
  constructor(cardTitle) {
    this.cardTitle = cardTitle
  }

  //
  // ===== SELECTORS =====
  //

  get card() {
    return $(
      `//h2[@class="govuk-summary-card__title" and normalize-space(text())="${this.cardTitle}"]/ancestor::div[contains(@class,"govuk-summary-card")]`
    )
  }

  //
  // ===== ACTIONS =====
  //

  async getStatus(itemName) {
    const status = await this.card.$(
      `.//td[normalize-space(text())="${itemName}"]/following-sibling::td[1]`
    )
    return (await status.getText()).trim()
  }

  async reviewItem(itemName) {
    const reviewLink = await this.card.$(
      `.//td[normalize-space(text())="${itemName}"]/parent::tr//a`
    )
    await reviewLink.click()
  }

  async getActionLabel(itemName) {
    const reviewLink = await this.card.$(
      `.//td[normalize-space(text())="${itemName}"]/parent::tr//a`
    )
    return (await reviewLink.getText()).trim()
  }
}

export default ReviewItemsTableComponent
