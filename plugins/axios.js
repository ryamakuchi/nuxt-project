export default function ({ $axios }) {
  $axios.onRequest( (config) => {
    if (config.url.indexOf('api.github.com') +1 ) {
      config.headers.Authorization = `token 711b20ec592e7cc959938ff5837f739b1dbf1c04`
    }
  })
}
