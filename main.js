let form = document.querySelector('#function');
let mail = document.querySelector('#MAIL');
let lpass = document.querySelector('#PASSWORD');
form.addEventListener('submit',function(e){
	e.preventDefault()
	let mail = document.querySelector('#MAIL').value;
let lpass = document.querySelector('#PASSWORD').value;
	
	let result = document.querySelector('#result');
    if(mail ==="" ){
		result.innerHTML="Please Enter Your Mail Or Phone number";
		result.style.color="red";
	}
	else if(lpass === ""){
		result.innerHTML="Please Enter Your Password";
		result.style.color="red";	
	}

	  localStorage.setItem("Email",mail);
	  localStorage.setItem("Psw",lpass);
	
	readPost();
});

let data={};
function readPost(){
   data["mail"]=mail.value;
   data["Password"]=lpass.value;
   console.log(data); 
}


