let store
before(() =>{
    Cypress.on('uncaught:exception',() =>{
        return false
    })
})
before(() =>{
    cy.fixture("element").then((locators) =>{
        store = locators.store
    })
})
Cypress.Commands.add('searchProduct1', () =>{
    const product1 = "Blue Tshirt";
    cy.get(store.storeBtn).click();
    cy.get(store.searchField).should('have.value', '').click().type(product1);
    cy.get(store.searchBtn).click();
    cy.get(store.productTitle).should('contain.text', `${product1}`);
    cy.get(store.productDescription).should('exist').and('be.visible');
})
Cypress.Commands.add('searchProduct2', () =>{
    const product = "Green Tshirt";
    cy.get(store.storeBtn).click();
    cy.get(store.searchField).should('have.value', '').click().type(product);
    cy.get(store.searchBtn).click();
    cy.get(store.productTitle).should('contain.text', `${product}`);
    cy.get(store.productDescription).should('exist').and('be.visible');
})
Cypress.Commands.add('searchProduct3', () =>{
    const product = "Basic Blue Jeans";
    cy.get(store.storeBtn).click();
    cy.get(store.searchField).should('have.value', '').click().type(product);
    cy.get(store.searchBtn).click();
    cy.get(store.productTitle).should('contain.text', `${product}`);
    cy.get(store.productDescription).should('exist').and('be.visible');
})
Cypress.Commands.add('searchProduct4', () =>{
    const product = "Red Shoes";
    cy.get(store.storeBtn).click();
    cy.get(store.searchField).should('have.value', '').click().type(product);
    cy.get(store.searchBtn).click();
    cy.get(store.productTitle).should('contain.text', `${product}`);
    cy.get(store.productDescription).should('exist').and('be.visible');
})
Cypress.Commands.add('searchProduct5', () =>{
    const product = "Blue Shoes";
    cy.get(store.storeBtn).click();
    cy.get(store.searchField).should('have.value', '').click().type(product);
    cy.get(store.searchBtn).click();
    cy.get(store.productTitle).should('contain.text', `${product}`);
    cy.get(store.productDescription).should('exist').and('be.visible');
})
Cypress.Commands.add('filterByMenCategories', () =>{
    cy.get(store.storeBtn).click();
    cy.get(store.categoryFilter).should('have.value', '').select('men');
    cy.get(store.categoryTitle).invoke('text').then((message)=> {
        expect(message).to.contain('Men')  
          cy.log(message)
    })
})
Cypress.Commands.add('filterByMenJeansCategories', () =>{
    cy.get(store.storeBtn).click();
    cy.get(store.categoryFilter).should('have.value', '').select('mens-jeans');
    cy.get(store.categoryTitle).invoke('text').then((message)=> {
        expect(message).to.contain("Men's Jeans")  
          cy.log(message)
    })
})
Cypress.Commands.add('filterByWomenCategories', () =>{
    cy.get(store.storeBtn).click();
    cy.get(store.categoryFilter).should('have.value', '').select('women');
    cy.get(store.categoryTitle).invoke('text').then((message)=> {
        expect(message).to.contain('Women')  
          cy.log(message)
    })
})
Cypress.Commands.add('filterByWomenJeansCategories', () =>{
    cy.get(store.storeBtn).click();
    cy.get(store.categoryFilter).should('have.value', '').select('womens-jeans');
    cy.get(store.categoryTitle).invoke('text').then((message)=> {
        expect(message).to.contain("Women's Jeans")  
          cy.log(message)
    })
})
Cypress.Commands.add('filterByAccessoriesCategories', () =>{
    cy.get(store.storeBtn).click();
    cy.get(store.categoryFilter).should('have.value', '').select('accessories');
    cy.get(store.categoryTitle).invoke('text').then((message)=> {
        expect(message).to.contain("Accessories")  
          cy.log(message)
    })
})
Cypress.Commands.add('sortByPopularity', () =>{
    cy.get(store.storeBtn).click();
    cy.get(store.sortingDropdown).should('have.value', 'menu_order').select('popularity');
    cy.get(store.sortingDropdown).should('have.value', 'popularity');
})
Cypress.Commands.add('sortByAverageRating', () =>{
    cy.get(store.storeBtn).click();
    cy.get(store.sortingDropdown).should('have.value', 'menu_order').select('rating');
    cy.get(store.sortingDropdown).should('have.value', 'rating');
})
Cypress.Commands.add('sortByLatest', () =>{
    cy.get(store.storeBtn).click();
    cy.get(store.sortingDropdown).should('have.value', 'menu_order').select('Sort by latest');
    cy.get(store.sortingDropdown).should('have.value', 'date');
})
Cypress.Commands.add('sortByPriceLowToHigh', () =>{
    cy.get(store.storeBtn).click();
    cy.get(store.sortingDropdown).should('have.value', 'menu_order').select('Sort by price: high to low');
    cy.get(store.sortingDropdown).should('have.value', 'price-desc');
})
Cypress.Commands.add('sortByPriceHighToLow', () =>{
    cy.get(store.storeBtn).click();
    cy.get(store.sortingDropdown).should('have.value', 'menu_order').select('Sort by price: low to high');
    cy.get(store.sortingDropdown).should('have.value', 'price');
})