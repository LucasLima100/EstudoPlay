let perguntasFuncoes = [
{
    "pergunta": "O que é genética?",
    "opcoes": ["O estudo da evolução", "O estudo dos genes e da hereditariedade", "O estudo da física dos organismos", "O estudo das células"],
    "resposta": "O estudo dos genes e da hereditariedade"
  },
  {
    "pergunta": "Qual é a função dos cromossomos?",
    "opcoes": ["Armazenar energia", "Armazenar informações genéticas", "Realizar a fotossíntese", "Produzir proteínas"],
    "resposta": "Armazenar informações genéticas"
  },
  {
    "pergunta": "O que é um gene?",
    "opcoes": ["A célula que transporta oxigênio", "Uma unidade de hereditariedade que transmite características", "Um tipo de proteína", "Uma estrutura que processa energia"],
    "resposta": "Uma unidade de hereditariedade que transmite características"
  },
  {
    "pergunta": "O que é o DNA?",
    "opcoes": ["Uma célula", "Uma proteína", "Um ácido nucleico responsável pela informação genética", "Um hormônio"],
    "resposta": "Um ácido nucleico responsável pela informação genética"
  },
  {
    "pergunta": "Quantos cromossomos os humanos têm?",
    "opcoes": ["46", "44", "50", "48"],
    "resposta": "46"
  },
  {
    "pergunta": "O que é a mitose?",
    "opcoes": ["Processo de divisão celular para formação de gametas", "Divisão celular para crescimento e reparo", "Processo de troca de material genético", "Processo que ocorre nas células reprodutivas"],
    "resposta": "Divisão celular para crescimento e reparo"
  },
  {
    "pergunta": "Qual é o papel do RNA?",
    "opcoes": ["Armazenar informações genéticas", "Sintetizar proteínas", "Realizar fotossíntese", "Reparar células danificadas"],
    "resposta": "Sintetizar proteínas"
  },
  {
    "pergunta": "O que significa hereditariedade?",
    "opcoes": ["A transmissão de doenças genéticas", "A passagem de características de geração para geração", "A formação de novas células", "A modificação do DNA"],
    "resposta": "A passagem de características de geração para geração"
  },
  {
    "pergunta": "O que são alelos?",
    "opcoes": ["Formas alternativas de um gene", "Células especializadas", "Partículas do DNA", "Cromossomos homólogos"],
    "resposta": "Formas alternativas de um gene"
  },
  {
    "pergunta": "Qual é o conceito de genética mendeliana?",
    "opcoes": ["A herança das características dos pais para os filhos é aleatória", "A herança segue leis de segregação e distribuição independente", "A genética não tem relação com o meio ambiente", "A hereditariedade é determinada apenas por um gene"],
    "resposta": "A herança segue leis de segregação e distribuição independente"
  },
  {
    "pergunta": "O que é uma mutação genética?",
    "opcoes": ["Uma troca de material genético entre cromossomos", "Uma alteração no DNA que pode ser benéfica, neutra ou prejudicial", "A formação de uma nova célula", "O processo de divisão celular"],
    "resposta": "Uma alteração no DNA que pode ser benéfica, neutra ou prejudicial"
  },
  {
    "pergunta": "Qual é a função das enzimas na genética?",
    "opcoes": ["Armazenar informações genéticas", "Catalisar reações químicas, incluindo a replicação do DNA", "Proteger o DNA contra radiação", "Transportar oxigênio"],
    "resposta": "Catalisar reações químicas, incluindo a replicação do DNA"
  },
  {
    "pergunta": "O que é o genoma?",
    "opcoes": ["O conjunto de cromossomos de uma espécie", "A célula que realiza a divisão celular", "O conjunto de proteínas de uma célula", "O processo de síntese de RNA"],
    "resposta": "O conjunto de cromossomos de uma espécie"
  },
  {
    "pergunta": "O que é um transgênico?",
    "opcoes": ["Um organismo com genes de outras espécies", "Um gene que causa doenças genéticas", "Uma célula em divisão", "Um processo de mutação natural"],
    "resposta": "Um organismo com genes de outras espécies"
  }
];

let i = 0, vidas = 5;

const pergunta = document.getElementById("pergunta");
const opcoes = document.getElementById("opcoes");
const vidas1 = document.getElementById("vidas");
const msg = document.getElementById("mensagem");
const progresso = document.getElementById("progresso");
const botoesFinais = document.getElementById("botoes-finais");

function mostrarPergunta() {
  if (i >= perguntasFuncoes.length) {
pergunta.textContent = "Parabéns! Você concluiu o quiz!";
opcoes.innerHTML = "";
progresso.textContent = "Quiz concluído!";
msg.textContent = "Você acertou todas!";
botoesFinais.style.display = "block";
return;
  }

  const p = perguntasFuncoes[i];
  pergunta.textContent = p.pergunta;
  opcoes.innerHTML = "";
  progresso.textContent = `Pergunta ${i + 1}/${perguntasFuncoes.length}`;
  botoesFinais.style.display = "none";

  p.opcoes.forEach(opcao => {
  const btn = document.createElement("button");
  btn.textContent = opcao;
  btn.onclick = () => verificarResposta(btn, opcao, p.resposta);
  opcoes.appendChild(btn);
  });
}

function verificarResposta(btn, escolhida, correta) {
  [...opcoes.children].forEach(b => b.disabled = true);

  if (escolhida === correta) {
    msg.textContent = "Resposta correta!";
    i++;
    setTimeout(mostrarPergunta, 1000);
  } else {
    msg.textContent = "Resposta errada!";
    vidas--;
    vidas1.textContent = "Vidas: " + vidas;

    if (vidas === 0) {
      msg.textContent = "O quiz será reiniciado";
      setTimeout(reiniciarJogo, 2000);
    } else {
      setTimeout(() => {
        Array.from(opcoes.children).forEach(b => b.disabled = false);
      }, 1000);
    }
  }
}

function reiniciarJogo() {
i = 0;
vidas = 5;
vidas1.textContent = "Vidas: " + vidas;
msg.textContent = "";
botoesFinais.style.display = "none";
mostrarPergunta();
}

function voltarMenu() {
window.location.href = "menu.html";
}

mostrarPergunta();