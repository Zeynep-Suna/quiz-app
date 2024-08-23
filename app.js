const quizData = [
  {
    question: 'Endonezyanın başkenti neresidir?',
    a: 'Jakarta',
    b: 'Bali',
    c: 'Lombok',
    d: 'Surabaya',
    e: 'Bandung',
    correct: 'a',
  },
  {
    question: 'Dünyada nüfusu en fazla olan ülke?',
    a: 'Çin Halk Cumhuriyeti',
    b: 'Hindistan',
    c: 'Amerika Birleşik Devletleri',
    d: 'Japonya',
    e: 'Pakistan',
    correct: 'b',
  },
  {
    question: 'Van Goghun en ünlü tablosu?',
    a: 'Otoporte',
    b: 'Patates Yiyenler',
    c: 'Yıldızlı Gece',
    d: 'Ren Nehrinde Yıldızlı Bir Gece',
    e: 'Ayçiçekleri',
    correct: 'c',
  },
  {
    question: 'Aşağıdakilerden hangisi Carmene aittir?',
    a: 'Puccini',
    b: 'La Boheme',
    c: 'The Marriage of Figaro',
    d: 'Habanera',
    e: 'The Barber of Seville',
    correct: 'd',
  },
  {
    question: 'Aşağıdaki ülke-dans eşleştirmelerinden hangisi yanlıştır?',
    a: 'Arjantin - Tango',
    b: 'Brezilya - Samba',
    c: 'İspanya - Flamenko',
    d: 'Küba - Salsa',
    e: 'Yunanistan - Tap',
    correct: 'e',
  },
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz]

  deselectedAnswers()

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
  e_text.innerText = currentQuizData.e
}

function deselectedAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false))
}

function getSelected() {
  let answer

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })
  return answer
}

 submitBtn.addEventListener('click', () => {
   const answer = getSelected()

   //console.log(answer)

   if (answer) {
     if (answer === quizData[currentQuiz].correct) {
       score++
     }
     currentQuiz++

     if (currentQuiz < quizData.length) {
       loadQuiz()
     } else {
       quiz.innerHTML = `
       <h2> Test tamamlandı, ${score * 20} puan aldınız🥳 </h2>
       <button class="submit" onClick="location.reload()"> Tekrar Dene 🌀  </button>

     `
     }
   }
 })