// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

const weatherApi = {
    key: "bab281d79e5f1e9755a68d754cc313e7",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather", 
}
const weatherwidget={
    key:'bab281d79e5f1e9755a68d754cc313e7',
    baseurl:'https://api.openweathermap.org/data/2.5/forecast'
}

const searchInputBox = document.getElementById('input-box');

// Event Listener Function on keypress
searchInputBox.addEventListener('keypress', (event) => {
    
    if(event.keyCode == 13) {
        console.log(searchInputBox.value);
        getForecast(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display = "block";
    }

});

function getForecast(city){
    fetch(`${weatherwidget.baseurl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(forecast=>{
        return forecast.json();
    }).then(showweatherwidget);

}

function showweatherwidget(weather){
    console.log(weather.list);
    const mon=document.querySelector('.mon div');
    mon.innerHTML=`${Math.ceil(weather.list[0].main.temp_min)}&deg;C (min) / 24&deg;C (max)`;
    mon.innerHTML=`${Math.floor(weather.list[0].main.temp_max)}&deg;C (min) / 24&deg;C (max)`;
    const tue=document.querySelector('.tue div');
    tue.innerHTML=`${Math.ceil(weather.list[9].main.temp_min)}&deg;C (min) / 24&deg;C (max)`;
    tue.innerHTML=`${Math.floor(weather.list[9].main.temp_max)}&deg;C (min) / 24&deg;C (max)`;
    const wed=document.querySelector('.wed div');
    wed.innerHTML=`${Math.ceil(weather.list[17].main.temp_min)}&deg;C (min) / 24&deg;C (max)`;
    wed.innerHTML=`${Math.floor(weather.list[17].main.temp_max)}&deg;C (min) / 24&deg;C (max)`;
    const thurs=document.querySelector('.thurs div');
    thurs.innerHTML=`${Math.ceil(weather.list[25].main.temp_min)}&deg;C (min) / 24&deg;C (max)`;
    thurs.innerHTML=`${Math.floor(weather.list[25].main.temp_max)}&deg;C (min) / 24&deg;C (max)`;
    // const thurs=document.querySelector('.thurs div');
    // thurs.innerHTML=`${Math.ceil(weather.list[33].main.temp_min)}&deg;C (min) / 24&deg;C (max)`;
    // thurs.innerHTML=`${Math.floor(weather.list[33].main.temp_max)}&deg;C (min) / 24&deg;C (max)`;
}
// Get Weather Report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

// // Show Weather Report
function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);
    let time =document.querySelector(".time");
    time.innerText=todayDate.getHours()+":"+todayDate.getMinutes() ;

    const animation=document.querySelector(".animation");

    const wind=document.querySelector('.wind-speed p');
    var result = Number(weather.wind.speed);
    wind.innerText=`${Math.round(result * 3.6)} Km/h`;

    const humidity=document.querySelector('.humidity p');
    humidity.innerText=`${weather.main.humidity}%`;

    const pressure=document.querySelector('.air-pressure p');
    pressure.innerText=`${weather.main.pressure} hPa`;

    

    if(weatherType.textContent == 'Clear') {
        document.querySelector('.upper-container').style.backgroundImage='url(/images/clearSky1.jpg)';
        document.querySelector('.upper-container .date-time').style.color='black';
        animation.innerHTML=`<lottie-player src="https://assets10.lottiefiles.com/packages/lf20_jqfghjiz.json" background="transparent"
        speed="1" style="width: 200px; height: 200px;" loop autoplay></lottie-player>`;
        
        
    } else if(weatherType.textContent == 'Clouds') {
        
        document.querySelector('.upper-container').style.backgroundImage='url(/images/Cloudy1.jpg)';
        document.querySelector('.upper-container .date-time').style.color='black';
        animation.innerHTML=`<lottie-player src="https://assets7.lottiefiles.com/packages/lf20_zsfbtp0v.json" background="transparent"
        speed="1" style="width: 200px; height: 200px;" loop autoplay></lottie-player>`;
        
    } else if(weatherType.textContent == 'Haze') {
        
        document.querySelector('.upper-container').style.backgroundImage='url(/images/Haze1.jpg)';
        document.querySelector('.upper-container .date-time').style.color='aliceblue';
        document.querySelector('.upper-container').style.backgroundImage=
        animation.innerHTML=`<lottie-player src="https://assets3.lottiefiles.com/private_files/lf30_dmgebz1e.json" background="transparent"
        speed="1" style="width: 200px; height: 200px;" loop autoplay></lottie-player>`;
        
    }     else if(weatherType.textContent == 'Rain') {
        
        document.querySelector('.upper-container').style.backgroundImage='url(/images/Rain1.jpg)';
        document.querySelector('.upper-container .date-time').style.color='aliceblue';
        animation.innerHTML=`<lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_orqfuyox.json" background="transparent"
        speed="0.5" style="width: 200px; height: 200px;" loop autoplay></lottie-player>`;
        
    } else if(weatherType.textContent == 'Snow') {
        
        document.querySelector('.upper-container').style.backgroundImage='url(/images/Snow1.jpg)';
        
        document.querySelector('.upper-container .date-time').style.color='black';
        animation.innerHTML=`<lottie-player src="https://assets7.lottiefiles.com/private_files/lf30_0tyvusxj.json" background="transparent"
        speed="1" style="width: 200px; height: 200px;" loop autoplay></lottie-player>`;
        
    } else if(weatherType.textContent == 'Thunderstorm') {
        
        document.querySelector('.upper-container').style.backgroundImage='url(/images/Thunder.jpg)';
        document.querySelector('.upper-container .date-time').style.color='aliceblue';
        
        animation.innerHTML=`<lottie-player src="https://assets1.lottiefiles.com/private_files/lf30_LPtaP2.json" background="transparent"
        speed="1" style="width: 200px; height: 200px;" loop autoplay></lottie-player>`;
        
    } 
}

// Date manage
function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];
    return `${date} ${month} (${day}), ${year}`;
}


