import taskList from './taskList.component.js'

/**
 * Review a specific fuel within a fuel application - reached by clicking
 * "Start review"/"Continue review"/"Edit review" against a fuel row on the
 * fuel application review page (e.g. /0318/grillaedin/review-fuel).
 */
class ReviewFuelDetailPage {
  //
  // ===== SELECTORS =====
  //

  get pageHeading() {
    return $('h1')
  }

  // Only buttons on the page today; see flaky-area notes if more are added
  get acceptFuelButton() {
    return $('a=Accept fuel')
  }

  get rejectFuelButton() {
    return $('a=Reject fuel')
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

  async acceptFuel() {
    await this.acceptFuelButton.click()
  }

  async rejectFuel() {
    await this.rejectFuelButton.click()
  }

  async saveAndComeBackLater() {
    await this.saveAndComeBackLaterLink.click()
  }

  //
  // ===== ASSERTIONS =====
  //

  async verifyPageLoaded(fuelName) {
    await expect(this.pageHeading).toHaveText(`Review ${fuelName}`)
  }

  //
  // ===== NAVIGATION =====
  //

  open(applicationReference, fuelCode) {
    return browser.url(
      `/admin/iteration-2/${applicationReference}/${fuelCode}/review-fuel`
    )
  }
}

export default new ReviewFuelDetailPage()
