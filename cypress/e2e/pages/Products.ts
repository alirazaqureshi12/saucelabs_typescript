class Products {

    productPageLocators = {
        clickXYZbackpack:() => cy.get('#item_4_title_link > .inventory_item_name'),
    }

    orderBackpack() {
        
        this.productPageLocators.clickXYZbackpack()
        .click()
    }

}

export let prod = new Products()