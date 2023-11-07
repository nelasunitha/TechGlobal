describe("Project-1", () => {
    it("Test Case 01-Validate the Contact Us information", () => {
        cy.visit('https://techglobal-training.com/frontend/project-1')

        cy.contains('Contact Us').should('be.visible');

        cy.contains('2860 S River Rd Suite 480, Des Plaines, IL 60018').should('be.visible');

        cy.contains('info@techglobalschool.com').should('be.visible');

        cy.contains('(773) 257-3010').should('be.visible');

    })
    it("Test Case 02 - Validate the Full name input box", () => {
        cy.visit('https://techglobal-training.com/frontend/project-1')

        cy.get('input[placeholder="Enter your full name"]').should('be.visible');

        cy.get('input[placeholder="Enter your full name"]').should('have.attr', 'required');

        cy.get('label[for="name"]').should('have.text', 'Full name *');

        cy.get('input[placeholder="Enter your full name"]').should('have.attr', 'placeholder', 'Enter your full name');
    })

    it("Test Case 03 - Validate the Gender radio button", () => {
        cy.visit("https://techglobal-training.com/frontend/project-1")

        cy.get(".field").contains("Gender *").parent().find(".radio").as("radioButtons")

        const genders = ["Male", "Female", "Prefer not to disclose"]
        cy.get("@radioButtons").each(($el, index) => {
            cy.wrap($el).should('have.text', genders[index])
            cy.wrap($el).find('input').should('be.visible').and('be.enabled')
            // .and("have.attr", "required")
        })

        cy.get(".radio input").each(($input) => {
            cy.wrap($input).should("not.be.checked")
        });

        cy.contains("Male").find("input[type='radio']").click();
        cy.contains("Male").find("input[type='radio']").should("be.checked");
        cy.contains("Female").find("input[type='radio']").should("not.be.checked");
        cy.contains("Prefer not to disclose").find("input[type='radio']").should("not.be.checked");
    })



  const testData = [

    {
        description: 'Validate the Address input box',
        label: 'Address',
        placeholder: 'Enter your address*',
        required: false
    },
    {
        description: 'Validate the Email input box',
        label: 'Email *',
        placeholder: 'Enter your address*',
        required: true
    },
    {
        description: 'Validate the Phone input box',
        label: 'Phone',
        placeholder: 'Enter your address*',
        required: false
    },
    {
        description: 'Validate the Message input box',
        label: 'Message',
        placeholder: 'Enter your address*',
        required: false
    }
]

testData.forEach((test, index) => {
  it(`Test Case 0${index + 4} - ${test.description}`, () => {

    cy.visit('https://techglobal-training.com/frontend/project-1')

    cy.contains('.label', test.label).should('have.text', test.label)

      cy.contains('.label', test.label).parent().find('input, textarea').should('be.visible')
      // .and('have.attr', 'placeholder', 'Enter your address')
      .and(test.required ? 'have.attr' : 'not.have.attr', 'required')
    })
  })
 it("Test Case 08 - Validate the Consent checkbox", () => {
    cy.visit('https://techglobal-training.com/frontend/project-1')

    cy.get('label.checkbox').should('have.text', ' I give my consent to be contacted.')

    cy.get('input[type="checkbox"]').should('have.attr', 'required');

    cy.get('input[type="checkbox"]').click();

    cy.get('input[type="checkbox"]').check().should('be.checked');
    cy.get('input[type="checkbox"]').uncheck().should('not.be.checked');

   // cy.get('input[placeholder="Enter your full name"]').should('have.attr', 'placeholder', 'Enter your full name');
  })

  it("Test Case 09 - Validate the SUBMIT button", () => {
    cy.visit('https://techglobal-training.com/frontend/project-1')

    cy.get('button[type = "submit"]').should('be.visible')

    cy.get('button[type = "submit"]').should('not.disabled')

   cy.get('button[type = "submit"]').should('have.text', 'SUBMIT')
  })

  it.only("Test Case 10 - Validate the form submission", () => {
    cy.visit('https://techglobal-training.com/frontend/project-1')

    cy.get(".field").contains("Full name").parent().find("input").type("Sunitha Nela")
    cy.get(".field").contains("Gender").parent().find(":nth-child(3)").click()
    cy.get(".field").contains("Address").parent().find("input").type("Seattle, WA")
    cy.get("input[type='email']").type("test@gmail.com")
    cy.get("input[type='phone']").type("123456789")
    cy.get("textarea").type("Here is my message.")
    cy.get(".checkbox > input").click()
    cy.wait(2000)
    cy.contains('Thanks for submitting!').should('be.visible')
})

})