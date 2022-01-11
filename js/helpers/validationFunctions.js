const isValidPassword = pass => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return re.test(String(pass).toLowerCase());
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const setError = (element, message) => {
    const form = element.parentElement;
    form.className = 'form_input error';
    const small = form.querySelector('.error');
    small.innerText = message;
}

const setSuccess = element => {
    const form = element.parentElement;
    const small = form.querySelector('.error');
    form.className = 'form_input success';
    small.innerText = '';
}

export { 
    isValidPassword,
    isValidEmail, 
    setError,
    setSuccess
}