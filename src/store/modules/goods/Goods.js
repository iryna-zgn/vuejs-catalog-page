import * as types from './mutation-types'
export default {
  namespaced: true,
  state: {
    allGoods: [],
    searchKeyword: '',
    likesMap: new Map(),
    likes: []
  },
  actions: {
    loadGoods ({commit}) {
      function loadJSON (callback) {
        const xobj = new XMLHttpRequest()
        xobj.overrideMimeType('application/json')
        xobj.open('GET', '/src/goods.json', true)
        xobj.onreadystatechange = function () {
          if (
            /* eslint-disable */
            xobj.readyState == 4 && xobj.status == '200'
            /* eslint-enable */
          ) {
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
    },
    setLikeId ({commit}, id) {
      commit(types.WISHLIST_MAP, id)
    }
  },
  getters: {
    goods (state) {
      return state.allGoods.filter(good =>
        good.title.toLowerCase().match(state.searchKeyword.toLowerCase())
      )
    },
    likes (state, id) {
      return state.likes
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
    },
    [types.WISHLIST_MAP] (state, id) {
      let m = state.likesMap
      const item = state.allGoods.find(obj => obj.id === id)
      if (!m.has(id)) {
        m.set(id, item)
      } else {
        m.delete(id)
      }
      state.likes = [...m.values()]
    }
  }
}
