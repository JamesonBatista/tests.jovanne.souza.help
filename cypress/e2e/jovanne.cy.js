describe("Help amigo", () => {
  before(() => {
    cy.visit(
      "https://auth.mhmo.com.br/login?client_id=2fhmt0oa5bt4mde83aqo8ifjlv&nonce=b354b91a3eda4018b074ac53b469d3c2&redirect_uri=https%3A%2F%2Fmhmo.com.br%2Fauth%2Fcallback&response_type=token&scope=profile%20email%20openid%20aws.cognito.signin.user.admin%20webpremios.campaigns%2F70750&state=8902b72c6d964f4a838787751ccf2692"
    );
  });
  it("Login", () => {
    cy.contains("Que bom ter você por aqui!");

    cy.get('[name="username"]').eq(1).type("487312110-89");
    cy.get('[name="password"]').clear().type("Premmiar@123");
    cy.contains("Entrar").click();
    cy.contains("Filtre por pontos");

    cy.contains("a", "Eletrônicos").click();
    cy.contains("h2", "Eletrônicos");

    cy.get('[class="ant-image vert-image-root  w-100"]').eq(0).click();

    cy.contains("Sobre o produto");

    cy.contains("Adicionar ao carrinho").click();

    cy.contains("Produto adicionado ao carrinho!");
    cy.get('[class="header-checkout-icon"]').click();

    cy.get('[data-icon="delete"').click();

    cy.contains("Seu carrinho está vazio!");

    cy.get(
      '[class="ant-drawer-close"'
    ).click();

    cy.get('[class="header-menu-icon"').click();

    cy.contains("Olá, User");

    cy.contains("a", "Sair").click();
    cy.contains("Que bom ter você por aqui!");
  });
});
