class Products {

    productPageLocators = {
        clickXYZbackpack:() => cy.get('#item_4_title_link > .inventory_item_name'),
    }

    orderBackpack() {
        
        this.productPageLocators.clickXYZbackpack()
        .click()
    }

    backToHomePage() {
        cy.get('[data-test="back-to-products"]')
        .click()
    }
 
}

export let prod = new Products()