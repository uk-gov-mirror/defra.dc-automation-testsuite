import pageNavigation from './pageNavigation.component.js'
import SummaryListComponent from './summaryList.component.js'
import ReviewItemsTableComponent from './reviewItemsTable.component.js'

/**
 * Review appliance application {reference} - reached by clicking "Start review",
 * "Continue review" or "Edit review" against a row on the appliance applications
 * page (Not started / In progress / Accepted respectively). The application
 * reference in the URL/heading matches the one shown there (e.g. 1083, 1084).
 */
class ReviewApplianceApplicationPage {
  //
  // ===== SELECTORS =====
  //

  get pageHeading() {
    return $('h1')
  }

  get applicantDetails() {
    return new SummaryListComponent('Applicant details')
  }

  get applianceForReview() {
    return new ReviewItemsTableComponent('Appliance for review')
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

  async getApplianceStatus(applianceName) {
    return this.applianceForReview.getStatus(applianceName)
  }

  async getApplianceActionLabel(applianceName) {
    return this.applianceForReview.getActionLabel(applianceName)
  }

  // Action link text is "Start review", "Continue review" or "Edit review"
  // depending on status, but all three click the same row link
  async startApplianceReview(applianceName) {
    await this.applianceForReview.reviewItem(applianceName)
  }

  async continueApplianceReview(applianceName) {
    await this.applianceForReview.reviewItem(applianceName)
  }

  async editApplianceReview(applianceName) {
    await this.applianceForReview.reviewItem(applianceName)
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
      `Review appliance application ${applicationReference}`
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

export default new ReviewApplianceApplicationPage()
