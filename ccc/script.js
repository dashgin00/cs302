const username = document.querySelector('#username')
const uname = document.querySelector('#uname')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const form = document.querySelector('#userForm')
const surname = document.querySelector('#surname')

const db = []

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const user = {
        username: username.value,
        email: email.value,
        password: password.value,
        surname: surname.value
    }
    db.push(user)
    console.log('database', db);
})
