const axios = require ('axios')
const BASEURL = 'https://code-challenge.spectrumtoolbox.com/api/restaurants';
const API_KEY = 'Api-Key q3MNxtfep8Gt'


     function apiResponse()  { axios.get(BASEURL, {
        headers: {
          Authorization: API_KEY
        }
      }).then(function(data){
          console.log(data)
      })

    }
    apiResponse()

    module.exports = apiResponse
