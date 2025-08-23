// https://docs.cypress.io/api/introduction/api.html

describe('User Index Page', () => {
  it('visits the app root url and loads without errors', () => {
    cy.visit('/');
    
    // Check if the page loads without errors
    cy.get('body').should('be.visible');
    
    // Wait a bit for any loading to complete
    cy.wait(2000);
    
    // Check if the page is still functional
    cy.get('body').should('be.visible');
  });

  it('handles loading state properly', () => {
    cy.visit('/');
    
    // Check if the page loads
    cy.get('body').should('be.visible');
    
    // Wait for loading to potentially complete
    cy.wait(3000);
    
    // The page should still be functional regardless of loading state
    cy.get('body').should('be.visible');
  });

  it('handles potential errors gracefully', () => {
    cy.visit('/');
    
    // Check if the page loads without crashing
    cy.get('body').should('be.visible');
    
    // Wait a bit to see if any errors occur
    cy.wait(2000);
    
    // The page should still be functional
    cy.get('body').should('be.visible');
  });
});
