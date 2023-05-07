/// <reference types="cypress" />
describe('Context: My First Tests',() =>{
    beforeEach(()=>{
        //run before each test case,beforeMethod in testNg
        cy.clearCookies();
        cy.visit('/login');
    })

    it('Check different locators strategies',()=>{
        //by css selector
        cy.get("input[name='username']").type("CydeoStudent");
        //every statement creates an object to be interacted,and next command makes operation to the object at the previous statement
        //attribute name and value
        cy.get("[type='text']").clear();//clear what is typed

        //tagName
        cy.get("input").each((item,index,list)=>{
            //assert the length of the list is 2
            expect(list).to.have.length(2);
            expect(item).to.have.attr("type");
        })
        //by attribute name
        cy.get('[type]');
        //by className
        cy.get('.btn.btn-primary');
        //by id
        cy.get('#wooden_spoon');
        //if I want to use text: no xpath in cypress,but it is still possible to use text
        cy.get('button').should('contain','Login').click();
    })
})