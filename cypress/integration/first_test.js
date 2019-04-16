// Automate assessment for item filter on "sportsdirect.com" is working properly. Open         men's running shoes section and filter by brand "Karrimor" and price in range 20 - 40   EUR. Assess the results!



describe('My First Test', function() {
    it('clicking "type" shows the right headings', function() {
      cy.visit('https://lt.sportsdirect.com/mens/mens-trainers')
  
      //cy.pause()


      cy.get('MENS').trigger('mouseover')
  
  //     cy.contains('type').click()
  
  //   //   // Should be on a new URL which includes '/commands/actions'
  //     cy.url().should('include', '/commands/actions')
  
  //   //   // Get an input, type into it and verify that the value has been updated
  //  cy.get('#password1')
  //    .type('it works')
  //   //  .should('have.value', 'it works')
    })
  })