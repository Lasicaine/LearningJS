$(function() {

    var localWeather = {};

    MyWeather();

    function MyWeather() {
        getLocation()
            .then(printLocation)
            .then(getWeatherInfo)
            .then(printWeatherInfo)
            .fail(function() {
                console.log("ERROR: Not Get JSON.");
            });
    }

    function getLocation() {
        return $.getJSON("https://ipinfo.io/json");
    }

    function myLocation(locationInfo) {
        var location = locationInfo.loc.split(",");
        return {
            latitude: location[0],
            longitude: location[1],
            country: locationInfo.country,
            city: locationInfo.city
        };

    }

    function printLocation(locationInfo) {
        var location = myLocation(locationInfo);
        $("#location").text(location.city + ", " + location.country);
        return location;
    }


    function getWeatherInfo(location) {
        var getWeatherUrl = "https://api.darksky.net/forecast/f613e5eb52cc7af771ea867f0182bc99/" + location.latitude + "," + location.longitude + "?units=si";
        console.log(getWeatherUrl);
        return $.ajax({
            url: getWeatherUrl,
            dataType: "jsonp"
        });

    }

    function printWeatherInfo(weatherInfo) {
        var weather = getWeather(weatherInfo);
        localWeather = weather;

        var skycons = new Skycons({
            "color": "black"
        });
        skycons.add(document.getElementById("img_condition"), weather.icon);
        skycons.play();

        $("#description").text(weather.description);
        updateTemperature();
    }

    function getWeather(weatherInfo) {
        return {
            icon: weatherInfo.currently.icon,
            temp: weatherInfo.currently.temperature,
            description: weatherInfo.currently.summary,
        };
    }

    function updateTemperature() {
        $("#temperature").html(Math.round(localWeather.temp) + "&#176;" + "C");
    }

    $("#btnUpdateWeather").click(function() {
        MyWeather();
    });

});