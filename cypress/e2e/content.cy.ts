import { RACING_CATEGORIES,CATEGORY_ID_THOROUGHBRED,CATEGORY_ID_GREYHOUND,CATEGORY_ID_HARNESS } from "../config/constants";

describe('Page Content', () => {
  it('Should correctly display page title', () => {
    cy.visit('');

    cy.get('[data-testid=page-title]').contains('Next To Go Races').and('be.visible');
  });

  it('Should have all filters checked by default', () => {
    cy.visit('');

    cy.get('[data-testid=category-filters]').within(() => {
      RACING_CATEGORIES.forEach((category) => {
        cy.get(`[data-testid=category-filter-${category.categoryId}]`).within(() => {
          cy.get('[data-testid=category-filter-label]').contains(category.name).and('be.visible');
          cy.get('[data-testid=category-filter-checkbox]').should('be.checked');
        });
      })
    });
  })

  it('Should have atleast one checkbox selected ', () => {
    cy.visit('/');
    // wait for spinner
    cy.get('.loading-spinner').should('not.exist');
    // uncheck other filter
    cy.get(`div[data-testid="category-filter-${CATEGORY_ID_THOROUGHBRED}"] > input`).should('be.visible').click()

    cy.get('.loading-spinner').should('not.exist');
    // uncheck other filter
    cy.get(`div[data-testid="category-filter-${CATEGORY_ID_GREYHOUND}"] > input`).should('be.visible').click()

    cy.get('.loading-spinner').should('not.exist');
    // uncheck other filter
    cy.get(`div[data-testid="category-filter-${CATEGORY_ID_HARNESS}"] > input`).should('be.visible').click()

    // will check for all 3 types are checked
    cy.get(`div[data-testid="category-filter-${CATEGORY_ID_THOROUGHBRED}"] > input`).should('be.checked');
    cy.get(`div[data-testid="category-filter-${CATEGORY_ID_GREYHOUND}"] > input`).should('be.checked');
    cy.get(`div[data-testid="category-filter-${CATEGORY_ID_HARNESS}"] > input`).should('be.checked');

  })
});
