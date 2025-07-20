let perguntasFuncoes = [
 {
    "pergunta": "What is the function of the subject in a sentence?",
    "opcoes": ["The action performed", "Who performs the action", "Who receives the action", "Condition of the action"],
    "resposta": "Who performs the action"
  },
  {
    "pergunta": "What is the difference between a simple subject and a compound subject?",
    "opcoes": ["The simple subject has only one core, while the compound subject has more than one", "The simple subject is followed by a predicate, while the compound subject is not", "The simple subject expresses a complete idea, while the compound subject does not", "There is no difference between simple and compound subjects"],
    "resposta": "The simple subject has only one core, while the compound subject has more than one"
  },
  {
    "pergunta": "What is the function of the predicate in a sentence?",
    "opcoes": ["Indicates who performs the action", "Indicates who receives the action", "Indicates the action or state of the subject", "Indicates the time of the action"],
    "resposta": "Indicates the action or state of the subject"
  },
  {
    "pergunta": "What is a transitive verb?",
    "opcoes": ["A verb that requires a direct complement", "A verb that requires a preposition", "A verb that does not require a complement", "A verb that expresses a state"],
    "resposta": "A verb that requires a direct complement"
  },
  {
    "pergunta": "What is the function of the comma in the sentence 'She likes to study, read, and write'?",
    "opcoes": ["To indicate a pause", "To separate items in a list", "To indicate word order", "To indicate an adjective"],
    "resposta": "To separate items in a list"
  },
  {
    "pergunta": "What is an adverbial adjunct?",
    "opcoes": ["Part of the subject", "A complement that modifies the verb", "A word that expresses an action", "Part of the predicate"],
    "resposta": "A complement that modifies the verb"
  },
  {
    "pergunta": "What is the function of a relative pronoun?",
    "opcoes": ["To replace a noun", "To report an action", "To connect two clauses", "To connect the verb with the subject"],
    "resposta": "To connect two clauses"
  },
  {
    "pergunta": "What characterizes an adjectival subordinate clause?",
    "opcoes": ["Explains the subject of the sentence", "Functions as a complement of the verb", "Qualifies or characterizes a noun", "Indicates a condition"],
    "resposta": "Qualifies or characterizes a noun"
  },
  {
    "pergunta": "What is the use of the differential accent in words like 'pêlo' and 'pelo'?",
    "opcoes": ["To differentiate words of the same spelling and meaning", "To differentiate words of the same spelling and different meanings", "To mark the plural", "To emphasize the word"],
    "resposta": "To differentiate words of the same spelling and different meanings"
  },
  {
    "pergunta": "In what situation is the use of 'mau' correct?",
    "opcoes": ["To express something of poor quality", "To express something of good quality", "To indicate quantity", "To indicate place"],
    "resposta": "To express something of poor quality"
  },
  {
    "pergunta": "What is the difference between 'mas' and 'mais'?",
    "opcoes": ["'Mas' is a conjunction of contrast, and 'mais' is an adverb of intensity", "'Mas' is an adverb, and 'mais' is a conjunction", "'Mas' is an adjective, and 'mais' is a verb", "'Mas' and 'mais' have the same meaning"],
    "resposta": "'Mas' is a conjunction of contrast, and 'mais' is an adverb of intensity"
  },
  {
    "pergunta": "What is the purpose of the definite article 'the'?",
    "opcoes": ["To indicate something specific", "To indicate something indefinite", "To indicate an action", "To indicate a time"],
    "resposta": "To indicate something specific"
  },
  {
    "pergunta": "What is the function of the adverb in a sentence?",
    "opcoes": ["To indicate an action", "To modify a verb, adjective, or another adverb", "To indicate the person performing the action", "To express a condition"],
    "resposta": "To modify a verb, adjective, or another adverb"
  },
  {
    "pergunta": "What is the difference between 'because' and 'why'?",
    "opcoes": ["'Because' is used in responses, and 'why' is used in questions", "'Because' is used in questions, and 'why' is used in responses", "'Because' and 'why' have the same meaning", "'Because' is used in conjunctions and 'why' in pronouns"],
    "resposta": "'Because' is used in responses, and 'why' is used in questions"
  },
  {
    "pergunta": "What is a time adverb?",
    "opcoes": ["Indicates the manner of an action", "Indicates the mode of the action", "Indicates when the action occurs", "Indicates the quantity of something"],
    "resposta": "Indicates when the action occurs"
  },
  {
    "pergunta": "What is subject-verb agreement?",
    "opcoes": ["Agreement between the verb and the subject", "Agreement between the noun and the adjective", "Agreement between the pronoun and the verb", "Agreement between the verb and the adverb"],
    "resposta": "Agreement between the verb and the subject"
  },
  {
    "pergunta": "When do we use the grave accent (`) in words?",
    "opcoes": ["To indicate the crasis, which is the fusion of the preposition 'a' with the article 'a' or 'as'", "To indicate a stressed syllable", "To separate words in a sentence", "To indicate the absence of a tilde"],
    "resposta": "To indicate the crasis, which is the fusion of the preposition 'a' with the article 'a' or 'as'"
  },
  {
    "pergunta": "What is a coordinate clause?",
    "opcoes": ["A clause that depends on another to make sense", "A clause that does not depend on another to make sense", "A clause with a verb", "A clause with a subject and predicate"],
    "resposta": "A clause that does not depend on another to make sense"
  },
  {
    "pergunta": "What is a reflexive pronoun?",
    "opcoes": ["A pronoun that refers to the subject of the sentence", "A pronoun that replaces the direct object", "A pronoun that indicates possession", "A pronoun that refers to the third person"],
    "resposta": "A pronoun that refers to the subject of the sentence"
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