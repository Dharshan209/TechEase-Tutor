//----------------------- G O O D   L U C K -------------------------------//

// select all elements by id
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create questions
let questions = [
  {
    question: "What is the primary source of propulsion for an electric vehicle?",
    imgsrc: "image_url_1",
    choiceA: "Gasoline",
    choiceB: "Diesel",
    choiceC: "Electricity",
    choiceD: "Hydrogen",
    correct: "C",
  },
  {
    question: "Which component in an electric vehicle stores electrical energy?",
    imgsrc: "image_url_2",
    choiceA: "Radiator",
    choiceB: "Exhaust Pipe",
    choiceC: "Battery",
    choiceD: "Carburetor",
    correct: "C",
  },
  {
    question: "What is regenerative braking in an electric vehicle?",
    imgsrc: "image_url_3",
    choiceA: "A system to recharge the battery while driving",
    choiceB: "A way to reduce tire wear",
    choiceC: "A method to cool down the brakes",
    choiceD: "A type of suspension system",
    correct: "A",
  },
  {
    question: "What unit is used to measure the electric energy stored in a battery?",
    imgsrc: "image_url_4",
    choiceA: "Volt",
    choiceB: "Watt",
    choiceC: "Ampere",
    choiceD: "Kilowatt-hour",
    correct: "D",
  },
  {
    question: "What is 'range anxiety' in the context of electric vehicles?",
    imgsrc: "image_url_5",
    choiceA: "Fear of driving long distances",
    choiceB: "Worry about battery charge running out during a trip",
    choiceC: "Concern about vehicle speed",
    choiceD: "Fear of losing traction",
    correct: "B",
  },
  {
    question: "Which type of charging station provides the fastest charging for EVs?",
    imgsrc: "image_url_6",
    choiceA: "Level 1",
    choiceB: "Level 2",
    choiceC: "DC Fast Charging",
    choiceD: "Solar Charging",
    correct: "C",
  },
  {
    question: "What is a 'plug-in hybrid' electric vehicle (PHEV)?",
    imgsrc: "image_url_7",
    choiceA: "An EV that only charges from solar panels",
    choiceB: "An EV with no charging port",
    choiceC: "A vehicle that can run on electricity and gasoline",
    choiceD: "An EV that can only be charged at home",
    correct: "C",
  },
  {
    question: "What is an advantage of electric vehicles over internal combustion engine vehicles?",
    imgsrc: "image_url_8",
    choiceA: "Higher fuel consumption",
    choiceB: "Lower maintenance costs",
    choiceC: "Louder engine noise",
    choiceD: "More exhaust emissions",
    correct: "B",
  },
  {
    question: "What does the term 'kW' represent in electric vehicles?",
    imgsrc: "image_url_9",
    choiceA: "Kilowatt",
    choiceB: "Kinetic Weight",
    choiceC: "Kerosene-Water mixture",
    choiceD: "Kepler's Weight",
    correct: "A",
  },
  {
    question: "What is the 'MPGe' measurement used for in electric vehicles?",
    imgsrc: "Friendly_Quiz_Game-master\Stuffs\img\0X1.avif",
    choiceA: "Miles Per Gallon equivalent",
    choiceB: "Maximum Power Generation efficiency",
    choiceC: "Motor Power Geared energy",
    choiceD: "Magnetic Propulsion Generation",
    correct: "A",
  },
  {
    question: "What is a 'Battery Electric Vehicle' (BEV)?",
    imgsrc: "image_url_11",
    choiceA: "An EV with a very small battery",
    choiceB: "An EV powered by solar panels",
    choiceC: "An EV that can be charged via USB",
    choiceD: "An EV that runs solely on electricity from its battery",
    correct: "D",
  },
  {
    question: "Which factor can affect the driving range of an electric vehicle?",
    imgsrc: "image_url_12",
    choiceA: "Tire pressure",
    choiceB: "Color of the vehicle",
    choiceC: "Number of doors",
    choiceD: "Seat material",
    correct: "A",
  },
  {
    question: "What is a 'DCFC' when referring to electric vehicle charging?",
    imgsrc: "image_url_13",
    choiceA: "Direct Current Fast Charger",
    choiceB: "Dual Core Fuel Cell",
    choiceC: "Digital Car Fuel Computer",
    choiceD: "Differential Cooling Fan Control",
    correct: "A",
  },
  {
    question: "What is a common method to preheat or precool an electric vehicle's cabin while it's charging?",
    imgsrc: "image_url_14",
    choiceA: "Using the exhaust heat",
    choiceB: "Running the internal combustion engine",
    choiceC: "Remote climate control",
    choiceD: "Opening the windows",
    correct: "C",
  },
  {
    question: "Which international organization sets the standards for charging connectors used in electric vehicles?",
    imgsrc: "image_url_15",
    choiceA: "WIPO",
    choiceB: "ISO",
    choiceC: "UNESCO",
    choiceD: "ICAO",
    correct: "B",
  },
];

// Extra variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 20; // 20s

let TIMER;
let score = 0;

// render a question
function renderQuestion() {
  let q = questions[runningQuestion];

  question.innerHTML = "<p>" + q.question + "</p>";
  qImg.innerHTML = "<img src=" + q.imgSrc + ">";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
  var music = new Audio();
  music.src = "Stuffs/music/Easy song.mp3";
  music.volume = 0.3; 
  music.play();
  start.style.display = "none";
  renderQuestion();
  quiz.style.display = "block";
  renderProgress();
  renderCounter();
  TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}

// render progress
function renderProgress() {
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
  }
}

// counter render

function renderCounter() {
  if (count <= questionTime) {
    counter.innerHTML = count;

    count++;
  } else {
    count = 0;
    // change progress color to red
    answerIsWrong();
    if (runningQuestion < lastQuestion) {
      runningQuestion++;
      renderQuestion();
    } else {
      // end the quiz and show the score
      clearInterval(TIMER);
      scoreRender();
    }
  }
}

// checkAnwer

function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correct) {
    // answer is correct
    score++;
    // change progress color to green
    answerIsCorrect();
  } else {
    // answer is wrong
    // change progress color to red
    answerIsWrong();
  }
  count = -10;
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    // end the quiz and show the score
    clearInterval(TIMER);
    scoreRender();
  }
}

// answer is correct
function answerIsCorrect() {
  document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
  var music = new Audio();
  music.src = "Stuffs/music/correct.mp3";
  music.play();
}

// answer is Wrong
function answerIsWrong() {
  document.getElementById(runningQuestion).style.backgroundColor = "#f00";
  var music = new Audio();
  music.src = "Stuffs/music/wrong.mp3";
  music.play();
}

// score render
function scoreRender() {
  scoreDiv.style.display = "block";
  var music = new Audio();
  music.src = "Stuffs/music/Gameover.mp3";
  music.play();

  // calculate the amount of question percent answered by the user
  const scorePerCent = Math.round((100 * score) / questions.length);

  // choose the image based on the scorePerCent
  let img =
    scorePerCent >= 80
      ? "Stuffs/img/5.png"
      : scorePerCent >= 60
      ? "Stuffs/img/4.png"
      : scorePerCent >= 40
      ? "Stuffs/img/3.png"
      : scorePerCent >= 20
      ? "Stuffs/img/2.png"
      : "Stuffs/img/1.png";

  scoreDiv.innerHTML = "<img src=" + img + ">";
  scoreDiv.innerHTML += "<p>" + scorePerCent + "%</p>";

  // Automatically return to the previous page after 5 seconds (5000ms)
  setTimeout(goBack, 5000);
}
function goBack() {
  window.history.back(); // Go back to the previous page
}
//////////////////////////////////////////////////////
var myVar;

function myLoader() {
  myVar = setTimeout(showPage, 20000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
}
