
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
    'index.csr.html': {size: 25032, hash: '14464436aec247e65a3e4deb23fb3e6524f763895729757d440d9eddd6ded5ae', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17999, hash: '03b604c00bf6dceb7d72121013079a9aef1eb7696a16b60a9e715746c636eb23', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 46172, hash: '34e4ffdec4bc9f893ee39bdbdddd915eed3d620be4411a247a5225230dff9cc5', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'resource/index.html': {size: 46172, hash: '34e4ffdec4bc9f893ee39bdbdddd915eed3d620be4411a247a5225230dff9cc5', text: () => import('./assets-chunks/resource_index_html.mjs').then(m => m.default)},
    'aboutus/index.html': {size: 46172, hash: '34e4ffdec4bc9f893ee39bdbdddd915eed3d620be4411a247a5225230dff9cc5', text: () => import('./assets-chunks/aboutus_index_html.mjs').then(m => m.default)},
    'resources/index.html': {size: 46172, hash: '34e4ffdec4bc9f893ee39bdbdddd915eed3d620be4411a247a5225230dff9cc5', text: () => import('./assets-chunks/resources_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 46172, hash: '34e4ffdec4bc9f893ee39bdbdddd915eed3d620be4411a247a5225230dff9cc5', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'styles-DRFZPVY6.css': {size: 10025, hash: 'sk/p2Fdhclc', text: () => import('./assets-chunks/styles-DRFZPVY6_css.mjs').then(m => m.default)}
  },
};
