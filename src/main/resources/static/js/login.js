window.onload = function () {

    const email = localStorage.getItem("email");

    if (email != null) {
        document.getElementById("email").value = email;
    }

}

async function login() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch(
        `http://localhost:8080/user/login?email=${email}&password=${password}`,
        {
            method: "POST"
        }
    );

    const result = await response.text();

    alert(result);

    if (result === "Login Successful") {

        window.location.href = "dashboard.html";

    }
}