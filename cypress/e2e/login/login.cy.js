/// <reference types="Cypress"/>

describe('Testes funcionais de login', () => {
    it('Deve realizar o login com sucesso', () => {
        // Acessa a página destino
        cy.visit("https://www.saucedemo.com/")

        // Insere o username e password
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")

        // Realiza o Login
        cy.get('[data-test="login-button"]').click()
        cy.get('.title').should('contain', 'Products')

        // Exibe uma mensagem caso teste seja completado
        cy.log('Teste de login realizado com sucesso!');
    });
  });
  