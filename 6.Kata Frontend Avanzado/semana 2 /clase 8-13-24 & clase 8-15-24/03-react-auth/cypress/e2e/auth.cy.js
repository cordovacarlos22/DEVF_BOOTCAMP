describe('app is loaded', () => {

  it('should load the application', () => {

    cy.visit('/');
    cy.get('h1').contains('Home')
  });


});

describe('Tests de Login', () => {

  it('Cargar Home en la ruta /', () => {

    // Arrange: Configurar el estado de mi aplicación.
    // Act: Ejecutar las acciones.
    cy.visit('/'); // visit() en este caso configura el estado y además realiza la acción ya que estoy revisando que se carge la pantalla.

    // Assert: Verificar los resultados.
    cy.get('h1').contains('Home');

  });

  it('Iniciar sesión como CUSTOMER', () => {

    // Intercep -> Esperar a que una acción se realice.
    cy.intercept('POST', 'https://ecommerce-json-jwt.onrender.com/login').as('loginRequest');


    // Arrange
    cy.visit('/login');

    // Act
    cy.login('drstrange@marvel.com','multiverso');
    // cy.get('input[type="email"]').type('drstrange@marvel.com');
    // cy.get('input[type="password"]').type('multiverso');
    // cy.get('button').click();

    cy.wait('@loginRequest'); // Esperar a que la petición se realice.

    // Assert
    cy.get('h1').contains('Dashboard');
    // cy.get('input[type="email"]').type('drstrange@marvel.com');
    // cy.get('input[type="password"]').type('multiverso');
    // cy.get('button').click();

    cy.wait('@loginRequest'); // Esperar a que la petición se realice.

    // Assert
    cy.get('h1').contains('Dashboard');

  });

  it('Iniciar sesión como ADMIN', () => {

    // Intercep -> Esperar a que una acción se realice.
    cy.intercept('POST', 'https://ecommerce-json-jwt.onrender.com/login').as('loginRequest');


    // Arrange
    cy.visit('/login');

    // Act
    cy.login('superman@dc.com','superman');
    // cy.get('input[type="email"]').type('superman@dc.com');
    // cy.get('input[type="password"]').type('superman');
    // cy.get('button').click();

    cy.wait('@loginRequest'); // Esperar a que la petición se realice.

    // Assert
    cy.get('h1').contains('Dashboard');

  });

})