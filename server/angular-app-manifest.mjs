
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://shreyashparmar.github.io/ShreyashParmar/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/ShreyashParmar"
  },
  {
    "renderMode": 2,
    "route": "/ShreyashParmar/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/ShreyashParmar/about"
  },
  {
    "renderMode": 2,
    "route": "/ShreyashParmar/services"
  },
  {
    "renderMode": 2,
    "route": "/ShreyashParmar/projects"
  },
  {
    "renderMode": 2,
    "route": "/ShreyashParmar/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 725, hash: '0c98e6bd1fa0f7732b1a758447a03ccec26108b09d6ea009ce441ab4e693e52c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1101, hash: '8f1d88b1647236d5fa18172c51cb54e2109dd17370eb48dbd26d9fdae3e90a38', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4007, hash: 'd317e0ea550b60a9297fe6a7de2713861659e96d608ff3849d7ae9ff58cc7871', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 4009, hash: 'e1c66cb725de4382c93ac4d2d24f1294802bb4ccd90096ce9b181f56ccd845b3', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 4806, hash: 'a0327a221c9aa43b975ac616d8de93dd0bc3eb4078fc35ab44fdc2822fdac106', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 4585, hash: '26167026465dc704f7455a085217962a6bd843cb514b29f29e4597d7c1085f72', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 6241, hash: '482450df72cc8772eca60883e864c0cdc0fa72cd5b403b7b29da8a94ecef17ef', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 5323, hash: 'd73e035d3a1782b489602a0840bcfcb0bc478918f5b7b24aad8c4d1f32df4f2c', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-KD7CUS6N.css': {size: 12, hash: 'ObySRep2SI4', text: () => import('./assets-chunks/styles-KD7CUS6N_css.mjs').then(m => m.default)}
  },
};
