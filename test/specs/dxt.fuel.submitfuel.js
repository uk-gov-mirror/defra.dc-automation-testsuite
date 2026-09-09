import CompanyNamePage from '../page-objects/dxtFormFuel/dxt.fuel.companyName.page.js'
import CompanyBasedInUkPage from '../page-objects/dxtFormFuel/dxt.fuel.companyBasedInUk.page.js'
import CompanyAddressPage from '../page-objects/dxtFormFuel/dxt.fuel.companyAddress.page.js'
import MainContactPage from '../page-objects/dxtFormFuel/dxt.fuel.mainContact.page.js'
import ResponsiblePersonPage from '../page-objects/dxtFormFuel/dxt.fuel.responsiblePerson.page.js'
import CustomerComplaintsPage from '../page-objects/dxtFormFuel/dxt.fuel.customerComplaints.page.js'
import HowDoYouSellFuelPage from '../page-objects/dxtFormFuel/dxt.fuel.howDoYouSellFuel.page.js'
import ManufactureOrRebrandPage from '../page-objects/dxtFormFuel/dxt.fuel.manufactureOrRebrand.page.js'
import FuelDescriptionPage from '../page-objects/dxtFormFuel/dxt.fuel.fuelDescription.page.js'
import FuelWeightPage from '../page-objects/dxtFormFuel/dxt.fuel.fuelWeight.page.js'
import FuelCompositionPage from '../page-objects/dxtFormFuel/dxt.fuel.fuelComposition.page.js'
import SulphurContentPage from '../page-objects/dxtFormFuel/dxt.fuel.sulphurContent.page.js'
import ManufacturingProcessPage from '../page-objects/dxtFormFuel/dxt.fuel.manufacturingProcess.page.js'
import QualityControlSystemPage from '../page-objects/dxtFormFuel/dxt.fuel.qualityControlSystem.page.js'
import BrandNamePage from '../page-objects/dxtFormFuel/dxt.fuel.brandName.page.js'
import TestReportsPage from '../page-objects/dxtFormFuel/dxt.fuel.testReports.page.js'
import DeclarationPage from '../page-objects/dxtFormFuel/dxt.fuel.declaration.page.js'
import CheckAnswersPage from '../page-objects/dxtFormFuel/dxt.fuel.checkAnswers.page.js'
import FormSubmittedPage from '../page-objects/dxtFormFuel/dxt.fuel.formSubmitted.page.js'

// Placeholder data until fuel.application.factory.js exists; the suffix keeps the record findable
const suffix = Date.now()

const fuel = {
  companyName: `Test Fuel Company ${suffix}`,
  basedInUk: 'Yes',
  address: {
    addressLine1: 'Test Address Line1',
    town: 'Cambridge',
    postcode: 'PE3 9DR'
  },
  mainContact: {
    name: 'Main Contact',
    emailAddress: 'main.contact@example.com'
  },
  responsiblePerson: {
    name: 'Responsible Person'
  },
  complaintsSystem: 'Yes',
  saleType: 'Bagged at source',
  businessType: 'Manufacture',
  description: 'Pillow-shaped briquettes with a single line indentation',
  weight: 'Average weight of 30 grams per briquette',
  composition:
    'Anthracite fines (60% to 80%) and an organic binder (remainder)',
  sulphurContent: 1,
  manufacturingProcess: 'Roll-pressing and heat treatment at about 300C',
  qualityControlSystem: 'Yes',
  mainBrandName: `Test Brand ${suffix}`
}

describe('DXT fuel form', () => {
  // Data creation only - the page objects self-verify, so the spec holds no assertions
  it('submits a fuel application via the Manufacture path', async () => {
    await CompanyNamePage.open()
    await CompanyNamePage.submit(fuel.companyName)

    await CompanyBasedInUkPage.submit(fuel.basedInUk)
    await CompanyAddressPage.submit(fuel.address)
    await MainContactPage.submit(fuel.mainContact)
    await ResponsiblePersonPage.submit(fuel.responsiblePerson)
    await CustomerComplaintsPage.submit(fuel.complaintsSystem)
    await HowDoYouSellFuelPage.submit(fuel.saleType)
    await ManufactureOrRebrandPage.submit(fuel.businessType)

    await FuelDescriptionPage.submit(fuel.description)
    await FuelWeightPage.submit(fuel.weight)
    await FuelCompositionPage.submit(fuel.composition)
    await SulphurContentPage.submit(fuel.sulphurContent)
    await ManufacturingProcessPage.submit(fuel.manufacturingProcess)
    await QualityControlSystemPage.submit(fuel.qualityControlSystem)

    await BrandNamePage.submit({ mainBrandName: fuel.mainBrandName })
    await TestReportsPage.submit()
    await DeclarationPage.submit()
    await CheckAnswersPage.submit()

    await FormSubmittedPage.verifyPageLoaded()
  })
})
