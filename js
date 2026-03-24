const verbs = ["hablar","bailar","estudiar","trabajar","cantar","mirar","escuchar","caminar"];
const subjects = ["yo","tú","él","nosotros","ellos"];
let score = 0;
let currentAnswer = "";

function conjugate(verb, subject) {
  let stem = verb.slice(0, -2);
  if(subject=="yo") return stem+"o";
  if(subject=="tú") return stem+"as";
  if(subject=="él") return stem+"a";
  if(subject=="nosotros") return stem+"amos";
  if(subject=="ellos") return stem+"an";
}

function newQuestion() {
  let v = verbs[Math.floor(Math.random()*verbs.length)];
  let s = subjects[Math.floor(Math.random()*subjects.length)];
  currentAnswer = conjugate(v,s);
  document.getElementById("question").innerText = s + " + " + v;
}

function checkAnswer() {
  let user = document.getElementById("answer").value.toLowerCase();
  if(user === currentAnswer){
    score++;
    document.getElementById("result").innerText = "Correct!";
  } else {
    document.getElementById("result").innerText = "Wrong! Answer: " + currentAnswer;
  }
  document.getElementById("score").innerText = "Score: " + score;
  document.getElementById("answer").value = "";
  newQuestion();
}

newQuestion();
