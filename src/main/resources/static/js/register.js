async function register() {

    const user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    const response = await fetch("http://localhost:8080/user/register", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(user)

    });

    const result = await response.text();

    alert(result);

    if (result === "OTP sent successfully") {

        // Store email for OTP and Login page
        localStorage.setItem("email", user.email);

        window.location.href = "otp.html";
    }
}