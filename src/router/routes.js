
const routes = [
  {
    path: '/',
<<<<<<< HEAD
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
=======
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'material', component: () => import('pages/Material.vue') },
      { path: 'courses', component: () => import('pages/Course.vue') },
      { path: 'discus', component: () => import('pages/Discus.vue') },
      { path: 'news', component: () => import('pages/News.vue') }
>>>>>>> 99b48ee8b94c2800e2e471702a062a49b4d62493
    ]
  },
  {
    path: '/material/:id',
<<<<<<< HEAD
    component: () => import('layouts/ItemLayout.vue'),
    children: [
      { path: '', name: '材料', component: () => import('pages/Material/Index.vue') }
=======
    component: () => import('layouts/PageLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Material/Index.vue') }
>>>>>>> 99b48ee8b94c2800e2e471702a062a49b4d62493
    ]
  },
  {
    path: '/company/:id',
<<<<<<< HEAD
    name: '公司資訊',
    component: () => import('layouts/CompanyLayout.vue'),
    redirect: '/company/:id/about',
    children: [
      { path: 'about', component: () => import('pages/Company/About.vue') },
      { path: 'material', component: () => import('pages/Company/Materials.vue') },
=======
    component: () => import('layouts/PageLayout.vue'),
    redirect: '/company/:id/about',
    children: [
      { path: 'about', component: () => import('pages/Company/Index.vue') },
      { path: 'materials', component: () => import('pages/Company/Materials.vue') },
>>>>>>> 99b48ee8b94c2800e2e471702a062a49b4d62493
      { path: 'category', component: () => import('pages/Company/Category.vue') }
    ]
  },
  {
    path: '/course/:id',
<<<<<<< HEAD
    name: '課程',
    component: () => import('layouts/CourseLayout.vue'),
=======
    component: () => import('layouts/PageLayout.vue'),
>>>>>>> 99b48ee8b94c2800e2e471702a062a49b4d62493
    redirect: '/course/:id/about',
    children: [
      { path: 'about', component: () => import('pages/Course/About.vue') },
      { path: 'chapter', component: () => import('pages/Course/Chapter.vue') },
<<<<<<< HEAD
      { path: 'qa', component: () => import('pages/Course/QA.vue') },
=======
>>>>>>> 99b48ee8b94c2800e2e471702a062a49b4d62493
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
<<<<<<< HEAD
    name: '討論',
    component: () => import('layouts/ItemLayout.vue'),
=======
    component: () => import('layouts/PageLayout.vue'),
>>>>>>> 99b48ee8b94c2800e2e471702a062a49b4d62493
    children: [
      { path: '', component: () => import('pages/Discus/Index.vue') }
    ]
  },
  {
<<<<<<< HEAD
    path: '/new/:id',
    name: '新聞',
    component: () => import('layouts/ItemLayout.vue'),
    children: [
      { path: '', component: () => import('pages/New/Index.vue') }
    ]
  },
  {
=======
>>>>>>> 99b48ee8b94c2800e2e471702a062a49b4d62493
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
<<<<<<< HEAD
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
=======
>>>>>>> 99b48ee8b94c2800e2e471702a062a49b4d62493
    path: '*',
    component: () => import('pages/404.vue')
  }
]

export default routes
