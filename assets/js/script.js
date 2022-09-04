function sortAnswer() {
    let answers = [
        "Definitivamente sim!",
        "Acho que sim",
        "Talvez...",
        "Acredito que não '-'",
        "De jeito nenhum!",
        "Não tenho certeza :("
    ]

    return answers[parseInt(Math.random() * answers.length)];
}

addEventListener("keypress", function(e) {
    if(e.key == "Enter") {
        let sendBtn = document.getElementById("enviar");
        let questionArea = this.document.getElementById("question");

        if(questionArea.value != "") {
            sendBtn.click();
            questionArea.value = "";
        } else {
            let dismissBtn = this.document.getElementById("dismiss-btn");
            dismissBtn.click();
        }
    }
});

function getAnswer() {
    let questionArea = document.getElementById("question");
    let answerArea = document.getElementById("answer");
    let alertBox = document.getElementById("alert-modal");
    let alertContent = document.getElementById("alert-content");
    let modal = new bootstrap.Modal(alertBox);

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
        } else {
            alertContent.textContent = "Se sua pergunta não tiver um '?' ela se torna uma afimação, tente de novo!";
            modal.show();
        }

    } else {
        alertContent.textContent = "Você precisa fazer uma pergunta primeiro!";
        modal.show();
    }
}