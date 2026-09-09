import pageNavigation from './pageNavigation.component.js'
import SummaryListComponent from './summaryList.component.js'
import ReviewItemsTableComponent from './reviewItemsTable.component.js'

/**
 * Review fuel application {reference} - reached by clicking "Start review",
 * "Continue review" or "Edit review" against a row on the fuel applications
 * page (Not started / In progress / Accepted respectively). The application
 * reference in the URL/heading matches the one shown there (e.g. 0318).
 */
class ReviewFuelApplicationPage {
  //
  // ===== SELECTORS =====
  //

  get pageHeading() {
    return $('h1')
  }

  get applicantDetails() {
    return new SummaryListComponent('Applicant details')
  }

  get fuelForReview() {
    return new ReviewItemsTableComponent('Fuel for review')
  }

  // Only button on the page today; see flaky-area notes if more are added
  get continueButton() {
    return $('a=Continue')
  }

  get comeBackLaterLink() {
    return $('a=Come back to this later')
  }

  //
  // ===== ACTIONS =====
  //

  async getApplicantDetail(label) {
    return this.applicantDetails.getValue(label)
  }

  async getFuelStatus(fuelName) {
    return this.fuelForReview.getStatus(fuelName)
  }

  async getFuelActionLabel(fuelName) {
    return this.fuelForReview.getActionLabel(fuelName)
  }

  // Action link text is "Start review", "Continue review" or "Edit review"
  // depending on status, but all three click the same row link
  async startFuelReview(fuelName) {
    await this.fuelForReview.reviewItem(fuelName)
  }

  async continueFuelReview(fuelName) {
    await this.fuelForReview.reviewItem(fuelName)
  }

  async editFuelReview(fuelName) {
    await this.fuelForReview.reviewItem(fuelName)
  }

  async continueToNextStep() {
    await this.continueButton.click()
  }

  async comeBackLater() {
    await this.comeBackLaterLink.click()
  }

  async goToDashboard() {
    await pageNavigation.goToDashboard()
  }

  //
  // ===== ASSERTIONS =====
  //

  async verifyPageLoaded(applicationReference) {
    await expect(this.pageHeading).toHaveText(
      `Review fuel application ${applicationReference}`
    )
  }

  //
  // ===== NAVIGATION =====
  //

  open(applicationReference) {
    return browser.url(
      `/admin/iteration-2/${applicationReference}/review-application`
    )
  }
}

export default new ReviewFuelApplicationPage()
