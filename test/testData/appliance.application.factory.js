import CompanyNamePage from '../page-objects/dxtFormAppliance/dxt.appliance.companyName.page.js'
import CompanyBasedInUkPage from '../page-objects/dxtFormAppliance/dxt.appliance.companyBasedInUk.page.js'
import CompanyAddressPage from '../page-objects/dxtFormAppliance/dxt.appliance.companyAddress.page.js'
import MainContactPage from '../page-objects/dxtFormAppliance/dxt.appliance.mainContact.page.js'
import ApplianceDetailsPage from '../page-objects/dxtFormAppliance/dxt.appliance.applianceDetails.page.js'
import ApplianceDetailsSummaryPage from '../page-objects/dxtFormAppliance/dxt.appliance.applianceDetailsSummary.page.js'
import SupportingDocumentsPage from '../page-objects/dxtFormAppliance/dxt.appliance.supportingDocuments.page.js'
import DeclarationPage from '../page-objects/dxtFormAppliance/dxt.appliance.declaration.page.js'
import CheckAnswersPage from '../page-objects/dxtFormAppliance/dxt.appliance.checkAnswers.page.js'
import FormSubmittedPage from '../page-objects/dxtFormAppliance/dxt.appliance.formSubmitted.page.js'
import { applianceApplicationDefaults } from './appliance.application.defaults.js'

// Submission returns no reference number, so records are found again by their company/model
// name. The random part keeps parallel workers from colliding within the same millisecond.
function uniqueSuffix() {
  return `${Date.now()}${Math.random().toString(36).slice(2, 6)}`
}

/**
 * Builds appliance application data with unique, searchable names.
 * `address` and `contact` are merged key by key; `appliances` is replaced wholesale.
 */
export function buildApplianceApplication(overrides = {}) {
  const suffix = uniqueSuffix()
  const { appliance, ...defaults } = applianceApplicationDefaults

  return {
    companyName: `Test Company ${suffix}`,
    ...defaults,
    appliances: [{ modelName: `Model ${suffix}`, ...appliance }],
    ...overrides,
    address: { ...defaults.address, ...overrides.address },
    contact: { ...defaults.contact, ...overrides.contact }
  }
}

/**
 * Drives the DXT appliance form end to end to create an application in the database.
 * Returns the data used, so callers can find the record by company or model name.
 */
export async function createApplianceApplication(overrides = {}) {
  const application = buildApplianceApplication(overrides)

  await CompanyNamePage.open()
  await CompanyNamePage.submit(application.companyName)
  await CompanyBasedInUkPage.submit(application.basedInUk)
  await CompanyAddressPage.submit(application.address)
  await MainContactPage.submit(application.contact)

  for (const [index, appliance] of application.appliances.entries()) {
    if (index > 0) {
      await ApplianceDetailsSummaryPage.addAnother()
    }

    await ApplianceDetailsPage.submit(appliance)
  }

  await ApplianceDetailsSummaryPage.verifyPageLoaded()
  await ApplianceDetailsSummaryPage.clickContinue()

  await SupportingDocumentsPage.submit()
  await DeclarationPage.submit()
  await CheckAnswersPage.submit(application.confirmationEmail)
  await FormSubmittedPage.verifyPageLoaded()

  return application
}
