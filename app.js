'use strict';

/**
 * Example store structure
 */

let increment=0;

const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What color is the Incredible Hulk?',
      answers: [
        'red',
        'orange',
        'pink',
        'green'
      ],
      correctAnswer: 'green'
    },
    {
      question: 'Which Avenger is a Norse God?',
      answers: [
        'Thor',
        'Scarlet Witch',
        'Black Widow',
        'Iron Man'
      ],
      correctAnswer: 'Thor'
    },
    {
      question: 'What does Billy Batson say to transform into a hero?',
      answers: [
        'Kapow',
        'Shazam',
        'Abra-cadabra',
        'Sinbad'
      ],
      correctAnswer: 'Shazam'
    },    {
      question: "Who was Peter Parker's first love interest?",
      answers: [
        'Mary Jane',
        'Wanda Maximoff',
        'Gwen Stacy',
        'Jean Grey'
      ],
      correctAnswer: 'Gwen Stacy'
    },    {
      question: 'What planet does Superman come from?',
      answers: [
        'Nabiru',
        'Pluto',
        'Planet X',
        'Krypton'
      ],
      correctAnswer: 'Krypton'
    }

  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  correctToggle:'unanswered'
};

//start page event listener
function handleStartQuiz(){
  $('main').on('click','.start-quiz',(event)=>{
    event.preventDefault();
    store.questionNumber+=1;
    renderQuiz();
  });
  return 0;
}

//generate html for start page
function generateStartHtml(){
  return `<h2>Test your Superhero knowledge!</h2>
  <button class='start-quiz'>Start Quiz</button>`;
}

//renders starting page when count=0
function renderStart(){
  const startText=generateStartHtml(); 
  $('main').html(startText);
  $(handleStartQuiz);
  return 0;
}

//question page event listener
function handleSubmitAnswerEvent(){
  $('main').submit('.submit-answer',(event)=>{
    event.preventDefault();
    let answer=$(event.currentTarget).find('input[name="answer"]:checked').val();


    if(answer===store.questions[store.questionNumber-1].correctAnswer){
      store.correctToggle='correct';
      store.score++;
    }else {
      store.correctToggle='incorrect';
    }
    console.log(answer,store.correctToggle);
  

    renderQuiz();
  });
  return 0;
}

//choose image corresponding to question
function imageChooser(){
  switch (store.questionNumber){
  case 1:{
    return "img class='image' alt='bruce banner' src='images/bruce-banner.jpg'";
  }
  case 2:{
    return "img class='image' alt='thor' src='images/thor.jpg'";    
  }
  case 3:{
    return "img class='image' alt='billy batson' src='images/billy-batson.jpg'";
  }
  case 4:{
    return "img class='image' alt='spider man' src='images/spider-man.jpg'";
  }
  case 5:{
    return "img class='image' alt='superman' src='images/superman.png'";
  }
  default:{
    return 0;
  }
  }
}

//question page html generator
function generateQuestionHtml(){
  const imageUrl=imageChooser();

  return `<h2>Question ${store.questionNumber}:</h2>
  ${store.questions[store.questionNumber-1].question}
  <div class='question-image'><${imageUrl}></div>
  <form id="js-shopping-list-form">
      <input type="radio" name="answer" class="answer" value="${store.questions[store.questionNumber-1].answers[0]}">
      <label for="answer">${store.questions[store.questionNumber-1].answers[0]}</label>
      <input type="radio" name="answer" class="answer" value="${store.questions[store.questionNumber-1].answers[1]}">
      <label for="answer">${store.questions[store.questionNumber-1].answers[1]}</label>
      <input type="radio" name="answer" class="answer" value="${store.questions[store.questionNumber-1].answers[2]}">
      <label for="answer">${store.questions[store.questionNumber-1].answers[2]}</label>
      <input type="radio" name="answer" class="answer" value="${store.questions[store.questionNumber-1].answers[3]}">
      <label for="answer">${store.questions[store.questionNumber-1].answers[3]}</label>
      <div>
          <button class='submit-answer' type="submit">Submit</button>
      </div>        
  </form>`;
}

//render question page
function renderQuestion(){
  const questionText=generateQuestionHtml(store.questionNumber);
  $('main').html(questionText); 
}

//handles the next question event on correct render and incorrect render
function handleNextQuestionEvent(){
  

  $('main').on('click','.next-question',(event)=>{
    event.preventDefault();
    store.questionNumber+=1;
    increment++;
    console.log('increment',increment );

    console.log(store.questionNumber);
    store.correctToggle='unanswered';


    renderQuiz();
  });
  return 0;
}

//generates html for when the answer is incorrect
function generateCorrectHtml(){
  return `<h2>Correct!</h2>
  <div>Right: ${store.score}</div>
  <div>Wrong: ${store.questionNumber-store.score}</div>
  <button class='next-question'>Next</button>`;
}

//renders Correct page when selected answer= correct answer
function renderCorrect(){
  const correctText=generateCorrectHtml(store.questionNumber);
  $('main').html(correctText);

  console.log(store.questionNumber);
}

//generates html for when the answer is correct
function generateIncorrectHtml(){
  return `<h2>Incorrect =(</h2>
    <h3>Right answer:</h3>
    <div>${store.questions[store.questionNumber-1].correctAnswer}</div>
    <div>Right: ${store.score}</div>
    <div>Wrong: ${store.questionNumber-store.score}</div>
    <button class='next-question'>Next</button>`;
}

//renders Incorrect page when selected answer!= correct answer
function renderIncorrect(){  
  const incorrectText=generateIncorrectHtml(store.questionNumber);
  $('main').html(incorrectText);

}

//handles new game event
function handleNewGameEvent(){
  
  $('main').on('click','.new-game',(event)=>{
    event.preventDefault();
    store.questionNumber = 0;
    renderQuiz();
  });
  return 0;
}

//generates End of Quiz HTML
function generateEndHtml(){
  return `<h2>End of Quiz</h2>
    <div>Score: ${store.score} out of 5</div>
    <button class='new-game'>New Game</button>`;
}

//renders End of Quiz page when count=6
function renderEnd(){
  const endText=generateEndHtml(store.questionNumber);
  $('main').html(endText);

  console.log('you are at end');  
}



/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)


function renderQuiz(){
  //display html based off of which page we're on and if the question has been answered.

  console.log(store.questionNumber);


  if(store.questionNumber===0){
    renderStart(store);
  }else if(store.questionNumber===6){
    renderEnd(store);
  }else if(store.correctToggle==='unanswered'){
    console.log('unanswered');
    renderQuestion(store);
  }else if(store.correctToggle==='correct'){
    console.log('c');
    renderCorrect(store);
  }else if(store.correctToggle==='incorrect'){
    console.log('i');
    renderIncorrect(store);
  }
}

function handleQuiz(){
  renderQuiz();
  handleNextQuestionEvent();
  handleSubmitAnswerEvent();
  handleNewGameEvent();
}


//if questionNumber = 1-5 and correctToggle= 'unanswered' and render question

//if questionNumber = 1-5 and correctToggle= 'correct' then render correct

//if questionNumber = 1-5 and correctToggle= 'incorrect' then render incorrect

//if questionNumber = 6 render end

$(handleQuiz);
