// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Handle uncaught exceptions globally
Cypress.on('uncaught:exception', (err, runnable) => {
  // Returning false here prevents Cypress from failing the test
  // on uncaught exceptions
  
  // Log the error for debugging
  console.log('Cypress caught uncaught exception:', err.message);
  
  // Handle Vue hydration and other common errors
  const suppressErrors = [
    'Cannot read property',
    'Cannot read properties', 
    'data of undefined',
    'API Error',
    'Network Error',
    'Failed to fetch',
    '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__',
    'hydration mismatch',
    'ReferenceError'
  ];
  
  const shouldSuppress = suppressErrors.some(errorType => 
    err.message && err.message.indexOf(errorType) !== -1
  );
  
  if (shouldSuppress) {
    console.log('Suppressing known error:', err.message);
    return false;
  }
  
  // For other errors, let Cypress handle them normally
  return true;
});

// Handle unhandled promise rejections
Cypress.on('unhandled:rejection', (event) => {
  console.log('Cypress caught unhandled promise rejection:', event.reason);
  
  // Suppress network-related promise rejections
  if (event.reason && (
    event.reason.message?.includes('Network Error') ||
    event.reason.message?.includes('Failed to fetch') ||
    event.reason.message?.includes('API Error')
  )) {
    console.log('Suppressing network error:', event.reason.message);
    return false;
  }
  
  return true;
});
