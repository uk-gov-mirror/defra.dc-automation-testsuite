/**
 * Reusable pass/fail/cancel decision component shared by the simple review task
 * pages that have no data entry (e.g. technical drawings, conformity mark) -
 * just a heading and three outcome links with different query params.
 */
class ReviewTaskDecisionComponent {
  //
  // ===== SELECTORS =====
  //

  get pageHeading() {
    return $('h1')
  }

  get markAsPassedLink() {
    return $('a=Mark as passed')
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

  async markAsPassed() {
    await this.markAsPassedLink.click()
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

  async verifyPageLoaded(expectedHeading) {
    await expect(this.pageHeading).toHaveText(expectedHeading)
  }
}

export default new ReviewTaskDecisionComponent()
