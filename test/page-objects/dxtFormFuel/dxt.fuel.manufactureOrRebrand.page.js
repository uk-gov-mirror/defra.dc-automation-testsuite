import DxtFuelFormComponent from './dxtFuelForm.component.js'

/**
 * DXT fuel form - "Do you manufacture the fuel or sell rebranded fuel made by someone else?".
 */
class DxtFuelManufactureOrRebrandPage extends DxtFuelFormComponent {
  static SLUG =
    'do-you-manufacture-the-fuel-or-sell-rebranded-fuel-made-by-someone-else'

  static HEADING =
    'Do you manufacture the fuel or sell rebranded fuel made by someone else?'

  static FIELD_ID = 'AmmLSb'

  static OPTIONS = {
    MANUFACTURE: 'Manufacture',
    REBRAND: 'Rebrand'
  }

  //
  // ===== ACTIONS =====
  //

  async selectManufactureOrRebrand(value) {
    await this.getRadioByValue(
      DxtFuelManufactureOrRebrandPage.FIELD_ID,
      value
    ).click()
  }

  async submit(value) {
    await this.verifyPageLoaded()
    await this.selectManufactureOrRebrand(value)
    await this.clickContinue()
  }

  //
  // ===== ASSERTIONS =====
  //

  async verifyPageLoaded() {
    await super.verifyPageLoaded(DxtFuelManufactureOrRebrandPage.HEADING)
    await expect(
      this.getRadioByValue(
        DxtFuelManufactureOrRebrandPage.FIELD_ID,
        DxtFuelManufactureOrRebrandPage.OPTIONS.MANUFACTURE
      )
    ).toExist()
  }

  //
  // ===== NAVIGATION =====
  //

  open() {
    return super.open(DxtFuelManufactureOrRebrandPage.SLUG)
  }
}

export default new DxtFuelManufactureOrRebrandPage()
