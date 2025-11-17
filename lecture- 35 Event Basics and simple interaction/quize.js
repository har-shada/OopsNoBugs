const questions=[
    
  
    {
        title:
        "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, rem.",
        options:[
            "Lorem, ipsum dolor sit amet.",
             "Lorem, ipsum dolor sit amet.",
            "Lorem, ipsum .",
            "Lorem, ipsum dolor sit amet."
        ],
        correctOption:2,
    },
    {
        title:
        "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, rem.",
        options: [
            "Lorem, ipsum dolor sit amet.",
             "Lorem, ipsum dolor sit amet.",
            "Lorem, ipsum .",
            "Lorem, ipsum dolor sit amet."
        ],
        correctOption:2,
    },
    {
        title:
        "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, rem.",
        options:[
            "Lorem, ipsum dolor sit amet.",
             "Lorem, ipsum dolor sit amet.",
            "Lorem, ipsum .",
            "Lorem, ipsum dolor sit amet."
        ],
        correctOption:2,
    },
    {
        title:
        "4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, rem.",
        options:[
            "Lorem, ipsum dolor sit amet.",
             "Lorem, ipsum dolor sit amet.",
            "Lorem, ipsum .",
            "Lorem, ipsum dolor sit amet."
        ],
        correctOption:2,
    },
    {
        title:
        "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, rem.",
        options:[
            "Lorem, ipsum dolor sit amet.",
             "Lorem, ipsum dolor sit amet.",
            "Lorem, ipsum .",
            "Lorem, ipsum dolor sit amet."
        ],
        correctOption:2,
    }
];

let currQuesIdx=0;
let score= 0;
const correctAnswerScore=4;
const wrongAnswerScore= -1;
const questionSection=document.querySelector(".questions");
   
 const questionTitle= document.querySelector(".question-title");
 const scoreSection=document.querySelector(".score");

 const option1 = document.querySelector(".option1");
 const option2 = document.querySelector(".option2");
 const option3 = document.querySelector(".option3");
 const option4= document.querySelector(".option4");

 const nextBtn= document.querySelector(".next");

 function changeScore(optionNumber){
    if(questions[currQuesIdx].correctOption===optionNumber){
        score+= correctAnswerScore;

    }
    else{
        score+=wrongAnswerScore;
    }
 }
 function changeQuestion(){ 
    if(questions[currQuesIdx]===questions.length-1){
        questionSection.style.display="none";
        scoreSection.style.display="block";
        scoreSection.textContent="Your score"+score;
    }

 currQuesIdx++;

 const questionObj=questions[currQuesIdx];
   questionTitle.textContent = questionObj.title;
  option1.textContent = questionObj.options[0];
  option2.textContent = questionObj.options[1];
  option3.textContent = questionObj.options[2];
  option4.textContent = questionObj.options[3];
}

