function logar() {
    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;

    if (login == "samuelppa" && senha == "1234") {
        location.href = "/home/home.html";
    } else {
        alert("Usuario ou senha incorreto");
    }
}