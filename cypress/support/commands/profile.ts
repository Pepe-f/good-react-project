export const updateProfile = (firstname: string, lastname: string) => {
  cy.getByTestId('EditableProfileCardHeader.EditButton').click();
  cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
  cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
  cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
  return cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: {
      Authorization: 'asasad',
    },
    body: {
      id: '4',
      first: 'Test',
      lastname: 'User',
      age: 19,
      currency: 'EUR',
      country: 'Russia',
      city: 'Moscow',
      username: 'testuser',
      avatar:
        'https://oir.mobi/uploads/posts/2021-03/1616741653_10-p-khaker-krasivo-12.jpg',
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname: string, lastname: string): Chainable<void>;

      resetProfile(profileId: string): Chainable<void>;
    }
  }
}
