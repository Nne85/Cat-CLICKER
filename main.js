// declare a variable for the image and input button
var element = document.getElementById('elem');
var numClick = document.getElementById('num');
    // create an event listener to calculate and check for num of click events
	element.addEventListener('click', function(){
  numClick.value = parseInt(numClick.value) +1;
}, false);