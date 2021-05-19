import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  PageFooter: () => import('../..\\components\\pageFooter.vue' /* webpackChunkName: "components/page-footer" */).then(c => wrapFunctional(c.default || c)),
  PageHeader: () => import('../..\\components\\pageHeader.vue' /* webpackChunkName: "components/page-header" */).then(c => wrapFunctional(c.default || c)),
  VideoGroup: () => import('../..\\components\\videoGroup.vue' /* webpackChunkName: "components/video-group" */).then(c => wrapFunctional(c.default || c)),
  VideoItem1: () => import('../..\\components\\videoItem1.vue' /* webpackChunkName: "components/video-item1" */).then(c => wrapFunctional(c.default || c)),
  VideoItem2: () => import('../..\\components\\videoItem2.vue' /* webpackChunkName: "components/video-item2" */).then(c => wrapFunctional(c.default || c)),
  VideoItem3: () => import('../..\\components\\videoItem3.vue' /* webpackChunkName: "components/video-item3" */).then(c => wrapFunctional(c.default || c)),
  VideoItem4: () => import('../..\\components\\videoItem4.vue' /* webpackChunkName: "components/video-item4" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
