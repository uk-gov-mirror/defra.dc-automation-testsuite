import DxtFuelFormComponent from './dxtFuelForm.component.js'

/**
 * Base for the fuel-characteristic pages, which are all the same shape: a page heading, guidance
 * with examples, and a single required textarea. Subclasses supply only slug, heading and field id.
 */
class DxtFuelTextareaPageComponent extends DxtFuelFormComponent {
  constructor(slug, heading, fieldId) {
    super()
    this.slug = slug
    this.heading = heading
    this.fieldId = fieldId
  }

  //
  // ===== SELECTORS =====
  //

  get textarea() {
    return $(`#${this.fieldId}`)
  }

  //
  // ===== ACTIONS =====
  //

  async enterText(text) {
    await this.textarea.setValue(text)
  }

  async submit(text) {
    await this.verifyPageLoaded()
    await this.enterText(text)
    await this.clickContinue()
  }

  //
  // ===== ASSERTIONS =====
  //

  async verifyPageLoaded() {
    await super.verifyPageLoaded(this.heading)
    await expect(this.textarea).toBeDisplayed()
  }

  //
  // ===== NAVIGATION =====
  //

  open() {
    return super.open(this.slug)
  }
}

export default DxtFuelTextareaPageComponent
