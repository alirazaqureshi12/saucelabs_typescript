/// <reference types="cypress" />

import "cypress-localstorage-commands"

import { prod } from "./pages/Products"

let username = "standard_user"
let password = "secret_sauce"

beforeEach(() => {

  cy.saveLocalStorage()

})

afterEach(() => {

  cy.restoreLocalStorage()

})


describe("Visiting and entering user details", () => {

  it("Visit Page", () => {
    
      cy.visit("https://www.saucedemo.com/")
  
  })

  it("Enter ID and password", () => {
    cy.get('[data-test="username"]')
      .type(username)

    cy.get('[data-test="password"]')
    .type(password)
  })

  it("click login", () => {
    cy.get('[data-test="login-button"]')
    .click()
    prod.orderBackpack()
  })


})
