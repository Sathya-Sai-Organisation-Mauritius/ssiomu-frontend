export default function({ $axios, app, store }) {
  $axios.onError(error => {
    console.log(error)
    throw error.response
  })
}
