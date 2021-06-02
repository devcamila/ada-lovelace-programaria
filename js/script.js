var bemVindo = prompt("Bem vinde, qual seu nome?")
alert(bemVindo+ ", tenha uma ótima leitura")


document.getElementById("enviar").addEventListener("click", respostaForm)

var nome = document.getElementById("nome");
var email = document.getElementById("email");
var celular = document.getElementById("cel");

function respostaForm() {
    if (nome.value != "" && email.value != "" &&  celular.value != "") {
        alert("Em breve, te enviaremos novidades!")
    } else {
        alert("Por favor, preencha os campos: nome, email e celular!")
    }
}

