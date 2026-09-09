/**
 * Shared forms-runner postcode lookup (/form/postcode-lookup), reached from any address
 * question in a DXT form. It is a separate page from the form itself, with its own plain
 * field ids, and has two steps: "details" (postcode search) and "manual" (type the address).
 */
class PostcodeLookupComponent {
  // The page's own back / "find an address instead" links point at /postcode-lookup (no /form
  // prefix) even though the served URL is /form/postcode-lookup - follow the links, don't build
  // these paths by hand
  static DETAILS_PATH = '/form/postcode-lookup'

  static MANUAL_PATH = '/form/postcode-lookup?step=manual'

  //
  // ===== SELECTORS =====
  //

  get pageHeading() {
    return $('#main-content h1')
  }

  //
  // ===== SELECTORS: details (postcode search) step =====
  //

  get postcodeQueryInput() {
    return $('#postcodeQuery')
  }

  get buildingNameQueryInput() {
    return $('#buildingNameQuery')
  }

  get findAddressButton() {
    return $('//button[normalize-space(.)="Find address"]')
  }

  get enterAddressManuallyLink() {
    return $('//a[normalize-space(.)="enter address manually"]')
  }

  //
  // ===== SELECTORS: manual entry step =====
  //

  get addressLine1Input() {
    return $('#addressLine1')
  }

  get addressLine2Input() {
    return $('#addressLine2')
  }

  get townInput() {
    return $('#town')
  }

  get countyInput() {
    return $('#county')
  }

  get postcodeInput() {
    return $('#postcode')
  }

  get useThisAddressButton() {
    return $('//button[normalize-space(.)="Use this address"]')
  }

  get findAnAddressInsteadLink() {
    return $('//a[normalize-space(.)="find an address instead"]')
  }

  //
  // ===== ACTIONS: details (postcode search) step =====
  //

  async searchByPostcode(postcode, buildingName) {
    await this.postcodeQueryInput.setValue(postcode)

    if (buildingName) {
      await this.buildingNameQueryInput.setValue(buildingName)
    }

    await this.findAddressButton.click()
  }

  async switchToManualEntry() {
    await this.enterAddressManuallyLink.click()
    await this.verifyManualEntryLoaded()
  }

  //
  // ===== ACTIONS: manual entry step =====
  //

  async enterAddress({ addressLine1, addressLine2, town, county, postcode }) {
    await this.addressLine1Input.setValue(addressLine1)
    await this.townInput.setValue(town)
    await this.postcodeInput.setValue(postcode)

    if (addressLine2) {
      await this.addressLine2Input.setValue(addressLine2)
    }

    if (county) {
      await this.countyInput.setValue(county)
    }
  }

  async clickUseThisAddress() {
    await this.useThisAddressButton.click()
  }

  async submitManualAddress(address) {
    await this.verifyManualEntryLoaded()
    await this.enterAddress(address)
    await this.clickUseThisAddress()
  }

  //
  // ===== ASSERTIONS =====
  //

  async verifyDetailsStepLoaded() {
    await expect(this.postcodeQueryInput).toBeDisplayed()
  }

  // The heading repeats the originating question's title (e.g. "Company address"), so it cannot
  // tell this page apart from the form page - the address field is the reliable marker. Pass
  // questionTitle where a form has more than one address question.
  async verifyManualEntryLoaded(questionTitle) {
    await expect(this.addressLine1Input).toBeDisplayed()

    if (questionTitle) {
      await expect(this.pageHeading).toHaveText(questionTitle)
    }
  }
}

export default new PostcodeLookupComponent()
