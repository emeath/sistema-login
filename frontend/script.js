const formulario = document.querySelector("[data-js='form']");

let global_flag_info_login = 0;



formulario.addEventListener("submit", logarNoSistema);

function insereInfoLoginNaTela(mensagem) {

  if (global_flag_info_login == 0) {
    const formulario = document.querySelector("[data-js='form']");

    let newDiv = document.createElement("div");

    newDiv.setAttribute("id", "user_login");

    let newH3 = document.createElement("h3");

    const newContent = document.createTextNode(mensagem);

    newH3.appendChild(newContent);

    newDiv.appendChild(newH3);

    formulario.appendChild(newDiv)

    global_flag_info_login = 1;
  }

}


function logarNoSistema(event) {

  event.preventDefault();

  let usuario_formulario = document.querySelector("[data-js='user']").value;
  let senha_formulario = document.querySelector("[data-js='passwd']").value;

  let resultado_usuario = usuarioExiste(usuario_formulario);

  if (resultado_usuario == true) {

    // usuario existe
    let resultado_senha = senhaUsuarioCorreta(usuario_formulario, senha_formulario);

    if (resultado_senha == true) {
      console.log("LOGIN REALIZADO COM SUCESSO! Bem vindo, " + usuario_formulario + "!");

      // Simulate an HTTP redirect:
      window.location.replace("home.html");
    } else {
      console.log("Usuario ou senha incorretos! Tente novamente");
      insereInfoLoginNaTela("Usuario ou senha incorretos! Tente novamente")
    }

  } else {
    console.log("Usuario ou senha incorretos! Tente novamente");
    insereInfoLoginNaTela("Usuario ou senha incorretos! Tente novamente")
  }
}

async function getUsernameFromAPI(usuario) {

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({username: usuario})
  }

  const response = await fetch("http://localhost:4000/auth_username", options);
  const data = await response.json()

  if(data.length == 0)
    return false
  else
    return true

}

async function usuarioExiste(usuario) {

  let usuario_encontrado = false;

  const flagResponse = await getUsernameFromAPI(usuario);

  usuario_encontrado = flagResponse;

  console.log('usuario existe.... ' + usuario_encontrado)

  return usuario_encontrado;

}

function senhaUsuarioCorreta(usuario, senha) {

  let usuarioAlvo = {};
  let senha_usuario_correta = false;

  bancoDeDados.forEach((element) => {
    if (usuario == element.user) {
      usuarioAlvo = element;
    }
  })

  if (usuarioAlvo.password == senha) {
    senha_usuario_correta = true;
  } else {
    senha_usuario_correta = false;
  }

  return senha_usuario_correta;

}

