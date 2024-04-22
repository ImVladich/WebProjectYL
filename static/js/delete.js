function deletePassword(passwordId) {
    var passwordRow = document.getElementById("password-row-" + passwordId);
    if (passwordRow) {
        passwordRow.remove();
        console.log("Удаление пароля с ID: ", passwordId);
    } else {
        console.error("Пароль с ID", passwordId, "не найден.");
    }
}
