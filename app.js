'use strict';

/**
 * Example store structure
 */


const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What color is the Incredible Hulk?',
      answers: [
        'Red',
        'Orange',
        'Pink',
        'Green'
      ],
      correctAnswer: 'Green'
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
  <div class="button-size"><button class='start-quiz'>Start Quiz</button></div>`;
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

//QUESTION PAGE html generator
function generateQuestionHtml(){
  const imageUrl=imageChooser();

  return `<div class='question-image'><${imageUrl}></div>
 
  <h2>Question ${store.questionNumber} out of 5</h2>
  

  <div class="wrapper question">${store.questions[store.questionNumber-1].question}</div>
  <div class="wrapper answer-selections">
    <form id="js-shopping-list-form">
    <div class="content">
        <div>
          <input required type="radio" name="answer" class="answer" value="${store.questions[store.questionNumber-1].answers[0]}">
          <label for="answer">${store.questions[store.questionNumber-1].answers[0]}</label>
        </div>
        <div>
          <input required type="radio" name="answer" class="answer" value="${store.questions[store.questionNumber-1].answers[1]}">
          <label for="answer">${store.questions[store.questionNumber-1].answers[1]}</label>
        </div>
        <div>
          <input required type="radio" name="answer" class="answer" value="${store.questions[store.questionNumber-1].answers[2]}">
          <label for="answer">${store.questions[store.questionNumber-1].answers[2]}</label>
        </div>
        <div>
          <input required type="radio" name="answer" class="answer" value="${store.questions[store.questionNumber-1].answers[3]}">
          <label for="answer">${store.questions[store.questionNumber-1].answers[3]}</label>
        </div>
        </div>
        <div class="button-size">
        <button class='submit-answer' type="submit">Submit</button>
    </div>       
    </form>
    <div class="scores-container-answer-page">
    <div>Right: ${store.score}</div>
    <div>Wrong: ${store.questionNumber-1-store.score}</div>
  </div>
  </div>`;
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
    store.correctToggle='unanswered';


    renderQuiz();
  });
  return 0;
}

//generates html for when the answer is INCORRECT
function generateCorrectHtml(){
  return `
  <div class="wrapper">
    <h2>Correct!</h2>
  </div>
    <div class="wrapper content">
      <div class="right_answer_container">
        <div>Right answer: ${store.questions[store.questionNumber-1].correctAnswer}</div>
      </div>
      <div class="scores-container">
        <div>Right: ${store.score}</div>
        <div>Wrong: ${store.questionNumber-store.score}</div>
      </div>
    </div>

      <div class="button-size"><button class='next-question'>Next</button></div>
    </div>`;
}

//renders Correct page when selected answer= correct answer
function renderCorrect(){
  const correctText=generateCorrectHtml(store.questionNumber);
  $('main').html(correctText);

}

//generates html for when the answer is CORRECT
function generateIncorrectHtml(){
  return `
  <div class="wrapper">
    <h2>Incorrect =(</h2>
  </div>
    <div class="wrapper content">
      <div class="right_answer_container">
        <div>Right answer: ${store.questions[store.questionNumber-1].correctAnswer}</div>
      </div>
      <div class="scores-container">
        <div>Right: ${store.score}</div>
        <div>Wrong: ${store.questionNumber-store.score}</div>
      </div>
    </div>

      <div class="button-size"><button class='next-question'>Next</button></div>
    </div>`;
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
    store.score = 0;
    renderQuiz();
  });
  return 0;
}

//generates END OF QUIZ HTML
function generateEndHtml(){
  return `
  <div class="wrapper">
    <h2>End of Quiz</h2>
  </div>
    <div class="wrapper content">
      <div>Score: ${store.score} out of 5</div>
    </div>
    <div>
      <div class="button-size"><button class='new-game'>New Game</button></div>
    </div>`;
}


//renders End of Quiz page when count=6
function renderEnd(){
  const endText=generateEndHtml(store.questionNumber);
  $('main').html(endText);

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

    console.log(store.questionNumber, 'question number');
    console.log(store.score, 'score');
  
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
