
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/d2dWebsite-1.0.0/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/d2dWebsite-1.0.0/services"
  },
  {
    "renderMode": 2,
    "route": "/d2dWebsite-1.0.0/home"
  },
  {
    "renderMode": 2,
    "route": "/d2dWebsite-1.0.0/resources"
  },
  {
    "renderMode": 2,
    "route": "/d2dWebsite-1.0.0/resource"
  },
  {
    "renderMode": 2,
    "route": "/d2dWebsite-1.0.0/aboutus"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 25032, hash: '8d0e24cf8a83860a5b26b92e9e803fa75f5f11577aed5680aa2719feef61bbfd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17999, hash: '25943029578b582075c2663f18bc70e584c3c8cfb84267fd4b4bfba985716576', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 62692, hash: '3564cfa001360d9e7db72a4bdf98366267ad89e8eb1ace993e1a1d22cfba9ce5', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 55590, hash: '8f29501bd281ecabb7b6b329e7e43b7505be9789c68ac24a7158db9c916d16c7', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'resources/index.html': {size: 54303, hash: 'dff331ec72e4190b30c1160a9d7593419ca5d8cf846213959b5614a178b84491', text: () => import('./assets-chunks/resources_index_html.mjs').then(m => m.default)},
    'aboutus/index.html': {size: 50444, hash: 'caad8a5448e754ba9422bfd701ff08796b34ebc36a8df9af59705b60b16fb9b8', text: () => import('./assets-chunks/aboutus_index_html.mjs').then(m => m.default)},
    'resource/index.html': {size: 56738, hash: '87f71c19421997520a8b6f9fd10b90df555d8d076967b18cbc74d3c33dc3c98f', text: () => import('./assets-chunks/resource_index_html.mjs').then(m => m.default)},
    'styles-DRFZPVY6.css': {size: 10025, hash: 'sk/p2Fdhclc', text: () => import('./assets-chunks/styles-DRFZPVY6_css.mjs').then(m => m.default)}
  },
};
