let perguntasFuncoes = [
 {
    pergunta: "Qual é a soma dos ângulos internos de um triângulo?",
    opcoes: ["90°", "180°", "270°", "360°"],
    resposta: "180°"
  },
  {
    pergunta: "Um quadrado tem lados medindo 4 cm. Qual é sua área?",
    opcoes: ["8 cm²", "12 cm²", "16 cm²", "20 cm²"],
    resposta: "16 cm²"
  },
  {
    pergunta: "Quantos lados tem um hexágono?",
    opcoes: ["4", "5", "6", "8"],
    resposta: "6"
  },
  {
    pergunta: "Qual é o nome do polígono com 8 lados?",
    opcoes: ["Pentágono", "Hexágono", "Heptágono", "Octógono"],
    resposta: "Octógono"
  },
  {
    pergunta: "Qual é a fórmula da área do círculo?",
    opcoes: ["2πr", "πr²", "πd", "r² + π"],
    resposta: "πr²"
  },
  {
    pergunta: "O que é um ângulo reto?",
    opcoes: ["90°", "45°", "180°", "120°"],
    resposta: "90°"
  },
  {
    pergunta: "Qual é o nome da figura tridimensional com 6 faces quadradas?",
    opcoes: ["Cilindro", "Pirâmide", "Esfera", "Cubo"],
    resposta: "Cubo"
  },
  {
    pergunta: "Qual é a fórmula do perímetro de um retângulo?",
    opcoes: ["2 × (l + a)", "l × a", "4 × l", "l + a"],
    resposta: "2 × (l + a)"
  },
  {
    pergunta: "Uma circunferência tem raio de 3 cm. Qual seu diâmetro?",
    opcoes: ["3 cm", "6 cm", "9 cm", "12 cm"],
    resposta: "6 cm"
  },
  {
    pergunta: "Qual é o nome do polígono com 5 lados?",
    opcoes: ["Quadrado", "Pentágono", "Hexágono", "Trapézio"],
    resposta: "Pentágono"
  },
  {
    pergunta: "Qual é a área de um triângulo com base 6 cm e altura 4 cm?",
    opcoes: ["12 cm²", "24 cm²", "10 cm²", "16 cm²"],
    resposta: "12 cm²"
  },
  {
    pergunta: "Qual figura plana tem apenas um par de lados paralelos?",
    opcoes: ["Quadrado", "Retângulo", "Trapézio", "Losango"],
    resposta: "Trapézio"
  },
  {
    pergunta: "Uma esfera tem quantas faces planas?",
    opcoes: ["0", "1", "2", "Infinitas"],
    resposta: "0"
  },
  {
    pergunta: "Como se chama a linha que divide um círculo em duas partes iguais?",
    opcoes: ["Raio", "Corda", "Diâmetro", "Tangente"],
    resposta: "Diâmetro"
  },
  {
    pergunta: "O que são ângulos complementares?",
    opcoes: [
      "Ângulos que somam 90°",
      "Ângulos que somam 180°",
      "Ângulos iguais",
      "Ângulos opostos pelo vértice"
    ],
    resposta: "Ângulos que somam 90°"
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