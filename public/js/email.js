const form = document.getElementById('contact__form');
const userName = document.getElementById('user_name');
const userEmail = document.getElementById('user_email');
const userMessage = document.getElementById('user_message');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false

function validateForm() {
    // Using Contraint API
    isValid = form.checkValidity();
    // Style main message for an error
    if(isValid === false) {
        console.log('Request successful');
        messageContainer.style.display = 'inline';
        message.textContent ="Please fill out all the fields";
        message.style.color = 'text-color';
    } else if(isValid === true) {
        messageContainer.style.display = 'inline';
        message.textContent ="Sending message...";
        message.style.color = 'text-color';
    }
}

async function processFormData(e) {
    e.preventDefault()
    
    // Validating form 
    validateForm();

    // Sending the formdata

    const data = { 
        name : "Nipun Hedaoo",
        from_name: userName.value,
        email: userEmail.value,
        message: userMessage.value
    };

    try {
        const response = await fetch('/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        console.log(response);

        // Check if the request was successful
        if (response.ok) {
            // If successful, do something with the response
            console.log('Request successful');
            messageContainer.style.display = 'inline';
            message.textContent ="Your message is being sent";
            message.style.color = 'text-color';
            form.reset();
        } else {
            // If not successful, handle the error
            messageContainer.style.display = 'inline';
            message.textContent ="Please fil out all the fields";
            message.style.color = 'text-color';
            console.error('Request failed:', response.statusText);
        }
    } catch (error) {
        // Handle any network errors
        console.error('Network error:', error);
    }
 }
 
 //  Add eventlisteners
form.addEventListener('submit', processFormData);
