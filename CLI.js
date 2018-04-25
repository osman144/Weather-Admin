var WeatherAdmin = require("./weatherInput.js");

var loginType = process.argv[2];

var userName = process.argv[3];

var userLocation = process.argv[4];

var admin = new WeatherAdmin();

if(loginType === 'admin'){
    admin.getdata();
}else{
    admin.newUserSearch(userName, userLocation)
}