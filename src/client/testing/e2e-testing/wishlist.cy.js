const firstItemTitleWestern = 'Paws of Fury: The Legend of Hank';

describe('wishlist displays items added or a text if empty', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('empty wishlist features empty indication message', () => {
    cy.get('button').contains('my wishlist').click();
    cy.wait(2000);
    cy.get('[data-testid="wishlist-section"]').find('p').should('have.text', 'There are no items on your wishlist.Check out our collection and start adding to your wishlist now!');
  });

  it('wishlist displays list of added items', () => {
    cy.get('[data-testid="carousel-element-western"]')
      .should('be.visible')
      .each(($el) => {
        cy.wrap($el)
          .find('[data-testid="carousel-item-button"]')
          .first()
          .click({ force: true });
      });

    cy.get('button').contains('Add to Wishlist').click();

    cy.wait(2000);
    cy.get('button').contains('my wishlist').click();
    cy.wait(2000);

    cy.get('[data-testid="wishlist-section"]').find('h2').should('have.text', firstItemTitleWestern);
  });
});
