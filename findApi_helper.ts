import Helper = require('@codeceptjs/helper');

class ListApi extends Helper {

  async getBackendApiList() {
    const { page } = this.helpers.Playwright;
    await page.goto('https://auth0.com/docs/quickstarts')
    await page.waitForSelector('//section[4]/div[last()]');
    const backendApi = await page.$eval('//section[4]/div[last()]', 
      navigateElement => {
        let name: any = []
        let url: any = []
        let atags = navigateElement.getElementsByTagName("a");
        const div = navigateElement.getElementsByClassName('title--YbhSH');
        for (let item of div) {
          name.push(item.innerText.split('\n'));
        }
            for (let item of atags) {
            url.push(item.href);
          }

        return Object.assign(name.map((n, i) => ({ [n]: url[i] })));
      })
    console.log('Backend/Api list :', JSON.stringify(backendApi));
    await page.waitForTimeout(5000);
}

async getNodeElement() {
  const { page } = this.helpers.Playwright;
  await page.goto('https://auth0.com/docs/quickstarts')
  await page.waitForSelector('//section[4]/div[last()]');
  const nodeApi = await page.$eval('//section[4]/div[last()]', 
    navigateElement => {
      let nameApi: any = []
      let urlApi: any = []
      let atags = navigateElement.getElementsByTagName("a");
      const div = navigateElement.getElementsByClassName('title--YbhSH');
      for (let item of div) {
        if(item.innerText === 'Node (Express) API') {
          nameApi.push(item.innerText.split('\n'));
        }
      }
          for (let item of atags) {
            if(item.href === 'https://auth0.com/docs/quickstart/backend/nodejs') {
              urlApi.push(item.href);
            }
        }
       
      return Object.assign(nameApi.map((n, i) => ({ [n]: urlApi[i] })));
    })
  console.log('nodeApi item :', JSON.stringify(nodeApi));
  await page.waitForTimeout(5000);
  }
  
}

module.exports = ListApi;
