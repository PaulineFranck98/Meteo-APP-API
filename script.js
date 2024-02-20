
const apiKey = "a79b9e9dbf646881b7eaa3a520a6d49e";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=bangalore";


async function checkWeather(){
    const response = await fetch(apiUrl + `appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

}

checkWeather();







