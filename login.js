
function logar() {
    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;

    if (login == "samuelppa" && senha == "1234") {
        location.href = "/home/home.html";
    } else if (login == "andre" && senha == "1234") {
        location.href = "/home/home.html";
    } else if (login == "pedro" && senha == "1234") {
        location.href = "/home/home.html";
    } else if (login == "juliana" && senha == "1234") {
        location.href = "/home/home.html";
    } else if (login == "larissaA" && senha == "samuel") {
        location.href = "/home/home.html";
    }
    else {
        alert("Usuario ou senha incorreto ou usuario não cadastrado!");
    }
}