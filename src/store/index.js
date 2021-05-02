import Vue from 'vue'
import Vuex from 'vuex'
import {
  about,
  projects,
  contacts,
} from '@/assets/routesPath.js';

const langEN = {
  filters: {
    filters: 'FILTER',
    all: 'ALL',
    realised: 'REALISED',
  },
  pageInfo: {
    about: ['FOR THE COMPANY'],
    projects: ['PROJECTS INFO'],
    contacts: ['CONTACTS INFO'],
  }
}
const langBG = {
  filters: {
    filters: 'ФИЛТРИ',
    all: 'Всички',
    realised: 'Реализирани',
  },
  pageInfo: {
    about: ['ЗА ФИРМАТА'],
    projects: ['ИНФОРМАЦИЯ ЗА ПРОЕКТИ'],
    contacts: ['ИНФОРМАЦИЯ ЗА КОНТАКТИ'],
  }
}
const navbarNamesEn = ["About", "Projects", "Contacts",]
const navbarNamesBG = ["За нас", "Проекти", "Контакти",]

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    inProjects: false,
    activeLanguage: 'EN',
    language: langEN,
    langEnStr: 'EN',
    langBgStr: 'BG',
    navbar: [
      { name: navbarNamesEn[0], path: about, active: false },
      { name: navbarNamesEn[1], path: projects, active: false },
      { name: navbarNamesEn[2], path: contacts, active: false },
    ],
  },
  mutations: {
    showProjectFilters (state) {
      state.inProjects = true
    },
    hideProjectFilters (state) {
      state.inProjects = false
    },
    changeLanguage (state) {
      if (state.activeLanguage === state.langEnStr) {
        state.activeLanguage = state.langBgStr
        state.navbar.forEach((tab, index) => { tab.name = navbarNamesBG[index] })
        state.language = langBG
      } else {
        state.activeLanguage = state.langEnStr
        state.navbar.forEach((tab, index) => { tab.name = navbarNamesEn[index] })
        state.language = langEN
      }
    },
    changeActivetab (state, index) {
      state.navbar.forEach((tab, idx) => { index === idx ? tab.active = true : tab.active = false })
    },
  }
})

export default store
