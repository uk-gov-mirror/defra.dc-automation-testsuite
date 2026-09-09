import DxtApplianceFormComponent from './dxtApplianceForm.component.js'

/**
 * DXT appliance form - "Is your company based in the UK?".
 */
class DxtApplianceCompanyBasedInUkPage extends DxtApplianceFormComponent {
  static PATH =
    '/form/preview/draft/get-a-stove-or-other-appliance-certified-for-use-in-smoke-control-areas/is-your-company-based-in-the-uk'

  static HEADING = 'Is your company based in the UK?'

  static RADIO_GROUP_ID = 'TbMaXV'

  //
  // ===== SELECTORS =====
  //

  // Is your company based in the UK? - Yes
  get yesRadio() {
    return this.getYesNoRadio(
      DxtApplianceCompanyBasedInUkPage.RADIO_GROUP_ID,
      'Yes'
    )
  }

  //
  // ===== ACTIONS =====
  //

  async submit(answer) {
    await this.verifyPageLoaded()
    await this.selectYesNo(
      DxtApplianceCompanyBasedInUkPage.RADIO_GROUP_ID,
      answer
    )
    await this.clickContinue()
  }

  //
  // ===== ASSERTIONS =====
  //

  async verifyPageLoaded() {
    await super.verifyPageLoaded(DxtApplianceCompanyBasedInUkPage.HEADING)
    await expect(this.yesRadio).toBeDisplayed()
  }

  //
  // ===== NAVIGATION =====
  //

  open() {
    return browser.url(DxtApplianceCompanyBasedInUkPage.PATH)
  }
}

export default new DxtApplianceCompanyBasedInUkPage()
