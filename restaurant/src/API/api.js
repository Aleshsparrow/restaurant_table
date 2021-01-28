const axios = require ('axios')
const BASEURL = 'https://code-challenge.spectrumtoolbox.com/api/restaurants';
const API_KEY = 'Api-Key q3MNxtfep8Gt'

const apiResponse =
  
  axios.get(BASEURL, {
    headers: {
      Authorization: API_KEY
    }
  }).then(function(data){
    // console.log(data.data)
    
    var result = data.data
    // console.log(result);
    // var restaurants = {}
    // var restaurantName = []
    // var restaurantCity = []
    // var restaurantState = []
    // var restaurantPhone = []
    // var restaurantgenre = []
            for (let i = 0; i < result.length; i++) {
                // console.log(result[i].name)
                //  restaurantName.push(result[i].name)
                //  restaurantCity.push(result[i].city)
                //  restaurantState.push(result[i].state)
                //  restaurantPhone.push(result[i].telephone)
                //  restaurantgenre.push(result[i].genre)
                //  restaurants['restaurantName'] = restaurantName
                //  restaurants['restaurantCity'] = restaurantCity
                //  restaurants['restaurantState'] = restaurantState
                //  restaurants['restaurantPhone'] = restaurantPhone
                //  restaurants['restaurantgenre'] = restaurantgenre
                console.log(result[i]);
                }
            // console.log(restaurants)
        })
    
// apiResponse()

    
    
    
    module.exports = apiResponse

     
