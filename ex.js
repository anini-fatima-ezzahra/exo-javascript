function Validate() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm").value;
    var username = document.getElementById("username").value;
     if (password != confirmPassword) {
        alert("verifiez votre password");
        return false;
    }
if(username==""|| password==""|confirmPassword==""){
    alert("veuillez remplir les champs vides");
    return false;
}
return true;
}