let perguntasFuncoes = [
 {
    "pergunta": "O que é Ecologia?",
    "opcoes": ["O estudo dos organismos", "O estudo das interações entre os seres vivos e o ambiente", "A ciência das plantas", "A ciência dos animais"],
    "resposta": "O estudo das interações entre os seres vivos e o ambiente"
  },
  {
    "pergunta": "O que são os ecossistemas?",
    "opcoes": ["Unidades de vida", "Comunidades de organismos e seus ambientes abióticos", "Plantas e animais", "Cadeias alimentares"],
    "resposta": "Comunidades de organismos e seus ambientes abióticos"
  },
  {
    "pergunta": "O que é biodiversidade?",
    "opcoes": ["A diversidade de organismos em um ecossistema", "O estudo dos organismos", "O ciclo de nutrientes", "A interação entre plantas e animais"],
    "resposta": "A diversidade de organismos em um ecossistema"
  },
  {
    "pergunta": "Qual é a função das cadeias alimentares?",
    "opcoes": ["Transferir energia entre os organismos", "Produzir oxigênio", "Distribuir nutrientes", "Proteger os ecossistemas"],
    "resposta": "Transferir energia entre os organismos"
  },
  {
    "pergunta": "O que é o ciclo dos nutrientes?",
    "opcoes": ["A transferência de energia no ecossistema", "O processo de reciclagem dos nutrientes no meio ambiente", "O estudo da biodiversidade", "A migração de animais"],
    "resposta": "O processo de reciclagem dos nutrientes no meio ambiente"
  },
  {
    "pergunta": "Quais são os principais impactos humanos no meio ambiente?",
    "opcoes": ["Desmatamento, poluição e mudança climática", "Expansão de florestas", "Melhoria na qualidade do ar", "Reflorestamento"],
    "resposta": "Desmatamento, poluição e mudança climática"
  },
  {
    "pergunta": "O que é uma teia alimentar?",
    "opcoes": ["A transferência de energia entre organismos", "Uma rede de cadeias alimentares interconectadas", "A relação entre plantas e animais", "A divisão de um ecossistema"],
    "resposta": "Uma rede de cadeias alimentares interconectadas"
  },
  {
    "pergunta": "Por que a biodiversidade é importante?",
    "opcoes": ["Porque garante a estabilidade dos ecossistemas", "Porque aumenta a poluição", "Porque diminui os recursos naturais", "Porque elimina as mudanças climáticas"],
    "resposta": "Porque garante a estabilidade dos ecossistemas"
  },
  {
    "pergunta": "Qual é o principal elemento abiótico que afeta os ecossistemas?",
    "opcoes": ["Água", "Animais", "Plantas", "Humanos"],
    "resposta": "Água"
  },
  {
    "pergunta": "O que é a herança genética?",
    "opcoes": ["A transmissão de características de pais para filhos", "A mudança dos organismos ao longo do tempo", "A competição entre espécies", "A adaptação dos seres vivos"],
    "resposta": "A transmissão de características de pais para filhos"
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