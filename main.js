$(document).ready(function () {

// got snippet from http://api.jquery.com/Types/#Function
function printQuestion () {
    var question = {
      q1: 'first question about Haiti.',
      c1: 'choice 1',
      c2: 'choice 2',
      c3: 'choice 3',
      a: '1'
    }

console.log(question.q1)

     // console.log(question.q1)
     $('.questionDiv > p').html(question.q1)
     $('.choiceDiv p:eq(0)').html(question.c1)
     $('.choiceDiv p:eq(1)').html(question.c2)
     $('.choiceDiv p:eq(2)').html(question.c3)
     $('#set-input').on('click', function checkAnswer () {
       // console.log("button clicked");
       var inputSubmitted = $('#input-field').val()
       if (inputSubmitted === question.a) {
         // console.log('You got it right')
         $('.resultDiv > p').html('Nice! Good Job')
       } else {
         $('.resultDiv > p').html('Nope! Try again...')
       }
       // console.log(inputSubmitted)
     })
   }

   printQuestion()
 })
})
