$(document).ready(function(){
  $("#hack").hover(function(){
    $("#hackit").addClass("flipped");
    $("#name").text("Rest In Peace Tiger")
  },function(){
    $("#hackit").removeClass("flipped");
    $("#name").text("Kaveen Rodrigo")
  });
});
