describe("Project-3", () => {
  it("Test Case 01 - Validate the default Book your trip form", () => {
      cy.visit('https://techglobal-training.com/frontend/project-3')

      cy.get('.radio>input[value="One way"]').should('be.checked').should('be.enabled');

      cy.get('.radio>input[value="Round trip"]').should('not.be.checked').should('be.enabled');
        //Check
      cy.get('.label').contains('Cabin Class').next()
      .find('option').should('have.length.gt', 1).should('be.visible');

      cy.get('.label').contains('From').next()
      .find('option').should('have.length.gt', 1).should('be.visible');

      cy.get('.label').contains('To').next()
      .find('option').should('have.length.gt', 1).should('be.visible');

      cy.get('.label').contains('Depart').should('be.visible');

      cy.contains('Depart').next().find('.react-datepicker-wrapper input') .should('be.visible');

      cy.contains('Return').next().find('.react-datepicker-wrapper input')  .should('be.visible');


      cy.contains('Number of passengers') .next() .should('be.visible') .find('option').and('have.value', 1);

      cy.contains('Passenger 1') .next().should('be.visible').find('option')
       // .and('have.text', 'Adult (16-64)');

       cy.contains('BOOK').should('be.visible').and('be.enabled');
  })

  it.only("Test Case 02 - Validate the Book your trip form when Round trip is selected", () => {
    cy.visit('https://techglobal-training.com/frontend/project-3')

    cy.get('.radio>input[value="Round trip"]').click().should('be.checked').should('be.enabled');
    cy.contains('One way').should('not.be.checked');

    cy.contains('Cabin Class').should('be.visible');

    cy.get('select').find('option').first()
      // .should('have.attr', 'hidden', '')
       .should('have.text', 'Select cabin class...');

    cy.get('select').find('option').eq(1).should('contain.text', 'Premium Economy');
    cy.get('select').find('option').eq(2).should('contain.text', 'Business');
    cy.get('select').find('option').eq(3).should('contain.text', 'First');


    cy.get('.label').contains('From').next()
    .find('option').should('have.length.gt', 1).should('be.visible');

    cy.get('.label').contains('To').next()
    .find('option').should('have.length.gt', 1).should('be.visible');

    cy.get('.label').contains('Depart').should('be.visible');

    cy.contains('Depart').next().find('.react-datepicker-wrapper input') .should('be.visible');

    cy.contains('Return').next().find('.react-datepicker-wrapper input')  .should('be.visible');


    cy.contains('Number of passengers') .next() .should('be.visible') .find('option').and('have.value', 1);

    cy.contains('Passenger 1') .next().should('be.visible').find('option')


     cy.contains('BOOK').should('be.visible').and('be.enabled');
})

})