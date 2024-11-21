const quizData = [
  {
    question: "What is the legal term for a written statement to the court?",
    a: "Affidavit",
    b: "Brief",
    c: "Deposition",
    d: "Testimony",
    correct: "a"
  },
  {
    question: "Which law regulates company formation and operation in Kenya?",
    a: "Penal code",
    b: "Companies Act",
    c: "Civil Procedure Act",
    d: "Constitution",
    correct: "b"
  },
  {
    question: "What does 'IP' stand for in legal terms?",
    a: "Internet Protocol",
    b: "Incarcerated Person",
    c: "Intellectual Property",
    d: "International Protocol",
    correct: "c"
  },
  {
    question: "What is the highest court in Kenya?",
    a: "High Court",
    b: "Court of Appeal",
    c: "Supreme Court",
    d: "Magistrates' Court",
    correct: "c"
  },
  {
    question: "What is the term for the party who initiates a lawsuit?",
      a: "Defendant",
      b: "Prosecutor",
      c: "Plaintiff",
      d: "Solicitor",
      correct: "c"
  },
  {
    question: "What is the principle that similar cases should be decided in a similar manner called?",
      a: "Precedent",
      b: "Stare decisis",
      c: "Jurisprudence",
      d: "Due process",
      correct: "b"
  },
  {
      question: "Which document outlines the fundamental rights and freedoms of citizens in Kenya?",
      a: "Bill of Rights",
      b: "Constitution",
      c: "Legal Code",
      d: "Charter of Liberties",
      correct: "b"
  },
  {
      question: "What is the legal term for a formal accusation initiating a criminal case?",
      a: "Indictment",
      b: "Subpoena",
      c: "Warrant",
      d: "Injunction",
      correct: "a"
  }
  
  ];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach(answerEl => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2><button onclick="location.reload()">Reload</button>`;
    }
  }
});

  // Initialize the quiz
  document.addEventListener('DOMContentLoaded', displayQuestion);
  
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submit action

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var gender = document.getElementById('gender').value;
    var dob = document.getElementById('dob').value;
    var nationality = document.getElementById('nationality').value;
    var address = document.getElementById('address').value;

    // Simple validation checks
    if(name.trim() === '' || email.trim() === '' || message.trim() === '' || gender.trim() === '' || dob.trim() === '' || nationality.trim() === '' || address.trim() === ''){
        alert('Please fill in all fields.');
        return;
    }

    if(!email.includes('@')) {
        alert('Please enter a valid email address.');
        return;
    }
    if (!gender) {
      alert('Please select your gender.');
      return;
    }
    if (!dob) {
      alert('Please enter your date of birth.');
      return;
    }
    if (!nationality) {
      alert('Please enter your nationality.');
      return;
    }
    if (!address) {
      alert('Please enter your address.');
      return;
    }

    // If all checks pass, submit the form
    document.getElementById('contactForm').submit();
});
