const form = document.getElementById('form');
const email = document.getElementById('email');
const tel = document.getElementById('tel');
const text = document.getElementById('text');
const date = document.getElementById('date');

form.addEventListener('submit', e => {
    e.preventDefault(); //the form won't be submitted in the traditional way, allowing us to perform custom actions before submission.

    validateInputs(); //is a function call. The purpose of this function is to validate the user input in the form fields before the form is submitted.
}); 
     //this code sets up a form with four input fields (email, telephone, text, and date). When the form is submitted, the |||validateInputs()||| function will be called to validate the user's input in these fields. The |||e.preventDefault();||| ensures that the default form submission is prevented, so that the validation can take place before any potential form submission occurs.

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const emailValue = email.value.trim();
    const telValue = tel.value.trim();
    const textValue = text.value.trim();
    const dateValue = date.value.trim();

    if(telValue === '') {
        setError(tel, 'Number is required');
    } else {
        setSuccess(tel);
    }

    if(textValue === '') {
        setError(text, 'Text is required');
    } else {
        setSuccess(text);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(dateValue === '') {
        setError(date, 'Your birthday is required');
    } else if (dateValue.length > 2005 ) {
        setError(date, 'You are a kid hh')
    } else {
        setSuccess(date);
    }

    const regexNumber = /^(?:\+212\s[5-8]\d{1}\s\d{6}|\+212\s[5-8]\d{1}\s\d{3}\s\d{3})$/;

    function validateTel(tel) {
      return regexTel.test(tel);
    }
    
    // Example usage:
    const phoneNumber1 = "+212 6 123456";
    const phoneNumber2 = "+212 7 987 654";
    console.log(validatePhoneNumber(phoneNumber1)); // Output: true
    console.log(validatePhoneNumber(phoneNumber2)); // Output: false
    

    
};
