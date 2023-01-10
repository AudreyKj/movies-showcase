describe('item details page features image, info, and cta wishlist button', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-testid="carousel-element-western"]')
      .should('be.visible')
      .each(($el) => {
        cy.wrap($el)
          .find('[data-testid="carousel-item-button"]')
          .eq(3)
          .click({ force: true });
      });
  });
  it('detail page includes button, image, description', () => {
    cy.get('button').contains('Add to Wishlist').should('exist');
    cy.get('img').should('exist');
    cy.get('p').should('exist');
  });

  it('on click, the button triggers an Add to Wishlist action', () => {
    cy.get('button').contains('Add to Wishlist').click();

    cy.get('button').contains('Added to Wishlist!').should('exist');
    cy.get('button').contains('Add to Wishlist').should('not.exist');

    cy.get('button').contains('my wishlist').click();
    cy.wait(1000);

    cy.get('[data-testid="wishlist-section"]').each(($el) => {
      cy.wrap($el)
        .find('img')
        .should('have.length', 1);
    });
  });
});