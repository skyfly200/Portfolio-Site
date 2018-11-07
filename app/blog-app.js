require('./blog.pug');

import Vue from 'vue'
import Blog from './Blog'
import Header from './components/Header'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Header/>',
  components: { Header }
})
