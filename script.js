var email = '';
var password = '';

function signup() {
	if (document.getElementById('agree').checked == true) {
		email = document.getElementById('email').value;
		password = document.getElementById('password').value;
	} else {
		p = document.createElement('P');
		p.innerHTML = 'You need to agree to the terms and conditions.';
		document.body.appendChild(p);
	}
}

function login() {
	confirmEmail = document.getElementById('mail').value;
	confirmPass = document.getElementById('password').value;
	if (confirmEmail == email && confirmPass == password) {
		p = document.createElement('P');
		p.innerHTML = 'You successfully logged in to your account!';
		document.body.appendChild(p);
    window.location.replace("https://ovct.netlify.com");
	} else {
		p = document.createElement('P');
		p.innerHTML = 'Incorrect email or password';
		document.body.appendChild(p);
	}
}
