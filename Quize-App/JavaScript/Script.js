const questions =[
    {
        question:  "Number of primitive data types in Java are? ",
        answers:[
            {Text:"6",correct:false},
            {Text:"7",correct:false},
            {Text:"8",correct:true},
            {Text:"9",correct:false},
        ]
    },
    {
        question:  "When an array is passed to a method, what does the method receive? ",
        answers:[
            {Text:"The reference of the array",correct:true},
            {Text:"A copy of the array",correct:false},
            {Text:"Length of the array",correct:false},
            {Text:"Copy of first element",correct:false},
        ] 
    },
    {
        question:  "Arrays in java are- ",
        answers:[
            {Text:"Object reference",correct:false},
            {Text:"Primitive data type",correct:false},
            {Text:"Objects",correct:true},
            {Text:"None ",correct:false},
        ]   
    },
    {
        question:  "When is the object created with new keyword? ",
        answers:[
            {Text:"At compile time",correct:false},
            {Text:"At run time",correct:true},
            {Text:"Depends on code",correct:false},
            {Text:"None",correct:false},
        ]
    },
    {
        question:  " Total constructor string class have? ",
        answers:[
            {Text:"3",correct:false},
            {Text:"7",correct:false},
            {Text:"20",correct:false},
            {Text:"13",correct:true},
        ]
    }
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex =0;
let score =0;

function startQuiz(){
    currentQuestionIndex =0;
    score =0;
    nextButton.innerHTML ="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
   const button = document.createElement("button");
   button.innerHTML = answer.Text;
   button.classList.add("btn");
   answerButtons.appendChild(button);
   if(answer.correct){
    button.dataset.correct = answer.correct;
   }
   button.addEventListener('click',selectAnser);
    });
}

function resetState(){
    nextButton.style.display ="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnser(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
     if(button.dataset.correct === "true"){
        button.classList.add("correct");
     }
     button.disabled = true;
    });
    nextButton.style.display ="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score}out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again!!";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();