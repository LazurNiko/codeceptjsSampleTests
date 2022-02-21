Feature('listOne');

Scenario('get Backend/Api list', ({ I }) => {
  I.getBackendApiList();

  I.getNodeElement();

  I.amOnPage('/')
  I.seeElement('//section[4]/div[last()]')
  within('//section[4]/div[last()]', () => {
  I.see('Node (Express) API');
  })
});


