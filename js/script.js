function init(){
//add your javascrip between these two lines of code

  var text = document.getElementById("entryinput");
  var button = document.getElementById("entrybutton");

  /*Will alert the user with a popup message with whatever was written.*/
  button.addEventListener("click", function () {
    alert("James Dumitru: " + text.value);
    document.getElementById("textoutput").innerHTML = text.value
	});



}
window.addEventListener('load', init);
