describe("Vouch Hompage", () => {
  it("should display facilities", () => {
    cy.visit( "https://app-uat.vouchconcierge.com/vouch-hotel/homepage/page/home?vcuser_room_number=224");

    cy.wait(60000);

    cy.get(".homepage-facilities").click();

    cy.wait(60000);
    
    cy.get("#app > div > div:nth-child(1) > div:nth-child(1) > div > div:nth-child(1) > p").should("contain.text", "Facilities2");
  });
});
