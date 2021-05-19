import { wrapFunctional } from './utils'

export { default as PageFooter } from '../..\\components\\pageFooter.vue'
export { default as PageHeader } from '../..\\components\\pageHeader.vue'
export { default as VideoGroup } from '../..\\components\\videoGroup.vue'
export { default as VideoItem1 } from '../..\\components\\videoItem1.vue'
export { default as VideoItem2 } from '../..\\components\\videoItem2.vue'
export { default as VideoItem3 } from '../..\\components\\videoItem3.vue'
export { default as VideoItem4 } from '../..\\components\\videoItem4.vue'

export const LazyPageFooter = import('../..\\components\\pageFooter.vue' /* webpackChunkName: "components/page-footer" */).then(c => wrapFunctional(c.default || c))
export const LazyPageHeader = import('../..\\components\\pageHeader.vue' /* webpackChunkName: "components/page-header" */).then(c => wrapFunctional(c.default || c))
export const LazyVideoGroup = import('../..\\components\\videoGroup.vue' /* webpackChunkName: "components/video-group" */).then(c => wrapFunctional(c.default || c))
export const LazyVideoItem1 = import('../..\\components\\videoItem1.vue' /* webpackChunkName: "components/video-item1" */).then(c => wrapFunctional(c.default || c))
export const LazyVideoItem2 = import('../..\\components\\videoItem2.vue' /* webpackChunkName: "components/video-item2" */).then(c => wrapFunctional(c.default || c))
export const LazyVideoItem3 = import('../..\\components\\videoItem3.vue' /* webpackChunkName: "components/video-item3" */).then(c => wrapFunctional(c.default || c))
export const LazyVideoItem4 = import('../..\\components\\videoItem4.vue' /* webpackChunkName: "components/video-item4" */).then(c => wrapFunctional(c.default || c))
