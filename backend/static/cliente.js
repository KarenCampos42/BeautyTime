


function loadCliente() {
    document.getElementById("list").innerHTML = "";
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      console.log(this.response);

      var clientes = JSON.parse(this.response);
      
    
      
      for (var i = 0 ; i < clientes.length ; i++) {
        
        var cliente = clientes[i];

        var p = document.createElement("p");
        var ul = document.createElement("ul");
        var li1 = document.createElement("li");
        var li2 = document.createElement("li");
        var li3 = document.createElement("li");
        var li4 = document.createElement("li");

        p.innerHTML = "Cliente";

        li1.innerHTML = cliente[0];
        li2.innerHTML = cliente[1];
        li3.innerHTML = cliente[2];
        li4.innerHTML = cliente[3];


        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        ul.appendChild(li4);

        document.getElementById("list").appendChild(p);
        document.getElementById("list").appendChild(ul);

      }

    }
    xhttp.open("GET", "cliente");
    xhttp.send();
  }

  document.getElementById("buttn4").addEventListener("click", loadCliente);


  function createCliente(){
    const inpNome = document.createElement("input");
    const inpEmail = document.createElement("input");
    const inpTelemovel = document.createElement("input");

    inpNome.setAttribute("id", "nome2");
    inpEmail.setAttribute("id", "email");
    inpTelemovel .setAttribute("id", "telemovel");

    const btton = document.createElement("button");
    btton.innerHTML = "Create Cliente";
    btton.addEventListener("click", postCliente);

    inpNome.style.backgroundColor = "transparent";
    inpNome.style.color = "black";
    inpEmail.style.backgroundColor = "transparent";
    inpEmail.style.color = "black";
    inpTelemovel.style.backgroundColor = "transparent";
    inpTelemovel.style.color = "black";


    inpNome.placeholder = "Nome";
    inpEmail.placeholder = "Email";
    inpTelemovel.placeholder = "Telemovel";

    const newline = document.createElement("br");
    const newline1 = document.createElement("br");
    const newline2 = document.createElement("br");

    document.getElementById("but4").appendChild(inpNome);
    document.getElementById("but4").appendChild(newline);
    document.getElementById("but4").appendChild(inpEmail);
    document.getElementById("but4").appendChild(newline1);
    document.getElementById("but4").appendChild(inpTelemovel);

    document.getElementById("but4").appendChild(newline2);
    document.getElementById("but4").appendChild(btton);


   
  }

  function postCliente(){
    const nome = document.getElementById("nome2").value;
    const email = document.getElementById("email").value;
    const telemovel = document.getElementById("telemovel").value;
    

    const data = new FormData();
    data.append('nome', nome);
    data.append('email', email);
    data.append('telemovel', telemovel);

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      console.log(this.response);
    //  document.getElementById("list").innerHTML = this.response;

      var clientes = JSON.parse(this.response);

     

      
    }
    xhttp.open("POST", "cliente");
    xhttp.send(data);
  }

  createCliente();

