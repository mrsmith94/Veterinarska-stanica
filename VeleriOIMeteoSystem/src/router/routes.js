const routes = [
  {
    path: '/Login',
    component: () => import('layouts/LoginPageLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login/LoginIndex.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/Administration',
    component: () => import('layouts/VeleriOIMeteoSystemLayout.vue'),
    meta: { auth: true },
    children: [
      { path: '/Sensors', meta: { auth: true }, component: () => import('pages/SensorsIndex.vue') },
      { path: '/MeteoStations', meta: { auth: true }, component: () => import('pages/MeteoStationsIndex.vue') }
    ]
  }
]
// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}
export default routes
