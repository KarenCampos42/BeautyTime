/*
if (document.readyState !== 'loading') {
    return;
}*/

document.addEventListener("DOMContentLoaded", viewImage);

function viewImage(){
    document.getElementById("imagem").addEventListener("click", waitUntilLoad);
}

function waitUntilLoad() {
    document.getElementById("imagem").addEventListener("load", increaseElementSize);
}

function increaseElementSize() {
    var x = document.getElementById("imagem");
    console.log((x.style.height));
    //x.style.height = (x.style.height).replace("px", "") * 1.2 + "px";
    //x.style.width = (x.style.width).replace("px", "") * 1.2 + "px";
    x.style.height = "200px";
    x.style.width = "200px";
}

function loadEspaco() {
    document.getElementById("list").innerHTML = "";
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      console.log(this.response);

      var espacos = JSON.parse(this.response);
      
    
      
      for (var i = 0 ; i < espacos.length ; i++) {
        
        var espaco = espacos[i];

        var p = document.createElement("p");
        var ul = document.createElement("ul");
        var li1 = document.createElement("li");
        var li2 = document.createElement("li");
        var li3 = document.createElement("li");
        var li4 = document.createElement("li");
        var li5 = document.createElement("li");

        p.innerHTML = "Espaco";

        li1.innerHTML = espaco[0];
        li2.innerHTML = espaco[1];
        li3.innerHTML = espaco[2];
        li4.innerHTML = espaco[3];
        li5.innerHTML = espaco[4];


        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        ul.appendChild(li4);
        ul.appendChild(li5);

        document.getElementById("list").appendChild(p);
        document.getElementById("list").appendChild(ul);

      }

    }
    xhttp.open("GET", "espaco");
    xhttp.send();
  }

  document.getElementById("buttn").addEventListener("click", loadEspaco);


  function createEspaco(){
    const inpNome = document.createElement("input");
    const inpLocalizaçao = document.createElement("input");
    const inpAbertura = document.createElement("input");
    const inpFecho = document.createElement("input");

    inpNome.setAttribute("id", "nome");
    inpLocalizaçao.setAttribute("id", "localizacao");
    inpAbertura.setAttribute("id", "abertura");
    inpFecho.setAttribute("id", "fecho");

    const btton = document.createElement("button");
    btton.innerHTML = "Create Espaço";
    btton.addEventListener("click", showToast);
    btton.addEventListener("click", postEspaco);

    inpNome.style.backgroundColor = "transparent";
    inpNome.style.color = "black";
    inpLocalizaçao.style.backgroundColor = "transparent";
    inpLocalizaçao.style.color = "black";
    inpAbertura.style.backgroundColor = "transparent";
    inpAbertura.style.color = "black";
    inpFecho.style.backgroundColor = "transparent";
    inpFecho.style.color = "black";

    inpNome.placeholder = "Nome";
    inpLocalizaçao.placeholder = "Localizaçao";
    inpAbertura.placeholder = "Abertura";
    inpFecho.placeholder = "Fecho";

    const newline = document.createElement("br");
    const newline1 = document.createElement("br");
    const newline2 = document.createElement("br");
    const newline3 = document.createElement("br");

    document.getElementById("but").appendChild(inpNome);
    document.getElementById("but").appendChild(newline);
    document.getElementById("but").appendChild(inpLocalizaçao);
    document.getElementById("but").appendChild(newline1);
    document.getElementById("but").appendChild(inpAbertura);
    document.getElementById("but").appendChild(newline2);
    document.getElementById("but").appendChild(inpFecho);

    document.getElementById("but").appendChild(newline3);
    document.getElementById("but").appendChild(btton);


   
  }

  function showToast() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

  function postEspaco(){
    const nome = document.getElementById("nome").value;
    const localizacao = document.getElementById("localizacao").value;
    const abertura = document.getElementById("abertura").value;
    const fecho = document.getElementById("fecho").value;
    

    const data = new FormData();
    data.append('nome', nome);
    data.append('localizacao', localizacao);
    data.append('abertura', abertura);
    data.append('fecho', fecho);

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      console.log(this.response);
    //  document.getElementById("list").innerHTML = this.response;

      var espacos = JSON.parse(this.response);

     

      
    }
    xhttp.open("POST", "espaco");
    xhttp.send(data);
  }

  createEspaco();

