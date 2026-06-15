document.getElementById("myForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let message = document.getElementById("message");

    if (name === "" || email === "" || password === "") {
        message.innerHTML = "All fields are required!";
        message.style.color = "red";
        return;
    }

    if (!email.includes("@")) {
        message.innerHTML = "Enter a valid email address!";
        message.style.color = "red";
        return;
    }

    if (password.length < 6) {
        message.innerHTML = "Password must be at least 6 characters!";
        message.style.color = "red";
        return;
    }

    message.innerHTML = "Form submitted successfully!";
    message.style.color = "green";
});