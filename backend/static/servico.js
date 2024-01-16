
document.getElementById("nails").addEventListener("click", changeColorElement);
function changeColorElement() {
    document.getElementsByTagName('h1')[0].style.color = "black";
    console.log(document.getElementById("nails"));
}


function loadServico() {
    document.getElementById("list").innerHTML = "";
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      console.log(this.response);

      var sevicos = JSON.parse(this.response);
            
      for (var i = 0 ; i < sevicos.length ; i++) {
        
        var servico = sevicos[i];

        var p = document.createElement("p");
        var ul = document.createElement("ul");
        var li1 = document.createElement("li");
        var li2 = document.createElement("li");
        var li3 = document.createElement("li");

        p.innerHTML = "Servico";

        li1.innerHTML = servico[0];
        li2.innerHTML = servico[1];
        li3.innerHTML = servico[2];


        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);

        document.getElementById("list").appendChild(p);
        document.getElementById("list").appendChild(ul);

      }

    }
    xhttp.open("GET", "servico");
    xhttp.send();
  }

  document.getElementById("buttn1").addEventListener("click", loadServico);


  function createServico(){
    const inpCategoria = document.createElement("input");
    const inpNome = document.createElement("input");

    inpCategoria.setAttribute("id", "categoria");
    inpNome.setAttribute("id", "nome1");

    const btton = document.createElement("button");
    btton.innerHTML = "Create Servico";
    btton.addEventListener("click", postServico);

    inpCategoria.style.backgroundColor = "transparent";
    inpCategoria.style.color = "black";
    inpNome.style.backgroundColor = "transparent";
    inpNome.style.color = "black";

    inpCategoria.placeholder = "Categoria";
    inpNome.placeholder = "Nome";

    const newline = document.createElement("br");
    const newline1 = document.createElement("br");

    document.getElementById("but1").appendChild(inpCategoria);
    document.getElementById("but1").appendChild(newline);
    document.getElementById("but1").appendChild(inpNome);

    document.getElementById("but1").appendChild(newline1);
    document.getElementById("but1").appendChild(btton);


   
  }

  function postServico(){
    const categoria = document.getElementById("categoria").value;
    const nome = document.getElementById("nome1").value;

    const data = new FormData();
    data.append('categoria', categoria);
    data.append('nome', nome);

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      console.log(this.response);
    //  document.getElementById("list").innerHTML = this.response;

      var servicos = JSON.parse(this.response);

     

      
    }
    xhttp.open("POST", "servico");
    xhttp.send(data);
  }

  createServico();

