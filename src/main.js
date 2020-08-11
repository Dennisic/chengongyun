import Vue from "vue";
//@代表src
import App from "@/App";
Vue.config.productionTip = false;
new Vue({
  // el: "#app",

  // components: {
  //   App,
  // },
  // template: "<App/>",

  //1.注册组件App，2.使用组件，3.渲染组件
  render: (h) => h(App),
}).$mount("#app");
