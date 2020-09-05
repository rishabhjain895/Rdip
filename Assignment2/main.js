//-----------------task 1 -------------------//
function add(){
	n1 = document.getElementById('op1').value;
	n2 = document.getElementById('op2').value;
	document.getElementById('op').innerHTML = "+";
	a = Number(n1);
	b = Number(n2);
	return a+b;
}

function sub(){
	n1 = document.getElementById('op1').value;
	n2 = document.getElementById('op2').value;
	document.getElementById('op').innerHTML = "-";
	a = Number(n1);
	b = Number(n2);
	return a-b;
}

function div(){
	n1 = document.getElementById('op1').value;
	n2 = document.getElementById('op2').value;
	document.getElementById('op').innerHTML = "/";
	a = Number(n1);
	b = Number(n2);
	if(b == 0)
		alert("Cannot divide by zero");
	else
		n = a/b;
		return n;
}

function mul(){
	n1 = document.getElementById('op1').value;
	n2 = document.getElementById('op2').value;
	document.getElementById('op').innerHTML = "x";
	a = Number(n1);
	b = Number(n2);
	return a*b;
}

function percentage(){
	n1 = document.getElementById('op1').value;
	n2 = document.getElementById('op2').value;
	document.getElementById('op').innerHTML = "%";
	a = Number(n1);
	b = Number(n2);
	return (a*b)/100;
}

function absolute(){
	n1 = document.getElementById('op1').value;
	a = Number(n1);
	return Math.abs(a);
}

function squareroot(){
	n1 = document.getElementById('op1').value;
	a = Number(n1);
	n = Math.sqrt(a);
	if(Number.isInteger(n))
		return n;
	else
		n1 = n.toFixed(3);
		return n1;

}
//-----------------task 1 -------------------//

//-----------------task 2 -------------------//
function validatename(){
	var name = document.getElementById('name').value;
	var patt = /^[0-9]*/;
	var checker = name.match(patt);
	if(checker == "")
		return "Name is: "+name;
	else
		alert("Invalid name : Name should start with a letter.");
		return "Invalid name : Name should start with a letter.";
}
function validatenumber(){
	var number = document.getElementById('number').value;
	var pattnum = /^[0-9]{10}$/;
	if(number.match(pattnum))
		return "Phone number is: "+number;
	else
		alert("Please enter a valid 10-digit phone number");
		return "Please enter a valid 10-digit phone number";
}
function validateemail(){
	var email = document.getElementById('email').value;
	var pattemail = /.+@.+\..+/;
	if(email.match(pattemail))
		return "Email is: "+email;
	else
		alert("Provide a valid email id");
		return "Provide a valid email id";
}

//-----------------task 2 -------------------//

//-----------------task 3 -------------------//

function palindromecheck(string){
	document.getElementById('pal').style.color = '#5de310';
	var result;
	var s1 = string.value;
	var s = s1.toLowerCase();
	var rev = "";
	for(i = s.length-1 ; i>=0 ; i-- ){
		rev+=s[i];
	}
	if(s == rev){
		document.getElementById('pal').innerHTML = s1+" is a palindrome!";
		return  s1+" is a palindrome!";
	}
	else{
		document.getElementById('pal').style.color = '#db0b00';
		document.getElementById('pal').innerHTML = s1+" is a not palindrome!";
		return s1+" is not a palindrome!";
	}
}

function anagramcheck(words,ana){
	document.getElementById('anagram').style.color = '#5de310';
	var sentence = words.value;
	var word = ana.value;
	var a = sentence.split(' ').join('');
	var b = word.split(' ').join('');
	var an1 = a.toLowerCase().split('').sort().join('');
	var an2 = b.toLowerCase().split('').sort().join('');
	if(an1 == an2){
		document.getElementById('anagram').innerHTML = word+" is an anagram!";
		return word+" is an anagram!";
	}
	else{
		document.getElementById('anagram').style.color = '#db0b00';
		document.getElementById('anagram').innerHTML = word+" is a not an anagram!";
		return word+" is a not an anagram!";
	}
}

//-----------------task 3 -------------------//

//-----------------task 4 -------------------//

function t4function() {
	var objs = ["Human","Cockroach","Nuclear-Bomb"];
	var n1 = Math.floor(Math.random()*1001);
	var n2 = Math.floor(Math.random()*1001);
	var a = n1%3;
	var b = n2%3;
	var obj1,obj2;
	var resultt = "";
	obj1 = objs[a];
	obj2 = objs[b];
	if (obj1 == "Human") {
		if(obj2 == "Cockroach"){
			resultt = obj1 + " wins";
		}
		else if(obj2 == "Nuclear-Bomb"){
			resultt = obj2 + " wins!";
		}
		else if(obj2 == "Human"){
			resultt = "TIE!";
		}
	}
	else if (obj1 == "Cockroach") {
		if(obj2 == "Human"){
			resultt = obj2 + " wins!";
		}
		else if(obj2 == "Nuclear-Bomb"){
			resultt = obj1 + " wins!";
		}
		else if(obj2 == "Cockroach"){
			resultt = "TIE!";
		}
	}
	else{
		if(obj2 == "Human"){
			resultt = obj1 + " wins!";
		}
		else if(obj2 == "Cockroach"){
			resultt = obj2 + " wins!";
		}
		else if(obj2 == "Nuclear-Bomb"){
			resultt = "TIE!";
		}
	}
	document.getElementById("object1").innerHTML = obj1 ;
	document.getElementById("object2").innerHTML = obj2 ;
	document.getElementById("tb1").value = n1 ;
	document.getElementById("tb2").value = n2 ;

	return resultt;
}
//-----------------task 4 -------------------//

//-----------------task 5 -------------------//
function conversion(){
	var amt = document.getElementById('amount').value;
	var from = document.getElementById('fromcurrency').value;
	var to = document.getElementById('tocurrency').value;
	var link1 = "https://free.currconv.com/api/v7/convert?q=";
	var link2 = from+"_"+to;
	var link3 = "&compact=ultra&apiKey=ecd96f38ab9cbbe978b7";
	var final = link1+link2+link3;
	const getdata = () =>{
	return fetch(final)
	.then(res => res.json())
	.then(data => document.getElementById('finalamt').innerHTML = amt+" "+from+" = "+((amt * Number(JSON.stringify(data).slice(11,-1))).toFixed(3))+" "+to)
	}
	getdata();
}
//-----------------task 5 -------------------//
