let profileId: string;

describe('User go to profile page', () => {
  beforeEach(() => {
    cy.visit('');
    cy.login().then((data) => {
      profileId = data.id;
      cy.visit(`/profile/${data.id}`);
    });
  });

  afterEach(() => {
    cy.resetProfile(profileId);
  });

  it('Profile loaded success', () => {
    cy.getByTestId('ProfileCard.firstname').should('have.value', 'Test');
  });

  it('User edit profile', () => {
    const newName = 'new';
    const newLastname = 'lastname';
    cy.updateProfile(newName, newLastname);
    cy.getByTestId('ProfileCard.firstname').should('have.value', newName);
    cy.getByTestId('ProfileCard.lastname').should('have.value', newLastname);
  });

  it('User edit profile', () => {});
});
