require('ts-node/register');

exports.config = {
  tests: './specs/*.spec.ts',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://auth0.com/docs/quickstarts',
      show: true,
      browser: 'chromium'
    },
    listApi: {
      require: "./listapi_helper.ts"
    }
  },
  include: {
    I: './steps_file.ts'
  },
  bootstrap: null,
  mocha: {},
  name: 'oneList'
}