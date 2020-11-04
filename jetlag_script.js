  // $('#hide').css("display","none")
  $('#hide').hide()
  $('.hide').hide()

function show(){
$('#hide').toggle("show", function(){
  if ($('#hide').is(":hidden")) {
    $('.b_d').text("Read")
  }else{
    $('.b_d').text("Close")
  }
})
};

function landing(){
  $('.alliance').css("left", "0");
  setTimeout(function(){
    $('.hide').toggle("show");
  },1300)
};


// landing();
setTimeout(landing,300)

// $(document).ready(function(){
//     $('body').css("display","block");
// })

// setTimeout(landing2,200)

link = "https://api.openweathermap.org/data/2.5/weather?q=Monza,it&units=metric&apikey=d0bb25573b9aded09cc4b09e9cbb85a6";
var request = new XMLHttpRequest();
request.open('GET',link,true);
request.onload = function(){
 var obj = JSON.parse(this.response);
 if (request.status >= 200 && request.status < 400) {
 var weatherText = obj.weather[0].main;
 console.log(weatherText);
 if (weatherText.includes("Fog")) {
   weatherText="Foggy";
 }
 if (weatherText.includes("Rain")) {
   weatherText="Rainy";
 }
 if (weatherText.includes("Sun")) {
   weatherText="Sunny";
 }
 if (weatherText.includes("Cloud")) {
   weatherText="Cloudy";
 }
 $(".weather_text").text(weatherText);
 }
}
request.send();

link2 = "https://api.openweathermap.org/data/2.5/weather?q=Berlin&units=metric&apikey=d0bb25573b9aded09cc4b09e9cbb85a6";
var request2 = new XMLHttpRequest();
request2.open('GET',link2,true);
request2.onload = function(){
 var obj2 = JSON.parse(this.response);
 if (request2.status >= 200 && request2.status < 400) {
 var weatherText2 = obj2.weather[0].main;
 console.log(weatherText2);
 if (weatherText2.includes("Fog")) {
   weatherText2="Foggy";
 }
 if (weatherText2.includes("Rain")) {
   weatherText2="Rainy";
 }
 if (weatherText2.includes("Sun")) {
   weatherText2="Sunny";
 }
 if (weatherText2.includes("Cloud")) {
   weatherText2="Cloudy";
 }
 $(".weather_text_2").text(weatherText2);
 }
}
request2.send();

link3 = "https://api.openweathermap.org/data/2.5/weather?q=Venice,it&units=metric&apikey=d0bb35573b9aded09cc4b09e9cbb85a6";
var request3 = new XMLHttpRequest();
request3.open('GET',link3,true);
request3.onload = function(){
 var obj3 = JSON.parse(this.response);
 if (request3.status >= 200 && request3.status < 400) {
 var weatherText3 = obj3.weather[0].main;
 console.log(weatherText3);
 if (weatherText3.includes("Fog")) {
   weatherText3="Foggy";
 }
 if (weatherText3.includes("Rain")) {
   weatherText3="Rainy";
 }
 if (weatherText3.includes("Sun")) {
   weatherText3="Sunny";
 }
 if (weatherText3.includes("Cloud")) {
   weatherText3="Cloudy";
 }
 $(".weather_text_3").text(weatherText3);
 }
}
request3.send();
