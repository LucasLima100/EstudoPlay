let perguntasFuncoes = [
 {
    "pergunta": "O que é Geopolítica?",
    "opcoes": ["Estudo das relações internacionais e territórios", "Estudo da geografia humana e política", "Estudo das fronteiras entre países", "Estudo das mudanças climáticas globais"],
    "resposta": "Estudo da geografia humana e política"
  },
  {
    "pergunta": "Qual é o conceito de “Heartland” proposto por Halford Mackinder?",
    "opcoes": ["Região da África com maior influência política", "Região da Eurásia com maior controle estratégico", "A posição geográfica das potências marítimas", "A importância das fronteiras na África"],
    "resposta": "Região da Eurásia com maior controle estratégico"
  },
  {
    "pergunta": "O que é a teoria do Rimland de Nicholas Spykman?",
    "opcoes": ["A teoria que defende a importância das grandes potências oceânicas", "A teoria que defende o controle das áreas costeiras e zonas de transição", "A teoria que foca no controle do deserto da Ásia", "A teoria que fala sobre as consequências do imperialismo europeu"],
    "resposta": "A teoria que defende o controle das áreas costeiras e zonas de transição"
  },
  {
    "pergunta": "O que é a teoria da guerra total de Carl von Clausewitz?",
    "opcoes": ["A teoria que defende a guerra sem fronteiras ou restrições", "A teoria que fala sobre a guerra apenas entre estados", "A teoria que defende o uso de tecnologia moderna na guerra", "A teoria que preconiza o controle político como principal objetivo da guerra"],
    "resposta": "A teoria que defende a guerra sem fronteiras ou restrições"
  },
  {
    "pergunta": "Quais são os principais atores da Geopolítica Global?",
    "opcoes": ["Estados, Organizações Internacionais e Multinacionais", "Governos locais e regionais", "Movimentos sociais e ONGs", "Indivíduos e líderes religiosos"],
    "resposta": "Estados, Organizações Internacionais e Multinacionais"
  },
  {
    "pergunta": "Qual a relação entre Geopolítica e Economia?",
    "opcoes": ["A Geopolítica estuda como a geografia influencia as economias locais", "A Geopolítica lida com as relações comerciais e a distribuição de recursos", "A Geopolítica define as políticas econômicas de países em guerra", "A Geopolítica envolve o estudo das redes financeiras internacionais"],
    "resposta": "A Geopolítica lida com as relações comerciais e a distribuição de recursos"
  },
  {
    "pergunta": "O que caracteriza um regime geopolítico unipolar?",
    "opcoes": ["Um sistema de poder dominado por várias superpotências", "Um sistema de poder com uma única potência global dominante", "Um sistema onde as potências regionais têm igual influência", "Um sistema baseado em uma organização internacional que dita regras para todos"],
    "resposta": "Um sistema de poder com uma única potência global dominante"
  },
  {
    "pergunta": "O que é uma ‘zona de influência’ em Geopolítica?",
    "opcoes": ["Área onde um país exerce controle direto sobre outros países", "Área onde um país tem forte presença militar, mas sem controle direto", "Área sem qualquer influência externa", "Área onde ocorrem alianças comerciais entre países"],
    "resposta": "Área onde um país exerce controle direto sobre outros países"
  },
  {
    "pergunta": "Como a Geopolítica pode afetar a segurança alimentar?",
    "opcoes": ["A Geopolítica influencia os preços dos alimentos globalmente", "A Geopolítica determina as áreas onde há maior escassez de alimentos", "A Geopolítica define as políticas agrícolas internas de cada país", "A Geopolítica não tem relação com segurança alimentar"],
    "resposta": "A Geopolítica influencia os preços dos alimentos globalmente"
  },
  {
    "pergunta": "O que são as 'rotas comerciais' em Geopolítica?",
    "opcoes": ["Caminhos estabelecidos por empresas para distribuição de produtos", "Vias marítimas, aéreas ou terrestres usadas para o comércio internacional", "Acordos diplomáticos que facilitam o comércio", "Cidades comerciais com maior desenvolvimento econômico"],
    "resposta": "Vias marítimas, aéreas ou terrestres usadas para o comércio internacional"
  },
  {
    "pergunta": "Qual é a principal característica da Geopolítica do petróleo?",
    "opcoes": ["A luta pelo controle dos recursos naturais, especialmente o petróleo", "A aliança entre países produtores de petróleo", "O controle das reservas de gás natural", "A diplomacia relacionada às exportações agrícolas"],
    "resposta": "A luta pelo controle dos recursos naturais, especialmente o petróleo"
  },
  {
    "pergunta": "O que é a ‘geopolítica do espaço’?",
    "opcoes": ["O estudo da distribuição e ocupação das terras em uma nação", "A luta pelo domínio do espaço aéreo e dos satélites", "A geopolítica envolvendo questões militares em áreas remotas", "O estudo das condições geográficas para exploração econômica"],
    "resposta": "A luta pelo domínio do espaço aéreo e dos satélites"
  },
  {
    "pergunta": "Como o conceito de ‘soft power’ é aplicado em Geopolítica?",
    "opcoes": ["Usando poder militar para controlar territórios", "Influenciando outros países através de cultura, valores e diplomacia", "Impondo sanções econômicas para forçar mudanças", "Usando poder econômico para dominar mercados globais"],
    "resposta": "Influenciando outros países através de cultura, valores e diplomacia"
  },
  {
    "pergunta": "Qual é a principal função das Organizações Internacionais na Geopolítica?",
    "opcoes": ["Regular as atividades econômicas dos países", "Medir o poder militar de cada nação", "Promover a cooperação entre os países e evitar conflitos", "Promover a independência das nações em conflito"],
    "resposta": "Promover a cooperação entre os países e evitar conflitos"
  },
  {
    "pergunta": "O que é um ‘conflito geopolítico’?",
    "opcoes": ["Desentendimento comercial entre países", "Disputa por território ou recursos entre estados ou blocos de poder", "Desafios internos de um país em relação a seus cidadãos", "Conflito entre diferentes empresas em um país"],
    "resposta": "Disputa por território ou recursos entre estados ou blocos de poder"
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