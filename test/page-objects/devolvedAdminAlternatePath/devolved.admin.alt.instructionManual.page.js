import SummaryListDetailComponent from './summaryListDetail.component.js'

/**
 * Devolved admin alternate path - instruction manual page.
 * Reached from the appliance record detail page's "Instruction manual" > View link.
 */
class DevolvedAdminAltInstructionManualPage extends SummaryListDetailComponent {
  //
  // ===== ASSERTIONS =====
  //

  // Heading includes the appliance name, so this is parameterized rather than a fixed string
  async verifyPageLoaded(applianceName) {
    await expect(this.pageHeading).toHaveText(
      `Instruction manual for ${applianceName}`
    )
  }
}

export default new DevolvedAdminAltInstructionManualPage()
