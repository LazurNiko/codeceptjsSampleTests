import Helper = require('@codeceptjs/helper');

class GetHeaderList extends Helper {
 
// async getHeaderList() {
//   const { page } = this.helpers.Playwright;
  
//     page.goto('https://auth0.com/docs/quickstarts');
//     await page.waitForSelector('//*[@id="app"]/div[1]/header/div/div[2]/div');
//     const backendApi = await page.$eval('//*[@id="app"]/div[1]/header/div/div[2]/div', 
//       navigateElement => {
//       let clientsObj: any = {};
//         const href = navigateElement.waitForSelector('href');
//         const a = navigateElement.getElementsByTagName('a');
//       for (let item of a) {
//         clientsObj[item.innerText]=href
//       }
//       console.log(backendApi);
//     })
      
//     }

    async getHeaderList() {
      const { page } = this.helpers.Playwright;
      await page.goto('https://auth0.com/docs/quickstarts')
      await page.waitForSelector('//*[@id="app"]/div[1]/header/div/div[2]/div');
      const headerList = await page.$eval('//*[@id="app"]/div[1]/header/div/div[2]/div', 
        navigateElement => {
          let name: any = []
          let url: any = []
        const a = navigateElement.getElementsByTagName('a');
          for (let item of a) {
            name.push(item.innerText.split('\n'));
          }
              for (let item of a) {
              url.push(item.href);
            }
  
          return Object.assign(name.map((n, i) => ({ [n]: url[i] })));
        })
      console.log('Header list :', JSON.stringify(headerList));
      await page.waitForTimeout(5000);
  }
  

}

module.exports = GetHeaderList;
