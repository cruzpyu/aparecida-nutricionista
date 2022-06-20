var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
    var pacientes = document.querySelectorAll(".paciente");

    /* Se meu campo de busca possuir algum caractere digitado, quero adicionar a classe "invisível", fazendo com que minha tabela de pacientes fique invisível */
    if (this.value.length > 0) {
        /*this.value.length --> todos os caracteres escritos no meu campoFiltro*/
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            /* Se os caracteres escritos o meu campo de busca corresponderem ao valor de algum nome da minha tabela, quero que fiquem visíveis apenas os nomes que corresponderem com a busca e quero esconder o restante */
            var expressao = new RegExp(this.value, "i");
            if (expressao.test(nome)) {
                paciente.classList.remove("invisivel")
            } else {
                paciente.classList.add("invisivel");
            }
        }
        /* Se meu campo de busca for menor que 0 (estiver vazio), quero remover a classe "invisível", fazendo com que meus pacientes fiquem visíveis */
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});