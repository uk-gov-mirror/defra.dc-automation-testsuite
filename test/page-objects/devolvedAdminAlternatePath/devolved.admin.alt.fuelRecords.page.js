import RecordsListComponent from './recordsList.component.js'

/**
 * Devolved admin alternate path - "Fuel records" list.
 * Reached from the HETAS admin dashboard's "Go to fuel records" link; used by HETAS
 * admin to review/action fuel records when devolved admin has not completed the
 * correct approval flow.
 */
class DevolvedAdminAltFuelRecordsPage extends RecordsListComponent {
  constructor() {
    super('Fuel records')
  }

  //
  // ===== ASSERTIONS =====
  //

  async verifyPageLoaded() {
    await expect(this.pageHeading).toHaveText('Fuel records')
  }

  //
  // ===== NAVIGATION =====
  //

  open() {
    return browser.url('/admin/iteration-2/records-fuels')
  }
}

export default new DevolvedAdminAltFuelRecordsPage()
