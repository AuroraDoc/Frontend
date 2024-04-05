const apiKey = '0d18e001202c480184213212877cef7f'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

const searchBar = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button") 

const weatherIcon = document.querySelector(".weather-icon")

const weatherBlock = document.querySelector(".weather")
const error = document.querySelector(".error")

const weatherConditions = new Map()
weatherConditions.set("Rain", "images/rain.png")
weatherConditions.set("Snow", "images/snow.png")
weatherConditions.set("Mist", "images/mist.png")
weatherConditions.set("Drizzle", "images/drizzle.png")
weatherConditions.set("Clouds", "images/clouds.png")
weatherConditions.set("Clear", "images/clear.png")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    
    if(response.status == 404){
        error.style.display = "block"
        weatherBlock.style.display = "none"}

    var data = await response.json()
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + "kph"

    const weather = data.weather[0].main
    weatherIcon.src = weatherConditions.get(weather)

    weatherBlock.style.display = "block"
    error.style.display = "none"
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBar.value)
})




