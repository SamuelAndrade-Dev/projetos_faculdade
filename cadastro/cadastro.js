function validation() {
    const name = getElementById("name").value;
    const nasc = getElementById("nasc").value;
    const sexo = getElementById("sexo").value;
    const cpf = getElementById("cpf").value;
    const tel = getElementById("tel").value;
    const mail = getElementById("mail").value;
    const senha = getElementById("senha").value;
}

if (name.trim() == "") {
    alert("O campo nome e sobrenome não podem estar vazios!!")
}