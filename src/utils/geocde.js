const axios = require('axios')

const geocode = (address, callback) => {
    const url1 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic2FoaWxrYW5kaGFyaSIsImEiOiJjazk4aXoyMDIwMnRtM21tbnd1NXFzbzRkIn0.tbwRIgNFJX2OzQYwkSJbyQ&limit=1'
  
    axios.get(url1)
    .then((response) => {
  
       callback(undefined, {
        latitude : response.data.features[0].center[1],
        longitude : response.data.features[0].center[0],
        location: response.data.features[0].place_name
       })
  
    })  
    .catch((error) => {
      if(error.request){
        callback('Unable to connect to services', undefined)
      }else{
        callback('Re-enter location and try again', undefined)
      }
    })
  }

  module.exports = geocode