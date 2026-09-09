import DxtFuelFormComponent from './dxtFuelForm.component.js'

/**
 * DXT fuel form - "Responsible person".
 */
class DxtFuelResponsiblePersonPage extends DxtFuelFormComponent {
  static SLUG = 'responsible-person'

  static HEADING = 'Responsible person'

  //
  // ===== SELECTORS =====
  //

  // Name
  get nameInput() {
    return $('#ChfkKZ')
  }

  // Email address (optional)
  get emailAddressInput() {
    return $('#OOrscG')
  }

  //
  // ===== ACTIONS =====
  //

  async enterResponsiblePerson({ name, emailAddress }) {
    await this.nameInput.setValue(name)

    if (emailAddress) {
      await this.emailAddressInput.setValue(emailAddress)
    }
  }

  async submit(responsiblePerson) {
    await this.verifyPageLoaded()
    await this.enterResponsiblePerson(responsiblePerson)
    await this.clickContinue()
  }

  //
  // ===== ASSERTIONS =====
  //

  async verifyPageLoaded() {
    await super.verifyPageLoaded(DxtFuelResponsiblePersonPage.HEADING)
    await expect(this.nameInput).toBeDisplayed()
  }

  //
  // ===== NAVIGATION =====
  //

  open() {
    return super.open(DxtFuelResponsiblePersonPage.SLUG)
  }
}

export default new DxtFuelResponsiblePersonPage()
