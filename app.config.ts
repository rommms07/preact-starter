

global.APP_CONFIG = {
  title: 'breedFind | A Dog Breed Database',
  
  mode: 'ssr',

  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
  ],

  // --- Server options
  serverHost: '0.0.0.0',
  serverPort: parseInt(process.env.PORT) || 3000,
  secretPhrase: process.env.SECRET_PHRASE,

  // --- Middleware options
  helmetOptions: {
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  },

  cookieParserOptions: {

  },

  morganOptions: {

  },


  // --- Heroku options

  // --- Environmental options
  clientRuntimeConfig: {
    BASE_URL: 'http://localhost:3000',
  },

  serverRuntimeConfig: {

  },

}

global.serverRuntimeConfig = APP_CONFIG.serverRuntimeConfig

// pendingServerSideProps is a stack of all the pending `getServerSideProps` that was called
// from across the app.
// 
global.pendingServerSideProps = []

// pendingAsyncDataFetches is pretty much the same as pendingServerSideProps.. the only difference
// is that this stack is used by `useAsyncDataFetch` hook for data fetching, and it can also be omitted
// if the `useAsyncDataFetch` options contains `fetchOnServer: false`
//
global.pendingAsyncDataFetches = []
