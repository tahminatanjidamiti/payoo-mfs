document.getElementById('btn-cash-out')
 .addEventListener('click', function(event){
    //prevent page reload after form submit
    event.preventDefault();

    //step-2: get cash to be out to the account
    const cashOut = document.getElementById('input-cash-out').value;
    

    //get the pin number provided
    const pinNumber = document.getElementById('input-cash-out-pin').value;
    
    //step-3: verify pin number
    //wrong way to validate pin number
    if(pinNumber === '1234'){
        //step-4: get the current balance
        const balance = document.getElementById('account-balance').innerText;

        //step-5: reduce the balance
        const cashOutNumber = parseFloat(cashOut);
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber - cashOutNumber;
        console.log(newBalance);

        //step-6: update the balance in the UI/DOM
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to cash out! Please try again.');
    }
});