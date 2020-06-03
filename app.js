'use strict'

/**
 * Example store structure
 */



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
  score: 0
};

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