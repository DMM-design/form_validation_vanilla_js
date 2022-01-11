import { isValidPassword, isValidEmail,  setError, setSuccess} from '../helpers/validationFunctions.js';
export class SignUpForm {
    constructor(form)
    {
        this.form = form;
        this.createInner();
        this.$ = (elem) => this.form?.querySelector(elem);
        this.submitBTN(this.$('#btn-submit'));
        this.form.addEventListener('input', (e) => this.validation());
    }

    createInner()
    {
        const html = `
            <header>
                <h2>Sign Up</h2>
            </header>
            <article id="inputs form-signup">
                <p>
                    <label>Full Name</label>
                    <input type="text" name="fullname" id="fullname" class="form_input" >
                    <small class="error"></small>
                </p>
                <p>
                    <label>E-Mail</label>
                    <input type="email" name="email" id="email" class="form_input">
                    <small class="error"></small>
                </p>
                <p>
                    <label>Password</label>
                    <input type="password" name="password" id="password" class="form_input">
                    <small class="error"></small>
                </p>
                <p>
                    <label>Confirm Password</label>
                    <input type="password" name="confirm_password" id="confirm_password" class="form_input">
                    <small class="error"></small>
                </p>
            </article>
            <footer>
                <button type="submit" class="btn btn-signUp" id="btn-submit">Create Account</button>
            </footer>
        `;
        this.form.innerHTML = html;
    }

    submitBTN(btn) {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            this.validation();
        })
    }

    validation() {
        const {email, password, confirm_password, fullname} = this.form?.elements;
        const emailValue = email?.value.trim();
        const passwordValue = password?.value.trim();
        const confirmPassValue = confirm_password?.value.trim();
        const fullnameValue = fullname?.value.trim();
        if(fullnameValue == "")
            setError(fullname, "Full Name cannot be empty.")
        else
            setSuccess(fullname)

        if(emailValue == "")
            setError(email, "Email cannot be empty.");
        else if (!isValidEmail(emailValue))
            setError(email, "Please enter a valid email.");
        else
            setSuccess(email);

        if(passwordValue == "")
            setError(password, "Password cannot be empty.");
        else if(!isValidPassword(passwordValue))
            setError(password, "Minimum eight characters, at least one letter, one number and one special character.");
        else if (passwordValue.length < 8)
            setError(password, "The length of the password must be 8 or greater.");
        else
            setSuccess(password);

        if(confirmPassValue == "")
            setError(confirm_password, "Confirm Password cannot be empty.");
        else if(confirmPassValue != passwordValue)
            setError(confirm_password, "Confirm Password id not equal to password value.");
        else
            setSuccess(confirm_password);
    }
}