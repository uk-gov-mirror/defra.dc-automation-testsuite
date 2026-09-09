import SummaryListDetailComponent from './summaryListDetail.component.js'

/**
 * Devolved admin alternate path - application details page.
 * Reached from the appliance record detail page's "Application <ref> details" > View link.
 */
class DevolvedAdminAltApplicationDetailsPage extends SummaryListDetailComponent {
  //
  // ===== ASSERTIONS =====
  //

  // Heading includes the dynamic application reference, so this is parameterized rather than a fixed string
  async verifyPageLoaded(applicationReference) {
    await expect(this.pageHeading).toHaveText(
      `Application ${applicationReference} details`
    )
  }
}

export default new DevolvedAdminAltApplicationDetailsPage()
