import reviewTaskDecision from './reviewTaskDecision.component.js'

/**
 * Review conformity mark details for {appliance} - reached via the "Review
 * conformity mark" task on the appliance review detail page
 * (e.g. /1083/CS200i/review-conformity-mark). Shares its pass/fail/cancel
 * controls with reviewTaskDecision.component.js.
 */
class ReviewConformityMarkPage {
  //
  // ===== ACTIONS =====
  //

  async markAsPassed() {
    await reviewTaskDecision.markAsPassed()
  }

  async markAsFailed() {
    await reviewTaskDecision.markAsFailed()
  }

  async cancel() {
    await reviewTaskDecision.cancel()
  }

  //
  // ===== ASSERTIONS =====
  //

  async verifyPageLoaded(applianceName) {
    await reviewTaskDecision.verifyPageLoaded(
      `Review conformity mark details for ${applianceName}`
    )
  }

  //
  // ===== NAVIGATION =====
  //

  open(applicationReference, applianceCode) {
    return browser.url(
      `/admin/iteration-2/${applicationReference}/${applianceCode}/review-conformity-mark`
    )
  }
}

export default new ReviewConformityMarkPage()
