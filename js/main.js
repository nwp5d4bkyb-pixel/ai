// ===== 공통: 현재 페이지 메뉴 표시 =====
const page = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav a").forEach((a) => {
  if (a.getAttribute("href") === page) a.classList.add("active");
});

// ===== 공통: 모바일 메뉴 =====
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
if (menuBtn) menuBtn.addEventListener("click", () => nav.classList.toggle("open"));

// ===== 공통: 푸터 연도 =====
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const fmt = (n) => n.toLocaleString("ko-KR");

// ===== 홈: 돌아가는 태양계 =====
const orbitBox = document.getElementById("orbit-box");
if (orbitBox) {
  PLANETS.forEach((p, i) => {
    const size = 30 + i * 9.5;            // 궤도 크기 (%)
    const orbit = document.createElement("div");
    orbit.className = "orbit";
    orbit.style.width = orbit.style.height = size + "%";
    orbit.style.animationDuration = 6 + i * 4 + "s";
    const img = document.createElement("img");
    img.src = p.img;
    img.alt = p.name;
    img.style.width = (p.id === "jupiter" || p.id === "saturn" ? 26 : 16) + "px";
    if (p.wide) img.style.borderRadius = "0";
    orbit.appendChild(img);
    orbitBox.appendChild(orbit);
  });
}

// ===== 행성 소개 페이지 =====
const planetList = document.getElementById("planet-list");
if (planetList) {
  planetList.innerHTML = PLANETS.map((p, i) => `
    <article class="planet reveal" id="${p.id}" data-type="${p.type}">
      <div class="planet-img">
        <img src="${p.img}" alt="${p.name} 사진" class="${p.wide ? "wide" : ""}"
             style="animation-delay:${i * -0.6}s" loading="lazy">
      </div>
      <div>
        <div class="order">태양에서 ${i + 1}번째</div>
        <h2>${p.name}<small>${p.en}</small></h2>
        <span class="tag">${p.typeName}</span>
        <p>${p.desc}</p>
        <div class="facts">
          <div class="fact"><span>지름</span><strong>${fmt(p.diameter)} km</strong></div>
          <div class="fact"><span>태양과의 거리</span><strong>${fmt(p.distance)}백만 km</strong></div>
          <div class="fact"><span>하루 (자전)</span><strong>${p.day}</strong></div>
          <div class="fact"><span>1년 (공전)</span><strong>${p.year}</strong></div>
          <div class="fact"><span>위성 수</span><strong>${typeof p.moons === "number" ? p.moons + "개" : p.moons}</strong></div>
        </div>
      </div>
    </article>`).join("");

  // 종류별 보기
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const type = btn.dataset.type;
      document.querySelectorAll(".planet").forEach((el) => {
        el.classList.toggle("hide", type !== "all" && el.dataset.type !== type);
      });
    });
  });
}

// ===== 비교 페이지 =====
const bars = document.getElementById("bars");
if (bars) {
  const modes = {
    diameter: { get: (p) => p.diameter, label: (p) => fmt(p.diameter) + " km" },
    distance: { get: (p) => p.distance, label: (p) => fmt(p.distance) + "백만 km" },
    year: { get: (p) => p.yearDays, label: (p) => p.year },
  };

  bars.innerHTML = PLANETS.map((p) => `
    <div class="bar-row">
      <span class="name">${p.name}</span>
      <div class="bar-track"><div class="bar-fill" data-id="${p.id}"></div></div>
      <span class="value" data-id="${p.id}"></span>
    </div>`).join("");

  const draw = (mode) => {
    const m = modes[mode];
    const max = Math.max(...PLANETS.map(m.get));
    PLANETS.forEach((p) => {
      const fill = bars.querySelector(`.bar-fill[data-id="${p.id}"]`);
      fill.style.width = "0";
      requestAnimationFrame(() => requestAnimationFrame(() => {
        fill.style.width = Math.max(1.5, (m.get(p) / max) * 100) + "%";
      }));
      bars.querySelector(`.value[data-id="${p.id}"]`).textContent = m.label(p);
    });
  };

  document.querySelectorAll(".tabs .filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tabs .filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      draw(btn.dataset.mode);
    });
  });

  // 화면에 보일 때 막대 애니메이션 시작
  new IntersectionObserver((entries, obs) => {
    if (entries[0].isIntersecting) { draw("diameter"); obs.disconnect(); }
  }).observe(bars);

  // 크기 비교 (지름 비율 그대로)
  const sizeLine = document.getElementById("size-line");
  const maxD = Math.max(...PLANETS.map((p) => p.diameter));
  sizeLine.innerHTML = PLANETS.map((p) => {
    const w = Math.max(4, (p.diameter / maxD) * 140);
    return `<figure>
      <img src="${p.img}" alt="${p.name}" style="width:${p.wide ? w * 2.75 : w}px;${p.wide ? "border-radius:0" : ""}">
      <figcaption>${p.name}</figcaption>
    </figure>`;
  }).join("");

  // 표
  document.getElementById("table-body").innerHTML = PLANETS.map((p) => `
    <tr>
      <td><strong>${p.name}</strong></td>
      <td>${p.typeName}</td>
      <td>${fmt(p.diameter)} km</td>
      <td>${fmt(p.distance)}백만 km</td>
      <td>${p.day}</td>
      <td>${p.year}</td>
      <td>${typeof p.moons === "number" ? p.moons + "개" : p.moons}</td>
    </tr>`).join("");
}

// ===== 공통: 스크롤하면 나타나는 효과 =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
