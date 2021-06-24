
import {
    access_token,
    stringifiedNewUserData
} from '../../support/utils';

describe.only('All things fixures', () => {
    const requestUrl = 'https://gorest.co.in/public-api/users';

    beforeEach(() => {
        cy.visit('https://gorest.co.in/rest-console');
    })

    it('should load fixture data then access it via .then()', () => {
        cy.fixture('request-folder/request.json')
            .then(json => {
                // intercept is a new method in cypress v6.0 - it's dope.
                cy.intercept(requestUrl, json);
            })
        cy.contains('Send Request').click();
    })

    it('should retrieve a fixture of data from a specific folder', () => {})
})