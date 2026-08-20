class applianceSearchPage{

    get appliancePageHeader(){
        return $('h1');
    }

    get defraLink(){
        return $('a[href*="department-for-environment-food-rural-affairs"]');
    }

    get guidancePageLink(){
        return $('a[href*="smoke-control-area-rules"]');
    }

    get fuelListPageLink(){
        return $('a[href*="fuels"]');
    }

    get countApplianceListItems(){
       return $("//p[@class='govuk-body']");
    }

    get applianceArrayList(){
        const allAppliancesPerPage = $$("//div[@class='govuk-!-margin-bottom-1']");
        return allAppliancesPerPage;
    }

    get paginationElement(){
        return $('aria/pagination');
    }

    get certifiedFilterOption(){
        return $('.govuk-details__summary-text.=Certified in');
    }

    get fuelsAllowedFilterOption(){
        return $('.govuk-details__summary-text.=Certified in');
    }
    
    get applianceTypeFilterOption(){
        return $('.govuk-details__summary-text.=Certified in');
    }

    get applyFilterButton(){
        return $("//button[@type='submit']");
    }

    // Page Navigation using Next Link
    get nextPaginationLink(){
        return $('.govuk-pagination__next')
    }

    // Page Navigation using Previous link
    get previousPaginationLink(){
        return $('.govuk-pagination__prev');
    }

    // Search text box
    get searchInput(){
        return $('#search')
    }
  
    //Search Button
    get searchButton(){
        return $('//button[contains(text(),"Search")]')
    }
  
 
  // Filters
  /*applyFiltersButton: '[data-test-id="submit-button"]',
 
  certifiedInCheckboxes: 'input[name="certifiedIn"]',
  fuelsAllowedCheckboxes: 'input[name="fuelsAllowed"]',
  applianceTypeCheckboxes: 'input[name="applianceType"]',
 
  // Results
  resultCards: 'div.govuk-\\!-margin-bottom-1',
  modelNameLink: 'h3 a.govuk-link',
  fuelsText: 'p*=Fuels allowed:',
  applianceTypeText: 'p*=Appliance type:',
  certifiedInText: 'p*=Certified in:'*/
   
}

export default new applianceSearchPage();


