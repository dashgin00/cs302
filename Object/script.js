const user = {
    firstName: 'dashgin',
    lastName: 'rehimov',
    age: 16,
    address: {
        city: 'baku',
        country: 'az',
        street: 'Nizami 23',
        some: {
            l: '55',
            b: '343'
        }
    },
    uni: 'BTAL',
    isAdmin: false,
    salary: null,
    position: undefined
}
console.log(user);
console.log(user.age);
console.log(user.street);
console.log(user.l);
delete user.salary
user.position = 'Cyber'
user.watch = '9pm'
user.uni = 'Code'
console.log(user);
user.address.some.watch = '9pm'