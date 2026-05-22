(function () {
  const bootLines = [
    "> EDU-OS v2.1 — MODO PORTAFOLIO",
    "> CARGANDO DEMOS EN VIVO... OK",
    "> PROBLEMA → SOLUCIÓN → RESULTADO: ACTIVO",
    "> PRODUCTOS: LOGIKA | CONECTAU | EULER | SQL | 360°",
    "> DESARROLLADOR: EDUARDO SOTO (@KUTEIMO)",
    "> ESPECIALIDAD: EDTECH · DEPLOY · ACCESIBILIDAD",
    "",
    "Scroll ↓ o pulsa EXPLORAR DEMOS ▶"
  ];

  const bootEl = document.getElementById("boot-text");
  const yearEl = document.getElementById("year");
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");

  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  if (bootEl) {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      bootEl.textContent = bootLines.join("\n");
    } else {
      let lineIndex = 0;
      let charIndex = 0;
      let output = "";
      function tick() {
        if (lineIndex >= bootLines.length) return;
        const line = bootLines[lineIndex];
        if (charIndex < line.length) {
          output += line[charIndex];
          charIndex++;
          bootEl.textContent = output;
          setTimeout(tick, line.startsWith(">") ? 26 : 10);
        } else {
          output += "\n";
          charIndex = 0;
          lineIndex++;
          setTimeout(tick, 100);
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

  const reveals = document.querySelectorAll(".reveal");
  if (reveals.length && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }
})();
