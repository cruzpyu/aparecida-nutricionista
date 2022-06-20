var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function (event) {
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);
})

/* Versão mais explicativa pra caso eu esqueça o que aconteceu aqui: 

tabela.addEventListener("dblclick", function(event) {
var alvo = event.target;
var paiDoAlvo = alvo.parentNode;
paiDoAlvo.remove();
})


*/