describe('Shows Appeteasers', () => {
  it('Connect to Dev Server', () => {
    cy.visit('https://hangryhippo.quantic.host/');
  });
  it('selects Handhelds', () => {
    cy.contains('Handhelds').click();
    cy.contains('Cheese Burger');
    cy.contains('Fajita Tacos');
  });
  it('selects Appeteasers', () => {
    //TODO: Add a test to check Appeteasers
  });
});
