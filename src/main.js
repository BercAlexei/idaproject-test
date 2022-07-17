import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

Vue.directive('locale', {
  bind(el) {
    if (el.querySelector('input')) {
      el.querySelector('input').oninput = function () {
        if (this.value !== '') {
          this.value = Number(this.value.replace(/\D/g, "")).toLocaleString("ru-RU");
        } else {
          this.value = ''
        }
      }
    } else {
      el.textContent = `${Number(el.textContent.replace(/\D/g, "")).toLocaleString("ru-RU")} руб.`;
    }

  }
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
