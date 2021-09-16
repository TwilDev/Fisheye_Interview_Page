function modalValidate(event) {

    var err = document.getElementById('error-span');
    //regex for validation
    const emailValidation = /\S+@\S+\.\S+/;
    const phoneValidation = /^[0-9]{1,10}$/;

    //get all inputs
    let inputValue = document.getElementsByClassName('modal-text');
    //loop through class
    for (let i=0; i<inputValue.length; i++) { 
        //check if value is empty
        if (!inputValue[i].value) {
            //if empty return false and fill in error
            err.style.display = "block";
            err.textContent += "Please fill in all fields";
            return false
        } 
    }

    //test email matches standard format text@text.text
    if(!emailValidation.test(inputValue[2].value)) {
        console.log(inputValue[1]);
        //print out error
        err.style.display = "block";
        err.textContent += "Please provide a valid email address";
        return false;
        //test phone is only numbers and 10 characters long - much better tests could be done for this kind of validation
    } else if(!phoneValidation.test(inputValue[1].value)) {
        err.style.display = "block";
        err.textContent += "Please provide a valid phone number";
        return false;
    } else {  
        //if passed tests 
        return true;
    }


   
}