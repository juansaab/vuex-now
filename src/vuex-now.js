/*!
 * @author juansaab <juansaabvanegas@gmail.com>
 * date 08/12/2018
 * Vuex Now: A Vuex plugin wich exposes a reactive Time variable with auto update on a given interval.
 */

/**
 * @function VuexNow Vuex plugin definition
 * @param {integer} interval - Interval to autoupdate the current time variable
 * @returns {store} store object defined by Vuex
 */
export default function VuexNow (interval) {
  return store => {
    // called when the store is initialized
    setInterval(() => {
      store.commit('now/updateTime', null, { root: true })
    }, interval)

    // defines now vuex module
    const now = {
      namespaced: true,
      state: {
        now: new Date()
      },
      mutations: {
        updateTime: function (state) {
          state.now = new Date()
        }
      }
    }

    // register the module
    store.registerModule('now', now)
  }
}
