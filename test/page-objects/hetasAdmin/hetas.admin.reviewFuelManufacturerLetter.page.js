import reviewTaskDecision from './reviewTaskDecision.component.js'

/**
 * Review letter from original manufacturer for {fuel} - reached via the
 * "Review letter from original manufacturer" task on the fuel review detail
 * page (e.g. /0318/grillaedin/review-manufacturer-letter). Shares its
 * pass/fail/cancel controls with reviewTaskDecision.component.js.
 */
class ReviewFuelManufacturerLetterPage {
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

  async verifyPageLoaded(fuelName) {
    await reviewTaskDecision.verifyPageLoaded(
      `Review letter from original manufacturer of ${fuelName}`
    )
  }

  //
  // ===== NAVIGATION =====
  //

  open(applicationReference, fuelCode) {
    return browser.url(
      `/admin/iteration-2/${applicationReference}/${fuelCode}/review-manufacturer-letter`
    )
  }
}

export default new ReviewFuelManufacturerLetterPage()
