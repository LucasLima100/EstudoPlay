let perguntasFuncoes = [
{
    "pergunta": "Qual é o valor de 7 + 3 × 2?",
    "opcoes": ["16", "13", "17", "20"],
    "resposta": "13"
  },
  {
    "pergunta": "Qual é o valor de 12 ÷ 4 + 5?",
    "opcoes": ["8", "10", "9", "7"],
    "resposta": "8"
  },
  {
    "pergunta": "Qual é o valor de 15 × (2 + 3)?",
    "opcoes": ["75", "60", "45", "25"],
    "resposta": "75"
  },
  {
    "pergunta": "Quanto é 10² - 4?",
    "opcoes": ["100", "96", "104", "110"],
    "resposta": "96"
  },
  {
    "pergunta": "Qual é o resultado de 6 + 2 × 3?",
    "opcoes": ["12", "14", "18", "10"],
    "resposta": "12"
  },
  {
    "pergunta": "Quanto é 50 ÷ 5 + 6?",
    "opcoes": ["16", "14", "13", "12"],
    "resposta": "16"
  },
  {
    "pergunta": "Qual é o valor de (4 + 6) × 2?",
    "opcoes": ["20", "16", "12", "24"],
    "resposta": "20"
  },
  {
    "pergunta": "Qual é o resultado de 3 × 5 + 2?",
    "opcoes": ["17", "16", "15", "14"],
    "resposta": "17"
  },
  {
    "pergunta": "Quanto é 7 × (3 + 2)?",
    "opcoes": ["35", "30", "25", "40"],
    "resposta": "35"
  },
  {
    "pergunta": "Qual é o valor de 4 × (8 ÷ 2)?",
    "opcoes": ["16", "20", "24", "12"],
    "resposta": "16"
  },
  {
    "pergunta": "Quanto é 8 + 3 × 4?",
    "opcoes": ["20", "16", "26", "24"],
    "resposta": "20"
  },
  {
    "pergunta": "Qual é o valor de 9 ÷ 3 + 4?",
    "opcoes": ["7", "8", "6", "5"],
    "resposta": "7"
  },
  {
    "pergunta": "Quanto é 14 × 2 ÷ 7?",
    "opcoes": ["6", "8", "5", "4"],
    "resposta": "4"
  },
  {
    "pergunta": "Qual é o valor de 5 × (6 + 3)?",
    "opcoes": ["45", "55", "60", "50"],
    "resposta": "45"
  },
  {
    "pergunta": "Quanto é 100 ÷ 25 × 4?",
    "opcoes": ["16", "18", "12", "14"],
    "resposta": "16"
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