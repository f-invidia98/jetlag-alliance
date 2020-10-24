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
 var weatherText = obj.weather[2].main;
 console.log(weatherText);
 }
}
request.send();
