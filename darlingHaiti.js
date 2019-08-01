AOS.init();

//Require input before submitting form
const formButton = document.querySelector('#submit');
formButton.addEventListener('click', function() {
	if (document.querySelector('#email').value && document.querySelector('#message').value) {
		console.log("Email Entered!"); 
		console.log("Message Entered!");
	} else {
		alert ('Please fill in each form item before submitting.');
	}
}); 
