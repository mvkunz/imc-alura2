var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click",function(){
  console.log("buscando");

  var xhr = new XMLHttpRequest(); //responsável por fazer requisições http com o js, o new é para instanciar umnovo objeto

  xhr.open("GET", "https://raw.githubusercontent.com/mmgcnerds/api-pacientes/main/api-pacientes.json"); //método e url

  xhr.addEventListener("load", function(){
    var erroAjax = document.querySelector("#erro-ajax");

    if(xhr.status == 200){
      erroAjax.classList.add("invisivel");
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta); //o parse é para parsear um texto em JSON e retornar um objeto JS

      pacientes.forEach(function(paciente){
        adicionaPacienteNaTabela(paciente);
      })
  
    }else{
      console.log(xhr.status);
      console.log(xhr.responseText);
      
      erroAjax.classList.remove("invisivel");
    }
     
  })

  xhr.send();

})