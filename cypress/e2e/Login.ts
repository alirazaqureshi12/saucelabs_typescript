/// <reference types="cypress" />

import "cypress-localstorage-commands"
import { prod } from "./pages/Products"

let username = "standard_user"
let password = "secret_sauce"

beforeEach(() => {

  experimentalSessionAndOrigin:false
  cy.saveLocalStorage()

})

afterEach(() => {

  experimentalSessionAndOrigin:false
  cy.restoreLocalStorage()


})


describe("Visiting and entering user details", () => {

  it("Visit Page", () => {
    
      cy.visit("https://www.saucedemo.com/")
  
  })

  it("Enter details [L_001]", () => {
    cy.get('[data-test="username"]')
    .type("standard_user")
    cy.get('[data-test="password"]')
    .type("secret_sauce")
  })

  it("click login", () => {
    cy.get('[data-test="login-button"]')
    .click()
    prod.orderBackpack()
    prod.backToHomePage()
  })
/*
  it("test code", () => {
    prod.orderBackpack()
  })
  it("back to homepage", () => {
    prod.backToHomePage()
  })
*/

})
