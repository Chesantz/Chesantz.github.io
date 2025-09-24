const detailedContent = {
  primaria: {
    subatomico: {
    title: "Estructura Subatómica",
    subtitle: "Nivel secundario y universitario",
    content: `
      Los átomos no son indivisibles: están formados por partículas aún más pequeñas llamadas protones, neutrones y electrones. 
      El núcleo atómico (protones y neutrones) concentra casi toda la masa, mientras que los electrones giran a gran velocidad en la corteza. 
      A nivel más profundo, los protones y neutrones están compuestos por quarks, mantenidos unidos por gluones. 
      Este nivel explica fenómenos como la radiactividad, la espectroscopía y la energía nuclear.
    `,
    examples: [
      "El electrón tiene carga negativa y masa casi nula",
      "El protón tiene carga positiva y masa similar a la del neutrón",
      "El neutrón es eléctricamente neutro pero fundamental en la estabilidad nuclear",
      "El átomo de uranio se utiliza en reactores nucleares por su inestabilidad",
    ],
    curiosities: [
      "Más del 99% de la masa del átomo está en el núcleo",
      "Los quarks nunca existen solos, siempre en grupos",
      "El modelo atómico ha evolucionado desde Dalton hasta el modelo cuántico actual",
    ],
  },

  molecular: {
    title: "Organización Molecular",
    subtitle: "Nivel secundario y universitario",
    content: `
      Cuando los átomos se unen mediante enlaces químicos, forman moléculas. 
      Pueden ser pequeñas como el oxígeno (O₂) o muy complejas como las proteínas. 
      La estructura tridimensional de una molécula determina sus propiedades físicas y químicas. 
      Las moléculas orgánicas son la base de la vida, y las inorgánicas permiten el funcionamiento de los sistemas naturales y tecnológicos.
    `,
    examples: [
      "El agua (H₂O) regula la temperatura de los seres vivos y es solvente universal",
      "La glucosa (C₆H₁₂O₆) es la fuente primaria de energía en organismos",
      "El ADN y ARN son macromoléculas que almacenan y transmiten información genética",
    ],
    curiosities: [
      "Las moléculas de ADN pueden estirarse hasta más de 2 metros en una célula",
      "Las enzimas aceleran reacciones químicas millones de veces",
      "Los plásticos son macromoléculas diseñadas por el ser humano",
      "El ozono (O₃) protege la Tierra de la radiación ultravioleta",
    ],
  },

  celular: {
    title: "Nivel Celular",
    subtitle: "Nivel secundario y universitario",
    content: `
      La célula es la unidad básica de la vida. 
      Pueden ser procariotas (bacterias, arqueas) o eucariotas (animales, vegetales, hongos, protozoos). 
      En ellas ocurren procesos vitales como el metabolismo, la división celular, la transmisión genética y la comunicación intracelular. 
      Gracias al estudio de las células, comprendemos fenómenos como la herencia, la inmunidad y las enfermedades.
    `,
    examples: [
      "Las neuronas transmiten impulsos eléctricos y señales químicas",
      "Las células musculares contienen proteínas contráctiles (actina y miosina)",
      "Las células epiteliales forman barreras protectoras en órganos",
      "Las células madre pueden diferenciarse en distintos tipos celulares"
    ],
    curiosities: [
      "El cuerpo humano tiene unas 37 billones de células",
      "Cada célula humana contiene aproximadamente 2 metros de ADN",
      "Las bacterias se dividen rápidamente: algunas en 20 minutos",
      "Los virus no son células, pero infectan células para reproducirse",

    ],
  },

  macroscopico: {
    title: "Nivel Macroscópico",
    subtitle: "Nivel secundario y universitario",
    content: `
      Es el nivel donde se observan organismos completos y sus órganos y sistemas. 
      Los tejidos se agrupan en órganos, y los órganos en sistemas que trabajan de manera coordinada. 
      Aquí se estudia la anatomía, fisiología y comportamiento de los seres vivos.
    `,
    examples: [
      "El sistema nervioso procesa información y coordina respuestas",
      "Los pulmones realizan el intercambio de oxígeno y dióxido de carbono",
      "Los animales y plantas enteros son ejemplos macroscópicos",
      "El sistema digestivo transforma los alimentos en nutrientes"
    ],
    curiosities: [
      "Los elefantes tienen el cerebro más grande de los animales terrestres",
      "El cuerpo humano tiene más de 600 músculos",
      "Las plantas también tienen sistemas de transporte: xilema y floema",
    ],
  },

  ecosistemico: {
    title: "Nivel Ecosistémico",
    subtitle: "Nivel secundario y universitario",
    content: `
      Un ecosistema es la interacción entre los seres vivos (comunidad) y su medio físico (suelo, agua, aire, energía). 
      Los organismos cumplen roles como productores, consumidores y descomponedores. 
      Los ecosistemas varían en tamaño: desde un charco hasta toda la biosfera. 
      En este nivel se estudian cadenas alimenticias, ciclos biogeoquímicos y el impacto humano en la naturaleza.
    `,
    examples: [
      "Un bosque tropical con árboles, animales y suelos fértiles",
      "Un arrecife de coral con peces, algas y corrientes marinas",
      "Una pradera donde conviven herbívoros, depredadores y pastos",
      "Un desierto con cactus adaptados a la sequía",
      "Un lago con peces, plantas acuáticas y microorganismos"
    ],
    curiosities: [
      "Los arrecifes coralinos albergan más especies que cualquier otro ecosistema marino",
      "El Amazonas produce el 20% del oxígeno del planeta",
      "Los humedales filtran agua y evitan inundaciones",
      "El cambio climático altera ciclos de carbono y agua",
      "Los ecosistemas urbanos también son objeto de estudio"
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

