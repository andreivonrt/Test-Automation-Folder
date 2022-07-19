describe('Test Suite 1', () => {
  
  it('Visit Cypress', () => {

    //visits google website
    cy.visit('https://www.google.com/')
 
  })

  it('Validate url', () => {
    //asserts url
    cy.url().should('eq', 'https://www.google.com/')
  
  })
  
})