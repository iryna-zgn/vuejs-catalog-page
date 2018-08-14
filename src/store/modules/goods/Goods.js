export default {
  namespaced: true,
  state: {
    goods: []
  },
  actions: {
    loadGoods (context, goods) {
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
        context.commit('loadGoods', JSON.parse(response))
      })
    }
  },
  getters: {
    goods: state => {
      return state.goods
    }
  },
  mutations: {
    loadGoods (state, payload) {
      state.goods = payload
      state.goods.sort(function (a, b) {
        if (a.isTop > b.isTop) {
          return -1
        }
        if (a.isTop < b.isTop) {
          return 1
        }
        return 0
      })
    }
  }
}
