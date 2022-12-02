import { navbar } from '../components/navbar.js';

document.getElementById('navbar').innerHTML = navbar();

var card = document.getElementById('card');
function openregister() {
	card.style.transform = 'rotateY(-180deg)';
}
function openlogin() {
	card.style.transform = 'rotateY(0deg)';
}

//form-validation

function checkcredentials() {
	let registermobile = document.getElementById('registermobileno').value;
	let createpass = document.getElementById('create-password').value;
	let confirmpass = document.getElementById('confirm-password').value;
	localStorage.setItem('mobile', registermobile);
	localStorage.setItem('createpass', createpass);
	localStorage.setItem('confirmpass', confirmpass);
	if (createpass != confirmpass) {
		alert('password doesnot match');
	} else {
		alert('Registration successfull');
		openlogin();
	}
}

function logincheck() {
	let loginmobile = document.getElementById('mobileno').value;
	let loginpassword = document.getElementById('password').value;
	let mobile = localStorage.getItem('mobile');
	let confirmpassword = localStorage.getItem('confirmpass');

  if(loginmobile != mobile ){
    alert("acount doesnot exist , kindly register yourself first")
    openregister();
  }

  if(loginmobile===mobile && loginpassword===confirmpassword){
    alert("login successfull")
    window.location.href="../pages/index.html"
  }
  else{
    alert("wrong details");
  }
}
