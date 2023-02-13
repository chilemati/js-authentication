// signup page js
let getSignupForm = document.querySelector('.signup form');

 let getFormGender = document.querySelectorAll('.signup .gender');
 
 let getFormLastname = document.querySelector('.signup .lastName');
 
 let getFormEmail = document.querySelector('.signup .email');
 
 let getFormPhone = document.querySelector('.signup .phone');
 
 let getFormPassword = document.querySelector('.signup .password');
 
 let getSignupButton = document.querySelector('.signup .submit button');
 
 let getPerr = document.querySelector('.signup .perr');
 
 let getEerr = document.querySelector('.signup .eerr');
 
 let getFormFirstname = document.querySelector('.signup .firstName');


getSignupButton.style.display='none';

let radios =null;
getFormGender.forEach((x) => {
    // console.log(x);
    x.addEventListener('click', (e) => {
        // console.log(e.target.value);
        radios=e.target.value;
    });
});

// get form submit button

// give focus to email

let access1=0;
let access2=0;

getFormPhone.addEventListener('blur', ()=> {
    if(verifyValue(getFormPhone.value)== false){
       
       access1=1;

        console.log('access value is: ', access1);
    }

});
getFormEmail.addEventListener('blur', ()=> {
    // console.log('out of focus');
    // console.log(getFormEmail.value);
    // console.log('does email value exist after blur?', verifyValue('Amadi chile'));

    if(verifyValue(getFormEmail.value)== false){

        
        access2=1;
        console.log('access value is: ', access2);
    }
    
});


getFormPassword.addEventListener('focus', () => {
    if((access1 + access2) ==2  ){
        console.log('user can signUp .......................');
        getSignupButton.style.display='block';
        getPerr.innerHTML='';
        getEerr.innerHTML='';
    }
    else{
       access2 ? getPerr.innerHTML='A user with this detail Exist': '';
       access1 ? getEerr.innerHTML='A user with this detail Exist': '';
    }
});

// save input function

function saveEach (a,b) {
    //  save fname
 let {lastFound, lastKey, lastId} = doesKeyExist(a);
    if(lastId <= 0) {
        // fv does not exist;
        localStorage.setItem(String(a+1),b);
    }

    if(lastId >= 1 ) {
        localStorage.setItem(String(a+(Number(lastId)+1)),b);
    }
}

//  saveEach('names','saved with seaveEach5');

getSignupForm.addEventListener('submit', (e) => {
    //save values to local storage
    e.preventDefault(e);

    // save each signup input accordingly
    saveEach('fname',String(getFormFirstname.value));
    saveEach('lname',String(getFormLastname.value));
    saveEach('email',String(getFormEmail.value));
    saveEach('phone',String(getFormPhone.value));
    saveEach('password',String(getFormPassword.value));
    saveEach('gender',String(radios));
    
    location.href='./login.html';
   
    
}, false);





//  .....vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv....................................... 

// verify value

function verifyValue(a){
    let grant =null;
    for(i=0; i<100; i++){
        if(localStorage.getItem(localStorage.key(i)) == a ) {
            console.log('a user with this value exist');
            grant=true;
            break;
        }
        if(localStorage.key(i) == null) {
            console.log('user value does not exist');
            grant=false;
            break;
        }
    }

    return grant;
}

// a function to get the last index and value of a string

function doesKeyExist(a){
    let lastFound=null, lastKey=null, lastId=null;
    for(let i=1; i< 50; i++){
        if(localStorage.getItem(`${a}${i}`) == null){
             lastFound= localStorage.getItem(`${a}${i-1}`);
             lastKey= `${a}${i-1}`;
             lastId= lastKey[(lastKey.length) - 1] ;
            break;
        }
        console.log(localStorage.key(`${a}${i}`));
    }

    return {lastFound, lastKey, lastId};
}

// function to save to localStorage

function saveTolocalStorage(a,b){
    // localStorage.setItem(`${a}`, `${JSON.stringify(b)}`); // for object
    localStorage.setItem(`${a}`, `${b}`);
}

function getFromLocalStorage(a){
    // return JSON.parse(localStorage.getItem(`${a}`));  // for object
    return `${a}`;
}

function deleteFromLocalStroge(a){
    localStorage.removeItem(`${a}`);
}

// keys

function verifyUser (a,b) {
//  a= key
// value
    // loop through the getFromLocalStorage
let L=null; // last index  of Local storage (ls)

let  grant= false;

for(i=16; i< 100;){  // items in ls

    if(localStorage.key(i) == null) {  // stop loop if null
        L=i;
        break;
    }
    // console.log(localStorage.key(i));
    if(localStorage.key(i)== `${a}`){
        if(getFromLocalStorage(`${a}`) == `${b}`){
            console.log('User Exist');
            grant= true;
        }
        else{
            console.log('User does Not Exist');
            grant=false;
        }
    }
    i++;
    
}
// console.log('length of localStorage is: ', L);

return grant;

}

function checkUser (a,b) {
    let keyz= getFromLocalStorage(a);
    let grant =false;

    if(keyz == b) {
        console.log('user exist');
        grant=true;
    }
    else{
        console.log('user does not exist');
        grant=false;
    }

    return grant;
}

// let off=null;
// let t = setInterval(()=>{
// off++;
// console.log(off);
// if(off ==1){
//    document.querySelector('.signup .fnerr').innerHTML='user name exist';
// }
// if(off == 9){
//     document.querySelector('.signup .fnerr').innerHTML=' ';
// }

// if(off == 10) {
//     clearTimeout(t);
// }

   
   
// },2000);

// saveTolocalStorage('milky1', 'way galay for earth');

// let {lastFound, lastKey, lastId} = doesKeyExist('milky');



// console.log('lastFound name is: ', lastFound);

// console.log('lastKey name is: ', lastKey);
// console.log('lastId value is: ', lastId);

// console.log('does email value exist? : ', checkUser('name', 'Amadi chile'));

// doesKeyExist('milky');
