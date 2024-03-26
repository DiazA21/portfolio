const hamburger = document.querySelector('.hamburger-btn');
const navMenu = document.querySelector('.hamburger-nav');

// Hamburger toggle when smaller screen

if(hamburger) {
    hamburger.addEventListener('click', ()=> {
        navMenu.classList.toggle('open')
    });
}

// Enabling form send function

const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value} <br> Email: ${email.value} 
    <br> Phone Number: ${phone.value} <br> Message: ${message.value}`
    
    Email.send({
        SecureToken: "3aa35041-88df-4dc7-8136-02fc9a2f668e",
        To : 'andrewdiaz1993@gmail.com',
        From : "andrewdiaz1993@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == 'OK') {
            Swal.fire({
                title: "Message Sent!",
                text: "Thank you! I will get back to you as soon as possible!",
                icon: "success"
              });
        }
      }
    );
}

function checkInputs() {
    const items = document.querySelectorAll('.item');

    for (const item of items) {
        if (item.value == "") {
            item.classList.add('error');
            item.parentElement.classList.add('error');
        }

        if (items[1].value !="") {
            checkEmail();
        }

        items[1].addEventListener('keyup', () => {
            checkEmail();
        });

        item.addEventListener('keyup', () => {
            if (item.value != "") {
                item.classList.remove('error');
                item.parentElement.classList.remove('error');
            }

            else {
                item.classList.add('error');
                item.parentElement.classList.add('error');
            }
        });
    }
}

function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTextEmail = document.querySelector('.error-text.email');

    if (!email.value.match(emailRegex)) {
        email.classList.add('error');
        email.parentElement.classList.add('error');

        if (email.value != "") {
            errorTextEmail.innerText = "Enter a valid email address";
        }
        else {
            errorTextEmail.innerText = "Field cannot be left blank!";
        }
    }
    else {
        email.classList.remove('error');
        email.parentElement.classList.remove('error');
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();

    if (!fullName.classList.contains('error') && !email.classList.contains('error') && !phone.classList.contains('error') && !subject.classList.contains('error') && !message.classList.contains('error')) {
        sendEmail();

        form.reset();
        return false;
        // console.log("Message submitted successfully!");
    }

  
});
