const api = {
    key : "5dff8efa8be6204a849c38dbe6fc8663" ,
    url : "https://api.openweathermap.org/data/2.5/"
}

const searchBox = document.getElementById('search-box');
searchBox.addEventListener('keypress', locationquery)
function locationquery (e){
    if(e.keyCode == 13){
        result(searchBox.value)
        console.log(searchBox.value);
    }
}
function result(query){
    fetch(`${api.url}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather =>{
        return weather.json();
    }).then(displayResults);
}

function displayResults(weather){
    // console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`

    

    let temp = document.querySelector('.current .temp');
    temp.innerText = `${Math.round(weather.main.temp)}°c`;

    let weather_type = document.querySelector('.current .weather');
    weather_type.innerText = weather.weather[0].main;

    let hiLow = document.querySelector('.hi-low');
    hiLow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
}

function dateBuilder(d){
    let months = ["January" ," February" , "March" ,"April" , "May" , "June" , "July" , "August" ,"September" , "October" ,"November" , "December"];

    let days = ["Monday", "Tuesday", "Wednesday" , "Thursday","Friday","Saturday","Sunday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
}

// let date = new Date();
// let time = date.getFullYear();
// let time = date.getMonth();
// console.log(time);