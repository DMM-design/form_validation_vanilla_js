import { SignInForm } from "../CustomDOMS/SignInForm.js";
import { SignUpForm } from "../CustomDOMS/SignUpForm.js";

const signIn = (form) => new SignInForm(form);
const signUp = (form) => new SignUpForm(form);

export class MainPage {

    constructor(elem)
    {
        this.elem = elem;
        this.createApp();
        this.$ = (elem) => this.elem?.querySelector(elem);
        this.form = this.$('.validation_form');
        this.$('#signIn').className = 'btn btnSign';
        signIn(this.form);
        this.signInBTN();
        this.signUpBTN();
        this.setFooterDate();
    }

    createApp()
    {
        const html = `
            <header>
                <nav>
                    <button class="btn" id="signIn">Sign in</button>
                    <button class="btn" id="signUp">Sign Up</button>
                </nav>
            </header>
            <form class="validation_form"></form>
            <footer>
                <p>
                    <a href="https://github.com/DMM-design"><img src="../../assets/github.svg" alt="github"></a>
                    <a href="https://www.instagram.com/mrdreamarts/"><img src="../../assets/instagram.svg" alt="instagram"></a>
                </p>
                <p> &#169; <span id="date"></span> Created by Domingo Mesa Maliniak. </p>
            </footer>
        `;
        this.elem.innerHTML = html;
    }

    setFooterDate()
    {
        const now = new Date();
        this.$('footer > #date').innerText = now.getFullYear();
    }

    signInBTN()
    {
        const btnSignIn = this.$('#signIn');
        btnSignIn.addEventListener('click', () =>{
            this.$('#signUp').className = 'btn';
            btnSignIn.className = 'btn btnSign';
            signIn(this.form);
        });
    }

    signUpBTN()
    {
        const btnSignUp = this.$('#signUp')
        btnSignUp.addEventListener('click', () =>{
            this.$('#signIn').className = 'btn';
            btnSignUp.className = 'btn btnSign';
            signUp(this.form);
        });
    }
}