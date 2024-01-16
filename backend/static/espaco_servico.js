


function loadEspacoServico() {
    document.getElementById("list").innerHTML = "";
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      console.log(this.response);

      var espacos_servicos = JSON.parse(this.response);

    
      for (var i = 0 ; i < espacos_servicos.length ; i++) {
        
        var espaco_servico = espacos_servicos[i];

        var p = document.createElement("p");
        var ul = document.createElement("ul");
        var li1 = document.createElement("li");
        var li2 = document.createElement("li");
        var li3 = document.createElement("li");

        p.innerHTML = "Espaco_Servico";

        li1.innerHTML = espaco_servico[0];
        li2.innerHTML = espaco_servico[1];
        li3.innerHTML = espaco_servico[2];


        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);

        document.getElementById("list").appendChild(p);
        document.getElementById("list").appendChild(ul);

      }

    }
    xhttp.open("GET", "espaco_servico");
    xhttp.send();
  }

  document.getElementById("buttn3").addEventListener("click", loadEspacoServico);


  function createEspacoServico(){
    const inpEspaco = document.createElement("input");
    const inpServico = document.createElement("input");
    const inpPreco = document.createElement("input");

    inpEspaco.setAttribute("id", "espaco1");
    inpServico.setAttribute("id", "servico1");
    inpPreco.setAttribute("id", "preco");

    const btton = document.createElement("button");
    btton.innerHTML = "Create Espaco_Servico";
    btton.addEventListener("click", postEspacoServico);

    inpEspaco.style.backgroundColor = "transparent";
    inpEspaco.style.color = "black";
    inpServico.style.backgroundColor = "transparent";
    inpServico.style.color = "black";
    inpPreco.style.backgroundColor = "transparent";
    inpPreco.style.color = "black";

    inpEspaco.placeholder = "Id Espaco";
    inpServico.placeholder = "Id Servico";
    inpPreco.placeholder = "Preco";

    const newline = document.createElement("br");
    const newline1 = document.createElement("br");
    const newline2 = document.createElement("br");

    document.getElementById("but3").appendChild(inpEspaco);
    document.getElementById("but3").appendChild(newline);
    document.getElementById("but3").appendChild(inpServico);
    document.getElementById("but3").appendChild(newline1);
    document.getElementById("but3").appendChild(inpPreco);

    document.getElementById("but3").appendChild(newline2);
    document.getElementById("but3").appendChild(btton);


   
  }

  function postEspacoServico(){
    const espaco = document.getElementById("espaco1").value;
    const servico = document.getElementById("servico1").value;
    const preco = document.getElementById("preco").value;
    

    const data = new FormData();
    data.append('id_espaco', espaco);
    data.append('id_servico', servico);
    data.append('preco', preco);

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      console.log(this.response);
      //document.getElementById("list").innerHTML = this.response;

      var espacos_servicos = JSON.parse(this.response);

      
    }
    xhttp.open("POST", "espaco_servico");
    xhttp.send(data);
  }

  createEspacoServico();


