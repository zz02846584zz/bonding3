
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'material', component: () => import('pages/Material.vue') },
      { path: 'courses', component: () => import('pages/Course.vue') },
      { path: 'discus', component: () => import('pages/Discus.vue') },
      { path: 'news', component: () => import('pages/News.vue') }
    ]
  },
  {
    path: '/material/:id',
    component: () => import('layouts/PageLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Material/Index.vue') }
    ]
  },
  {
    path: '/company/:id',
    component: () => import('layouts/PageLayout.vue'),
    redirect: '/company/:id/about',
    children: [
      { path: 'about', component: () => import('pages/Company/Index.vue') },
      { path: 'materials', component: () => import('pages/Company/Materials.vue') },
      { path: 'category', component: () => import('pages/Company/Category.vue') }
    ]
  },
  {
    path: '/course/:id',
    component: () => import('layouts/PageLayout.vue'),
    redirect: '/course/:id/about',
    children: [
      { path: 'about', component: () => import('pages/Course/About.vue') },
      { path: 'chapter', component: () => import('pages/Course/Chapter.vue') },
      { path: 'comment', component: () => import('pages/Course/Comment.vue') }
    ]
  },
  {
    path: '/courses-category/:id',
    component: () => import('layouts/PageLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Courses/Category.vue') }
    ]
  },
  {
    path: '/courses-order/:id',
    component: () => import('layouts/PageLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Courses/Order.vue') }
    ]
  },
  {
    path: '/discus/:id',
    component: () => import('layouts/PageLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Discus/Index.vue') }
    ]
  },
  {
    path: '/account',
    component: () => import('layouts/PageLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Account/Index.vue') },
      { path: 'mycourse', component: () => import('pages/Account/MyCourse.vue') },
      { path: 'mycollect', component: () => import('pages/Account/MyCollect.vue') },
      { path: 'profile', component: () => import('pages/Account/Profile.vue') },
      { path: 'setting', component: () => import('pages/Account/Setting.vue') }
    ]
  },
  {
    path: '*',
    component: () => import('pages/404.vue')
  }
]

export default routes
