import reviewTaskDecision from './reviewTaskDecision.component.js'

/**
 * Review technical drawings for {appliance} - reached via the "Review technical
 * drawings" task on the appliance review detail page
 * (e.g. /1083/CS200i/review-technical-drawings). Shares its pass/fail/cancel
 * controls with reviewTaskDecision.component.js.
 */
class ReviewTechnicalDrawingsPage {
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
      `Review technical drawings for ${applianceName}`
    )
  }

  //
  // ===== NAVIGATION =====
  //

  open(applicationReference, applianceCode) {
    return browser.url(
      `/admin/iteration-2/${applicationReference}/${applianceCode}/review-technical-drawings`
    )
  }
}

export default new ReviewTechnicalDrawingsPage()
