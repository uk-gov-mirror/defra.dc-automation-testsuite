import taskList from './taskList.component.js'

/**
 * Review a specific appliance within an appliance application - reached by
 * clicking "Start review" against an appliance row on the application review
 * page (e.g. /1083/CS200i/review-appliance). Note: in the supplied DOM the
 * final breadcrumb text does not match this page's own heading, so it is not
 * used here to identify the current appliance - see flaky-area notes.
 */
class ReviewApplianceDetailPage {
  //
  // ===== SELECTORS =====
  //

  get pageHeading() {
    return $('h1')
  }

  // Only buttons on the page today; see flaky-area notes if more are added
  get acceptApplianceButton() {
    return $('a=Accept this appliance')
  }

  get rejectApplianceButton() {
    return $('a=Reject appliance')
  }

  get saveAndComeBackLaterLink() {
    return $('a=Save and come back later')
  }

  //
  // ===== ACTIONS =====
  //

  async getTaskStatus(taskName) {
    return taskList.getTaskStatus(taskName)
  }

  async openTask(taskName) {
    await taskList.openTask(taskName)
  }

  async acceptAppliance() {
    await this.acceptApplianceButton.click()
  }

  async rejectAppliance() {
    await this.rejectApplianceButton.click()
  }

  async saveAndComeBackLater() {
    await this.saveAndComeBackLaterLink.click()
  }

  //
  // ===== ASSERTIONS =====
  //

  async verifyPageLoaded(applianceName) {
    await expect(this.pageHeading).toHaveText(`Review ${applianceName}`)
  }

  //
  // ===== NAVIGATION =====
  //

  open(applicationReference, applianceCode) {
    return browser.url(
      `/admin/iteration-2/${applicationReference}/${applianceCode}/review-appliance`
    )
  }
}

export default new ReviewApplianceDetailPage()
