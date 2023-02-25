const quizDB = [
    {
        question: "Q1: What does the abbreviation HTML stand for? ",
        a:"HighText Machine Language",
        b:"HyperText and links Markup Language",
        c:"HyperText Markup Language",
        d:"None of these",
        ans:"ans3"
    },
    {
        question: "Q2: Which of the following element is responsible for making the text bold in HTML? ",
        a:"<pre>",
        b:"<a>",
        c:"<b>",
        d:"<br>",
        ans:"ans3"
    },
    {
        question: "Q3: Which of the following tag is used for inserting the largest heading in HTML? ",
        a:"<h3>",
        b:"<h1>",
        c:"<h5>",
        d:"<h6>",
        ans:"ans2"
    },

    {
        question: "Q4: Which of the following tag is used to define options in a drop-down selection list?",
        a:"<select>",
        b:"<list>",
        c:"<dropdown>",
        d:"<option>",
        ans:"ans4"
    },
    {
        question: "Q5: Who is the father of HTML?",
        a:"Rasmus Lerdorf",
        b:"Tim Berners-Lee",
        c:"Brendan Eich",
        d: " Sergey Brin",
        ans:"ans2"
    },

    {
        question: "Q6: What is CSS?",
        a:"CSS is a style sheet language",
        b:"CSS is designed to separate the presentation and content, including layout, colors, and fonts",
        c:"CSS is the language used to style the HTML documents",
        d: "All of the mentioned",
        ans:"ans4"
    },
    {
        question: "Q7: Which of the following tag is used to embed css in html page?",
        a:"<css>",
        b:"<!DOCTYPE html>",
        c:" <script>",
        d: "<style>",
        ans:"ans4"
    },
    {
        question:"Q8: Which of the following CSS selectors are used to specify a group of elements?", 
        a:"tag",
        b:"id",
        c:"class",
        d:"both id and class",
        ans:"ans3" 
    },
    {
        question: "Q9: Which of the following CSS framework is used to create a responsive design?",
        a:"django",
        b:"rails",
        c:"larawell",
        d: " bootstrap",
        ans:"ans4"
    },
    {
        question:"Q10: Which of the following type of HTML tag is used to define an internal style sheet?", 
        a:"<script>",
        b:" <link>",
        c:"<class>",
        d:"<style>",
        ans:"ans4"
    },

   
];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }

    });
    return answer;
};

const deselectAll = () => {
answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    
    console.log(checkedAnswer);

    if(checkedAnswer == quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{

        showScore.innerHTML = `
        <h3> you scored ${score}/${quizDB.length} well done </h3>
        <button class="btn" onclick="location.reload()"> play again </button>
        `;

        showScore.classList.remove('scoreArea');
    }
});