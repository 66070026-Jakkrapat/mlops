
const CHOICE_LABELS = ["ก", "ข", "ค", "ง", "จ"];
const allQuestions = window.QUIZ_QUESTIONS || [];

const ASSET_CONFIG = {
  gifs: [
    { src: "assets/giphy.gif", caption: "สีหน้าตอนบอกว่าพร้อม แต่ยังไม่ได้อ่าน Git" },
    { src: "assets/cat.gif", caption: "ระบบกำลังตัดสินว่านายตอบมั่วหรือรู้จริง" },
    { src: "assets/happy-cat.gif", caption: "หน้าคนมั่นใจเกินเหตุ ก่อนโดนข้อ Docker ตบ" },
    { src: "assets/cat-meme-laughing-gif.gif", caption: "เว็บกำลังหัวเราะแบบไม่เกรงใจ" },
    { src: "assets/7fd493d029e88f51324cc8e3ebb8d403.gif", caption: "กิฟนี้ไม่ช่วยอะไร นอกจากเหยียบอีโก้" },
    { src: "https://media.giphy.com/media/10JhviFuU2gWD6/giphy.gif", caption: "ลิงก์สำรอง: ตอบผิดแล้วอย่ามองบน" },
    { src: "https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif", caption: "ลิงก์สำรอง: แมวตัวนี้ตัดสินนายแล้ว" }
  ],
  sounds: {
    correct: [
      { src: "assets/anime-wow-sound-effect.mp3", label: "ว้าวแบบปากแข็ง" },
      { src: "assets/singsakdisitthi.mp3", label: "ท่านเลือกได้ถูกต้อง" },
      { src: "assets/drip-goku-meme-song-original-dragon-ball-super-music-clash-of-gods.mp3", label: "เข้าท่าจัด" }
    ],
    wrong: [
      { src: "assets/spongebob-fail.mp3", label: "เสียงแห่งความพัง" },
      { src: "assets/dry-fart.mp3", label: "เอฟเฟกต์ความโป๊ะ" },
      { src: "assets/cat-laugh-meme-1.mp3", label: "แมวหัวเราะใส่หน้า" },
      { src: "assets/low-cortisol-song.mp3", label: "เพลงปลอบใจคนพลาด" },
      { src: "assets/yaaiihmiikhrangthii1-4.mp3", label: "สุ่มเสียงเกรียนแบบไม่เห็นใจ" },
      { src: "assets/7-epidtawtlkkhaaef.mp3", label: "เอฟเฟกต์คนช็อต" }
    ]
  }
};

const TAUNTS = [
  "เว็บถามจริง นายอ่านมาบ้างหรือเน้นบารมี?",
  "พร้อมเมื่อไรค่อยกดเริ่ม ไม่ใช่กดเพราะนิ้วมันคัน",
  "120 ข้อไม่ได้เยอะหรอก ถ้านายไม่ได้อ่านมั่วมา",
  "อย่าทำหน้าเก่ง ถ้ายังแยก git fetch กับ pull ไม่ออก",
  "Docker ช่วยแก้ it works on my machine แต่ไม่ช่วยแก้สมองเบลอ",
  "MLflow จดทุกอย่างได้ ยกเว้นเหตุผลว่าทำไมนายกดข้อนี้",
  "Prompt engineering ไม่ได้ช่วยคนที่ไม่อ่านโจทย์จนจบ",
  "Dataset versioning สำคัญ เพราะคนในทีมบางคนแก้ไฟล์แล้วทำหน้าใส",
  "Git ยังให้อภัย แต่ข้อสอบนี่ไม่แน่",
  "ตอบให้เหมือนคนอ่านมาจริง ไม่ใช่คนมีเซนส์ทางไสยศาสตร์"
];

const RESULT_ROASTS = {
  correct: [
    "เออ รอบนี้ไม่พัง",
    "ถูกนะ แต่ยังไม่ถึงขั้นขิงได้ทั้งวัน",
    "ข้อนี้มือถึงอยู่ เดี๋ยวข้อหน้าค่อยว่ากัน",
    "ตอบถูกแบบพอมีของ ไม่ได้แค่ฟลุค"
  ],
  wrong: [
    "ผิดจ้า แบบนี้ถ้าเป็น production คงมีคนโทรด่าแล้ว",
    "เลือกข้อนี้เพราะรู้จริง หรือเพราะวิญญาณบอก?",
    "ตอบผิดแบบมีความมั่นหน้า เว็บชอบมาก",
    "ถ้าเดา ก็เดาแบบมีมารยาทกับคะแนนหน่อย"
  ]
};

const FLASH_TEXT = {
  correct: [
    "ถูกว่ะ แต่ห้ามเหลิง เดี๋ยวพังข้อหน้า",
    "โอเค ข้อนี้สมองทำงานอยู่",
    "รอดเฉย เออใช้ได้",
    "ตอบได้แบบคนมีของนิดนึง"
  ],
  wrong: [
    "ผิดดิ ไอ้เสือ มั่นหน้าจัด",
    "โป๊ะเองล้วนๆ อย่าโทษข้อสอบ",
    "ข้อนี้หลุดเต็มตีน",
    "ตอบแบบนี้มีมยังส่ายหัว"
  ]
};

const state = {
  answers: loadAnswers(),
  filterTopic: "all",
  search: "",
  currentGifIndex: 0,
  flashTimer: null
};

const appShell = document.getElementById("appShell");
const startScreen = document.getElementById("startScreen");
const questionList = document.getElementById("questionList");
const navGrid = document.getElementById("navGrid");
const topicFilter = document.getElementById("topicFilter");
const searchInput = document.getElementById("searchInput");
const answeredCount = document.getElementById("answeredCount");
const scoreCount = document.getElementById("scoreCount");
const correctCount = document.getElementById("correctCount");
const wrongCount = document.getElementById("wrongCount");
const resultsBanner = document.getElementById("resultsBanner");
const heroGif = document.getElementById("heroGif");
const heroGifCaption = document.getElementById("heroGifCaption");
const tauntBox = document.getElementById("tauntBox");
const memeAudio = document.getElementById("memeAudio");
const leftMemeStack = document.getElementById("leftMemeStack");
const rightMemeStack = document.getElementById("rightMemeStack");
const answerFlash = document.getElementById("answerFlash");
const answerFlashInner = document.getElementById("answerFlashInner");
const answerFlashGif = document.getElementById("answerFlashGif");
const answerFlashText = document.getElementById("answerFlashText");
const gameOverScreen = document.getElementById("gameOverScreen");
const gameOverGif = document.getElementById("gameOverGif");
const gameOverTitle = document.getElementById("gameOverTitle");
const gameOverText = document.getElementById("gameOverText");

function loadAnswers() {
  try { return JSON.parse(localStorage.getItem("mlops-quiz-answers") || "{}"); }
  catch { return {}; }
}
function saveAnswers() { localStorage.setItem("mlops-quiz-answers", JSON.stringify(state.answers)); }
function pickRandom(list) { return list[Math.floor(Math.random() * list.length)]; }
function setTaunt(message = pickRandom(TAUNTS)) { if (tauntBox) tauntBox.textContent = message; }

function createMemeCard(item) {
  const card = document.createElement("div");
  card.className = "meme-card";
  card.innerHTML = `
    <img src="${item.src}" alt="meme gif" onerror="this.style.display='none'; this.parentElement.querySelector('.caption').textContent='หาไฟล์ไม่เจอ แต่ความกวนยังอยู่ กรุณาใส่ไฟล์ใน assets/'">
    <div class="caption">${item.caption}</div>`;
  return card;
}

function renderMemeStacks() {
  const gifs = ASSET_CONFIG.gifs;
  if (!leftMemeStack || !rightMemeStack) return;
  leftMemeStack.innerHTML = ""; rightMemeStack.innerHTML = "";
  gifs.slice(0, 2).forEach(item => leftMemeStack.appendChild(createMemeCard(item)));
  gifs.slice(2, 4).forEach(item => rightMemeStack.appendChild(createMemeCard(item)));
}

function cycleHeroGif(forceRandom = false) {
  if (!ASSET_CONFIG.gifs.length || !heroGif) return;
  state.currentGifIndex = forceRandom ? Math.floor(Math.random() * ASSET_CONFIG.gifs.length) : (state.currentGifIndex + 1) % ASSET_CONFIG.gifs.length;
  const item = ASSET_CONFIG.gifs[state.currentGifIndex];
  heroGif.src = item.src; heroGif.alt = item.caption; heroGifCaption.textContent = item.caption;
}

async function playResultSound(isCorrect) {
  const pool = isCorrect ? ASSET_CONFIG.sounds.correct : ASSET_CONFIG.sounds.wrong;
  if (!pool?.length || !memeAudio) return;
  const item = pickRandom(pool);
  memeAudio.src = item.src;
  memeAudio.currentTime = 0;
  try { await memeAudio.play(); }
  catch { setTaunt(`เบราว์เซอร์ยังไม่ยอมเล่นเสียง ${item.label} แต่พอกดเริ่มใหม่รอบนี้มันน่าจะยอม`); }
}

function showAnswerFlash(isCorrect) {
  clearTimeout(state.flashTimer);
  const item = pickRandom(ASSET_CONFIG.gifs);
  answerFlashGif.src = item.src;
  answerFlashText.textContent = pickRandom(isCorrect ? FLASH_TEXT.correct : FLASH_TEXT.wrong);
  answerFlashInner.classList.remove("correct", "wrong");
  answerFlashInner.classList.add(isCorrect ? "correct" : "wrong");
  answerFlash.classList.remove("hidden");
  state.flashTimer = setTimeout(() => answerFlash.classList.add("hidden"), 950);
}

function getStats() {
  let answered = 0, correct = 0, wrong = 0;
  allQuestions.forEach(q => {
    const val = state.answers[q.id];
    if (typeof val === "number") {
      answered++; if (val === q.answer) correct++; else wrong++;
    }
  });
  return { answered, correct, wrong, score: correct };
}

function updateSidebarStats() {
  const stats = getStats();
  answeredCount.textContent = `${stats.answered}/${allQuestions.length}`;
  scoreCount.textContent = `${stats.score}`;
  correctCount.textContent = `${stats.correct}`;
  wrongCount.textContent = `${stats.wrong}`;
}

function initTopics() {
  const topics = [...new Set(allQuestions.map(q => q.topic))];
  topics.forEach(topic => {
    const option = document.createElement("option");
    option.value = topic; option.textContent = topic; topicFilter.appendChild(option);
  });
}

function getVisibleQuestions() {
  return allQuestions.filter(q => {
    const matchesTopic = state.filterTopic === "all" || q.topic === state.filterTopic;
    const keyword = state.search.trim().toLowerCase();
    const haystack = `${q.question} ${q.topic} ${q.choices.join(" ")} ${q.explanation}`.toLowerCase();
    return matchesTopic && (!keyword || haystack.includes(keyword));
  });
}

function roastByResult(isCorrect) { return pickRandom(isCorrect ? RESULT_ROASTS.correct : RESULT_ROASTS.wrong); }

function answerQuestion(questionId, choiceIndex) {
  const q = allQuestions.find(item => item.id === questionId);
  if (!q) return;
  state.answers[questionId] = choiceIndex;
  saveAnswers();
  render();
  const card = document.getElementById(`q-${questionId}`);
  if (card) card.scrollIntoView({ behavior: "smooth", block: "center" });
  const isCorrect = choiceIndex === q.answer;
  setTaunt(`ข้อ ${questionId}: ${roastByResult(isCorrect)}`);
  cycleHeroGif(true);
  showAnswerFlash(isCorrect);
  playResultSound(isCorrect);
}

function createChoiceButton(q, choiceText, idx) {
  const btn = document.createElement("button");
  btn.className = "choice-btn";
  const selected = state.answers[q.id];
  const answered = typeof selected === "number";
  const isCorrect = idx === q.answer;
  const isSelected = idx === selected;
  btn.innerHTML = `<strong>${CHOICE_LABELS[idx]}.</strong> ${choiceText}`;
  if (answered) {
    if (isSelected) btn.classList.add("selected");
    if (isCorrect) btn.classList.add("correct");
    if (isSelected && !isCorrect) btn.classList.add("wrong");
  }
  btn.addEventListener("click", () => answerQuestion(q.id, idx));
  return btn;
}

function createFeedback(q) {
  const selected = state.answers[q.id];
  if (typeof selected !== "number") return null;
  const wrapper = document.createElement("div");
  const isCorrect = selected === q.answer;
  wrapper.className = `feedback ${isCorrect ? "correct" : "wrong"}`;
  wrapper.innerHTML = `
    <div class="answer-line">${isCorrect ? "✅ ตอบถูก แบบพอมีทรงคนอ่านจริง" : "❌ ตอบผิด แบบเว็บขอแซะก่อนเฉลย"}</div>
    <div><strong>เฉลย:</strong> ${CHOICE_LABELS[q.answer]}. ${q.choices[q.answer]}</div>
    <div><strong>อธิบาย:</strong> ${q.explanation}</div>`;
  return wrapper;
}

function renderQuestions() {
  const visible = getVisibleQuestions();
  questionList.innerHTML = "";
  if (!visible.length) {
    questionList.innerHTML = `<div class="empty-state">ไม่พบคำถามที่ตรงกับตัวกรองหรือคำค้นหา • หรือพิมพ์มั่วจนระบบยังงง</div>`;
    return;
  }
  visible.forEach(q => {
    const card = document.createElement("article");
    card.className = "question-card"; card.id = `q-${q.id}`;
    const selected = state.answers[q.id];
    const statusText = typeof selected === "number" ? (selected === q.answer ? "ตอบถูกแล้ว แต่ห้ามยิ้มเยอะ" : "ตอบแล้ว แต่หลุดเต็มตีน") : "ยังไม่ตอบ อย่าทำเนียน";
    card.innerHTML = `
      <div class="question-meta">
        <span class="badge">ข้อ ${q.id}</span>
        <span class="badge topic">${q.topic}</span>
        <span class="badge">${statusText}</span>
      </div>
      <div class="question-text">${q.question}</div>
      <div class="choice-list" id="choices-${q.id}"></div>`;
    const choiceContainer = card.querySelector(`#choices-${q.id}`);
    q.choices.forEach((choice, idx) => choiceContainer.appendChild(createChoiceButton(q, choice, idx)));
    const feedback = createFeedback(q); if (feedback) card.appendChild(feedback);
    questionList.appendChild(card);
  });
}

function renderNav() {
  navGrid.innerHTML = "";
  const visibleIds = new Set(getVisibleQuestions().map(q => q.id));
  allQuestions.forEach(q => {
    if (!visibleIds.has(q.id)) return;
    const btn = document.createElement("button");
    btn.className = "nav-btn"; btn.textContent = q.id;
    const selected = state.answers[q.id];
    if (typeof selected === "number") btn.classList.add(selected === q.answer ? "correct" : "wrong");
    btn.addEventListener("click", () => document.getElementById(`q-${q.id}`)?.scrollIntoView({ behavior: "smooth", block: "start" }));
    navGrid.appendChild(btn);
  });
}

function renderSummaryBanner(forceShow = false) {
  const stats = getStats();
  const shouldShow = forceShow || stats.answered > 0;
  if (!shouldShow) { resultsBanner.classList.add("hidden"); resultsBanner.textContent = ""; return; }
  const percentage = ((stats.correct / allQuestions.length) * 100).toFixed(1);
  let roast = "เว็บยังเฝ้ามองนายอยู่";
  if (percentage >= 80) roast = "เออ เก่งว่ะ แต่ยังห้ามเหลิง";
  else if (percentage >= 60) roast = "พอไหว แต่ยังมีทรงโดนข้อหลอกเล่น";
  else roast = "คะแนนแบบนี้มีมยังถอนหายใจ";
  resultsBanner.classList.remove("hidden");
  resultsBanner.innerHTML = `คะแนนรวมตอนนี้: <strong>${stats.correct}/${allQuestions.length}</strong> • ตอบแล้ว ${stats.answered} ข้อ • ผิด ${stats.wrong} ข้อ • คิดเป็น ${percentage}% • <span>${roast}</span>`;
}

function maybeShowGameOver() {
  const stats = getStats();
  const percentage = (stats.correct / allQuestions.length) * 100;
  if (percentage >= 50) return;
  const badGif = pickRandom(ASSET_CONFIG.gifs);
  gameOverGif.src = badGif.src;
  gameOverTitle.textContent = percentage < 30 ? "GAME OVER แบบไม่มีข้อแก้ตัว" : "รอดไม่รอด ลองคิดดูเอง";
  gameOverText.textContent = percentage < 30
    ? `ได้ ${stats.correct}/${allQuestions.length} เอง กลับไปอ่านใหม่เถอะ ตอนนี้แม้แต่ .gitignore ยังไม่ไว้ใจนาย`
    : `ได้ ${stats.correct}/${allQuestions.length} คะแนน เว็บยังให้โอกาสอยู่ แต่คะแนนทรงนี้ยังไม่น่าพูดดัง`;
  gameOverScreen.classList.remove("hidden");
}

function render() { updateSidebarStats(); renderSummaryBanner(); renderQuestions(); renderNav(); }

topicFilter.addEventListener("change", e => { state.filterTopic = e.target.value; render(); });
searchInput.addEventListener("input", e => { state.search = e.target.value; render(); });

document.getElementById("submitAllBtn").addEventListener("click", () => {
  renderSummaryBanner(true);
  resultsBanner.scrollIntoView({ behavior: "smooth", block: "center" });
  setTaunt("จบเกมแล้ว คะแนนจริงไม่เคยปรานีใคร");
  maybeShowGameOver();
});

document.getElementById("resetBtn").addEventListener("click", () => {
  if (!confirm("ต้องการล้างคำตอบทั้งหมดใช่ไหม? แน่ใจนะว่าจะลบทั้งน้ำตาและความหวัง")) return;
  state.answers = {}; saveAnswers(); render(); setTaunt("รีเซ็ตแล้ว เริ่มใหม่แบบคนเคยเจ็บมาเยอะ"); cycleHeroGif(true);
});

document.getElementById("startBtn").addEventListener("click", () => {
  startScreen.classList.add("hidden"); appShell.classList.remove("hidden");
  setTaunt("เข้าโหมดสอบแล้ว เตรียมหูไว้รับเสียง เตรียมใจไว้รับมีม"); cycleHeroGif(true);
});

document.getElementById("changeGifBtn").addEventListener("click", () => { cycleHeroGif(true); setTaunt("สุ่มกิฟใหม่แล้ว เพราะกิฟเก่าเยาะเย้ยนายไม่พอ"); });
document.getElementById("closeGameOverBtn").addEventListener("click", () => gameOverScreen.classList.add("hidden"));

renderMemeStacks();
initTopics();
render();
cycleHeroGif(true);
setTaunt();
