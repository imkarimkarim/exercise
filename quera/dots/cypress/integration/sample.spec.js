describe('Dots & Boxes Tests :', () => {

    it("click on a horizontal box - Player red's turn", () => {
        // Load the page
        cy.visit("index.html")

        // specify class name
        let redPlayer = 'rgb(250, 128, 114)';
        let bluePlayer = 'rgb(135, 206, 235)';

        cy.get('.horizontal_line').eq(0).click().should('have.css', 'background-color', bluePlayer);
        cy.get('.horizontal_line').eq(1).click().should('have.css', 'background-color', redPlayer);

    });

    it('click on a same horizontal box twice', () => {
        // Load the page
        cy.visit("index.html")

        // specify class name
        let redPlayer = 'rgb(250, 128, 114)';
        let bluePlayer = 'rgb(135, 206, 235)';


        // check for game status text to be expected text at early game
        cy.get('.game_status').should('contain', 'Player blue\'s turn');

        cy.get('.horizontal_line').eq(0).click().should('have.css', 'background-color', bluePlayer);

        // check for game status text to be expected text at early game
        cy.get('.game_status').should('contain', 'Player red\'s turn');

        cy.get('.horizontal_line').eq(0).click().should('have.css', 'background-color', bluePlayer);

        // check for game status text to be expected text at early game
        cy.get('.game_status').should('contain', 'Player red\'s turn');

    });
});