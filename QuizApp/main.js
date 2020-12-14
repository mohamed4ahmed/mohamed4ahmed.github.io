let quizData = [
    {
        question: 'How old is Mohamed?',
        a:'10',
        b:'17',
        c:'26',
        d:'110',
        correct:'c'
    }, {
        question: 'what is the most used programming language?',
        a:'java',
        b:'c',
        c:'python',
        d:'javaScript',
        correct:'d',
    }, {
        question: 'who is the president of US?',
        a:'Joe Biden',
        b:'Donald Tramp',
        c:'Ivan Saldano',
        d:'Mihai Andrei',
        correct:'a',
    } , {
        question: 'What does HTML stand for?',
        a:'Hypertext Markup Language',
        b:'cascading Style Sheet',
        c:'Jason Object Notation',
        d:'Helicopters Terminals Motorboats Lamborginis',
        correct:'a',
    } , {
        question: 'What year was javascript Launched?',
        a:'1996',
        b:'1995',
        c:'1994',
        d:'none of the above',
        correct:'b',
    }
];

const answerEl = document.querySelectorAll('.answer');
const questionEl =document.getElementById("question");
const a_text = document.getElementById("a-text");
const b_text = document.getElementById("b-text");
const c_text = document.getElementById("c-text");
const d_text = document.getElementById("d-text");
const submitBtn =document.getElementById("submit");
const quiz = document.getElementById("quiz");



let currentQuiz = 0;
let score = 0;

 function loadQuiz() {
    deSelectAnswers() ;
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText=  currentQuizData.a;
    b_text.innerText=  currentQuizData.b;
    c_text.innerText=  currentQuizData.c;
    d_text.innerText=  currentQuizData.d;
}
loadQuiz();


function getSelected() { 
    let answer = undefined;

    answerEl.forEach((answerEl)=>{
        if (answerEl.checked) { 
            answer = answerEl.id;
        }
    });

   return answer;
}

function deSelectAnswers() { 
    answerEl.forEach((answerEl)=>{
       answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', ()=>{

    const answer =  getSelected() ;

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

    if(currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `<h2> You Answered Correctly At ${score}/${quizData.length} Questions </h2>`
    }
    }

});


