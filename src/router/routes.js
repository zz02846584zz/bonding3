
const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('pages/Login.vue')
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'home', name: 'Home', component: () => import('pages/Home.vue') },
      { path: 'material', name: 'Material', component: () => import('pages/Material.vue') },
      { path: 'courses', name: 'Courses', component: () => import('pages/Course.vue') },
      { path: 'discus', name: 'Discus', component: () => import('pages/Discus.vue') },
      { path: 'news', name: 'News', component: () => import('pages/News.vue') }
    ]
  },
  {
    path: '/material/:id',
    component: () => import('layouts/ItemLayout.vue'),
    children: [
      { path: '', name: '材料', component: () => import('pages/Material/Index.vue') }
    ]
  },
  {
    path: '/company/:id',
    name: '公司資訊',
    component: () => import('layouts/CompanyLayout.vue'),
    redirect: '/company/:id/about',
    children: [
      { path: 'about', component: () => import('pages/Company/About.vue') },
      { path: 'material', component: () => import('pages/Company/Materials.vue') },
      { path: 'category', component: () => import('pages/Company/Category.vue') }
    ]
  },
  {
    path: '/course/:id',
    name: '課程',
    component: () => import('layouts/CourseLayout.vue'),
    redirect: '/course/:id/about',
    children: [
      { path: 'about', component: () => import('pages/Course/About.vue') },
      { path: 'chapter', component: () => import('pages/Course/Chapter.vue') },
      { path: 'qa', component: () => import('pages/Course/QA.vue') },
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
    name: '討論',
    component: () => import('layouts/ItemLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Discus/Index.vue') }
    ]
  },
  {
    path: '/new/:id',
    name: '新聞',
    component: () => import('layouts/ItemLayout.vue'),
    children: [
      { path: '', component: () => import('pages/New/Index.vue') }
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
    path: '/search',
    component: () => import('layouts/SearchLayout'),
    children: [
      { path: '', name: '搜尋', component: () => import('pages/Search.vue') }
    ]
  },
  {
    path: '/notice',
    component: () => import('layouts/PageLayout.vue'),
    children: [
      { path: '', name: '通知', component: () => import('pages/Notice.vue') }
    ]
  },
  {
    path: '*',
    component: () => import('pages/404.vue')
  }
]

export default routes
