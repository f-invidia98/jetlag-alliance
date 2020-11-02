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
   weatherText="foggy";
 }
 if (weatherText.includes("Rain")) {
   weatherText="raining";
 }
 if (weatherText.includes("Sun")) {
   weatherText="sunny";
 }
 if (weatherText.includes("Cloud")) {
   weatherText="cloudy";
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
   weatherText2="foggy";
 }
 if (weatherText2.includes("Rain")) {
   weatherText2="raining";
 }
 if (weatherText2.includes("Sun")) {
   weatherText2="sunny";
 }
 if (weatherText2.includes("Cloud")) {
   weatherText2="cloudy";
 }
 $(".weather_text_2").text(weatherText2);
 }
}
request2.send();
