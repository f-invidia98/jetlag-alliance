  // $('#hide').css("display","none")
  $('#hide').hide()
function show(){
$('#hide').toggle("show", function(){
  if ($('#hide').is(":hidden")) {
    $('.b_d').text("Read full info")
  }else{
    $('.b_d').text("Close full info")

  }
})









}
