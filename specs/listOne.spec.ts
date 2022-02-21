Feature('listOne');

Scenario('get Backend/Api list', ({ I }) => {
  I.getBackendApiList();

  I.getNodeElement();

  I.amOnPage('/')
  I.seeElement('form[role="search"]')
  I.fillField('[placeholder="Search for your technology..."]', 'node')
  I.see('Backend/API')
  I.seeElement('[href="https://auth0.com/docs/quickstart/backend/nodejs"]')
  within('[href="https://auth0.com/docs/quickstart/backend/nodejs"]', () => {
  I.see('Node (Express) API');
  })
});


