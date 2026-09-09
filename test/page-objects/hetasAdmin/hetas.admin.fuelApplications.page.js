import pageNavigation from './pageNavigation.component.js'
import ApplicationsTableComponent from './applicationsTable.component.js'

/**
 * Fuel applications - reached from the HETAS admin dashboard by clicking either
 * "New applications" or "In progress applications" under "Manage fuels" (both
 * links lead to this same page).
 */
class FuelApplicationsPage {
  //
  // ===== SELECTORS =====
  //

  get pageHeading() {
    return $('h1')
  }

  // Lazily created so each call re-queries the current DOM, per status group
  get notStartedTable() {
    return new ApplicationsTableComponent('Not started')
  }

  get inProgressTable() {
    return new ApplicationsTableComponent('In progress')
  }

  //
  // ===== ACTIONS =====
  //

  async startReview(applicationReference) {
    await this.notStartedTable.reviewApplication(applicationReference)
  }

  async continueReview(applicationReference) {
    await this.inProgressTable.reviewApplication(applicationReference)
  }

  async getReviewer(applicationReference) {
    return this.inProgressTable.getReviewer(applicationReference)
  }

  async goToDashboard() {
    await pageNavigation.goToDashboard()
  }

  //
  // ===== ASSERTIONS =====
  //

  async verifyPageLoaded() {
    await expect(this.pageHeading).toHaveText('Fuel applications')
  }

  async verifyApplicationAwaitingReview(applicationReference) {
    await this.notStartedTable.verifyApplicationListed(applicationReference)
  }

  async verifyApplicationNotAwaitingReview(applicationReference) {
    await this.notStartedTable.verifyApplicationNotListed(applicationReference)
  }

  async verifyApplicationInProgress(applicationReference) {
    await this.inProgressTable.verifyApplicationListed(applicationReference)
  }

  async verifyApplicationNotInProgress(applicationReference) {
    await this.inProgressTable.verifyApplicationNotListed(applicationReference)
  }

  //
  // ===== NAVIGATION =====
  //

  open() {
    return browser.url('/admin/iteration-2/applications-fuels')
  }
}

export default new FuelApplicationsPage()
