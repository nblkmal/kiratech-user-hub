/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Custom command to wait for page to be ready
Cypress.Commands.add('waitForPageLoad', () => {
  cy.get('body').should('be.visible');
  // Wait for any loading states to complete
  cy.get('.animate-pulse').should('not.exist');
});

// Custom command to mock API responses
Cypress.Commands.add('mockUserAPI', (response) => {
  cy.intercept('GET', 'https://randomuser.me/api/*', {
    statusCode: 200,
    body: response,
  }).as('getUsers');
});

// Custom command to mock API errors
Cypress.Commands.add('mockUserAPIError', (statusCode = 500) => {
  cy.intercept('GET', 'https://randomuser.me/api/*', {
    statusCode,
    body: { error: 'API Error' },
  }).as('getUsersError');
});
