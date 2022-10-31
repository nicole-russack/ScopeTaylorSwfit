const request = require('request')

const newalbum = process.argv[2]

const kanyeQuote = (album, callback) => {
    const geocode = "https://taylorswiftapi.herokuapp.com/get?album=" + album
    console.log(geocode)
    request({ url: geocode, json:true }, (error, response) => {
        if(response.body == undefined){
            callback(album + " is not a valid album", undefined)
        }
        else{
           callback(undefined,response.body.quote)
        }
      
     })
}



kanyeQuote(newalbum, (error, data) =>{
    if(error){
        console.log("error ", error) 
    }
    else{
        console.log(data)
    }
})

