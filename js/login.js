// console.log('Button Clicking file added');
// search: form submit reloading page.-->HW
// document.getElementById('id').addEventListener('click', function(){})
//step-1: set event handler
document.getElementById('button-login')
 .addEventListener('click', function(event){
    //step-2: prevent default behavior(prevent reloading browser)
    event.preventDefault(); //<-- Vejal to beginners
    

    //step-3: get the phone number and the pin number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    

    //step-4: validate phone and pin
    //this is temporary.You shouldn't do this.
    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('you are logged in');
        //step-5: allow user to use the website
        window.location.href = '/home.html'
    }
    else{
        alert('Wrong phone number or pin')
    }
});