/// <reference types="cypress" />





describe('selecting of cheapest mac',{baseUrl:'https://demoblaze.com'},()=>{
    beforeEach('Navigate to upload page', () => {
        cy.clearCookies();
        cy.visit('/');
      });
it.skip('finding the cheapest mac',()=>{
cy.contains('Laptops').click();
cy.get('.card-title >.hrefch').contains('MacBook air').should('be.visible')
const prices=new Array();
let min;
const values= new Array();
let minPriceIndex;
cy.get('h4.card-title').eq(2).click();
 // cy.wrap(element).eq(2).click();
 // cy.log(element.text());
  //let cost= element.text().substring(1);
 
  //prices.push(cost);
 // const values = prices.map(str=>parseInt(str));

 // console.log(prices);
 //let min=Math.min.apply(Math,values);
 //console.log(values);
 //cy.get('h4.card-title>.hrefch').each((element,index,list)=>{
//cy.wrap(element).contains('MacBook Pro').click();
 //list.sort();


})


 // minPriceIndex = values.findIndex((value)=>value===min);
 
 
  
            //contains().click();


 /* let minPrice = 5000;
if(cost<minPrice){
cost=minPrice;*/
//cy.get('h4.card-title').eq(minPriceIndex).click();

})

 

//cy.wrap(prices).siblings('.hrefch').click();

//})

/*cy.get('[onclick="addToCart(11)"]').click();
cy.contains('Cart').click();
cy.contains('MacBook air').should('be.visible');*/



//cy.get(':nth-child(3) > .card > .card-block > .card-title > .hrefch').click();


;


