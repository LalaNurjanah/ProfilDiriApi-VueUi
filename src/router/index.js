import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/abouts/Home.vue'
import Createabouts from '../views/abouts/Createabouts.vue'
import Editabouts from '../views/abouts/Editabouts.vue'
import Detailabouts from '../views/abouts/Detailabouts.vue'
import Historys from '../views/historys/Index.vue'
import Createhistorys from '../views/historys/Createhistorys.vue'
import Edithistorys from '../views/historys/Edithistorys.vue'
import Detailhistorys from '../views/historys/Detailhistorys.vue'
import Pengalaman from '../views/pengalaman/Index.vue'
import Createpengalaman from '../views/pengalaman/Createpengalaman.vue'
import Editpengalaman from '../views/pengalaman/Editpengalaman.vue'
import Detailpengalaman from '../views/pengalaman/Detailpengalaman.vue'
import Hubungi from '../views/hubungi/Index.vue'
import Createhubungi from '../views/hubungi/Createhubungi.vue'
import Edithubungi from '../views/hubungi/Edithubungi.vue'
import Detailhubungi from '../views/hubungi/Detailhubungi.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/createabouts',
    name: 'Createabouts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createabouts
  },
  {
    path: '/editabouts/:id',
    name: 'Editabouts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editabouts
  },
  {
    path: '/detailabouts/:id',
    name: 'Detailabouts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Detailabouts
  },
  {
    path: '/historys',
    name: 'historys.index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Historys
  },
  {
    path: '/createhistorys',
    name: 'Createhistorys',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createhistorys
  },
  {
    path: '/edithistorys/:id',
    name: 'Edithistorys',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Edithistorys
  },
  {
    path: '/detailhistorys/:id',
    name: 'Detailhistorys',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Detailhistorys
  },
  {
    path: '/pengalaman',
    name: 'pengalaman.index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Pengalaman
  },
  {
    path: '/createpengalaman',
    name: 'Createpengalaman',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createpengalaman
  },
  {
    path: '/editpengalaman/:id',
    name: 'Editpengalaman',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editpengalaman
  },
  {
    path: '/detailpengalaman/:id',
    name: 'Detailpengalaman',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Detailpengalaman
  },
  {
    path: '/hubungi',
    name: 'hubungi.index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Hubungi
  },
  {
    path: '/createhubungi',
    name: 'Createhubungi',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createhubungi
  },
  {
    path: '/edithubungi/:id',
    name: 'Edithubungi',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Edithubungi
  },
  {
    path: '/detailhubungi/:id',
    name: 'Detailhubungi',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Detailhubungi
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
