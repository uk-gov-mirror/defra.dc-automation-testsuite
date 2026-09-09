import DxtFuelFormComponent from './dxtFuelForm.component.js'

/**
 * DXT fuel form - "Main contact".
 */
class DxtFuelMainContactPage extends DxtFuelFormComponent {
  static SLUG = 'main-contact'

  static HEADING = 'Main contact'

  //
  // ===== SELECTORS =====
  //

  // Name
  get nameInput() {
    return $('#lhhoTX')
  }

  // Email address
  get emailAddressInput() {
    return $('#zCPkvh')
  }

  // Alternate email address (optional)
  get alternateEmailAddressInput() {
    return $('#FwtbfD')
  }

  // Phone number (optional)
  get phoneNumberInput() {
    return $('#yDTjQn')
  }

  //
  // ===== ACTIONS =====
  //

  async enterContactDetails({
    name,
    emailAddress,
    alternateEmailAddress,
    phoneNumber
  }) {
    await this.nameInput.setValue(name)
    await this.emailAddressInput.setValue(emailAddress)

    if (alternateEmailAddress) {
      await this.alternateEmailAddressInput.setValue(alternateEmailAddress)
    }

    if (phoneNumber) {
      await this.phoneNumberInput.setValue(phoneNumber)
    }
  }

  async submit(contact) {
    await this.verifyPageLoaded()
    await this.enterContactDetails(contact)
    await this.clickContinue()
  }

  //
  // ===== ASSERTIONS =====
  //

  async verifyPageLoaded() {
    await super.verifyPageLoaded(DxtFuelMainContactPage.HEADING)
    await expect(this.nameInput).toBeDisplayed()
  }

  //
  // ===== NAVIGATION =====
  //

  open() {
    return super.open(DxtFuelMainContactPage.SLUG)
  }
}

export default new DxtFuelMainContactPage()
