const userId = document.getElementById('userIdField');
const name = document.getElementById('nameField');
const age = document.getElementById('ageField');
const phone = document.getElementById('phoneField');
const email = document.getElementById('emailField');
const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('addBtn');
const deleteBtn = document.getElementById('deleteBtn');

// set instant of the firebase database
const database = firebase.database();

//to add more user  :  split the users field  and then merge them
const rootRef = database.ref('users');

// add data to database  : when the add btn is click  what should it do 
addBtn.addEventListener('click', (e) => { // click event 
    e.preventDefault();
    // database.ref('/users/' + userId.value).set({ //to add new data to the database  should use set() method
    // database.ref('/users/' + userId.value).set({
    rootRef.child(userId.value).set({
        fullname: name.value,
        age: age.value,
        phone: phone.value,
        email: email.value
    });
});