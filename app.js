const amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    
    if (!nome) {
        alert("O nome não pode estar vazio!");
        return;
    }
    
    if (nome.length < 2) {
        alert("O nome deve ter pelo menos 2 caracteres!");
        return;
    }
    
    if (/\d/.test(nome)) {
        alert("O nome não pode conter números!");
        return;
    }
    
    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }
    
    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear!");
        return;
    }
    
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    exibirResultado(amigoSorteado);
}

function exibirResultado(amigo) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    
    const li = document.createElement("li");
    li.textContent = `O amigo secreto sorteado foi: ${amigo}`;
    listaResultado.appendChild(li);
}
