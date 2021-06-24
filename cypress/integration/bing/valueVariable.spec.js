describe('return values', () => {


    it('should not done cause this is wack', () => {
        cy.visit('/');
        // cy.log('this is my test');
        // cy.get("[id='run-button']")
        //     .then(btn => {
        //         const txt = btn.text();
        //         cy.get('h1').click();
        //         expect(txt).to.be.eq('Try it');
        //     });
    })

    it('should allow you to inspect the objects Cypress yields with debugger', () => {
        cy.visit('https://example.cypress.io/commands/actions');
        cy.contains('button', 'Click to toggle popover')
            .then(btn => {
                debugger;
                cy.get('.action-select').select('apples')
                .then(selected => {
                    debugger;
                    cy.get('#password1').type('secrety secret')
                        .then(secret => {
                            debugger;
                            cy.log(secret);
                            cy.log(btn);
                            cy.log(selected);
                        })
                })
            })

    })

    it('should alias a request makde by Cypress', () => {
        cy.request('/comments').as('comments');
        // do stuff with other test code, get some coffee, then come back the request below

        cy.get('@comments').should((response) => {
            if (response.status === 200) {
                expect(response).to.have.property('duration');
                console.log(response);
            } else {
                // whatever else you want to look at
                console.log('Failure');
            }
        })
    })

})