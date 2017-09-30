
require('./bootstrap');

window.Vue = require('vue');

import Buefy from 'buefy';

Vue.use(Buefy);

$(document).ready(function() {
  //  Dropdowns
  $('.dropdown').hover(function(e) {
    $(this).toggleClass('is-open')
  })
})

var App = new Vue({
    el: '#app',
    data: {
    }
})