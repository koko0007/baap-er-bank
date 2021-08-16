document.getElementById("button-submit").addEventListener("click", function () {
    const emailField = document.getElementById("email");
    const userEmail = emailField.value;

    const passValue = document.getElementById("password").value;
    if (userEmail == "Bithy@koko.com" && passValue == "kokokoko") {
        window.location.href = "banking.html";
    }
})