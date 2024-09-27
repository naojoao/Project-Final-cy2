document.getElementById('registroForm').addEventListener("submit", function(event){
    event.preventDefault()

    const nome = document.getElementById("name").value
    const usuario = document.getElementById("user").value
    const senha = document.getElementById("senha").value
    const senhaConfirmacao = document.getElementById("confirmation-senha").value
    const email = document.getElementById("email").value

    if (sebga !== senhaConfirmacao){
        alert("Senhas diferentesm, tente novamente")
        return
    }


    const usuarioObj = {nome, usuario, email, senha}

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []
    usuarios.push(usuarioObj)
    localStorage.setItem("usuarios", JSON.stringify(usuarios))

    alert("Usuário registrado com sucesso!")
    document.getElementById("registroForm").reset()
})