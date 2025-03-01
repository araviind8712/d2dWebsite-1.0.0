
export default {
  basePath: '/d2dWebsite-1.0.0',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
