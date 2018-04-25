var fs = require('fs');
var UserInput = require('./weather.js')
var moment = require('moment');

let weatherInput = function() {
    this.getdata = function(){
        fs.readFile('weather.txt','utf8',(err,data) => {
            console.log(data)
        })
    }
    this.newUserSearch = function (nickname, city){
        var newUserSearch = new UserInput(nickname, city);
        newUserSearch.giveWeather();
        var weatherTxt = 
        "\nName: " + newUserSearch.nickname +
        "\nLocation: " + newUserSearch.city +
        "\nDate: " + moment(newUserSearch.date).format('MM-DD-YYYY')


    fs.appendFile('weather.txt', weatherTxt, function(err){
        if(err) throw err;
    })
    }

}

module.exports = weatherInput