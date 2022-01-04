describe('GET API for rest', ()=> {
    it('should GET API Test for Motor bike', () => {
        cy.visit('https://clientbase.us/v1/')
        cy.contains('Login').click()
        cy.contains('Welcome back!')
        cy.get('#normal_login_email').type('business@owneraaaaa.com')
        cy.get('#normal_login_password').type('123123')
        cy.contains('Log in').click()
        cy.contains('Services').click()
        cy.contains('Services').click()
    });
})