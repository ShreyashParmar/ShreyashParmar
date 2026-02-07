
export default {
  basePath: 'https://shreyashparmar.github.io/ShreyashParmar',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
