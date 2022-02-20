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
            const newObject = [...name]
          return Object.assign(newObject.map((n, i) => ({ [n]: url[i] })));
        })
      console.log('Backend/Api list :', JSON.stringify(backendApi));
      await page.waitForTimeout(5000);
  }

}

module.exports = ListApi;
