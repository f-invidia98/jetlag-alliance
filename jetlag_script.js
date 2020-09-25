  // $('#hide').css("display","none")
  $('#hide').hide()
  $('.hide').hide()

function show(){
$('#hide').toggle("show", function(){
  if ($('#hide').is(":hidden")) {
    $('.b_d').text("Read full info")
  }else{
    $('.b_d').text("Close full info")
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
