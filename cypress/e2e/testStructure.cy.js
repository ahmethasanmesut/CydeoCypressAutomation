/// <reference types="cypress" />
describe('Context: My First Tests',() =>{
    before(()=>{
        //runs once before all test cases in this describe block,beforeClass
    })
    beforeEach(()=>{
        //run before each test case,beforeMethod in testNg
        cy.clearCookies();
    })
    after(()=>{
        //similar to afterClass in TestNg,runs once after all tests finished
    })
    afterEach(()=>{
        //afterMethod in TestNg
    })

    it('Opening a web application', () => {
        cy.visit('/registration_form');
    })

})