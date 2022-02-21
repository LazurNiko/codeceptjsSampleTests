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
      require: "./findApi_helper.ts"
    }
  },
  include: {
    I: './steps_file.ts'
  },
  plugins: {
    testomatio: {
      enabled: true,
      require: '@testomatio/reporter/lib/adapter/codecept',
      apiKey: process.env.TESTOMATIO,
    }
  },
  bootstrap: null,
  mocha: {},
  name: 'oneList'
}