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

/* beforeEach(() => {
    cy.restoreLocalStorage();
    console.log("Before Each Works")
    cy.visit('https://mc-stage.livello.com/');
  });

afterEach(()=> {
    cy.restoreLocalStorage()
    console.log("After Each Works")
}) */

// Alternatively you can use CommonJS syntax:
// require('./commands')

// beforeEach(() => {
//     cy.restoreLocalStorage();
//     cy.visit('https://mc-stage.livello.com/');  -- > Should be looked upon later, right now the search kiosk function works
//                                                       with .reload()
//   });
  
//   afterEach(() => {
//     cy.saveLocalStorage();
//   });
