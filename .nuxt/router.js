import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5f13cc1f = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _78c0c182 = () => interopDefault(import('..\\pages\\abstract\\index.vue' /* webpackChunkName: "pages/abstract/index" */))
const _389826a0 = () => interopDefault(import('..\\pages\\abstract-guidelines.vue' /* webpackChunkName: "pages/abstract-guidelines" */))
const _8ad46e14 = () => interopDefault(import('..\\pages\\faculty.vue' /* webpackChunkName: "pages/faculty" */))
const _487349fb = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _f0202332 = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "pages/profile/index" */))
const _6bd470ea = () => interopDefault(import('..\\pages\\registration\\index.vue' /* webpackChunkName: "pages/registration/index" */))
const _5d2da53e = () => interopDefault(import('..\\pages\\scientific-program.vue' /* webpackChunkName: "pages/scientific-program" */))
const _74095c45 = () => interopDefault(import('..\\pages\\splash.vue' /* webpackChunkName: "pages/splash" */))
const _50e11918 = () => interopDefault(import('..\\pages\\type.vue' /* webpackChunkName: "pages/type" */))
const _6be06ee1 = () => interopDefault(import('..\\pages\\virtual-convention-center\\index.vue' /* webpackChunkName: "pages/virtual-convention-center/index" */))
const _4f11726c = () => interopDefault(import('..\\pages\\abstract\\thank-you.vue' /* webpackChunkName: "pages/abstract/thank-you" */))
const _a041b9b8 = () => interopDefault(import('..\\pages\\profile\\attendance.vue' /* webpackChunkName: "pages/profile/attendance" */))
const _dad28de2 = () => interopDefault(import('..\\pages\\profile\\virtual-passport.vue' /* webpackChunkName: "pages/profile/virtual-passport" */))
const _0ddbe5c1 = () => interopDefault(import('..\\pages\\registration\\error.vue' /* webpackChunkName: "pages/registration/error" */))
const _42f24bf5 = () => interopDefault(import('..\\pages\\registration\\thank-you.vue' /* webpackChunkName: "pages/registration/thank-you" */))
const _7a952714 = () => interopDefault(import('..\\pages\\virtual-convention-center\\exhibit-hall\\index.vue' /* webpackChunkName: "pages/virtual-convention-center/exhibit-hall/index" */))
const _5122c89b = () => interopDefault(import('..\\pages\\virtual-convention-center\\facade.vue' /* webpackChunkName: "pages/virtual-convention-center/facade" */))
const _00bece06 = () => interopDefault(import('..\\pages\\virtual-convention-center\\lobby\\index.vue' /* webpackChunkName: "pages/virtual-convention-center/lobby/index" */))
const _114a97ba = () => interopDefault(import('..\\pages\\virtual-convention-center\\exhibit-hall\\bronze\\index.vue' /* webpackChunkName: "pages/virtual-convention-center/exhibit-hall/bronze/index" */))
const _0217e7b4 = () => interopDefault(import('..\\pages\\virtual-convention-center\\exhibit-hall\\gold\\index.vue' /* webpackChunkName: "pages/virtual-convention-center/exhibit-hall/gold/index" */))
const _3f302968 = () => interopDefault(import('..\\pages\\virtual-convention-center\\exhibit-hall\\platinum\\index.vue' /* webpackChunkName: "pages/virtual-convention-center/exhibit-hall/platinum/index" */))
const _53137467 = () => interopDefault(import('..\\pages\\virtual-convention-center\\exhibit-hall\\silver\\index.vue' /* webpackChunkName: "pages/virtual-convention-center/exhibit-hall/silver/index" */))
const _939d6d9a = () => interopDefault(import('..\\pages\\virtual-convention-center\\lobby\\industry-lectures\\index.vue' /* webpackChunkName: "pages/virtual-convention-center/lobby/industry-lectures/index" */))
const _9bc050e4 = () => interopDefault(import('..\\pages\\virtual-convention-center\\lobby\\plenary.vue' /* webpackChunkName: "pages/virtual-convention-center/lobby/plenary" */))
const _6ba641d6 = () => interopDefault(import('..\\pages\\virtual-convention-center\\lobby\\research-hall.vue' /* webpackChunkName: "pages/virtual-convention-center/lobby/research-hall" */))
const _640eb6ac = () => interopDefault(import('..\\pages\\virtual-convention-center\\lobby\\symposia.vue' /* webpackChunkName: "pages/virtual-convention-center/lobby/symposia" */))
const _93633d12 = () => interopDefault(import('..\\pages\\virtual-convention-center\\lobby\\workshops.vue' /* webpackChunkName: "pages/virtual-convention-center/lobby/workshops" */))
const _1473b693 = () => interopDefault(import('..\\pages\\virtual-convention-center\\lobby\\industry-lectures\\gold\\index.vue' /* webpackChunkName: "pages/virtual-convention-center/lobby/industry-lectures/gold/index" */))
const _0f3b70c7 = () => interopDefault(import('..\\pages\\virtual-convention-center\\lobby\\industry-lectures\\platinum\\index.vue' /* webpackChunkName: "pages/virtual-convention-center/lobby/industry-lectures/platinum/index" */))
const _2be00ae7 = () => interopDefault(import('..\\pages\\virtual-convention-center\\lobby\\industry-lectures\\sponsor\\index.vue' /* webpackChunkName: "pages/virtual-convention-center/lobby/industry-lectures/sponsor/index" */))
const _12bd154b = () => interopDefault(import('..\\pages\\virtual-convention-center\\lobby\\industry-lectures\\gold\\_slug.vue' /* webpackChunkName: "pages/virtual-convention-center/lobby/industry-lectures/gold/_slug" */))
const _0d84cf7f = () => interopDefault(import('..\\pages\\virtual-convention-center\\lobby\\industry-lectures\\platinum\\_slug.vue' /* webpackChunkName: "pages/virtual-convention-center/lobby/industry-lectures/platinum/_slug" */))
const _2a29699f = () => interopDefault(import('..\\pages\\virtual-convention-center\\lobby\\industry-lectures\\sponsor\\_slug.vue' /* webpackChunkName: "pages/virtual-convention-center/lobby/industry-lectures/sponsor/_slug" */))
const _0f93f672 = () => interopDefault(import('..\\pages\\virtual-convention-center\\exhibit-hall\\bronze\\_slug.vue' /* webpackChunkName: "pages/virtual-convention-center/exhibit-hall/bronze/_slug" */))
const _0061466c = () => interopDefault(import('..\\pages\\virtual-convention-center\\exhibit-hall\\gold\\_slug.vue' /* webpackChunkName: "pages/virtual-convention-center/exhibit-hall/gold/_slug" */))
const _3d798820 = () => interopDefault(import('..\\pages\\virtual-convention-center\\exhibit-hall\\platinum\\_slug.vue' /* webpackChunkName: "pages/virtual-convention-center/exhibit-hall/platinum/_slug" */))
const _515cd31f = () => interopDefault(import('..\\pages\\virtual-convention-center\\exhibit-hall\\silver\\_slug.vue' /* webpackChunkName: "pages/virtual-convention-center/exhibit-hall/silver/_slug" */))
const _7ecba6e4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _5f13cc1f,
    name: "about"
  }, {
    path: "/abstract",
    component: _78c0c182,
    name: "abstract"
  }, {
    path: "/abstract-guidelines",
    component: _389826a0,
    name: "abstract-guidelines"
  }, {
    path: "/faculty",
    component: _8ad46e14,
    name: "faculty"
  }, {
    path: "/login",
    component: _487349fb,
    name: "login"
  }, {
    path: "/profile",
    component: _f0202332,
    name: "profile"
  }, {
    path: "/registration",
    component: _6bd470ea,
    name: "registration"
  }, {
    path: "/scientific-program",
    component: _5d2da53e,
    name: "scientific-program"
  }, {
    path: "/splash",
    component: _74095c45,
    name: "splash"
  }, {
    path: "/type",
    component: _50e11918,
    name: "type"
  }, {
    path: "/virtual-convention-center",
    component: _6be06ee1,
    name: "virtual-convention-center"
  }, {
    path: "/abstract/thank-you",
    component: _4f11726c,
    name: "abstract-thank-you"
  }, {
    path: "/profile/attendance",
    component: _a041b9b8,
    name: "profile-attendance"
  }, {
    path: "/profile/virtual-passport",
    component: _dad28de2,
    name: "profile-virtual-passport"
  }, {
    path: "/registration/error",
    component: _0ddbe5c1,
    name: "registration-error"
  }, {
    path: "/registration/thank-you",
    component: _42f24bf5,
    name: "registration-thank-you"
  }, {
    path: "/virtual-convention-center/exhibit-hall",
    component: _7a952714,
    name: "virtual-convention-center-exhibit-hall"
  }, {
    path: "/virtual-convention-center/facade",
    component: _5122c89b,
    name: "virtual-convention-center-facade"
  }, {
    path: "/virtual-convention-center/lobby",
    component: _00bece06,
    name: "virtual-convention-center-lobby"
  }, {
    path: "/virtual-convention-center/exhibit-hall/bronze",
    component: _114a97ba,
    name: "virtual-convention-center-exhibit-hall-bronze"
  }, {
    path: "/virtual-convention-center/exhibit-hall/gold",
    component: _0217e7b4,
    name: "virtual-convention-center-exhibit-hall-gold"
  }, {
    path: "/virtual-convention-center/exhibit-hall/platinum",
    component: _3f302968,
    name: "virtual-convention-center-exhibit-hall-platinum"
  }, {
    path: "/virtual-convention-center/exhibit-hall/silver",
    component: _53137467,
    name: "virtual-convention-center-exhibit-hall-silver"
  }, {
    path: "/virtual-convention-center/lobby/industry-lectures",
    component: _939d6d9a,
    name: "virtual-convention-center-lobby-industry-lectures"
  }, {
    path: "/virtual-convention-center/lobby/plenary",
    component: _9bc050e4,
    name: "virtual-convention-center-lobby-plenary"
  }, {
    path: "/virtual-convention-center/lobby/research-hall",
    component: _6ba641d6,
    name: "virtual-convention-center-lobby-research-hall"
  }, {
    path: "/virtual-convention-center/lobby/symposia",
    component: _640eb6ac,
    name: "virtual-convention-center-lobby-symposia"
  }, {
    path: "/virtual-convention-center/lobby/workshops",
    component: _93633d12,
    name: "virtual-convention-center-lobby-workshops"
  }, {
    path: "/virtual-convention-center/lobby/industry-lectures/gold",
    component: _1473b693,
    name: "virtual-convention-center-lobby-industry-lectures-gold"
  }, {
    path: "/virtual-convention-center/lobby/industry-lectures/platinum",
    component: _0f3b70c7,
    name: "virtual-convention-center-lobby-industry-lectures-platinum"
  }, {
    path: "/virtual-convention-center/lobby/industry-lectures/sponsor",
    component: _2be00ae7,
    name: "virtual-convention-center-lobby-industry-lectures-sponsor"
  }, {
    path: "/virtual-convention-center/lobby/industry-lectures/gold/:slug",
    component: _12bd154b,
    name: "virtual-convention-center-lobby-industry-lectures-gold-slug"
  }, {
    path: "/virtual-convention-center/lobby/industry-lectures/platinum/:slug",
    component: _0d84cf7f,
    name: "virtual-convention-center-lobby-industry-lectures-platinum-slug"
  }, {
    path: "/virtual-convention-center/lobby/industry-lectures/sponsor/:slug",
    component: _2a29699f,
    name: "virtual-convention-center-lobby-industry-lectures-sponsor-slug"
  }, {
    path: "/virtual-convention-center/exhibit-hall/bronze/:slug",
    component: _0f93f672,
    name: "virtual-convention-center-exhibit-hall-bronze-slug"
  }, {
    path: "/virtual-convention-center/exhibit-hall/gold/:slug",
    component: _0061466c,
    name: "virtual-convention-center-exhibit-hall-gold-slug"
  }, {
    path: "/virtual-convention-center/exhibit-hall/platinum/:slug",
    component: _3d798820,
    name: "virtual-convention-center-exhibit-hall-platinum-slug"
  }, {
    path: "/virtual-convention-center/exhibit-hall/silver/:slug",
    component: _515cd31f,
    name: "virtual-convention-center-exhibit-hall-silver-slug"
  }, {
    path: "/",
    component: _7ecba6e4,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
