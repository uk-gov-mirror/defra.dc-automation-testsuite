import DxtFuelFormComponent from './dxtFuelForm.component.js'

/**
 * DXT fuel form - "Original fuel details". Reached from manufacture-or-rebrand when "Rebrand"
 * is chosen.
 */
class DxtFuelOriginalFuelDetailsPage extends DxtFuelFormComponent {
  static SLUG = 'original-fuel-details'

  static HEADING = 'Original fuel details'

  //
  // ===== SELECTORS =====
  //

  // Original fuel manufacturer
  get manufacturerInput() {
    return $('#mGVwfX')
  }

  // Original fuel name or brand
  get nameOrBrandInput() {
    return $('#qHMgAu')
  }

  //
  // ===== ACTIONS =====
  //

  async enterOriginalFuelDetails({ manufacturer, nameOrBrand }) {
    await this.manufacturerInput.setValue(manufacturer)
    await this.nameOrBrandInput.setValue(nameOrBrand)
  }

  async submit(originalFuel) {
    await this.verifyPageLoaded()
    await this.enterOriginalFuelDetails(originalFuel)
    await this.clickContinue()
  }

  //
  // ===== ASSERTIONS =====
  //

  async verifyPageLoaded() {
    await super.verifyPageLoaded(DxtFuelOriginalFuelDetailsPage.HEADING)
    await expect(this.manufacturerInput).toBeDisplayed()
  }

  //
  // ===== NAVIGATION =====
  //

  open() {
    return super.open(DxtFuelOriginalFuelDetailsPage.SLUG)
  }
}

export default new DxtFuelOriginalFuelDetailsPage()
