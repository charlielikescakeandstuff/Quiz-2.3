const quizData = [
  {
  question:"How many types of Pokemon are there?",
  options:["18","4","30"," 10"],
  answer:"18"
}
,
    {question: "what was sonic's most popular game",
     options:["Sonic the Hedgehog","Sonic Dash","Sonic 2","Sonic 3 & Knuckles","Sonic Jump"],
     answer:"Sonic the Hedgehog"
    },
    {
        question:"what is earthbound ?",
        options:["a fighting game","a clicker game","an rpg game","a puzzle game"],
        answer:"an rpg game"
    },
    {
      question:"When did Fran bow become popular?",
      options:["2015","2017","2018","2019"],
      answer:"2015"    }
      ,
    {
        question:"pacman's most popular game?",
        options:["pacman 1982","Pac-Man Plus","Namco All-Stars: Pac-Man","Pac-Man 2002"],
        answer:"pacman 1982"
    }
    ,
    {
      question:"What type of Pokemon is Wobbuffet?",
      options:["Psychic","Grass","Ghost","Fire"],
      answer:"Psychic"

  }
  ,
  {
    question:"who is STRANGER in omori",
    options:["Basil","SOMETHING","Mari","OMORI"],
    answer:"Basil"

}
,
    {
        question:"Who won 2022's most popular game ?",
        options:["Fortnite","Minecraft","StardewValley","Roblox"],
        answer:"Minecraft"
    } 
  ,
  {
    question:"Who made the music for undertale?",
    options:["David Wise","Yoko Shimomura","Koji Kondo","Toby Fox"],
    answer:"Toby Fox"
} 
  ]//These are the questions that will be asked to the user
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const submitButton = document.getElementById("submit");
    
    let currentQuestion = 0;
    let score = 0;
    
    function showQuestion() {
      const question = quizData[currentQuestion];
      questionElement.innerText = question.question;
    
      optionsElement.innerHTML = "";
      question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        optionsElement.appendChild(button);
        button.addEventListener("click", selectAnswer);
      });
    }
    
    function selectAnswer(e) {
      const selectedButton = e.target;
      if (selectedButton.innerText === quizData[currentQuestion].answer) {
        score++;
        console.log(score)
      }
    
      currentQuestion++;
    
      if (currentQuestion < quizData.length) {
        showQuestion();
   
      } else {
        if(score == 9){ 
          showResultWin()
        }
        else{
          if(score< 5 && score > 1){
            showResultAlmost()
          }
          else {
            if( score == 0){
              showResultLose()
            }
            else{
              showResult()
            }
          }
        }
      }
    }
    
    function showResult() {
      quiz.innerHTML = `
        <h1 style=" text-align:center; color: white ; font-size: 70px" class="title2">Quiz Completed!</h1>
        <p style="text-align:center; font-size:50px; color:white" class="title3">Your nerd score is: ${score}/${quizData.length}</p>
        <p style="text-align:center; font-size:50px; color:white" class="title3">You can do it!</p>
        <a href="index_menu.html"><button style="transform: translateX(560px) translateY(-100px); color: #392977">click here to go back</button></a>
        
        `;
 
    }
    function showResultWin() {
      quiz.innerHTML = `
        <h1 style=" text-align:center; color: white ; font-size: 70px" class="title2">Quiz Completed!</h1>
        <p style="text-align:center; font-size:50px; color:white" class="title3">Your nerd score is: ${score}/${quizData.length} wow!</p>
        <p style="text-align:center; font-size:50px; color:white" class="title3">You really are a nerd!</p>
        <a href="index_menu.html"><button style="transform: translateX(560px) translateY(-100px); color: #392977">click here to go back</button></a>
        
        `;
 
    }
    function showResultAlmost() {
      quiz.innerHTML = `
        <h1 style=" text-align:center; color: white ; font-size: 70px" class="title2">Quiz Completed!</h1>
        <p style="text-align:center; font-size:50px; color:white" class="title3">Your nerd score is: ${score}/${quizData.length} </p>
        <p style="text-align:center; font-size:50px; color:white" class="title3">Keep trying!</p>
        <a href="index_menu.html"><button style="transform: translateX(560px) translateY(-100px); color: #392977">click here to go back</button></a>
        
        `;
 
    }
    function showResultLose() {
      quiz.innerHTML = `
        <h1 style=" text-align:center; color: white ; font-size: 70px" class="title2">Quiz Completed!</h1>
        <p style="text-align:center; font-size:50px; color:white" class="title3">Your nerd score is: ${score}/${quizData.length} yikes.. </p>
        <p style="text-align:center; font-size:50px; color:white" class="title3">Are you sure you're supposed to be here?</p>
        <a href="index_menu.html"><button style="transform: translateX(560px) translateY(-100px); color: #392977">click here to go back</button></a>
        
        `;
 
    }
    showQuestion();
  
