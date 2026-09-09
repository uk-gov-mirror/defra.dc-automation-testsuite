import DxtFuelFormComponent from './dxtFuelForm.component.js'

/**
 * DXT fuel form - "Sulphur content". Follows fuel-composition on the Manufacture path.
 * Unlike the other fuel-characteristic pages this is a short text input with a
 * "% of total dry ash-free weight" suffix, not a textarea.
 */
class DxtFuelSulphurContentPage extends DxtFuelFormComponent {
  static SLUG = 'sulphur-content'

  static HEADING = 'Sulphur content'

  //
  // ===== SELECTORS =====
  //

  // What is the fuel's sulphur content?
  get sulphurContentInput() {
    return $('#qdosae')
  }

  //
  // ===== ACTIONS =====
  //

  // Number only (always under 2) - the "%" suffix is static page furniture, not part of the value
  async enterSulphurContent(percentage) {
    await this.sulphurContentInput.setValue(String(percentage))
  }

  async submit(percentage) {
    await this.verifyPageLoaded()
    await this.enterSulphurContent(percentage)
    await this.clickContinue()
  }

  //
  // ===== ASSERTIONS =====
  //

  async verifyPageLoaded() {
    await super.verifyPageLoaded(DxtFuelSulphurContentPage.HEADING)
    await expect(this.sulphurContentInput).toBeDisplayed()
  }

  //
  // ===== NAVIGATION =====
  //

  open() {
    return super.open(DxtFuelSulphurContentPage.SLUG)
  }
}

export default new DxtFuelSulphurContentPage()
