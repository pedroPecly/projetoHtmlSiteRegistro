const btnEnviar = document.querySelector("#btnEnviar");

btnEnviar.addEventListener('click', function(){
    let inputs = document.querySelectorAll('#formulario input[type="text"]');
    let verificado = true;

    inputs.forEach(function(input){
        if(input.value.trim() == ""){
            verificado = false;
        }
    });

    if(!verificado){
        alert("Erro: campos nao prenchidos");
    } else {
        window.location.href = 'index.html';
    }
})