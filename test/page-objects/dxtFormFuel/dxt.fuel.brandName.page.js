import DxtFuelFormComponent from './dxtFuelForm.component.js'

/**
 * DXT fuel form - "What brand name will you be selling the product under?".
 * Where the two paths rejoin: reached from quality-control-system (Manufacture) or from
 * changes-to-original-fuel (Rebrand).
 */
class DxtFuelBrandNamePage extends DxtFuelFormComponent {
  static SLUG = 'what-brand-name-will-you-be-selling-the-product-under'

  static HEADING = 'What brand name will you be selling the product under?'

  //
  // ===== SELECTORS =====
  //

  // Main brand name
  get mainBrandNameInput() {
    return $('#GgFWEK')
  }

  // Additional brand names (optional), comma separated
  get additionalBrandNamesTextarea() {
    return $('#fvgxNC')
  }

  //
  // ===== ACTIONS =====
  //

  async enterBrandNames({ mainBrandName, additionalBrandNames }) {
    await this.mainBrandNameInput.setValue(mainBrandName)

    if (additionalBrandNames) {
      await this.additionalBrandNamesTextarea.setValue(
        Array.isArray(additionalBrandNames)
          ? additionalBrandNames.join(', ')
          : additionalBrandNames
      )
    }
  }

  async submit(brandNames) {
    await this.verifyPageLoaded()
    await this.enterBrandNames(brandNames)
    await this.clickContinue()
  }

  //
  // ===== ASSERTIONS =====
  //

  async verifyPageLoaded() {
    await super.verifyPageLoaded(DxtFuelBrandNamePage.HEADING)
    await expect(this.mainBrandNameInput).toBeDisplayed()
  }

  //
  // ===== NAVIGATION =====
  //

  open() {
    return super.open(DxtFuelBrandNamePage.SLUG)
  }
}

export default new DxtFuelBrandNamePage()
