import Vue from 'vue';

import ViewUI from 'view-design';
import VueCodemirror from 'vue-codemirror';
import VueI18n from 'vue-i18n';
import VueMatomo from 'vue-matomo'

import App from './App.vue';
import router from './router';

import 'view-design/dist/styles/iview.css';

// import more codemirror resource...
import 'codemirror/lib/codemirror';
// import base style
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/base16-dark.css';
import 'codemirror/theme/idea.css';
// codemirror language
import 'codemirror/mode/clike/clike'; // Java, C, C++ 都是 clike 中的
import 'codemirror/mode/python/python';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/sql/sql';
import 'codemirror/mode/mllike/mllike';
// codemirror active-line.js
import 'codemirror/addon/selection/active-line';
import 'codemirror/addon/search/search';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/matchtags';
import 'codemirror/addon/edit/trailingspace';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/comment-fold';

const { messages } = require('./assets/lang');

Vue.use(ViewUI);
// 如果使用模块系统 (例如通过 vue-cli)，则需要导入 Vue 和 VueI18n ，然后调用 Vue.use(VueI18n)
Vue.use(VueI18n);
Vue.use(VueCodemirror, {
  options: { theme: 'idea' },
  events: ['scroll'],
});

Vue.use(VueMatomo, {
  // Configure your matomo server and site by providing
  host: 'https://mgmt.jxtxzzw.com/matomo',
  siteId: 4,

  // Changes the default .js and .php endpoint's filename
  // Default: 'matomo'
  trackerFileName: 'matomo',

  // Overrides the autogenerated tracker endpoint entirely
  // Default: undefined
  // trackerUrl: 'https://example.com/whatever/endpoint/you/have',

  // Overrides the autogenerated tracker script path entirely
  // Default: undefined
  // trackerScriptUrl: 'https://example.com/whatever/script/path/you/have',

  // Enables automatically registering pageviews on the router
  router: router,

  // Enables link tracking on regular links. Note that this won't
  // work for routing links (ie. internal Vue router links)
  // Default: true
  enableLinkTracking: true,

  // Require consent before sending tracking information to matomo
  // Default: false
  requireConsent: false,

  // Whether to track the initial page view
  // Default: true
  trackInitialView: true,

  // Run Matomo without cookies
  // Default: false
  disableCookies: false,

  // Enable the heartbeat timer (https://developer.matomo.org/guides/tracking-javascript-guide#accurately-measure-the-time-spent-on-each-page)
  // Default: false
  enableHeartBeatTimer: false,

  // Set the heartbeat timer interval
  // Default: 15
  heartBeatTimerInterval: 15,

  // Whether or not to log debug information
  // Default: false
  debug: false,

  // UserID passed to Matomo (see https://developer.matomo.org/guides/tracking-javascript-guide#user-id)
  // Default: undefined
  userId: undefined,

  // Share the tracking cookie across subdomains (see https://developer.matomo.org/guides/tracking-javascript-guide#measuring-domains-andor-sub-domains)
  // Default: undefined, example '*.example.com'
  cookieDomain: undefined,

  // Tell Matomo the website domain so that clicks on these domains are not tracked as 'Outlinks'
  // Default: undefined, example: '*.example.com'
  domains: undefined,

  // A list of pre-initialization actions that run before matomo is loaded
  // Default: []
  // Example: [
  //   ['API_method_name', parameter_list],
  //   ['setCustomVariable','1','VisitorType','Member'],
  //   ['appendToTrackingUrl', 'new_visit=1'],
  //   etc.
  // ]
  preInitActions: []
});

// 通过选项创建 VueI18n 实例
const i18n = new VueI18n({
  locale: 'cn', // 设置地区
  messages, // 设置地区信息
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
  i18n, // 通过 `i18n` 选项创建 Vue 实例
}).$mount('#app');
