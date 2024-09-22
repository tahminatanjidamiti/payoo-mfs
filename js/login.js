// console.log('Button Clicking file added');
// search: form submit reloading page.-->HW
// document.getElementById('id').addEventListener('click', function(){})
//step-1: set event handler
document.getElementById('button-login').addEventListener('click', function(event){
    //step-2: prevent default behavior(prevent reloading browser)
    event.preventDefault(); //<-- Vejal to beginners
    console.log('login button clicked');

    //step-3: get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
})