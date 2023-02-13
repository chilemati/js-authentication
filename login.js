// ............. for login ............................
let getLoginForm = document.querySelector('.login-body form');
let getLoginFormBtn= getLoginForm.querySelector('.in');
getLoginFormBtn.disabled=true;
let userName= getLoginForm.querySelector('.username');
let password= getLoginForm.querySelector('.password');
let loginErr= getLoginForm.querySelector('.err');
let access1=0; 
let access2=0;
userName.addEventListener('blur', ()=> {
    // console.log(userName.value);
    access1 = verifyValue(String(userName.value));
});
password.addEventListener('keyup', ()=> {
    // console.log(password.value);
   access2 = verifyValue(String(password.value));
   if((access1 == true) && (access2 == true)) {
    // console.log('user can login');
    getLoginFormBtn.disabled=false;
    loginErr.innerHTML='';
   }
   else{
    // console.log('user does not exist please SignUp!');
    loginErr.innerHTML='Wrong Email or Password !!!';
   }
});

getLoginForm.addEventListener('submit', (e)=> {
    e.preventDefault(e);
    let loggedIn= getLoginId(String(password.value));
    saveUserId(String(loggedIn));
    location.href='./dashboard.html';
})

// console.log('does a user with this value exist? ',verifyValue('amadichile@gmail.com'));


// ................end ..............................


// ................function zone .....................

// verify value

function verifyValue(a){
    let grant =null;
    for(i=0; i<100; i++){
        if(localStorage.getItem(localStorage.key(i)) == a ) {
            // console.log('a user with this value exist');
            grant=true;
            break;
        }
        if(localStorage.key(i) == null) {
            // console.log('user value does not exist');
            grant=false;
            break;
        }
    }

    return grant;
}
function getLoginId(a){
    let grant =null;
    for(i=0; i<100; i++){
        if(localStorage.getItem(localStorage.key(i)) == a ) {
            // console.log('a user with this value exist');
            grant=localStorage.key(i);
            grant= grant[grant.length-1];
            break;
        }
        if(localStorage.key(i) == null) {
            // console.log('user value does not exist');
            // grant=false;
            break;
        }
    }

    return grant;
}


function saveUserId (a){
    localStorage.setItem('state', String(a));
}
// let loggedIn= getLoginId('99999999');
// saveUserId(String(loggedIn));

// console.log('LOgin id is: ',getLoginId('99999999'));