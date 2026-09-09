import DxtFuelFormComponent from './dxtFuelForm.component.js'

/**
 * Base for the form's Yes/No question pages, which differ only by slug, heading and radio group
 * id. The radios carry value="true"/"false"; answers are given as 'Yes' / 'No'.
 */
class DxtFuelYesNoPageComponent extends DxtFuelFormComponent {
  constructor(slug, heading, fieldId) {
    super()
    this.slug = slug
    this.heading = heading
    this.fieldId = fieldId
  }

  //
  // ===== ACTIONS =====
  //

  async selectAnswer(answer) {
    await this.selectYesNo(this.fieldId, answer)
  }

  async submit(answer) {
    await this.verifyPageLoaded()
    await this.selectAnswer(answer)
    await this.clickContinue()
  }

  //
  // ===== ASSERTIONS =====
  //

  async verifyPageLoaded() {
    await super.verifyPageLoaded(this.heading)
    await expect(this.getYesNoRadio(this.fieldId, 'Yes')).toExist()
  }

  //
  // ===== NAVIGATION =====
  //

  open() {
    return super.open(this.slug)
  }
}

export default DxtFuelYesNoPageComponent
