<template>
  <div class="card text-center m-3">
    <h5 class="card-header">Simple GET Request</h5>
    <div class="card-body">
      Result:
      <pre>      {{ myResult }}</pre>
    </div>
    <button class="rounded p-4 bg-yellow-500" @click="fetchData()">
      Refresh
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myResult: ''
    }
  },

  methods: {
    // helloWorld() {
    //   alert('hi world')
    // },

    getJson(response) {
      return response.json()
    },

    displayData(result) {
      console.log(result)
      this.myResult = result
    },

    fetchData() {
      // this.helloWorld()
      // Simple GET request using fetch
      fetch('http://localhost:4444/_/items/event')
        .then(this.getJson)
        //   function(response) {
        //   return response.json()
        // })
        .then(this.displayData)
      //   data => {
      //   console.log(data)
      //   this.myResult = data
      // })
    }
  },
  mounted() {
    this.fetchData()
  }
}
</script>

<style lang="scss" scoped></style>
