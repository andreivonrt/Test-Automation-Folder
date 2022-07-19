describe('Test Suite', function() {

    it('Test Run', function() {
   
       cy.viewport(1920, 979)
    
       cy.visit('https://onetrackui.azurewebsites.net/login')

    
       cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #mat-input-0').click()
    
       cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #mat-input-0').type('jorji@ehtest.com')
    
       cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #mat-input-1').click()
    
       cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #mat-input-1').type('admin')
    
       cy.get('.middle-box > .ibox-content > .m-t > .mat-focus-indicator > .mat-button-wrapper').click()
    
       cy.get('.navbar > .collapse > .nav > .ng-star-inserted:nth-child(5) > a').click()
    
       cy.get('.ibox > .container-fluid > .form-inline > .pull-right > .btn').click()
    
       cy.wait(5000);
    
       cy.get('.col-lg-6 > .ibox > .ibox-title > .input-group > .form-control').should('be.visible').click({force: true}).type('agape')

       cy.wait(5000);
    
       cy.get('.ibox-content > .customerlist > .list-group > .list-group-item:nth-child(1) > p').click()
    
       cy.get('.container-fluid > .row > .ng-star-inserted > .text-center > .btn-primary').click()
    
       cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #mat-input-6').click()
    
       cy.get('#cdk-overlay-0 > #mat-autocomplete-1 > #mat-option-11 > .mat-option-text > .idescr').click()
    
       cy.get('.mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #mat-input-6').click()
    
       cy.get('#cdk-overlay-0 > #mat-autocomplete-1 > #mat-option-12 > .mat-option-text > .idescr').click()
    
       cy.get('.invoice-total > tbody > .ng-star-inserted > td > .ng-star-inserted').click()
    
       cy.get('.ng-untouched > .row > .form-group > .no-padding > .form-control').click()
    
       cy.get('.ng-untouched > .row > .form-group > .no-padding > .form-control').type('10')
    
       cy.get('#modalAddDiscount > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    
       cy.get('.row > .col-lg-12 > .topheader > .btn-group > .btn').click()
    
       cy.get('.topheader > .btn-group > .dropdown-menu > .ng-star-inserted:nth-child(1) > .font-bold').click()
    
       cy.get('.row > .col-lg-12 > .topheader > .btn-group > .btn').click()
    
       cy.wait(5000);

       cy.get('#page-wrapper > invoice-edit > div.wrapper.wrapper-content > form > div > div.row > div > div.topheader > div > button').click()

       cy.wait(5000);

       cy.get('#page-wrapper > invoice-edit > div.wrapper.wrapper-content > form > div > div.row > div > div.topheader > div > ul > li:nth-child(2) > a').click()
    
    })
   
   })