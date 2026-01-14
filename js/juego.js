const state = {
  nivelElegido: null,
  puntos: 0,
  errores: 0,
  escenaActual: null,
  nombreJugador: ""
};

const niveles = {
  basico: [
    {
      id: 1,
      dificultad: "Básico",
      texto: "¿Qué es un algoritmo?",
      opciones: [
        { label: "Secuencia de pasos ordenados", correcto: true, feedbackOk: "✅ Correcto." },
        { label: "Un lenguaje de programación", correcto: false, feedbackFail: "❌ Incorrecto." },
        { label: "Un error en el código", correcto: false, feedbackFail: "❌ Incorrecto." }
      ],
      siguiente: 2
    },
    {
      id: 2,
      dificultad: "Básico",
      texto: "¿Qué símbolo se usa en un diagrama de flujo para inicio/fin?",
      opciones: [
        { label: "Óvalo", correcto: true, feedbackOk: "✅ Correcto." },
        { label: "Rombo", correcto: false, feedbackFail: "❌ Incorrecto." },
        { label: "Rectángulo", correcto: false, feedbackFail: "❌ Incorrecto." }
      ],
      siguiente: 3
    },
    {
      id: 3,
      dificultad: "Básico",
      texto: "¿Qué es un dato?",
      opciones: [
        { label: "Una pieza de información", correcto: true, feedbackOk: "✅ Correcto." },
        { label: "Un programa completo", correcto: false, feedbackFail: "❌ Incorrecto." },
        { label: "Un error lógico", correcto: false, feedbackFail: "❌ Incorrecto." }
      ],
      siguiente: "fin"
    }
  ],
  intermedio: [
    {
      id: 1,
      dificultad: "Intermedio",
      texto: "¿Qué instrucción repite acciones mientras se cumpla una condición?",
      opciones: [
        { label: "Bucle (while/for)", correcto: true, feedbackOk: "✅ Correcto." },
        { label: "Condicional if", correcto: false, feedbackFail: "❌ Incorrecto." },
        { label: "Variable", correcto: false, feedbackFail: "❌ Incorrecto." }
      ],
      siguiente: 2
    },
    {
      id: 2,
      dificultad: "Intermedio",
      texto: "¿Qué estructura permite ejecutar diferentes bloques según una condición lógica?",
      opciones: [
        { label: "Condicional if/else", correcto: true, feedbackOk: "✅ Correcto." },
        { label: "Bucle for", correcto: false, feedbackFail: "❌ Incorrecto." },
        { label: "Variable", correcto: false, feedbackFail: "❌ Incorrecto." }
      ],
      siguiente: 3
    },
    {
      id: 3,
      dificultad: "Intermedio",
      texto: "¿Qué es una variable?",
      opciones: [
        { label: "Espacio de memoria que guarda un valor", correcto: true, feedbackOk: "✅ Correcto." },
        { label: "Un diagrama de flujo", correcto: false, feedbackFail: "❌ Incorrecto." },
        { label: "Un error de sintaxis", correcto: false, feedbackFail: "❌ Incorrecto." }
      ],
      siguiente: "fin"
    }
  ],
  avanzado: [
    {
      id: 1,
      dificultad: "Avanzado",
      texto: "Si nota >= 7 entonces Aprobado, sino Reprobado. Con nota = 5 ¿qué salida da?",
      opciones: [
        { label: "Aprobado", correcto: false, feedbackFail: "❌ Incorrecto." },
        { label: "Reprobado", correcto: true, feedbackOk: "✅ Correcto." }
      ],
      siguiente: 2
    },
    {
      id: 2,
      dificultad: "Avanzado",
      texto: "¿Qué representa un diagrama de flujo?",
      opciones: [
        { label: "La representación gráfica de un algoritmo", correcto: true, feedbackOk: "✅ Correcto." },
        { label: "Un lenguaje de programación", correcto: false, feedbackFail: "❌ Incorrecto." },
        { label: "Un error lógico", correcto: false, feedbackFail: "❌ Incorrecto." }
      ],
      siguiente: 3
    },
    {
      id: 3,
      dificultad: "Avanzado",
      texto: "¿Qué es la lógica computacional?",
      opciones: [
        { label: "Método estructurado para resolver problemas", correcto: true, feedbackOk: "✅ Correcto." },
        { label: "Un error de sintaxis", correcto: false, feedbackFail: "❌ Incorrecto." },
        { label: "Un lenguaje gráfico", correcto: false, feedbackFail: "❌ Incorrecto." }
      ],
      siguiente: "fin"
    }
  ],
  experto: [
    {
      id: 1,
      dificultad: "Experto",
      texto: "En un diagrama de flujo, ¿qué figura representa una decisión?",
      opciones: [
        { label: "Rombo", correcto: true, feedbackOk: "✅ Correcto." },
        { label: "Rectángulo", correcto: false, feedbackFail: "❌ Incorrecto." },
        { label: "Óvalo", correcto: false, feedbackFail: "❌ Incorrecto." }
      ],
      siguiente: 2
    },
    {
      id: 2,
      dificultad: "Experto",
      texto: "¿Qué es programación?",
      opciones: [
        { label: "Proceso de diseñar y escribir código", correcto: true, feedbackOk: "✅ Correcto." },
        { label: "Un error lógico", correcto: false, feedbackFail: "❌ Incorrecto." },
        { label: "Un diagrama de flujo", correcto: false, feedbackFail: "❌ Incorrecto." }
      ],
      siguiente: 3
    },
    {
      id: 3,
      dificultad: "Experto",
      texto: "¿Qué es pseudo-código y para qué sirve?",
      opciones: [
        { label: "Forma informal de describir algoritmos", correcto: true, feedbackOk: "✅ Correcto." },
        { label: "Un lenguaje real", correcto: false, feedbackFail: "❌ Incorrecto." },
        { label: "Un error de sintaxis", correcto: false, feedbackFail: "❌ Incorrecto." }
      ],
      siguiente: "fin"
    }
  ]
};

const game = document.getElementById("game");
const scene = document.getElementById("scene");
const choices = document.getElementById("choices");
const feedback = document.getElementById("feedback");
const nivelUI = document.getElementById("nivel");
const puntosUI = document.getElementById("puntos");
const erroresUI = document.getElementById("errores");
const btnNext = document.getElementById("btnNext");
const btnReset = document.getElementById("btnReset");
const iframeRefuerzo = document.getElementById("iframeRefuerzo");

document.querySelectorAll(".level-select .btn").forEach(btn => {
  btn.addEventListener("click", () => {
    state.nivelElegido = btn.dataset.level;
    state.puntos = 0;
    state.errores = 0;

    // ❌ OCULTAR IFRAME AL ELEGIR NIVEL
    iframeRefuerzo.style.display = "none";

    game.classList.remove("hidden");
    cargarNivel(1);
  });
});

function cargarNivel(id) {
  const escena = niveles[state.nivelElegido].find(e => e.id === id);
  state.escenaActual = escena;

  if (!escena) return mostrarFin();

  nivelUI.textContent = escena.dificultad;
  puntosUI.textContent = state.puntos;
  erroresUI.textContent = state.errores;
  feedback.textContent = "";

  scene.textContent = escena.texto;
  renderOpciones(escena.opciones);
}

function renderOpciones(opciones) {
  choices.innerHTML = "";
  opciones.forEach(op => {
    const btn = document.createElement("button");
    btn.textContent = op.label;

    btn.addEventListener("click", () => {
      if (btn.classList.contains("respondido")) return;

      Array.from(choices.children).forEach(b => b.classList.add("respondido"));

      if (op.correcto) {
        state.puntos += 10;
        feedback.textContent = op.feedbackOk;
      } else {
        state.errores++;
        feedback.textContent = op.feedbackFail;
      }

      puntosUI.textContent = state.puntos;
      erroresUI.textContent = state.errores;
    });

    choices.appendChild(btn);
  });
}

btnNext.addEventListener("click", () => {
  if (state.escenaActual?.siguiente === "fin") {
    mostrarFin();
  } else {
    cargarNivel(state.escenaActual.siguiente);
  }
});

btnReset.addEventListener("click", () => cargarNivel(1));

function mostrarFin() {
  scene.innerHTML = `
    <h3>🎉 Fin del nivel ${state.nivelElegido.toUpperCase()}</h3>
    <p><strong>Puntos:</strong> ${state.puntos} — <strong>Errores:</strong> ${state.errores}</p>

    <label>Ingresa tu nombre:
      <input id="nombreJugador" type="text">
    </label>

    <button class="btn" id="btnGuardar">Guardar puntaje</button>
    <div id="ranking"></div>
  `;

  choices.innerHTML = "";
  feedback.textContent = "";

  document.getElementById("btnGuardar").addEventListener("click", () => {
    const nombre = document.getElementById("nombreJugador").value || "Sin nombre";
    const ranking = JSON.parse(localStorage.getItem("ranking")) || [];

    ranking.push({
      nombre,
      nivel: state.nivelElegido,
      puntos: state.puntos,
      errores: state.errores,
      fecha: new Date().toLocaleString()
    });

    localStorage.setItem("ranking", JSON.stringify(ranking));

    // 🔄 RECARGA → iframe vuelve
    location.reload();
  });
}