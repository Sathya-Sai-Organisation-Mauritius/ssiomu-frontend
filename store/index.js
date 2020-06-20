export const state = () => ({
  list: []
})

export const getters = {
  getRegions(state) {
    return state.list
  }
}

export const mutations = {
  SET_REGIONS({ state }, payload) {
    state.list = payload
  }
}

export const actions = {
  async GET_REGIONS({ commit }) {
    // fetch regions
    // let result = await this.$http.$get(
    //   'http://localhost:4444/_/items/region?fields=*.*'
    // )

    let res = await fetch('http://localhost:4444/_/items/region?fields=*.*')
    let result = await res.json()

    //console.log(result)

    // store into state
    commit('SET_REGIONS', result.data)
  }
}
