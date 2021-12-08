/// <reference types="cypress" />
import EnderecoPage from '../support/page_objects/endereco.page'

describe("Endereço de Faturamento e Entrega"), () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento()
    });
}