function sortAnswer() {
    let answers = [
        "Definitivamente sim!",
        "Acho que sim",
        "Talvez...",
        "Acredito que não :(",
        "De jeito nenhum!",
        "Na real, eu não me importo",
        "Sei lá, mil tretas",
        "Vou perguntar no posto Ipiranga e já te falo!",
        "Tá aí uma pergunta que não to afim de responder u.u"
    ]

    return answers[parseInt(Math.random() * answers.length)];
}

addEventListener("keypress", function(e) {
    if(e.key == "Enter") {
        getAnswer();
    }
});

function getAnswer() {
    let questionArea = document.getElementById("question");
    let answerArea = document.getElementById("answer");

    let lastChar = String(questionArea.value).charAt((questionArea.value).length - 1);

    if(questionArea.value != "") {
        if(lastChar == "?") {
            answerArea.classList.remove("answer-finally");
            answerArea.classList.add("answer-thinking");
            answerArea.textContent = "Pensando...";
    
            setTimeout(() => {
                answerArea.classList.remove("answer-thinking");
                answerArea.classList.add("answer-finally");
                answerArea.textContent = sortAnswer();
            }, 2000);
    
            questionArea.value = "";
        } else alert("Se sua pergunta não tiver um '?' ela se torna um afimação, tente de novo!");

    } else {
    }
}