document.addEventListener('DOMContentLoaded', function() {
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const form = document.querySelector('#userForm')

const db = []

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const user = {
        username: username.value,
        email: email.value,
        password: password.value,
    }
    db.push(user)
    console.log('database', db);
});
})