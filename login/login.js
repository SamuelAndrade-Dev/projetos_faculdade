function logar() {
    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;

    if (login == "samuelppa" && senha == "1234") {
        location.href = "/home/home.html";
    } else {
        alert("Usuario ou senha incorreto");
    }
}