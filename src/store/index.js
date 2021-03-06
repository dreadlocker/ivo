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
  },
  projectsInfo: [
    'info1info1info1',
    'info2',
    'info3',
    'info4',
  ]
}
const langBG = {
  filters: {
    filters: 'ФИЛТРИ',
    all: 'ВСИЧКИ',
    realised: 'РЕАЛИЗИРАНИ',
  },
  pageInfo: {
    about: ['ЗА ФИРМАТА'],
    projects: ['ИНФОРМАЦИЯ ЗА ПРОЕКТИ'],
    contacts: ['ИНФОРМАЦИЯ ЗА КОНТАКТИ'],
  },
  projectsInfo: [
    'инфо1инфо1инфо1',
    'инфо2',
    'инфо3',
    'инфо4',
  ]
}
const navbarNamesEn = ["about", "projects", "contacts",]
const navbarNamesBG = ["за нас", "проекти", "контакти",]

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
    runLogoAnimation: false,
  },
  mutations: {
    showProjectFilters (state) {
      state.inProjects = true
    },
    hideProjectFilters (state) {
      state.inProjects = false
    },
    changeLanguageToBg (state) {
      state.activeLanguage = state.langBgStr
      state.navbar.forEach((tab, index) => { tab.name = navbarNamesBG[index] })
      state.language = langBG
    },
    changeLanguageToEn (state) {
      state.activeLanguage = state.langEnStr
      state.navbar.forEach((tab, index) => { tab.name = navbarNamesEn[index] })
      state.language = langEN
    },
    changeActivetab (state, index) {
      state.navbar.forEach((tab, idx) => { index === idx ? tab.active = true : tab.active = false })
    },
    rerunLogoAnimation (state, index) {
      state.runLogoAnimation = false;
      setTimeout(() => {
        state.runLogoAnimation = true;
      }, 0);
    },
  }
})

export default store
