import DxtFuelFormComponent from './dxtFuelForm.component.js'
import PostcodeLookup from '../shared/postcodeLookup.component.js'

/**
 * DXT fuel form - "Company address".
 *
 * The address inputs on this page sit in a hidden block until an address step is chosen. Test
 * data always takes the "enter address manually" route, which hands off to the shared postcode
 * lookup page, to avoid the external address lookup.
 */
class DxtFuelCompanyAddressPage extends DxtFuelFormComponent {
  static SLUG = 'company-address'

  static HEADING = 'Company address'

  // Address form group id; the on-page inputs are `<FIELD_ID>__addressLine1` etc
  static FIELD_ID = 'koQFjV'

  //
  // ===== SELECTORS =====
  //

  // Both address buttons embed the DXT field id in their value, so they are matched on text
  get enterAddressManuallyButton() {
    return $('//button[normalize-space(.)="enter address manually"]')
  }

  get findAddressButton() {
    return $('//button[normalize-space(.)="Find an address"]')
  }

  // Only rendered once an address has been chosen; replaces the two address buttons
  get selectedAddress() {
    return $('.govuk-inset-text')
  }

  // Shares its action value with "Find an address", so it is matched on text
  get useADifferentAddressButton() {
    return $('//button[normalize-space(.)="Use a different address"]')
  }

  //
  // ===== ACTIONS =====
  //

  async enterAddressManually() {
    await this.enterAddressManuallyButton.click()
    await PostcodeLookup.verifyManualEntryLoaded()
  }

  async findAnAddress() {
    await this.findAddressButton.click()
    await PostcodeLookup.verifyDetailsStepLoaded()
  }

  async useADifferentAddress() {
    await this.useADifferentAddressButton.click()
  }

  async submit(address) {
    await this.verifyPageLoaded()
    await this.enterAddressManually()
    await PostcodeLookup.submitManualAddress(address)
    await this.verifyAddressSelected()
    await this.clickContinue()
  }

  //
  // ===== ASSERTIONS =====
  //

  async verifyAddressSelected() {
    await expect(this.selectedAddress).toBeDisplayed()
  }

  // Heading only - the page renders either the address buttons or the selected address block
  async verifyPageLoaded() {
    await super.verifyPageLoaded(DxtFuelCompanyAddressPage.HEADING)
  }

  //
  // ===== NAVIGATION =====
  //

  open() {
    return super.open(DxtFuelCompanyAddressPage.SLUG)
  }
}

export default new DxtFuelCompanyAddressPage()
