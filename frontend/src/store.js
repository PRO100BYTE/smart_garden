import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      profile: {
        username: '',
        email: '',
      },
      notifications: [],
    },
    mutations: {
      UPDATE_PROFILE(state, payload) {
        state.profile.username = payload.username;
        state.profile.email = payload.email;
      },
      ADD_NOTIFICATION(state, payload) {
        state.notifications.push(payload);
      },
    },
    actions: {
      updateProfile({ commit }, profile) {
        commit('UPDATE_PROFILE', profile);
      },
      addNotification({ commit }, notification) {
        commit('ADD_NOTIFICATION', notification);
      },
    },
  });
