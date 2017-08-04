$(function() {

    var localWeather = {};
    var $btnDegreeCelsius = $("#btnDegreeCelsius");
    var $btnDegreeFahrenheit = $("#btnDegreeFahrenheit");
    var $temperature = $("#temperature");
    var unitTemperature;

    MyWeather();

    function MyWeather() {
        getLocation()
            .then(printLocation)
            .then(getWeatherInfo)
            .then(printWeatherInfo)
            .fail(function() {
                unitTemperature = undefined;
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
        unitTemperature = "celsius";
        printTemperature();
        setCelsiusDegreeButton();
    }

    function getWeather(weatherInfo) {
        return {
            icon: weatherInfo.currently.icon,
            temp: weatherInfo.currently.temperature,
            description: weatherInfo.currently.summary,
        };
    }

    function printTemperature() {
        $temperature.hide();
        if (unitTemperature === "celsius") {
            $temperature.html(Math.round(localWeather.temp) + "&#176;" + "C");
        } else {
            $temperature.html(Math.round(localWeather.temp) + "&#176;" + "F");
        }
        $temperature.fadeIn("slow");

    }

    $btnDegreeCelsius.click(function() {
        if (unitTemperature === "fahrenheit") {
            localWeather.temp = convertFahrenheitToCelsius(localWeather.temp);
            unitTemperature = "celsius";
            printTemperature();
            setCelsiusDegreeButton();
        }
    });

    $btnDegreeFahrenheit.click(function() {
        if (unitTemperature === "celsius") {
            localWeather.temp = convertCelsiusToFahrenheit(localWeather.temp);
            unitTemperature = "fahrenheit";
            printTemperature();
            setFahrenheitDegreeButton();
        }
    });

    $("#btnUpdateWeather").click(function() {
        MyWeather();
    });

    function setCelsiusDegreeButton() {
        $btnDegreeCelsius.removeClass("mui-btn--raised").addClass("mui-btn--accent");
        $btnDegreeFahrenheit.removeClass("mui-btn--accent").addClass("mui-btn--raised");
    }

    function setFahrenheitDegreeButton() {
        $btnDegreeFahrenheit.removeClass("mui-btn--raised").addClass("mui-btn--accent");
        $btnDegreeCelsius.removeClass("mui-btn--accent").addClass("mui-btn--raised");
    }

    function convertFahrenheitToCelsius(value) {
        return (value - 32) / 1.8;
    }

    function convertCelsiusToFahrenheit(value) {
        return value * 1.8 + 32;
    }
});