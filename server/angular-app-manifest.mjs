
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
    'index.csr.html': {size: 25040, hash: '4a7a2b29f60e66d56d44698b863772059f5f2c759039ea1f34a6b83c9aa35b64', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 18005, hash: 'c923427d8d45a9a2b556ab2de5298e1bc2015f7b9c6405a8286772e436b431e5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 62700, hash: 'd18d14b79249c0e1d7411d4b70d3ad7e2d880ee93e83ee948e93bc3163cff326', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'resource/index.html': {size: 56746, hash: '2db9c558ad61eebc43689447edde3e44696d164b5c55fe303ccc541bb80a8d56', text: () => import('./assets-chunks/resource_index_html.mjs').then(m => m.default)},
    'aboutus/index.html': {size: 50452, hash: '5dcdc83508a00e4bd5601a5517b5ab48955e91767aec325885bcadbd5dd6839a', text: () => import('./assets-chunks/aboutus_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 55598, hash: '7deacde0d21100afa162fc50753e23ad3d558fb9069694f7ab42fe62f3e4b2f8', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'resources/index.html': {size: 54309, hash: 'b83d2273647c028b968faf739626d799d971752fc8a789c74317168f4d6f0ce9', text: () => import('./assets-chunks/resources_index_html.mjs').then(m => m.default)},
    'styles-DRFZPVY6.css': {size: 10025, hash: 'sk/p2Fdhclc', text: () => import('./assets-chunks/styles-DRFZPVY6_css.mjs').then(m => m.default)}
  },
};
