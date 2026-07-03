async function verifyOtp() {

    const email = localStorage.getItem("email");
    const otp = document.getElementById("otp").value;

    if (!email) {
        alert("Email not found. Please register again.");
        window.location.href = "register.html";
        return;
    }

    const response = await fetch(
        `http://localhost:8080/user/verify?email=${email}&otp=${otp}`,
        {
            method: "POST"
        }
    );

    const result = await response.text();

    alert(result);

    if (result === "OTP Verified Successfully") {
        window.location.href = "login.html";
    }
}