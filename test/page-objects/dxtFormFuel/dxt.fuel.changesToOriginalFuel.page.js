import DxtFuelFormComponent from './dxtFuelForm.component.js'

/**
 * DXT fuel form - "Changes to original fuel". Follows original-fuel-details on the Rebrand path.
 */
class DxtFuelChangesToOriginalFuelPage extends DxtFuelFormComponent {
  static SLUG = 'changes-to-original-fuel'

  static HEADING = 'Changes to original fuel'

  static FIELD_ID = 'wSvNbv'

  // Whole-sentence values, apostrophe included - always reference these constants
  static OPTIONS = {
    NOT_CHANGED: "No, the fuel hasn't been changed or mixed",
    CHANGED:
      'Yes, the fuel has been changed from the original or mixed with another fuel'
  }

  //
  // ===== SELECTORS =====
  //

  // If yes, explain the changes (optional)
  get explanationTextarea() {
    return $('#UPvcFc')
  }

  //
  // ===== ACTIONS =====
  //

  async selectChanges(value) {
    await this.getRadioByValue(
      DxtFuelChangesToOriginalFuelPage.FIELD_ID,
      value
    ).click()
  }

  async enterExplanation(explanation) {
    await this.explanationTextarea.setValue(explanation)
  }

  async submit({ option, explanation }) {
    await this.verifyPageLoaded()
    await this.selectChanges(option)

    if (explanation) {
      await this.enterExplanation(explanation)
    }

    await this.clickContinue()
  }

  //
  // ===== ASSERTIONS =====
  //

  async verifyPageLoaded() {
    await super.verifyPageLoaded(DxtFuelChangesToOriginalFuelPage.HEADING)
    await expect(this.explanationTextarea).toBeDisplayed()
  }

  //
  // ===== NAVIGATION =====
  //

  open() {
    return super.open(DxtFuelChangesToOriginalFuelPage.SLUG)
  }
}

export default new DxtFuelChangesToOriginalFuelPage()
