/// <reference types="cypress" />
import EnderecoPage from '../support/page_objects/endereco.page'

describe('Testes e2e', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })

        cy.visit('produtos')
    });

    context('End-to-end - Fluxo de pedido', () => {

        it ('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
            cy.addProdutos('Apollo Running Short', '33', 'Black', 4)
            cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
            cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
            EnderecoPage.editarEnderecoFaturamento('Julia', 'Pereira', 'Games Studio', 'Brasil', 'Rua São João', '123', 'Buzios', 'Rio de Janeiro', '16161611', '5199999999', 'juliapereira@email.com')
            cy.get('#terms').click()
            cy.get('#place_order').click()
            cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
        });
    })
});

