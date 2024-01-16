


function loadMarcacao() {
    document.getElementById("list").innerHTML = "";
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      console.log(this.response);

      var marcacoes = JSON.parse(this.response);
      
    
      
      for (var i = 0 ; i < marcacoes.length ; i++) {
        
        var marcacao = marcacoes[i];

        var p = document.createElement("p");
        var ul = document.createElement("ul");
        var li1 = document.createElement("li");
        var li2 = document.createElement("li");
        var li3 = document.createElement("li");
        var li4 = document.createElement("li");
        var li5 = document.createElement("li");

        p.innerHTML = "Marcacao";

        li1.innerHTML = marcacao[0];
        li2.innerHTML = marcacao[1];
        li3.innerHTML = marcacao[2];
        li4.innerHTML = marcacao[3];
        li5.innerHTML = marcacao[4];


        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        ul.appendChild(li4);
        ul.appendChild(li5);

        document.getElementById("list").appendChild(p);
        document.getElementById("list").appendChild(ul);

      }

    }
    xhttp.open("GET", "marcacao");
    xhttp.send();
  }

  document.getElementById("buttn2").addEventListener("click", loadMarcacao);


  function createMarcacao(){
    const inpCliente = document.createElement("input");
    const selEspaco = document.createElement("SELECT");
    const selServico = document.createElement("SELECT");
    const inpData = document.createElement("input");

    inpCliente.setAttribute("id", "cliente");
    selEspaco.setAttribute("id", "mySelect");
    selServico.setAttribute("id", "mySelect1");
    inpData.setAttribute("id", "data");
    inpData.setAttribute("type", "datetime-local");

    var opt = document.createElement("option");
    opt.setAttribute("value","");
    var nome  = document.createTextNode("Selecione Espaco");
    opt.appendChild(nome);
    opt.disabled = true;
    opt.selected = true;
    selEspaco.appendChild(opt);

    var opt = document.createElement("option");
    opt.setAttribute("value","");
    var nome  = document.createTextNode("Selecione Servico");
    opt.appendChild(nome);
    opt.disabled = true;
    opt.selected = true;
    selServico.appendChild(opt);

    const btton = document.createElement("button");
    btton.innerHTML = "Create Marcacao";
    selEspaco.addEventListener("click", addOptionsEspaco);
    selServico.addEventListener("click", addOptionsServico);
    btton.addEventListener("click", postMarcacao);

    inpCliente.style.backgroundColor = "transparent";
    inpCliente.style.color = "black";
    selEspaco.style.backgroundColor = "transparent";
    selEspaco.style.color = "black";
    selEspaco.style.width = "150px";
    selServico.style.backgroundColor = "transparent";
    selServico.style.color = "black";
    selServico.style.width = "150px";
    inpData.style.backgroundColor = "transparent";
    inpData.style.color = "black";

    inpCliente.placeholder = "Id Cliente";
    inpData.placeholder = "Data";

    const newline = document.createElement("br");
    const newline1 = document.createElement("br");
    const newline2 = document.createElement("br");
    const newline3 = document.createElement("br");

    document.getElementById("but2").appendChild(inpCliente);
    document.getElementById("but2").appendChild(newline);
    document.getElementById("but2").appendChild(selEspaco);
    document.getElementById("but2").appendChild(newline1);
    document.getElementById("but2").appendChild(selServico);
    document.getElementById("but2").appendChild(newline2);
    document.getElementById("but2").appendChild(inpData);

    document.getElementById("but2").appendChild(newline3);
    document.getElementById("but2").appendChild(btton);


    
   
  }

  function addOptionsEspaco(){

    //document.getElementById("list").innerHTML = "";
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      //console.log(this.response);

      var espacos = JSON.parse(this.response);
      
    
      
      for (var i = 0 ; i < espacos.length ; i++) {
        
        var espaco = espacos[i];

        var opt = document.createElement("option");
        opt.setAttribute("value", espaco[0]);
        console.log(opt);
        var nome  = document.createTextNode(espaco[1]);
        opt.appendChild(nome);
        document.getElementById("mySelect").appendChild(opt);

      }

    }
    xhttp.open("GET", "espaco");
    xhttp.send();

  }

  function addOptionsServico(){

    //document.getElementById("list").innerHTML = "";
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      //console.log(this.response);

      var servicos = JSON.parse(this.response);
      
    
      
      for (var i = 0 ; i < servicos.length ; i++) {
        
        var servico = servicos[i];

        var opt = document.createElement("option");
        opt.setAttribute("value", servico[0]);
        var nome  = document.createTextNode(servico[2]);
        opt.appendChild(nome);
        document.getElementById("mySelect1").appendChild(opt);

      }

    }
    xhttp.open("GET", "servico");
    xhttp.send();

  }




  function postMarcacao(){
    const e = document.getElementById("mySelect").selectedIndex;
    const s = document.getElementById("mySelect1").selectedIndex;

    const cliente = document.getElementById("cliente").value;
    const selEspaco = document.getElementById("mySelect").options[e].value;
    const selServico = document.getElementById("mySelect1").options[s].value;
    const dt = document.getElementById("data").value;
    
    console.log(cliente);
    console.log(selEspaco);
    console.log(selServico);


    const data = new FormData();
    data.append('id_cliente', cliente);
    data.append('id_espaco', selEspaco);
    data.append('id_servico', selServico);
    data.append('data', dt);

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      console.log(this.response);
    //  document.getElementById("list").innerHTML = this.response;

      //var marcacoes = JSON.parse(this.response);

     

      
    }
    xhttp.open("POST", "marcacao");
    xhttp.send(data);
  }

  createMarcacao();

