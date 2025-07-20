let perguntasFuncoes = [
{
    "pergunta": "O que é interpretação de texto?",
    "opcoes": ["É a habilidade de decorar um texto", "É a habilidade de compreender, analisar e refletir sobre um texto", "É a leitura de um texto sem reflexão", "É a habilidade de decorar frases importantes"],
    "resposta": "É a habilidade de compreender, analisar e refletir sobre um texto"
  },
  {
    "pergunta": "Qual é a principal finalidade da interpretação de texto?",
    "opcoes": ["Decorar palavras-chave", "Compreender e refletir sobre o conteúdo de um texto", "Ler rapidamente", "Repetir o conteúdo do texto"],
    "resposta": "Compreender e refletir sobre o conteúdo de um texto"
  },
  {
    "pergunta": "Por que a interpretação de texto é importante?",
    "opcoes": ["Porque ajuda a decorar o conteúdo", "Porque facilita a resolução de questões em provas", "Porque é só para redações", "Porque só serve para leitura de notícias"],
    "resposta": "Porque facilita a resolução de questões em provas"
  },
  {
    "pergunta": "Qual é uma das habilidades desenvolvidas pela interpretação de texto?",
    "opcoes": ["Decorar datas e nomes", "Participar de debates com argumentos sólidos", "Ler muito rápido", "Escrever sem erros"],
    "resposta": "Participar de debates com argumentos sólidos"
  },
  {
    "pergunta": "Qual é um tipo de texto descrito no texto?",
    "opcoes": ["Texto narrativo", "Texto de opinião", "Texto publicitário", "Texto científico"],
    "resposta": "Texto narrativo"
  },
  {
    "pergunta": "Qual é a característica principal de um texto narrativo?",
    "opcoes": ["Defende uma ideia", "Dá instruções", "Conta uma história com personagens, tempo e espaço", "Descreve objetos e lugares"],
    "resposta": "Conta uma história com personagens, tempo e espaço"
  },
  {
    "pergunta": "O que caracteriza um texto descritivo?",
    "opcoes": ["Apresenta argumentos para defender uma ideia", "Descreve características de pessoas, objetos ou lugares", "Ensina como fazer algo", "Conta uma história"],
    "resposta": "Descreve características de pessoas, objetos ou lugares"
  },
  {
    "pergunta": "O que um texto dissertativo faz?",
    "opcoes": ["Conta uma história", "Defende uma ideia ou ponto de vista com argumentos", "Dá instruções", "Descreve objetos"],
    "resposta": "Defende uma ideia ou ponto de vista com argumentos"
  },
  {
    "pergunta": "Qual é o principal objetivo de um texto injuntivo?",
    "opcoes": ["Descrever pessoas e lugares", "Dar instruções ou orientações", "Contar uma história", "Argumentar sobre um ponto de vista"],
    "resposta": "Dar instruções ou orientações"
  },
  {
    "pergunta": "Qual é a estratégia de leitura sugerida no texto?",
    "opcoes": ["Ler sem parar", "Ler com atenção, destacando palavras-chave", "Ler rapidamente", "Ler apenas os títulos"],
    "resposta": "Ler com atenção, destacando palavras-chave"
  },
  {
    "pergunta": "Como melhorar a interpretação de textos?",
    "opcoes": ["Ler sem fazer pausas", "Fazer perguntas sobre o texto", "Evitar fazer conexões com outros conhecimentos", "Ler apenas uma vez"],
    "resposta": "Fazer perguntas sobre o texto"
  },
  {
    "pergunta": "O que é a leitura inferencial?",
    "opcoes": ["É quando o leitor entende somente o que está explícito no texto", "É quando o leitor conclui informações que não estão diretamente no texto", "É a leitura rápida de um texto", "É a leitura com foco em palavras-chave"],
    "resposta": "É quando o leitor conclui informações que não estão diretamente no texto"
  },
  {
    "pergunta": "A leitura inferencial exige que o leitor:",
    "opcoes": ["Ler rapidamente", "Entenda apenas as palavras que estão explícitas", "Descubra informações não ditas diretamente no texto", "Fique focado nos exemplos do texto"],
    "resposta": "Descubra informações não ditas diretamente no texto"
  },
  {
    "pergunta": "O que o texto sugere sobre como fazer perguntas sobre o texto?",
    "opcoes": ["Fazer perguntas apenas sobre o conteúdo", "Fazer perguntas sobre quem, quando, onde e por quê", "Fazer perguntas apenas sobre as palavras difíceis", "Fazer perguntas apenas sobre o final do texto"],
    "resposta": "Fazer perguntas sobre quem, quando, onde e por quê"
  },
  {
    "pergunta": "Qual é a principal função da interpretação de texto no aprendizado?",
    "opcoes": ["Decorando detalhes do texto", "Desenvolvendo a capacidade de entender e refletir sobre o conteúdo", "Acelerando a leitura", "Reduzindo a quantidade de leitura"],
    "resposta": "Desenvolvendo a capacidade de entender e refletir sobre o conteúdo"
  },
  {
    "pergunta": "O que significa 'relacionar o conteúdo com conhecimentos anteriores' na interpretação de texto?",
    "opcoes": ["Ler sem interromper", "Aplicar o que já sabemos para compreender melhor o texto", "Fazer resumos do texto", "Repetir o que foi lido"],
    "resposta": "Aplicar o que já sabemos para compreender melhor o texto"
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