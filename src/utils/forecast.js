const axios = require('axios')


const forecast = (latitude,longitude,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ea626beeb679a65ab331c18e5208c442&query='+latitude+','+longitude+''
  
    axios.get(url)
    .then((response) => {
      callback(undefined,{
        temperature: response.data.current.temperature,
        feelslike : response.data.current.feelslike
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

  module.exports = forecast