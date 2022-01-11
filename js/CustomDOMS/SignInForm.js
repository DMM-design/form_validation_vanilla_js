import { isValidEmail,  setError, setSuccess} from '../helpers/validationFunctions.js';

export class SignInForm {
    constructor(form)
    {
        this.form = form;
        this.createInner();
        this.$ = (elem) => this.form?.querySelector(elem);
        this.submitBTN(this.$('#btn-submit'));
        this.form.addEventListener('input', (e) => this.validation());
    }

    createInner() {
        const html = `
            <header>
                <h2>Sign In</h2>
            </header>
            <article id="inputs form-signIn">
                <p>
                    <label>E-Mail</label>
                    <input type="email" name="email" id="email" class="form_input" placeholder="admin@email.com">
                    <small class="error"></small>
                <p>
                    <label>Password</label>
                    <input type="password" name="password" id="password" class="form_input"  placeholder="admin$12">
                    <small class="error"></small>
                </p>
            </article>
            <footer>
                <button type="submit" class="btn btn-signIn" id="btn-submit">Sign In</button>
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
        const [email, password] = this.form?.elements;
        const emailValue = email?.value.trim();
        const passwordValue = password?.value.trim();

        if(emailValue == "")
            setError(email, "Email cannot be empty.");
        else if (!isValidEmail(emailValue))
            setError(email, "Please enter a valid email.");
        else if (emailValue != "admin@email.com")
            setError(email, "The email is not registered in the DB.");
        else
            setSuccess(email);

        if(passwordValue == "")
            setError(password, "Password cannot be empty.");
        else if (passwordValue != "admin$12")
            setError(password, "The password is not registered in the DB.");
        else
            setSuccess(password);
        console.log('is working?');
    }
}