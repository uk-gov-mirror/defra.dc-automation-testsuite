import DxtFuelFormComponent from './dxtFuelForm.component.js'

/**
 * DXT fuel form - "How do you sell this fuel?".
 */
class DxtFuelHowDoYouSellFuelPage extends DxtFuelFormComponent {
  static SLUG = 'how-do-you-sell-this-fuel'

  static HEADING = 'How do you sell this fuel?'

  static FIELD_ID = 'gefTHa'

  // Submitted values, which are shorter than the on-screen labels
  static OPTIONS = {
    LOOSE: 'Loose (unbagged)',
    BAGGED_AT_SOURCE: 'Bagged at source',
    BAGGED_OR_REBAGGED: 'Bagged or rebagged'
  }

  //
  // ===== ACTIONS =====
  //

  async selectSalesMethod(value) {
    await this.getRadioByValue(
      DxtFuelHowDoYouSellFuelPage.FIELD_ID,
      value
    ).click()
  }

  async submit(value) {
    await this.verifyPageLoaded()
    await this.selectSalesMethod(value)
    await this.clickContinue()
  }

  //
  // ===== ASSERTIONS =====
  //

  async verifyPageLoaded() {
    await super.verifyPageLoaded(DxtFuelHowDoYouSellFuelPage.HEADING)
    await expect(
      this.getRadioByValue(
        DxtFuelHowDoYouSellFuelPage.FIELD_ID,
        DxtFuelHowDoYouSellFuelPage.OPTIONS.LOOSE
      )
    ).toExist()
  }

  //
  // ===== NAVIGATION =====
  //

  open() {
    return super.open(DxtFuelHowDoYouSellFuelPage.SLUG)
  }
}

export default new DxtFuelHowDoYouSellFuelPage()
