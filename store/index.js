export const state = () => ({
  regions: [],
  wings: [],
  menuResources: [
    {
      url: '/',
      name: 'Sai shop'
    },
    {
      url: '/',
      name: 'Guidelines'
    },
    {
      url: '/',
      name: 'Links'
    },
    {
      url: '/',
      name: 'PWS resources'
    },
    {
      url: '/',
      name: 'Pre World Conference Videos'
    }
  ]
})

export const getters = {
  getMenuResources(state) {
    return state.menuResources
  },
  getRegions(state) {
    let filteredRegions = state.regions.map(region => {
      // pluck properties from object
      let { name, number, id, slug } = region
      return {
        name,
        number,
        id,
        slug
      }
    })
    return filteredRegions
  },
  getWings(state) {
    let filteredWings = state.wing.map(wing => {
      // pluck properties from object
      let { name, slug } = wing
      return {
        name,
        slug
      }
    })
    return filteredWings
  }
}

export const mutations = {
  SET_REGIONS(state, payload) {
    state.regions = payload
  },
  SET_WINGS(state, payload) {
    state.wing = payload
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    let region = await this.$http.get('region?fields=*.*')
    let regionData = await region.json()

    let wing = await this.$http.get('wing?fields=*.*')
    let wingData = await wing.json()

    // store into state
    commit('SET_REGIONS', regionData.data)
    commit('SET_WINGS', wingData.data)
  }
}
