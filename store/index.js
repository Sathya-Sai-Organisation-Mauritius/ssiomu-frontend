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
  handleError({ context }, err) {
    console.log(err)
    // announcements = { data: [] }
    return {
      data: []
    }
  },
  async nuxtServerInit({ commit }) {
    let region = await this.$axios.$get('region?fields=*.*')

    let wing = await this.$axios.$get('wing?fields=*.*')

    // store into state
    commit('SET_REGIONS', region.data)
    commit('SET_WINGS', wing.data)
  }
}
