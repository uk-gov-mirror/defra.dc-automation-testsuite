import DxtFuelFormComponent from './dxtFuelForm.component.js'

/**
 * DXT fuel form - "Declaration". Follows test-reports on the common tail.
 */
class DxtFuelDeclarationPage extends DxtFuelFormComponent {
  static SLUG = 'declaration'

  static HEADING = 'Declaration'

  //
  // ===== SELECTORS =====
  //

  // I understand and agree. Matched by id, as a hidden input shares the name "dytkGm"
  get agreeCheckbox() {
    return $('#dytkGm')
  }

  //
  // ===== ACTIONS =====
  //

  // Clicking toggles, so re-entering the page must not un-tick an already agreed declaration
  async agree() {
    if (!(await this.agreeCheckbox.isSelected())) {
      await this.agreeCheckbox.click()
    }
  }

  async submit() {
    await this.verifyPageLoaded()
    await this.agree()
    await this.clickContinue()
  }

  //
  // ===== ASSERTIONS =====
  //

  async verifyPageLoaded() {
    await super.verifyPageLoaded(DxtFuelDeclarationPage.HEADING)
    await expect(this.agreeCheckbox).toExist()
  }

  //
  // ===== NAVIGATION =====
  //

  open() {
    return super.open(DxtFuelDeclarationPage.SLUG)
  }
}

export default new DxtFuelDeclarationPage()
