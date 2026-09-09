import SummaryListDetailComponent from './summaryListDetail.component.js'

/**
 * Devolved admin alternate path - test results page.
 * Reached from the appliance record detail page's "Test results" > View link.
 */
class DevolvedAdminAltTestResultsPage extends SummaryListDetailComponent {
  //
  // ===== ASSERTIONS =====
  //

  // Heading includes the appliance name, so this is parameterized rather than a fixed string
  async verifyPageLoaded(applianceName) {
    await expect(this.pageHeading).toHaveText(
      `Test results for ${applianceName}`
    )
  }
}

export default new DevolvedAdminAltTestResultsPage()
