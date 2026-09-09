import SummaryListDetailComponent from './summaryListDetail.component.js'

/**
 * Devolved admin alternate path - appliance details page.
 * Reached from the appliance record detail page's "Appliance details" > View link.
 */
class DevolvedAdminAltApplianceDetailsPage extends SummaryListDetailComponent {
  //
  // ===== ASSERTIONS =====
  //

  async verifyPageLoaded() {
    await expect(this.pageHeading).toHaveText('Appliance details')
  }
}

export default new DevolvedAdminAltApplianceDetailsPage()
