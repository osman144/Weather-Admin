//Get hard coded weather

var weather = require('weather-js');

function UserInput(nickname,city){
    this.nickname = nickname;
    this.city = city;
    this.day = Date.now();

    this.giveWeather = function () {
        weather.find({search: this.city, 
        degreeType: 'F'}, 
        function(err, result) {
            if(err) console.log(err);

            console.log(JSON.stringify(result, null, 2));
        });
    }

}



module.exports = UserInput;