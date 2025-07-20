let perguntasFuncoes = [
{
    "pergunta": "Qual é a função do sujeito na oração?",
    "opcoes": ["Ação executada", "Quem faz a ação", "Quem recebe a ação", "Condição da ação"],
    "resposta": "Quem faz a ação"
  },
  {
    "pergunta": "Qual a diferença entre sujeito simples e sujeito composto?",
    "opcoes": ["O sujeito simples tem apenas um núcleo, enquanto o composto tem mais de um", "O sujeito simples é acompanhado de predicado, e o composto não", "O sujeito simples expressa uma ideia completa, e o composto não", "Não há diferença entre sujeito simples e composto"],
    "resposta": "O sujeito simples tem apenas um núcleo, enquanto o composto tem mais de um"
  },
  {
    "pergunta": "Qual é a função do predicado na oração?",
    "opcoes": ["Indicar quem faz a ação", "Indicar quem recebe a ação", "Indicar a ação ou estado do sujeito", "Indicar o tempo da ação"],
    "resposta": "Indicar a ação ou estado do sujeito"
  },
  {
    "pergunta": "O que é um verbo transitivo direto?",
    "opcoes": ["Verbo que exige um complemento direto", "Verbo que exige preposição", "Verbo que não exige complemento", "Verbo que expressa estado"],
    "resposta": "Verbo que exige um complemento direto"
  },
  {
    "pergunta": "Qual é a função da vírgula na frase 'Ela gosta de estudar, ler e escrever'?",
    "opcoes": ["Indicar uma pausa", "Separar os elementos de uma lista", "Indicar a ordem das palavras", "Indicar um adjetivo"],
    "resposta": "Separar os elementos de uma lista"
  },
  {
    "pergunta": "O que é um adjunto adverbial?",
    "opcoes": ["Parte do sujeito", "Complemento que modifica o verbo", "Palavra que expressa uma ação", "Parte do predicado"],
    "resposta": "Complemento que modifica o verbo"
  },
  {
    "pergunta": "Qual é a função do pronome relativo?",
    "opcoes": ["Substituir um substantivo", "Relatar uma ação", "Relacionar duas orações", "Conectar o verbo com o sujeito"],
    "resposta": "Relacionar duas orações"
  },
  {
    "pergunta": "O que caracteriza uma oração subordinada adjetiva?",
    "opcoes": ["Explica o sujeito da oração", "Funciona como complemento do verbo", "Qualifica ou caracteriza um substantivo", "Indica uma condição"],
    "resposta": "Qualifica ou caracteriza um substantivo"
  },
  {
    "pergunta": "Qual é o uso do acento diferencial em palavras como 'pêlo' e 'pelo'?",
    "opcoes": ["Para diferenciar palavras de mesma grafia e significado", "Para diferenciar palavras de mesma grafia e diferentes significados", "Para marcar o plural", "Para dar ênfase à palavra"],
    "resposta": "Para diferenciar palavras de mesma grafia e diferentes significados"
  },
  {
    "pergunta": "Em que situação o uso do 'mau' é correto?",
    "opcoes": ["Para expressar algo de qualidade ruim", "Para expressar algo de qualidade boa", "Para indicar quantidade", "Para indicar lugar"],
    "resposta": "Para expressar algo de qualidade ruim"
  },
  {
    "pergunta": "Qual é a diferença entre 'mas' e 'mais'?",
    "opcoes": ["'Mas' é conjunção adversativa, e 'mais' é advérbio de intensidade", "'Mas' é advérbio, e 'mais' é conjunção", "'Mas' é adjetivo, e 'mais' é verbo", "'Mas' e 'mais' têm o mesmo significado"],
    "resposta": "'Mas' é conjunção adversativa, e 'mais' é advérbio de intensidade"
  },
  {
    "pergunta": "Qual é o objetivo do uso do artigo definido 'o', 'a', 'os', 'as'?",
    "opcoes": ["Indicar algo específico", "Indicar algo indefinido", "Indicar uma ação", "Indicar um tempo"],
    "resposta": "Indicar algo específico"
  },
  {
    "pergunta": "Qual é a função do advérbio na frase?",
    "opcoes": ["Indicar uma ação", "Modificar um verbo, adjetivo ou outro advérbio", "Indicar a pessoa da ação", "Expressar uma condição"],
    "resposta": "Modificar um verbo, adjetivo ou outro advérbio"
  },
  {
    "pergunta": "Qual é a diferença entre 'porque' e 'por que'?",
    "opcoes": ["'Porque' é usado em respostas, e 'por que' é usado em perguntas", "'Porque' é usado em perguntas, e 'por que' em respostas", "'Porque' e 'por que' têm o mesmo significado", "'Porque' é usado em conjunções e 'por que' em pronomes"],
    "resposta": "'Porque' é usado em respostas, e 'por que' é usado em perguntas"
  },
  {
    "pergunta": "O que é um advérbio de tempo?",
    "opcoes": ["Indica a forma de uma ação", "Indica o modo da ação", "Indica quando a ação ocorre", "Indica a quantidade de algo"],
    "resposta": "Indica quando a ação ocorre"
  },
  {
    "pergunta": "O que é a concordância verbal?",
    "opcoes": ["Acordo entre o verbo e o sujeito", "Acordo entre o substantivo e o adjetivo", "Acordo entre o pronome e o verbo", "Acordo entre o verbo e o advérbio"],
    "resposta": "Acordo entre o verbo e o sujeito"
  },
  {
    "pergunta": "Quando usamos o acento grave (`) em palavras?",
    "opcoes": ["Para indicar a crase, que é a fusão da preposição 'a' com o artigo 'a' ou 'as'", "Para indicar uma sílaba tônica", "Para separar as palavras na frase", "Para indicar a ausência de til"],
    "resposta": "Para indicar a crase, que é a fusão da preposição 'a' com o artigo 'a' ou 'as'"
  },
  {
    "pergunta": "O que é uma oração coordenada?",
    "opcoes": ["Oração que depende de outra para fazer sentido", "Oração que não depende de outra para fazer sentido", "Oração com um verbo", "Oração com sujeito e predicado"],
    "resposta": "Oração que não depende de outra para fazer sentido"
  },
  {
    "pergunta": "O que é o pronome reflexivo?",
    "opcoes": ["Pronome que se refere ao sujeito da oração", "Pronome que substitui o objeto direto", "Pronome que indica posse", "Pronome que se refere à terceira pessoa"],
    "resposta": "Pronome que se refere ao sujeito da oração"
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