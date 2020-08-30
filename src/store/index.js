import Vue from 'vue'
import Vuex from 'vuex'
import {apiCall, apiLogin} from '@/config/apiConfig'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dashboard: {
      "kpis": [
        {
            "nombre": "",
            "entregadas": "",
            "pendientes": ""
        },
        {
            "nombre": "",
            "totales": "",
            "atrasadas": ""
        }
    ],
    "utimas_ordenes": [],
    "ultimas_devoluciones:": []
    },
    token: '',
  },
  getters: {
    bringDash(state)
    {
      return state.dashboard;
    }
  },
  mutations: {
    GETDASHBOARD(state, dashInfo)
    {
      state.dashboard = dashInfo;
    },
    POSTLOGIN(state, token)
    {
      state.token = token;
    },
    RESETLOGIN(state)
    {
      state.token = '';
    }
  },
  actions: {
    getDashboard(context) 
    {
      let params = 'cmodels/secure/dashboard';

      async function apiRes()
      {
        const getDashInfo = await apiCall(params);

        context.commit('GETDASHBOARD', getDashInfo);
      }

      return apiRes();
    },
    postLogin(context, user, pass)
    {
      async function apiToken()
      {
        const token = await apiLogin(user, pass);

        context.commit('POSTLOGIN', token.token)
      }

      return apiToken();
    },
    resetLogin(context)
    {
      context.commit('RESETLOGIN');
    }
  }
})
