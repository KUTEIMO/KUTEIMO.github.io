(function () {
  const bootLines = [
    "> INICIANDO EDU-OS...",
    "> CARGANDO MÓDULOS: LOGIKA, CONECTAU, EULER...",
    "> ACCESIBILIDAD: WCAG · MinTIC 1519 · OK",
    "> GAMIFICACIÓN: LOGIKO ONLINE",
    "> DESARROLLADOR: EDUARDO SOTO (@KUTEIMO)",
    "> UBICACIÓN: USB CÚCUTA · INGENIERÍA DE SISTEMAS",
    "> ESTADO: LISTO PARA ENSEÑAR Y CONECTAR",
    "",
    "Pulsa un cartucho abajo o abre LOGIKA ▶"
  ];

  const bootEl = document.getElementById("boot-text");
  const yearEl = document.getElementById("year");
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");

  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  if (bootEl) {
    let lineIndex = 0;
    let charIndex = 0;
    let output = "";

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      bootEl.textContent = bootLines.join("\n");
    } else {
      function tick() {
        if (lineIndex >= bootLines.length) return;
        const line = bootLines[lineIndex];
        if (charIndex < line.length) {
          output += line[charIndex];
          charIndex++;
          bootEl.textContent = output;
          setTimeout(tick, line.startsWith(">") ? 28 : 12);
        } else {
          output += "\n";
          charIndex = 0;
          lineIndex++;
          setTimeout(tick, 120);
        }
      }
      tick();
    }
  }

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        nav.classList.remove("is-open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }
})();
