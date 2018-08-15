import * as types from './mutation-types'
export default {
  namespaced: true,
  state: {
    allGoods: [],
    searchKeyword: ''
  },
  actions: {
    loadGoods ({commit}) {
      function loadJSON (callback) {
        const xobj = new XMLHttpRequest()
        xobj.overrideMimeType('application/json')
        xobj.open('GET', '/src/goods.json', true)
        xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == '200') {
            callback(xobj.responseText)
          }
        }
        xobj.send(null)
      }
      loadJSON(function (response) {
        commit(types.LOAD_GOODS, JSON.parse(response))
      })
    },
    setSearchKeyword ({commit}, str) {
      commit(types.SET_SEARCH_KEYWORD, str)
    }
  },
  getters: {
    goods (state) {
      return state.allGoods.filter(good =>
        good.title.toLowerCase().match(state.searchKeyword.toLowerCase())
      )
    }
  },
  mutations: {
    [types.LOAD_GOODS] (state, arr) {
      state.allGoods = arr
      state.allGoods.sort(function (a, b) {
        if (a.isTop > b.isTop) {
          return -1
        }
        if (a.isTop < b.isTop) {
          return 1
        }
        return 0
      })
    },
    [types.SET_SEARCH_KEYWORD] (state, str) {
      state.searchKeyword = str
    }
  }
}
