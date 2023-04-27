var apiKey = 'de9896cc5903d3d20095502b01f4349e'

le

$("#searchButton").on("click", function () {
    var searchValue = $("#searchInput").val()
    console.log(searchValue)
    geoCode(searchValue)
})


var currentDate = $("<h2>").text(dayjs().format("MM/DD/YYYY"))
function currentWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            $("#cityInput").text(data.name)
            var temp = $("<h3>").text("Temp: " + data.main.temp)
            // var wind=$("<h3>").text("Wind Speed: "+data.wind.speed)
            // var humidity=$("<h3>").text("Humidity: "+data.main.humidity)
            // var icon=$("<img>").attr("src",`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)


            $("#currentWeather").append(currentDate, cityName, temp, wind, humidity, icon)
        })
}
// function temperature(lat, lon) {
//     fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`)

// }

function forecast(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            data.list[0].main.temp
            data.list[3].main.temp
            data.list[7].main.temp
            data.list[11].main.temp
            data.list[15].main.temp
        })
}

function geoCode(searchValue) {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=1&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            currentWeather(data[0].lat, data[0].lon)
            forecast(data[0].lat, data[0].lon)
        })
}