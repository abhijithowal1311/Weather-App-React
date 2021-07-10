const utils = {
    validateEmail,
    validateUserForm
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateUserForm(name, email, location) {
    let errors = {}
    errors.email = validateEmail(email) ? "" : "Please Enter a valid Email Address";
    let response = {errorPresent:  errors.email, errors: errors }
    if (!response.errorPresent) {
        localStorage.setItem("userInfo",JSON.stringify({name: name, email: email, location: location, present: true}))
    }
    return response;
}

export default utils;