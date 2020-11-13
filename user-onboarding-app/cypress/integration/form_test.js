// These are my tests
// Completed tasks!

describe('Form App', () => {

beforeEach(() => {
    cy.visit("http://localhost:3000")
});

const textName = () => cy.get('input[name="name"]');
const textEmail = () => cy.get('input[name="email"]');
const textPassword = () => cy.get('input[name="password"]');
const checkBox = () => cy.get('input[name="tos"]');
const submitBtn = () => cy.get('button');

    it('test name input', () => {
        textName()
        .should("exist")
        .type('Batman')
        .should('have.value', 'Batman') 
    });

    it('test email input', () => {
        textEmail()
        .should('exist')
        .type('dudelao@gmail.com')
        .should('have.value', 'dudelao@gmail.com')
    });

    it('test password input', () => {
        textPassword()
        .should('exist')
        .type('notbatman')
        .should('have.value', 'notbatman')
    });

    it('test checkbox', () => {
        checkBox()
        .should('exist')
        .click()
        .should('have.value', 'true')
    });

    it('test submit', () => {
        textName().type('Batman');
        textPassword().type('notBatman');
        textEmail().type('bats@batman.com');
        checkBox().click();
        submitBtn().click();
    });

})