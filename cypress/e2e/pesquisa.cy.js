describe('Realizando um teste na página da Avanade', () => {
    it('Pesquisa um termo no página da Avanade', () => {
        // Acessa a página da Avanade
        cy.visit('https://www.avanade.com/pt-br');
  
        // Digita "Tecnologia" no campo de pesquisa e faz a busca
        cy.get('i.icon--search').click() 
        cy.get('atomic-search-box').shadow().find('input').type('tecnologia{enter}');
  
        // A partir da Url verifica se a pesquisa foi realizada
        cy.url().should('include', 'search');
        cy.log('Pesquisa realizada com sucesso!');

    });
  });
  