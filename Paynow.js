

const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const cardnumber = document.getElementById('cardnumber');
const expirationdate = document.getElementById('expirationdate');
const cvv = document.getElementById('cvv');
const zipcode = document.getElementById('zipcode');





form.addEventListener('submit', e=> {               
    e.preventDefault();     
    if(validateInputs()) {
        window.location.href = "orderconfirmation.html";
    }
    });

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
};

const isValidEmail = email => {
   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase());
}



const validateInputs = () => {      
    let success = true;
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    const cardnumberValue = cardnumber.value.trim();
    const expirationdateValue = expirationdate.value.trim();
    const cvvValue = cvv.value.trim();
    const zipcodeValue = zipcode.value.trim();


    //adding validation conditions for each value 
    if(firstnameValue === '') {
        setError(firstname, 'First name is required');
        success = false;
    } else {
        setSuccess(firstname);
    }

    if(lastnameValue === ''){
        setError(lastname, 'Last name is required');
        success = false;
    } else {
        setSuccess(lastname);
    }

    if(emailValue ===''){
        setError(email, 'Email is required');
        success = false;
    } else if (!isValidEmail(emailValue)){
        setError(email, 'Prove a valid email address');
        success = false;
    } else {
        setSuccess(email);
    }

    if(passwordValue === ''){
        setError(password, 'Password is required');
        success = false;
    } else if (passwordValue.length < 8){
        setError(password, 'Password must be at least 8 characters.');
        success = false;
    } else {
        setSuccess(password);
    }

    if(password2Value === ''){
        setError(password2, 'Please confirm your password');
        success = false;
    } else if (password2Value !== passwordValue){
        setError(password2, 'Passwords do not match. Please try again');
        success = false;
    } else {
        setSuccess(password2);
    }

    if(cardnumberValue === ''){
        setError(cardnumber, 'Card number is required');
        success = false;
    } else if (cardnumberValue.length < 8){
        setError(cardnumber, 'Card number must be at least 8 digits.');
        success = false;
    } else {
        setSuccess(cardnumber);
    }

    if(expirationdateValue === ''){
        setError(expirationdate, 'Enter the expiration date');
        success = false;
    } else {
        setSuccess(expirationdate);
    }

    if(cvvValue === ''){
        setError(cvv, 'Please enter the cvv');
        success = false;
    } else {
        setSuccess(cvv);
    }

    if(zipcodeValue === ''){
        setError(zipcode,'Zipcode is required');
        success = false;
    } else if(zipcodeValue.length < 5) {
        setError(zipcode, 'Zipcode must be at least 5 digits');
        success = false;
    } else {
        setSuccess(zipcode);
    
    return success;
    }
};

