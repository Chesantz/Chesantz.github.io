const detailedContent = {
  primaria: {
    subatomico: {
      title: "¡Descubre las partículas más pequeñas!",
      subtitle: "Contenido adaptado para nivel primaria",
      content: `
        <p>Imagina que tienes un juguete de LEGO. Si lo desarmas completamente, obtienes las piezas más pequeñas. 
        Los átomos son como esas piezas, pero mucho más pequeñas. 
        Están hechos de tres partes: protones (rojos), neutrones (blancos) y electrones (azules que giran muy rápido).</p>
      `,
      examples: [
        "Un átomo de hidrógeno tiene 1 protón y 1 electrón",
        "Un átomo de oxígeno tiene 8 protones, 8 neutrones y 8 electrones",
        "Los electrones son 2000 veces más pequeños que los protones",
      ],
      curiosities: [
        "Un átomo es tan pequeño que millones caben en el punto de esta oración",
        "Los electrones se mueven tan rápido que parecen estar en todas partes al mismo tiempo",
        "Si un átomo fuera un estadio de fútbol, el núcleo sería como una pelota de ping pong",
      ],
    },
    molecular: {
      title: "¡Átomos que se hacen amigos!",
      subtitle: "Contenido adaptado para nivel primaria",
      content: `
        <p>Cuando los átomos se juntan, forman moléculas. Es como cuando juegas con bloques de construcción y los unes para hacer algo más grande. 
        El agua que bebes está hecha de dos átomos de hidrógeno y uno de oxígeno que se hicieron amigos.</p>
      `,
      examples: [
        "El agua (H₂O) está en todo nuestro cuerpo",
        "El azúcar está hecha de carbono, hidrógeno y oxígeno",
        "El aire que respiramos tiene moléculas de oxígeno",
      ],
      curiosities: [
        "Tu cuerpo está hecho de billones de moléculas diferentes",
        "Las moléculas son tan pequeñas que no las puedes ver",
        "Algunas moléculas huelen, como las de las flores",
      ],
    },
    celular: {
      title: "¡Las casitas de la vida!",
      subtitle: "Contenido adaptado para nivel primaria",
      content: `
        <p>Las células son como pequeñas casitas donde vive la vida. Tu cuerpo está hecho de millones de estas casitas trabajando juntas. 
        Cada célula tiene todo lo que necesita para vivir, como una cocina, un dormitorio y una oficina.</p>
      `,
      examples: [
        "Tus músculos están hechos de células musculares",
        "Tu cerebro tiene células especiales llamadas neuronas",
        "Las plantas también tienen células, pero diferentes a las nuestras",
      ],
      curiosities: [
        "Eres más alto ahora porque tienes más células que cuando eras bebé",
        "Algunas células viven solo unos días, otras toda tu vida",
        "Las células más grandes son los huevos de las aves",
      ],
    },
    macroscopico: {
      title: "¡Todo lo que puedes ver!",
      subtitle: "Contenido adaptado para nivel primaria",
      content: `
        <p>Este es el nivel de las cosas que puedes ver y tocar: tú, los animales, las plantas, las rocas. 
        Todo está hecho de millones de células trabajando juntas como un gran equipo.</p>
      `,
      examples: [
        "Tu mascota es un organismo macroscópico",
        "Los árboles del parque son organismos macroscópicos",
        "Tú eres un organismo macroscópico muy especial",
      ],
      curiosities: [
        "Un elefante tiene más células que una hormiga",
        "Las ballenas son los animales más grandes del mundo",
        "Algunos árboles pueden vivir más de 1000 años",
      ],
    },
    ecosistemico: {
      title: "¡La gran familia de la naturaleza!",
      subtitle: "Contenido adaptado para nivel primaria",
      content: `
        <p>Un ecosistema es como una gran familia donde todos se ayudan. Los animales, las plantas, el agua, el aire y el suelo trabajan juntos. 
        Es como un parque donde cada cosa tiene su trabajo especial.</p>
      `,
      examples: [
        "En un bosque, los árboles dan oxígeno y los animales dan dióxido de carbono",
        "En un lago, los peces comen plantas y las plantas limpian el agua",
        "En tu jardín, las abejas ayudan a las flores y las flores les dan comida",
      ],
      curiosities: [
        "Los ecosistemas pueden ser tan grandes como un océano o tan pequeños como un charco",
        "Si cuidas la naturaleza, ella te cuida a ti",
        "Cada animal y planta tiene un trabajo importante en su ecosistema",
      ],
    },
  },
}

const quizQuestions = {
  primaria: [
    {
      question: "¿Cómo se llaman las partes más pequeñas de las que están hechas todas las cosas?",
      options: ["Moléculas", "Átomos", "Células", "Piedras"],
      correct: 1,
      explanation: "¡Correcto! Los átomos son como pequeños bloques de construcción que forman todo lo que ves.",
      image: "⚛️",
    },
    {
      question: "¿Qué forman dos átomos de hidrógeno y uno de oxígeno cuando se juntan?",
      options: ["Aire", "Agua", "Tierra", "Fuego"],
      correct: 1,
      explanation: "¡Exacto! H₂O es la fórmula del agua. ¡Como una receta mágica!",
      image: "💧",
    },
    {
      question: "¿Cuál de estos puedes ver con tus ojos?",
      options: ["Átomos", "Electrones", "Flores", "Moléculas"],
      correct: 2,
      explanation: "¡Muy bien! Las flores son parte del nivel macroscópico que podemos ver.",
      image: "🌸",
    },
    {
      question: "¿Qué necesitan las plantas del suelo para crecer?",
      options: ["Juguetes", "Nutrientes", "Música", "Colores"],
      correct: 1,
      explanation: "¡Perfecto! Las plantas toman nutrientes del suelo como su comida.",
      image: "🌱",
    },
    {
      question: "¿Cómo se llama cuando muchas moléculas se juntan para formar algo grande?",
      options: ["Nivel macroscópico", "Nivel pequeño", "Nivel invisible", "Nivel mágico"],
      correct: 0,
      explanation: "¡Genial! El nivel macroscópico es todo lo que puedes ver y tocar.",
      image: "🌍",
    },
  ],
}

// Estado de la aplicación
let currentLevel = "primaria"
let currentSelectedCard = "subatomico"
let currentQuizIndex = 0
let quizScore = 0
let quizStarted = false
let quizCompleted = false
let userAnswers = []

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  initializeApp()
  setupEventListeners()
  updateContent()
  initializeQuiz()
})

function initializeApp() {
  updateContent()
  setupInteractiveElements()
  selectLevelCard("subatomico")
  updateDetailedContent()
}

function setupEventListeners() {
  // Botones de nivel educativo
  document.querySelectorAll(".level-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".level-btn").forEach((b) => b.classList.remove("active"))
      this.classList.add("active")

      currentLevel = this.dataset.level
      updateContent()
      resetQuiz()
      displayCurrentQuestion()
    })
  })

  // Tarjetas de nivel
  document.querySelectorAll(".level-card").forEach((card) => {
    card.addEventListener("click", function () {
      const level = this.dataset.level
      selectLevelCard(level)
    })
  })
}

function selectLevelCard(levelType) {
  document.querySelectorAll(".level-card").forEach((card) => {
    card.classList.remove("active")
  })

  const selectedCard = document.querySelector(`[data-level="${levelType}"]`)
  if (selectedCard) {
    selectedCard.classList.add("active")
  }

  currentSelectedCard = levelType
  updateDetailedContent()
}

function updateDetailedContent() {
  const content = detailedContent[currentLevel]
  const contentTitle = document.querySelector("#content-title")
  const contentBody = document.getElementById("content-body")

  if (content && content[currentSelectedCard]) {
    const levelContent = content[currentSelectedCard]

    if (contentTitle) contentTitle.textContent = levelContent.title

    let htmlContent = levelContent.content

    if (levelContent.examples) {
      htmlContent += `
        <div class="examples-section">
          <h4>⚡ Ejemplos Importantes</h4>
          <ul>
            ${levelContent.examples.map((example) => `<li>${example}</li>`).join("")}
          </ul>
        </div>
      `
    }

    if (levelContent.curiosities) {
      htmlContent += `
        <div class="curiosities-section">
          <h4>💡 Datos Curiosos</h4>
          <ul>
            ${levelContent.curiosities.map((curiosity) => `<li>${curiosity}</li>`).join("")}
          </ul>
        </div>
      `
    }

    if (contentBody) contentBody.innerHTML = htmlContent
  }
}

function updateContent() {
  updateDetailedContent()
}

function setupInteractiveElements() {
  // Funcionalidad interactiva básica
  console.log("Elementos interactivos configurados")
}

function initializeQuiz() {
  const quizContainer = document.querySelector(".quiz-container")
  if (!quizContainer) return

  resetQuiz()
  displayCurrentQuestion()
}

function resetQuiz() {
  currentQuizIndex = 0
  quizScore = 0
  quizStarted = false
  quizCompleted = false
  userAnswers = []

  updateProgressBar()

  const quizContent = document.getElementById("quizContent")
  const quizResults = document.getElementById("quizResults")

  if (quizContent) quizContent.style.display = "block"
  if (quizResults) quizResults.style.display = "none"
}

function displayCurrentQuestion() {
  const questions = quizQuestions[currentLevel]
  if (!questions || currentQuizIndex >= questions.length) {
    showQuizResults()
    return
  }

  const question = questions[currentQuizIndex]
  const questionEl = document.getElementById("question")
  const optionsEl = document.getElementById("options")
  const nextBtn = document.getElementById("nextBtn")

  if (questionEl) questionEl.textContent = question.question

  if (optionsEl) {
    optionsEl.innerHTML = ""
    question.options.forEach((option, index) => {
      const button = document.createElement("button")
      button.className = "option-btn"
      button.textContent = option
      button.onclick = () => selectAnswer(index)
      optionsEl.appendChild(button)
    })
  }

  if (nextBtn) {
    nextBtn.disabled = true
    nextBtn.textContent = "Siguiente"
  }

  updateProgressBar()
}

function selectAnswer(selectedIndex) {
  const questions = quizQuestions[currentLevel]
  const question = questions[currentQuizIndex]
  const isCorrect = selectedIndex === question.correct
  const optionsEl = document.getElementById("options")
  const nextBtn = document.getElementById("nextBtn")

  // Guardar respuesta del usuario
  userAnswers.push({
    questionIndex: currentQuizIndex,
    selectedAnswer: selectedIndex,
    correctAnswer: question.correct,
    isCorrect: isCorrect,
  })

  // Actualizar puntuación
  if (isCorrect) {
    quizScore++
  }

  // Mostrar feedback visual en los botones
  const answerButtons = optionsEl.querySelectorAll(".option-btn")
  answerButtons.forEach((btn, index) => {
    btn.disabled = true
    if (index === question.correct) {
      btn.classList.add("correct")
    } else if (index === selectedIndex && !isCorrect) {
      btn.classList.add("incorrect")
    }
  })

  if (nextBtn) {
    nextBtn.disabled = false
  }
}

function nextQuestion() {
  currentQuizIndex++
  if (currentQuizIndex < quizQuestions[currentLevel].length) {
    displayCurrentQuestion()
  } else {
    showQuizResults()
  }
}

function updateProgressBar() {
  const questions = quizQuestions[currentLevel]
  const progress = ((currentQuizIndex + 1) / questions.length) * 100
  const progressFill = document.getElementById("progressFill")
  const progressText = document.getElementById("progressText")

  if (progressFill) progressFill.style.width = `${progress}%`
  if (progressText) progressText.textContent = `Pregunta ${currentQuizIndex + 1} de ${questions.length}`
}

function showQuizResults() {
  quizCompleted = true

  const quizContent = document.getElementById("quizContent")
  const quizResults = document.getElementById("quizResults")
  const finalScore = document.getElementById("finalScore")
  const scoreMessage = document.getElementById("scoreMessage")

  if (quizContent) quizContent.style.display = "none"
  if (quizResults) quizResults.style.display = "block"

  if (finalScore) finalScore.textContent = `${quizScore}/${quizQuestions[currentLevel].length}`

}

function restartQuiz() {
  resetQuiz()
  displayCurrentQuestion()
}

// Smooth scroll function
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (header) {
    if (window.scrollY > 100) {
      header.style.background = "rgba(255, 255, 255, 0.95)"
      header.style.backdropFilter = "blur(20px)"
    } else {
      header.style.background = "rgba(255, 255, 255, 1)"
      header.style.backdropFilter = "none"
    }
  }
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in")
    }
  })
}, observerOptions)

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const levelCards = document.querySelectorAll(".level-card")
  levelCards.forEach((card) => {
    observer.observe(card)
  })

  const quizSection = document.querySelector(".quiz-section")
  if (quizSection) {
    observer.observe(quizSection)
  }
})

// Keyboard navigation for quiz
document.addEventListener("keydown", (e) => {
  const optionsEl = document.getElementById("options")
  const nextBtn = document.getElementById("nextBtn")

  if (e.key >= "1" && e.key <= "4") {
    const index = Number.parseInt(e.key) - 1
    const buttons = optionsEl?.querySelectorAll(".option-btn")
    if (buttons && buttons[index] && !buttons[index].disabled) {
      selectAnswer(index)
    }
  } else if (e.key === "Enter" && nextBtn && !nextBtn.disabled) {
    nextQuestion()
  }
})
