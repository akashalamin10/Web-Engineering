document.getElementById('registrationForm').addEventListener('submit', function(event){

    event.preventDefault();

    let valid = true;

    const name = document.getElementById('name').value;
    if (name === '' || !/^[a-zA-Z ]+$/.test(name)) {
        document.getElementById('nameError').textContent = 'Please enter a valid name.';
        valid = false;
    } else {
        document.getElementById('nameError').textContent = '';
    }

    const email = document.getElementById('email').value;
    if (email === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        valid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    const password = document.getElementById('password').value;
    if (password === '' || password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
        valid = false;
    } else {
        document.getElementById('passwordError').textContent = '';
    }

    const confirmPassword = document.getElementById('confirmPassword').value;
    if (confirmPassword !== password) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        valid = false;
    } else {
        document.getElementById('confirmPasswordError').textContent = '';
    }

    const phone = document.getElementById('phone').value;
    if (phone === '' || !/^\d{10}$/.test(phone)) {
        document.getElementById('phoneError').textContent = 'Please enter a valid phone number (10 digits).';
        valid = false;
    } else {
        document.getElementById('phoneError').textContent = '';
    }

    const dob = document.getElementById('dob').value;
    if (dob === '') {
        document.getElementById('dobError').textContent = 'Please select a valid date of birth.';
        valid = false;
    } else {
        document.getElementById('dobError').textContent = '';
    }

    const age = document.getElementById('age').value;
    if (age === '' || age < 18) {
        document.getElementById('ageError').textContent = 'You must be at least 18 years old.';
        valid = false;
    } else {
        document.getElementById('ageError').textContent = '';
    }

    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        document.getElementById('genderError').textContent = 'Please select your gender.';
        valid = false;
    } else {
        document.getElementById('genderError').textContent = '';
    }

    const website = document.getElementById('website').value;
    if (website === '' || !/^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}\/?/.test(website)) {
        document.getElementById('websiteError').textContent = 'Please enter a valid website URL.';
        valid = false;
    } else {
        document.getElementById('websiteError').textContent = '';
    }

    const country = document.getElementById('country').value;
    if (country === '') {
        document.getElementById('countryError').textContent = 'Please select a country.';
        valid = false;
    } else {
        document.getElementById('countryError').textContent = '';
    }

    const message = document.getElementById('message').value;
    if (message === '') {
        document.getElementById('messageError').textContent = 'Please enter a message.';
        valid = false;
    } else {
        document.getElementById('messageError').textContent = '';
    }

    const terms = document.getElementById('terms').checked;
    if (!terms) {
        document.getElementById('termsError').textContent = 'You must agree to the terms and conditions.';
        valid = false;
    } else {
        document.getElementById('termsError').textContent = '';
    }

    if (valid) {
        alert('Form submitted successfully!');
    }

});
