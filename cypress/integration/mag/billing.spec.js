import {
    magapiTestUser
} from '../../support/utils';

let policyNumber;
let billingAccountId;
let policyTermnumberId;
let instalmentNumber;

describe('billing inquiry test', () => {
    it('should return billing inquiry details', () => {
        cy.log('Billing inquiry API test');
        cy.request({
            method: 'GET',
            url: '/billing-inquiry/v1/billingDetails?policyNumber=09130066',
            auth: {
                username: magapiTestUser.username,
                password: magapiTestUser.password
            }
        }).then( res => {
            expect(res.body[0].billingAccount.id).to.equal('G09130066');
            policyNumber = res.body[0].balances[0].policyId;
            billingAccountId = res.body[0].billingAccount.id;
            policyTermnumberId = res.body[0].linkedPolicy[0].terms[0].policyTermNumber;
            instalmentNumber = res.body[0].linkedPolicy[0].terms[0].instalments[0].numberId;
        });        
    })

    it('should be able to view instalment summary', () => {
        cy.log("request 2");
        cy.request({
            method: 'GET',
            auth: {
                username: magapiTestUser.username,
                password: magapiTestUser.password
            },
            url: `/billing-inquiry/v1/viewInstalmentsummary?policyNumber=${policyNumber}&billingAccountId=${billingAccountId}&policyTermnumberId=${policyTermnumberId}&instalmentNumber=${instalmentNumber}`
        }).then( res => {
            expect(res.body[0].billingAccountNumberId).to.equal('767476837');
        })
    })

    
    it('should return instalment details', () => {
        cy.log("request 3");
        cy.request({
            method: 'GET',
            auth: {
                username: magapiTestUser.username,
                password: magapiTestUser.password
            },
            url: `/billing-inquiry/v1/viewInstalmentDetails?policyNumber=${policyNumber}&billingAccountId=${billingAccountId}&policyTermnumberId=${policyTermnumberId}&instalmentNumber=${instalmentNumber}`            
        }).then( res => {
            expect(res.body[0].billingAccountNumberId).to.equal('767476837');
        })
    })
    
})