describe('Store Activities', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    describe('Search Products', () => {
        it('Search Blue Tshirt', () => {
            cy.searchProduct1();
          })
        it('Search Green Tshirt', () => {
            cy.searchProduct2();
            })
          it('Search Basic Blue Jeans', () => {
            cy.searchProduct3();
            })
          it('Search Red shoes', () => {
            cy.searchProduct4();
            })
          it('Search Blue shoes', () => {
            cy.searchProduct5();
            })
    })
    describe('Filter Products By Categories', () => {
        it('Filter Product By Men Categories', () => {
            cy.filterByMenCategories();
          })
        it("Filter Product By Men's Jeans Categories", () => {
            cy.filterByMenJeansCategories();
          })
        it('Filter Product By Women Categories', () => {
            cy.filterByWomenCategories();
          })
        it("Filter Product By Women's jeans Categories", () => {
            cy.filterByWomenJeansCategories();
          })
        it('Filter Product By Accessories Categories', () => {
            cy.filterByMenCategories();
          })
    })
    describe('Sort Product', () => {
        it('Sort Product By Popularity', () => {
            cy.sortByPopularity();
          })
        it('Sort Product By Average Rating', () => {
            cy.sortByAverageRating();
          })
        it('Sort Product By Latest', () => {
            cy.sortByLatest();
          })
        it('Sort Product By Price: Low to High', () => {
            cy.sortByPriceLowToHigh();
          })
        it('Sort Product By Price: High to Low', () => {
            cy.sortByPriceHighToLow();
          })
    })
  })