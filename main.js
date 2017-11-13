$(document).ready(function () {

  var questionBank = [
    {
      t: 'What is the capital of Haiti',
      c1: 'Never-Never-Land',
      c2: 'Jaq-mel',
      c3: 'Cap-Haitian',
      a: 'Port au Prince'
    },
    {
      t: 'Who wrote the Haitian Decleration of Independance?',
      c1: 'Wyclef Jean',
      c2: 'Wilner Charles',
      c3: 'Superman',
      a: 'Tousant Louvetour'
    },
    {
      t: 'Who was the first and only king of Haiti',
      c1: 'choice 1',
      c2: 'choice 2',
      c3: 'choice 3',
      a: '3'
    }
  ]

  var currentQuestion = 0
  $('#set-input').on('click', checkAnswer)


  function printQuestion () {
    $('.question-div > p').html(questionBank[currentQuestion].t)
    $('.choiceDiv p:eq(0)').html(questionBank[currentQuestion].c1)
    $('.choiceDiv p:eq(1)').html(questionBank[currentQuestion].c2)
    $('.choiceDiv p:eq(2)').html(questionBank[currentQuestion].c3)
  }

  function checkAnswer () {
    var inputSubmitted = $('#input-field').val()
    console.log(questionBank[currentQuestion].a)
    if (inputSubmitted === questionBank[currentQuestion].a) {
      $('.resultDiv > p').html('Correct! Good Job')
      currentQuestion++
    } else {
      $('.resultDiv > p').html('Sorry! Try again...')
    }
  }

 function playGame () {
   // while (currentQuestion < questionBank.length){
     printQuestion()
   // }
 }

playGame()
})
