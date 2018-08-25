import * as types from './mutation-types'
export default {
  namespaced: true,
  state: {
    allGoods: [],
    searchKeyword: '',
    likesMap: new Map(),
    likes: [],
    cartMap: new Map(),
    cartGoods: [],
    goodsCount: 0,
    totalSum: 0
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
    },
    setCartGoodId ({commit}, id) {
      commit(types.CART_GOODS_MAP, id)
    },
    setDeleteId ({commit}, id) {
      commit(types.DELETE_CART_GOODS, id)
    },
    setRecalculateInfo ({state, commit}, info) {
      const id = info[0]
      const sign = info[1]
      let m = state.cartMap
      let item = m.get(id)
      if (sign === 'minus') {
        item.count--
        state.goodsCount--
        state.totalSum -= Number(item.price)
        if (item.count === 0) {
          commit(types.DELETE_CART_GOODS, id)
        }
      } else {
        item.count++
        state.goodsCount++
        state.totalSum += Number(item.price)
      }
      state.cartGoods = [...m.values()]
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
    },
    cartGoods (state, id) {
      return state.cartGoods
    },
    goodsCount (state) {
      return state.goodsCount
    },
    totalSum (state) {
      return state.totalSum
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
    },
    [types.CART_GOODS_MAP] (state, id) {
      let m = state.cartMap
      let item = state.allGoods.find(obj => obj.id === id)

      if (m.has(id)) {
        m.get(id).count++
      } else {
        item.count = 1
        m.set(id, item)
      }
      state.cartGoods = [...m.values()]

      let itemsCount = 0
      let totalPrice = 0
      for (let item of m.values()) {
        itemsCount += item.count
        totalPrice += item.count * item.price
      }
      state.goodsCount = itemsCount
      state.totalSum = totalPrice
    },
    [types.DELETE_CART_GOODS] (state, id) {
      let m = state.cartMap
      let item = m.get(id)

      state.totalSum -= item.count * item.price
      state.goodsCount -= item.count

      m.delete(id)
      state.cartGoods = [...m.values()]
    }
  }
}
