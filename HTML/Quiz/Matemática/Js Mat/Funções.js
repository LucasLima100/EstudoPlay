let perguntasFuncoes = [
 {
    pergunta: "O que é uma função?",
    opcoes: [
      "Um conjunto de números",
      "Uma equação com uma incógnita",
      "Uma relação entre dois conjuntos onde cada elemento do domínio tem um único correspondente no contradomínio",
      "Um gráfico com uma reta"
    ],
    resposta: "Uma relação entre dois conjuntos onde cada elemento do domínio tem um único correspondente no contradomínio"
  },
  {
    pergunta: "Qual é o domínio da função f(x) = 2x + 3?",
    opcoes: [
      "Todos os números reais",
      "Somente os positivos",
      "Somente os inteiros",
      "Somente os pares"
    ],
    resposta: "Todos os números reais"
  },
  {
    pergunta: "Qual é a imagem da função f(x) = x² para x ∈ R?",
    opcoes: [
      "R",
      "x > 0",
      "x ≥ 0",
      "x < 0"
    ],
    resposta: "x ≥ 0"
  },
  {
    pergunta: "A função f(x) = 3x é uma função...",
    opcoes: [
      "Afim",
      "Quadrática",
      "Constante",
      "Exponencial"
    ],
    resposta: "Afim"
  },
  {
    pergunta: "Qual o valor de f(2) na função f(x) = x² - 3x + 2?",
    opcoes: ["0", "1", "2", "4"],
    resposta: "0"
  },
  {
    pergunta: "A função f(x) = x³ é uma função...",
    opcoes: [
      "Quadrática",
      "Cúbica",
      "Constante",
      "Linear"
    ],
    resposta: "Cúbica"
  },
  {
    pergunta: "Se f(x) = 5, então a função é...",
    opcoes: [
      "Linear",
      "Quadrática",
      "Constante",
      "Afim"
    ],
    resposta: "Constante"
  },
  {
    pergunta: "Qual o valor de x para f(x) = 2x + 1 ser igual a 7?",
    opcoes: ["2", "3", "4", "5"],
    resposta: "3"
  },
  {
    pergunta: "O gráfico da função f(x) = -x é uma...",
    opcoes: [
      "Reta crescente",
      "Parábola",
      "Reta decrescente",
      "Função constante"
    ],
    resposta: "Reta decrescente"
  },
  {
    pergunta: "Qual o valor de f(-2) para f(x) = x²?",
    opcoes: ["-4", "4", "2", "0"],
    resposta: "4"
  },
  {
    pergunta: "Uma função do 1º grau tem qual forma geral?",
    opcoes: [
      "f(x) = ax² + bx + c",
      "f(x) = ax + b",
      "f(x) = a/x",
      "f(x) = √x"
    ],
    resposta: "f(x) = ax + b"
  },
  {
    pergunta: "Se f(x) = x² e g(x) = x + 1, qual é (f ◦ g)(2)?",
    opcoes: ["9", "6", "4", "3"],
    resposta: "9"
  },
  {
    pergunta: "Qual é o zero da função f(x) = 2x - 8?",
    opcoes: ["8", "6", "4", "2"],
    resposta: "4"
  },
  {
    pergunta: "Qual dessas funções é crescente para todo x ∈ R?",
    opcoes: [
      "f(x) = -x",
      "f(x) = x²",
      "f(x) = 3x + 1",
      "f(x) = -2x + 3"
    ],
    resposta: "f(x) = 3x + 1"
  },
  {
    pergunta: "Se f(x) = √x, qual o domínio da função?",
    opcoes: ["x ∈ R", "x ≥ 0", "x < 0", "x ≠ 0"],
    resposta: "x ≥ 0"
  },
  {
    pergunta: "O gráfico de f(x) = x² é uma...",
    opcoes: [
      "Reta",
      "Hipérbole",
      "Parábola",
      "Circunferência"
    ],
    resposta: "Parábola"
  },
  {
    pergunta: "Qual é o valor de f(0) na função f(x) = 4x - 2?",
    opcoes: ["-2", "0", "2", "4"],
    resposta: "-2"
  },
  {
    pergunta: "A função f(x) = 2ˣ é um exemplo de função...",
    opcoes: [
      "Afim",
      "Exponencial",
      "Quadrática",
      "Constante"
    ],
    resposta: "Exponencial"
  },
  {
    pergunta: "Se f(x) = x + 2 e g(x) = x², qual é f(g(2))?",
    opcoes: ["6", "8", "4", "10"],
    resposta: "6"
  },
  {
    pergunta: "Uma função é injetora quando...",
    opcoes: [
      "Cada elemento do domínio tem uma única imagem",
      "Cada elemento da imagem tem uma única origem",
      "Todos os elementos do contradomínio são atingidos",
      "O gráfico é uma reta horizontal"
    ],
    resposta: "Cada elemento da imagem tem uma única origem"
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