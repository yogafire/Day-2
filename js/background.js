$(document).ready(function() {

  function randomColor()  {
  	return '#' + Math.random().toString(16).slice(2,8);
  	// #3f31ab
  }

  $('#bgBtn').on("click", function()  {
    console.log("Hello Yong!");
  
    $('.navbar').css('background', randomColor());
  });

});