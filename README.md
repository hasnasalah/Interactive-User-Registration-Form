# Interactive Registration Form

## Overview

This project is an interactive Registration and Login Form built using HTML, CSS3, and JavaScript.
It features real-time input validation, custom error messages, and localStorage-based user management.

## Features

* User Registration with Validation
* ensure that all the fields are filled correcly.
* use html and javascript custom validation and user frindly error messages.
* the sue of local storage to store and get user name and passwords for login.

## Technologies Used
* HTML
* CSS
*Javascript

## Setup Instructions

Clone or download this repository:

git clone https://github.com/your-username/interactive-form.git


## Reflection Questions

1️. How did event.preventDefault() help in handling form submission?

event.preventDefault() prevented the form’s default behavior of reloading the page. This alloweds to validate inputs and process the registration and login entirely through JavaScript validation.

2️. What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?

HTML provides its own validation such as required, type, and minlength maxlength, which handle basicvalidation.
However, JavaScript validation allows for custom validation and custom error messages, improving user experience.


3️. Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data?

When a user registers, their information (name, username, password) is stored in localStorage.
During login, the entered username is used as a key to retrieve the stored user object and verify the password.
But the localStorage is not fully secured it is stored as normal text and can be easily accessed or modified.
I used it in my case for learning and exploring purposes.

4️. Describe a challenge you faced in implementing the real-time validation and how you solved it.

One challenge was ensuring that error messages updated immediately as users typed or pass the field.
This was solved by using input and blur event listeners on each field and resetting error states (setCustomValidity("")) when conditions became valid.
I had  problem that the error message showing even after validating.

5️. How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?

Custom messages were carefully phrased to clear, and specific with the use of red color which is attractive as a warning sign.
Each field had its own <span> for displaying the message, and visibility was controlled by adding/removing CSS classes (valid/invalid) during validation.

## future features:
Replace localStorage with secure, server-side authentication (e.g., Node.js + database).




# Author: Hasna Ben Jillali