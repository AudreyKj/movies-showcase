describe('homepage displays 3 carousels with interactive images', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays 3 carousels of items', () => {
    const carouselLists = cy.get('[data-testid="carousel-list"]');
    cy.wait(3000);

    carouselLists.should('have.length', 3);
  });

  it('on click, each carousel item navigates to category-specific detail page', () => {
    // western category
    cy.get('[data-testid="carousel-element-western"]')
      .should('be.visible')
      .each(($el) => {
        cy.wrap($el)
          .find('[data-testid="carousel-item-button"]')
          .first()
          .click({ force: true });
      });

    cy.wait(3000);
    cy.get('[data-testid="item-details-page"]').should('have.class', 'item-details_western');
    expect(/western/i).to.exist;

    cy.visit('/');
    cy.wait(3000);

    // music category
    cy.get('[data-testid="carousel-element-music"]')
      .should('be.visible')
      .each(($el) => {
        cy.wrap($el)
          .find('[data-testid="carousel-item-button"]')
          .first()
          .click({ force: true });
      });

    cy.wait(3000);
    cy.get('[data-testid="item-details-page"]').should('have.class', 'item-details_music');
    expect(/music/i).to.exist;

    cy.visit('/');
    cy.wait(3000);

    // comedy category
    cy.get('[data-testid="carousel-element-comedy"]')
      .should('be.visible')
      .each(($el) => {
        cy.wrap($el)
          .find('[data-testid="carousel-item-button"]')
          .first()
          .click({ force: true });
      });

    cy.wait(3000);
    cy.get('[data-testid="item-details-page"]').should('have.class', 'item-details_comedy');
    expect(/comedy/i).to.exist;
  });
});
