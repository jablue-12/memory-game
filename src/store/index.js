import Vue from 'vue'
import Vuex from 'vuex'
import cards from "./modules/cards";
import users from "./modules/users";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cards,
    users
  }
})
