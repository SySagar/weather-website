// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

const weatherApi = {
    key: "bab281d79e5f1e9755a68d754cc313e7",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather", 
}

const searchInputBox = document.getElementById('input-box');

// Event Listener Function on keypress
searchInputBox.addEventListener('keypress', (event) => {
    
    if(event.keyCode == 13) {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display = "block";
    }

});

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

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);
    let time =document.querySelector(".time");
    time.innerText=todayDate.getHours()+":"+todayDate.getMinutes() ;

    const animation=document.querySelector(".animation");

    const wind=document.querySelector('.speed');
    wind.innerText=`${weather.wind.speed} m/s`;

    const humidity=document.querySelector('.humidity');
    humidity.innerText=`${weather.main.humidity}%`;

    const pressure=document.querySelector('.pressure');
    pressure.innerText=`${weather.main.pressure} hPa`;

    const visibility=document.querySelector('.visibility');
    visibility.innerText=`${weather.visibility} m`;
    

    if(weatherType.textContent == 'Clear') {
<<<<<<< HEAD
        document.body.style.backgroundImage = "url('images/clearSky.jpg')";
=======
        // document.body.style.backgroundImage = "url('images/clear.jpg')";
        animation.innerHTML=`<lottie-player src="https://assets10.lottiefiles.com/packages/lf20_jqfghjiz.json" background="transparent"
        speed="1" style="width: 200px; height: 200px;" loop autoplay></lottie-player>`;
        
>>>>>>> 16d1cca72be5ddb5fc1cd1a8ee745f8090156353
        
    } else if(weatherType.textContent == 'Clouds') {
        // document.body.style.backgroundImage = "url('images/cloud.jpg')";

<<<<<<< HEAD
        document.body.style.backgroundImage = "url('images/Cloudy.jpg')";
        
    } else if(weatherType.textContent == 'Haze') {

        document.body.style.backgroundImage = "url('images/Haze.jpg')";
        
    }     else if(weatherType.textContent == 'Rain') {
        
        document.body.style.backgroundImage = "url('images/Rain.jpg')";
        
    } else if(weatherType.textContent == 'Snow') {
        
        document.body.style.backgroundImage = "url('images/Snow.jpg')";
    
    } else if(weatherType.textContent == 'Thunderstorm') {
    
        document.body.style.backgroundImage = "url('images/Thunder.jpg')";
=======
        animation.innerHTML=`<lottie-player src="https://assets7.lottiefiles.com/packages/lf20_zsfbtp0v.json" background="transparent"
        speed="1" style="width: 200px; height: 200px;" loop autoplay></lottie-player>`;
        
    } else if(weatherType.textContent == 'Haze') {
        
        // document.body.style.backgroundImage = "url('images/cloud.jpg')";
        animation.innerHTML=`<lottie-player src="https://assets3.lottiefiles.com/private_files/lf30_dmgebz1e.json" background="transparent"
        speed="1" style="width: 200px; height: 200px;" loop autoplay></lottie-player>`;
        
    }     else if(weatherType.textContent == 'Rain') {
        
        // document.body.style.backgroundImage = "url('images/rain.jpg')";
        animation.innerHTML=`<lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_orqfuyox.json" background="transparent"
        speed="0.5" style="width: 200px; height: 200px;" loop autoplay></lottie-player>`;
        
    } else if(weatherType.textContent == 'Snow') {
        
        // document.body.style.backgroundImage = "url('images/snow.jpg')";
        animation.innerHTML=`<lottie-player src="https://assets7.lottiefiles.com/private_files/lf30_0tyvusxj.json" background="transparent"
        speed="1" style="width: 200px; height: 200px;" loop autoplay></lottie-player>`;
        
    } else if(weatherType.textContent == 'Thunderstorm') {
        
        // document.body.style.backgroundImage = "url('images/thunderstorm.jpg');

        animation.innerHTML=`<lottie-player src="https://assets1.lottiefiles.com/private_files/lf30_LPtaP2.json" background="transparent"
        speed="1" style="width: 200px; height: 200px;" loop autoplay></lottie-player>`;
>>>>>>> 16d1cca72be5ddb5fc1cd1a8ee745f8090156353
        
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


