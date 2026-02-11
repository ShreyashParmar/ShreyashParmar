
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/services"
  },
  {
    "renderMode": 2,
    "route": "/projects"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 678, hash: 'bd7fbb8d812a4790df71a1d4e60f78ea81f55aa43dc1418b152536f6e4d5ae5f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1054, hash: '1c76c2c16003476dc745e0d9c12a72088d50cdfd9ccbf89e3774a126ceb5a3ff', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 3962, hash: '1a37cafc95c9e0bb3461698bcf64e2739250af4629c8a23a839d21c89ef9e364', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 4759, hash: '1765e398c1fcad020cecf180588b28f26a7cfa6d0f7da4786af54a5560f3094f', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'index.html': {size: 3960, hash: 'be641e80cca817f9fe06955f5aeda54c845e7a2624a9f495ddc09d29ab7efa71', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 4538, hash: 'fabafda995f3256d1a2662dfd121d17b62a53cdbfdecb8d5056376902c3bd318', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 5360, hash: 'ba638e119ea89e2ecb1ed2ce9798285227dcd9965af4ce255381953dc6245fbf', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 6343, hash: '49b35e53b0d4ee6f80ba4e022d69b0429a222bc7863ee803d680eae6d8a8cab9', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-KD7CUS6N.css': {size: 12, hash: 'ObySRep2SI4', text: () => import('./assets-chunks/styles-KD7CUS6N_css.mjs').then(m => m.default)}
  },
};
