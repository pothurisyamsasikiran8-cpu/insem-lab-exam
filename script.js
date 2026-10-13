function login() {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if (user !== "" && pass !== "") {
        localStorage.setItem("user", user);
        window.location.href = "product.html";
    } else {
        alert("Enter User ID and Password");
    }
}

// Protect product page
if (window.location.pathname.endsWith("product.html")) {
    if (!localStorage.getItem("user")) {
        window.location.href = "login.html";
    }
}

// Logout
function logout() {
    localStorage.removeItem("user");
    window.location.href = "login.html";
}