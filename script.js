var questionsArr = [{
    //{propertyname : property value, , , ,} objects {}
    question: 'What are the three basic file types in modern web dev?',
    choices: ['1. JavaScript, Java, C++', '2. HTML, CSS, JavaScript', '3. Celery, Onion, Garlic', '4. Say what?'],
    answer: '2. HTML, CSS, JavaScript'
},
{
    //propertyname : property value, , , ,
    question: 'What is the coolest dog breed?',
    choices: ['1. Golden Retriever', '2. Doxin', '3. Rotweiler', '4. Labrador'],
    answer: '2. Doxin'
},
{
    //propertyname : property value, , , ,
    question: 'Who is the current US president',
    choices: ['1. Barack Obama', '2. Arnold Schwartzenegger', '3. Donald Trump', '4. Bernie Sanders'],
    answer: '3. Donald Trump'
},
{
    //propertyname : property value, , , ,
    question: 'How does one make an omelet?',
    choices: ['1. bake it', '2. grill it', '3. steam it', '4. stew it'],
    answer: '3. steam it'
}];

var questionIndex = 0;
var score = 0;

$(".btn-primary").on('click', function(){
    displayQuestion()
})

function displayQuestion(){
    if(questionIndex === questionsArr.length){
        gameOver()
    }else{
         $("#quizQ").text(questionsArr[questionIndex].question);
    $("#quizA").empty();
    $("#quizA").append(`<button>${questionsArr[questionIndex].choices[0]}
    </button><button>${questionsArr[questionIndex].choices[1]}</button>
    <button>${questionsArr[questionIndex].choices[2]}</button><button>
    ${questionsArr[questionIndex].choices[3]}</button>`)
    }
   
}
    
$("#quizA").on('click', 'button', function(){
    var userChoice = $(this).text();
    var correctAnswer = questionsArr[questionIndex].answer;
    if(userChoice === correctAnswer){
        score ++;
        alert('correct!')
    }else{
        alert("wrong!")
    }
    questionIndex ++;
    displayQuestion()
});

function gameOver(){
    $("#quizQ").empty();
    $("#quizA").empty();
    $('#gameover').append(`<div class='row justify-content-center'><h2>GAME OVER</h2></div><div class='row justify-content-center'>
    <input id='hs' placeholder='enter your initials'/><button id='submiths'>SUBMIT</button></div>`)

    $('#submiths').on('click', function(){
        //submit the highscore, store it in localStorage
        //read up on localStorage in the browser
        console.log('your highscore is ', score);
        console.log('your initials - ', $('#hs').val())
    })
}

//for(let i = 0; i<something; i++){ add 1 to i after each iteration

//}



//questionsArr = [{}, {}, {}]
