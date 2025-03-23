describe('Pesquisa no Wikipedia e verificação de termo', () => {
    it('Pesquisa por QA e verifica a página de resultados', () => {
        // Acessa a página da Wikipedia
        cy.visit('https://www.wikipedia.org/');

        // Digita "QA" no campo de pesquisa e faz a busca
        cy.get('input#searchInput').type('QA{enter}');

        // Redireciona para a página en.wikipedia.org
        cy.origin('https://en.wikipedia.org', () => {
            // Carrega a página e verifica a URL
            cy.url().should('include', '/wiki/QA');

        // Verifica se foi exibido conteúdo para a pesquisa
        cy.contains('QA').should('be.visible');
        cy.log('Conteúdo encontrado com sucesso!');

        });
    });
});
