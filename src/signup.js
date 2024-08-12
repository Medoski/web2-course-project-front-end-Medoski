import {
    register
} from './api.js'

window.onload = function () {

    //Made the register post
    document.getElementById("signupForm").addEventListener("submit", async (e) => {
        e.preventDefault();

        const firstNameValue = e.target.fname.value
        const lastNameValue = e.target.lname.value
        const emailValue = e.target.email.value
        const passwordValue = e.target.password.value

        const registerFetch = await register(
            firstNameValue,
            lastNameValue,
            emailValue,
            passwordValue
        )

        if (registerFetch.ok) {
            console.log('test');
        }
        window.location.href = "./signin.html"
    })

}