import { CATEGORY_ID_THOROUGHBRED,CATEGORY_ID_GREYHOUND,CATEGORY_ID_HARNESS } from "../config/constants";

describe('Category Filters', () => {
  it('only Thoroughbred filter should work',() => {
    cy.visit('/');
    // wait for spinner
    cy.get('.loading-spinner').should('not.exist');
    // uncheck other filter
    cy.get(`div[data-testid="category-filter-${CATEGORY_ID_GREYHOUND}"] > input`).should('be.visible').click()
    cy.get('.loading-spinner').should('not.exist');
    // uncheck other filter
    cy.get(`div[data-testid="category-filter-${CATEGORY_ID_HARNESS}"] > input`).should('be.visible').click()
    // filtered value should be 5
    cy.get('div').find('.item').should('have.length', 5)


  });

  it('only Greyhound filter should work',() => {
    cy.visit('/');
    // wait for spinner
    cy.get('.loading-spinner').should('not.exist');
    // uncheck other filter
    cy.get(`div[data-testid="category-filter-${CATEGORY_ID_THOROUGHBRED}"] > input`).should('be.visible').click()
    cy.get('.loading-spinner').should('not.exist');
    // uncheck other filter
    cy.get(`div[data-testid="category-filter-${CATEGORY_ID_HARNESS}"] > input`).should('be.visible').click()
    // filtered value should be 5
    cy.get('div').find('.item').should('have.length', 5)
  });

  it('only Harness filter should work',() => {
    cy.visit('/');
    // wait for spinner
    cy.get('.loading-spinner').should('not.exist');
    // uncheck other filter
    cy.get(`div[data-testid="category-filter-${CATEGORY_ID_THOROUGHBRED}"] > input`).should('be.visible').click()
    cy.get('.loading-spinner').should('not.exist');
    // uncheck other filter
    cy.get(`div[data-testid="category-filter-${CATEGORY_ID_GREYHOUND}"] > input`).should('be.visible').click()
    // filtered value should be 5
    cy.get('div').find('.item').should('have.length', 5)
  });
});
