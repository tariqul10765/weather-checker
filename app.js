var inputTextEl=document.getElementById('inputText');
var inputButtonEl=document.getElementById('inputButton');

var areaNameEl=document.getElementById('areaName');
var weatherEl=document.getElementById('weather');
var iconEl=document.getElementById('icon');
var tempEl=document.getElementById('temp');

var humidityEl=document.getElementById('humidity');
var windEl=document.getElementById('wind');


inputButtonEl.addEventListener('click',showWeather);

function showWeather(){
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+inputTextEl.value+"&appid=61beeff9583bf5cb51c5b08e85c49138",
    function(data){
    console.log(data);

    var cel=Math.floor(Number(data.main.temp)-273);
    var far=Math.floor(((Number(data.main.temp)-273)*9)/5)+32;
    iconEl.setAttribute('src','http://openweathermap.org/img/w/'+data.weather[0].icon+'.png');

    areaNameEl.innerHTML=data.name+','+data.sys.country +'</br>'+ data.weather[0].description;
    //weatherEl.innerHTML=;
    tempEl.innerHTML=cel+'<span>&#176;</span>C </br> ';
    tempEl.innerHTML+=far+'<span>&#176;</span>F ';

    humidityEl.innerHTML='Humidity: '+data.main.humidity+'%' + '</br>'+ 'Wind: '+Math.floor(data.wind.speed)+' Km/h';
    //windEl.innerHTML=;
    
    }
);
}