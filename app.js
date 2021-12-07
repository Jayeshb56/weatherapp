// console.log('starting')

// setTimeout(() =>  {
//   console.log("3 second timer")
// }, 3000)

// setTimeout(()  => {
//   console.log('1 sec timer')
// }, 1000)

// console.log('stopping')
const request = require('request')

//  const url = 'http://api.weatherstack.com/current?access_key=0e9648378f27a6483098197752b044db&query=19.214436,72.979021&units=f'
// request({url:url,json: true}, (error,response) => {
//    const data = JSON.parse(response.body)
//     console.log('it is currently '+ response.body.current.temperature + ' degree out and the Humidity is ' + response.body.current.humidity+ ' degree')
// })



const geocodeurl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiamF5ZXNoNTYiLCJhIjoiY2t3Z3ZuNm42MHNiZTJ1cXZ6MXhuY3BtNCJ9.ukcn39T81pxaOGCN5r9i7g"
request({ url: geocodeurl,json: true }, (error,response) => {
  const lat = response.body.features[0].center[1]
  const lon = response.body.features[0].center[0]
  console.log(lat,lon)
})