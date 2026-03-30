document.getElementById("userForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = { name, email, password };

    // AJAX POST request
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function() {
        if (xhr.status === 201 || xhr.status === 200) {

            // Get existing users from localStorage
            let users = JSON.parse(localStorage.getItem("users")) || [];

            // Push new user
            users.push(user);

            // Save back to localStorage
            localStorage.setItem("users", JSON.stringify(users));

            // Redirect to display page
            window.location.href = "display.html";
        }
    };

    xhr.send(JSON.stringify(user));
});