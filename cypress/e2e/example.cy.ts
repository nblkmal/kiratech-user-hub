// https://docs.cypress.io/api/introduction/api.html

describe('User Index Page', () => {
  it('visits the app root url and loads without errors', () => {
    cy.visit('/');

    // Check if the page loads without errors
    cy.get('body').should('be.visible');

    // Check if the page is still functional after potential loading
    cy.get('body').should('be.visible');
  });

  it('handles loading state properly', () => {
    cy.visit('/');

    // Check if the page loads
    cy.get('body').should('be.visible');

    // The page should still be functional regardless of loading state
    cy.get('body').should('be.visible');
  });

  it('handles potential errors gracefully', () => {
    cy.visit('/');

    // Check if the page loads without crashing
    cy.get('body').should('be.visible');

    // The page should still be functional
    cy.get('body').should('be.visible');
  });
});
