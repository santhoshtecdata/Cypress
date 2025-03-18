

describe('alert',()=>{
    it('test',()=>{
        cy.visit('https://demo.automationtesting.in/Alerts.html')
        cy.window().its('angular').should('exist'); 
        cy.wait(2000)
        cy.get('.active').click();
        cy.get('[onclick="confirmbox()"]').click()
        cy.wait(2000)
        cy.on('window:alert',(t) => {
               expect(t).to.equals('Press a Button !')
        });

    });
});