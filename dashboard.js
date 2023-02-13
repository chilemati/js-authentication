// get logged in user id
let currentUser = localStorage.getItem('state');
console.log('current user Id is: ', currentUser);
let email = document.querySelector('.email');
let phone = document.querySelector('.phone');
let gender = document.querySelector('.gender');
let fname = document.querySelector('.fname');
let lname = document.querySelector('.lname');
let today = document.querySelector('.todaysdate');
let time = document.querySelector('.time');
let greet = document.querySelector('.right-greeting');
let getbody = document.querySelector('.dashboard-body');
let sex=0;
let d1= new Date();
let todaysDate = String(d1).slice(0, 15);
// display details

// greetings
let hr1 = d1.getHours();
// let hr1= 16;  // adjust time to see different images

if((hr1 >=0) && (hr1 < 12)) {
    // good morning
    greet.innerHTML='Morning';
    getbody.style.backgroundImage="url('./img/Koala.jpg')";
    
}
else if( (hr1 >=12) && (hr1 < 16)) {
    // good afternoon
    greet.innerHTML='Afternoon';
    getbody.style.backgroundImage="url('./img/Jellyfish.jpg')";
}
else{
    // good eveing
    // console.log('goo evening');
    greet.innerHTML='Evening';
    getbody.style.backgroundImage="url('./img/Tulips.jpg')";
}

email.innerHTML='Email: '+String(localStorage.getItem(`email${currentUser}`));
phone.innerHTML='Phone Number: '+String(localStorage.getItem(`phone${currentUser}`));
fname.innerHTML=String(localStorage.getItem(`fname${currentUser}`));
lname.innerHTML=String(localStorage.getItem(`lname${currentUser}`));

console.log(localStorage.getItem(`gender${currentUser}`));

if(localStorage.getItem(`gender${currentUser}`) == 'male') {
    sex= 'Mr.'
}
else{
    sex= 'Mrs.'
}
gender.innerHTML= sex;
today.innerHTML=String(todaysDate);

// add zero if less than 10
function showTwoDigits(a) {

    return  (a < 10) ? `0${a}`: a;
}

console.log(showTwoDigits(9));



function showTime() {
    let d= new Date();
let hr=d.getHours();
let min=d.getMinutes();
let sec = d.getSeconds();
let am=0;
(hr < 12) ? am='AM' : am="PM";
(hr%12 == 1) ? hr : hr= hr%12;
// console.log(d);
// console.log(`${hr} : ${min} : ${sec} ${am}`);
   return `${hr} : ${showTwoDigits(min)} : ${showTwoDigits(sec)} ${am}`;
}

let t = setInterval(()=> {
   time.innerHTML= String(showTime());
}, 1000);
// showTime();
