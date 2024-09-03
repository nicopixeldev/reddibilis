describe('reddibilis Cypress tests', () => {
    it('should navigate to the login page', () => {
        cy.visit('http://localhost:3000/')

        cy.get('a[href*="login"]').click()

        cy.url().should('include', '/login')

        cy.get('h1').contains('Identifícate para continuar')
    });

    it('should navigate login successfully', () => {
        cy.visit('http://localhost:3000/login')

        cy.get('[data-testid="email-input"]').type('user@nextmail.com')

        cy.get('[id="password"]').type('123456')

        cy.get('button').click()

        cy.url().should('include', '/login')
    })
})