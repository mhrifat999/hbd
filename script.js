function showAlert() {
    if (confirm("Vaiyo aijja ki tmr jonmodin?")) {
        alert("Aijja oile click maro");
        alert("AREH VAHHH!!!!..tmi dehi hasaoi click marso..Taile arekta maro")
    } else {
        alert("na oile harse...TMI BOLOd");
        alert("Aijja oi miya..kalka koira luv nai")
        alert("Kalk oileo ogrim janaiya rakhlam..current beshikhn thakena")
    }
}

// Show the alert when the page loads
window.onload = function() {
    showAlert();
}