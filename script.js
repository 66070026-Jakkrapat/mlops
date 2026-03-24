const QUIZ_CONFIG = {
  totalQuestions: Array.isArray(window.QUIZ_QUESTIONS) ? window.QUIZ_QUESTIONS.length : 0,
  gameOverThresholdPercent: 40,
  overlayDurationMs: 1200,
  highScorePercent: 80,
  midScorePercent: 60
};

const CHOICE_LABELS = ["ก", "ข", "ค", "ง", "จ"];

const ASSET_CONFIG = {
  introGifs: [
    {
      local: "assets/giphy.gif",
      fallback: "https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif",
      caption: "มีมกำลังสแกนว่านายอ่านมาหรือเอาพลังศรัทธามาเข้าสอบ"
    },
    {
      local: "assets/cat.gif",
      fallback: "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
      caption: "หน้าแบบนี้มีได้สองอย่าง อ่านมาจริง หรือมั่วแบบไม่สะทกสะท้าน"
    },
    {
      local: "assets/happy-cat.gif",
      fallback: "https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif",
      caption: "แมวในจอนี้ยังดูพร้อมกว่าอีกหลายคนที่กดเริ่มสอบ"
    }
  ],
  correctGifs: [
    { local: "assets/happy-cat.gif", fallback: "https://media.giphy.com/media/111ebonMs90YLu/giphy.gif" },
    { local: "assets/giphy.gif", fallback: "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif" },
    { local: "assets/7fd493d029e88f51324cc8e3ebb8d403.gif", fallback: "https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" }
  ],
  wrongGifs: [
    { local: "assets/cat-meme-laughing-gif.gif", fallback: "https://media.giphy.com/media/3og0INyCmHlNylks9O/giphy.gif" },
    { local: "assets/cat.gif", fallback: "https://media.giphy.com/media/l2JJKs3I69qfaQleE/giphy.gif" },
    { local: "assets/7fd493d029e88f51324cc8e3ebb8d403.gif", fallback: "https://media.giphy.com/media/10JhviFuU2gWD6/giphy.gif" }
  ],
  correctSounds: [
    { local: "assets/anime-wow-sound-effect.mp3", fallback: "assets/singsakdisiththi.mp3" },
    { local: "assets/singsakdisiththi.mp3", fallback: "assets/anime-wow-sound-effect.mp3" },
    { local: "assets/drip-goku-meme-song-original-dragon-ball-super-music-clash-of-gods-in-description.mp3", fallback: "assets/anime-wow-sound-effect.mp3" }
  ],
  wrongSounds: [
    { local: "assets/spongebob-fail.mp3", fallback: "assets/dry-fart.mp3" },
    { local: "assets/dry-fart.mp3", fallback: "assets/cat-laugh-meme-1.mp3" },
    { local: "assets/cat-laugh-meme-1.mp3", fallback: "assets/low-cortisol-song.mp3" },
    { local: "assets/low-cortisol-song.mp3", fallback: "assets/yaaaihmiikhrangthii1-4.mp3" },
    { local: "assets/yaaaihmiikhrangthii1-4.mp3", fallback: "assets/7-epidtawtlkkhaaef.mp3" },
    { local: "assets/7-epidtawtlkkhaaef.mp3", fallback: "assets/spongebob-fail.mp3" }
  ],
  resultGifs: [
    { local: "assets/happy-cat.gif", fallback: "https://media.giphy.com/media/ely3apij36BJhoZ234/giphy.gif" },
    { local: "assets/giphy.gif", fallback: "https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif" }
  ],
  gameOverGifs: [
    { local: "assets/cat-meme-laughing-gif.gif", fallback: "https://media.giphy.com/media/9Y5BbDSkSTiY8/giphy.gif" },
    { local: "assets/7fd493d029e88f51324cc8e3ebb8d403.gif", fallback: "https://media.giphy.com/media/12XMGIWtrHBl5e/giphy.gif" }
  ]
};

const COPY_BANK = {
  landingEyebrows: [
    "สนามสอบนี้ไม่ใช่สนามเด็กเล่น แต่ถ้าจะพังก็พังอย่างมีศิลปะ",
    "ข้อสอบมี 120 ข้อ ส่วนความมั่นใจเกินจริงของนายมีไม่จำกัด",
    "เว็บนี้ไม่ใช่ AI เรียบ ๆ เว็บนี้คือคนทำที่หลับน้อยและแซวเก่ง"
  ],
  landingSubtitles: [
    "กดเริ่มแล้วตอบทีละข้อ รู้ผลทันที จะเดาถูกก็ยังโดนแซวอยู่ดี",
    "Docker, Git, MLflow, Dataset Versioning, Prompt Engineering, GCP มากันครบ ไม่มีใครมาช่วยนายกลางทาง",
    "ทำเว็บให้กวนได้ แต่ logic ต้องตรง นี่แหละมุกของคนยังไม่ยอมพัง"
  ],
  heroBadges: [
    "คนพร้อมสอบมักไม่พูดเยอะ คนไม่พร้อมมักกดเดา",
    "ถ้าเห็นคำว่า detached HEAD แล้วใจสั่น วันนี้น่าจะยาว",
    "เว็บพร้อมแล้ว เหลือแต่นายว่าจะพร้อมแบบข้อมูลหรือพร้อมแบบมั่ว"
  ],
  landingRoasts: [
    "ถ้าแยกไม่ออกว่า `git fetch` ต่างจาก `git pull` ยังไง เว็บนี้มีสิทธิ์หัวเราะใส่ได้ตามกฎหมายธรรมชาติ",
    "คนที่บอกว่า Docker คือ VM เวอร์ชันน่ารัก มักโดนข้อสอบจับได้ไวมาก",
    "อ่าน Prompt Engineering แค่คำว่า chain-of-thought แล้วคิดว่าจบ แบบนั้นเรียกมั่น ไม่เรียกพร้อม",
    "ถ้าจะเดา ก็เดาให้มีหลักการหน่อย อย่าเดาแบบคนลืมเปิดสมองก่อนเปิด browser"
  ],
  quizEyebrows: [
    "ตอนนี้ไม่มีใครช่วยนาย นอกจากสมองที่เหลืออยู่",
    "ตอบให้เหมือนคนเคยอ่าน ไม่ใช่คนศรัทธาในระบบเดาสุ่ม",
    "ข้อนี้ยังไม่ตาย ข้อหน้าไม่แน่"
  ],
  questionMoods: [
    "ข้อสอบกำลังเช็กความไม่มั่วของนาย",
    "เลือกดี ๆ เดี๋ยวเว็บหาว่ามั่นแบบไม่มีหลักฐาน",
    "ถ้าข้อนี้ยังหลุด เว็บจะเริ่มไม่เกรงใจแล้ว",
    "หนึ่งคลิก หนึ่งชะตากรรม อย่ากดแบบใจร้อน"
  ],
  correctRoasts: [
    "เออ ข้อนี้ยังมีสติ",
    "รอดเฉย แบบคนยังไม่ลาออกจากสมอง",
    "ตอบถูกแบบพอมีทรง ไม่ได้แค่บุญเก่า",
    "โอเค ข้อนี้เว็บยังไม่ต้องเรียกช่าง"
  ],
  wrongRoasts: [
    "มั่วจนระบบยังสงสาร",
    "ตอบแบบนี้ Git ยังขอเว้นระยะห่าง",
    "ข้อนี้พังแบบมีเอกลักษณ์",
    "เดาแรงขนาดนี้เว็บยังรู้สึกได้"
  ],
  feedbackGood: [
    "เออ ข้อนี้ยังมีสตินะ",
    "รอดอยู่ ข้อนี้สมองยังออนไลน์",
    "ตอบได้แบบคนไม่มั่วล้วน ๆ",
    "เว็บยอมให้ผ่านไปหนึ่งดอก"
  ],
  feedbackBad: [
    "อันนี้หลุดเต็มตีน",
    "ตอบผิดแบบมั่นหน้ามาก",
    "เว็บยังไม่หายช็อกจากตัวเลือกที่นายกด",
    "ข้อนี้ตอบเหมือนปล่อยให้ดวงนำชีวิต"
  ],
  resultMessages: {
    high: [
      "โอเค มึงไม่ได้มั่วล้วน อย่างน้อยสมองยังไม่ลาออก",
      "คะแนนทรงนี้พอพูดได้ว่าคงอ่านมาบ้าง ไม่ได้เข้ามาโยนเหรียญ",
      "ทำได้ดีแบบน่าหมั่นไส้นิด ๆ แต่ก็ยอมรับว่าเก่งอยู่"
    ],
    mid: [
      "รอดแบบทุลักทุเล เหมือนทำโปรเจกต์คนก่อนส่งแล้วดัน deploy ผ่าน",
      "กลาง ๆ แบบยังไม่ตาย แต่ยังไม่ควรเดินอวด",
      "เอาเป็นว่าพอไม่อายห้อง แต่ก็ยังไม่ใช่วันของนาย"
    ],
    low: [
      "นี่ไม่ใช่สอบตกธรรมดา นี่คือการยอมแพ้ต่อความจริง",
      "คะแนนแบบนี้เว็บยังต้องหยุดคิดว่านายอ่านผิดไฟล์หรือเปล่า",
      "พังแบบมี pattern จนน่าเอาไปทำ case study"
    ]
  },
  resultExtras: [
    "ถ้าจะโม้เรื่อง MLOps เอาคะแนนนี้ประกอบด้วย ไม่งั้นบทสนทนาจะหลุดทรง",
    "ข้อดีคือเว็บยังเปิดให้สอบใหม่ ข้อเสียคือสมองนายต้องกลับมาทำงานเอง",
    "GitHub Pages deploy ง่าย แต่คะแนนไม่ deploy ตัวเองนะ"
  ],
  gameOverMessages: [
    "ต่ำกว่าค่าที่กำหนดไว้จนระบบต้องเปิดโหมด dramatic ให้เอง นายไปอ่านใหม่ก่อนที่ `reset --hard` จะตามมาหลอกหลอน",
    "คะแนนระดับนี้เหมือนบอกโลกว่าอ่านหัวข้อมา แต่ปล่อยหัวใจให้เดาเองหมด",
    "อย่าเพิ่งเถียงเว็บ กลับไปแยก image/container, fetch/pull, run/experiment ให้ชัดก่อนแล้วค่อยมาใหม่"
  ]
};

const dom = {
  screens: {
    landing: document.getElementById("landingScreen"),
    quiz: document.getElementById("quizScreen"),
    result: document.getElementById("resultScreen"),
    gameOver: document.getElementById("gameOverScreen")
  },
  landingEyebrow: document.getElementById("landingEyebrow"),
  landingSubtitle: document.getElementById("landingSubtitle"),
  heroBadge: document.getElementById("heroBadge"),
  landingRoast: document.getElementById("landingRoast"),
  landingHeroGif: document.getElementById("landingHeroGif"),
  landingHeroCaption: document.getElementById("landingHeroCaption"),
  startQuizBtn: document.getElementById("startQuizBtn"),
  shuffleLandingBtn: document.getElementById("shuffleLandingBtn"),
  backHomeBtn: document.getElementById("backHomeBtn"),
  quizEyebrow: document.getElementById("quizEyebrow"),
  progressText: document.getElementById("progressText"),
  progressPercent: document.getElementById("progressPercent"),
  progressFill: document.getElementById("progressFill"),
  scoreValue: document.getElementById("scoreValue"),
  correctValue: document.getElementById("correctValue"),
  wrongValue: document.getElementById("wrongValue"),
  questionTopic: document.getElementById("questionTopic"),
  questionMood: document.getElementById("questionMood"),
  questionText: document.getElementById("questionText"),
  choicesContainer: document.getElementById("choicesContainer"),
  feedbackBox: document.getElementById("feedbackBox"),
  feedbackBadge: document.getElementById("feedbackBadge"),
  feedbackRoast: document.getElementById("feedbackRoast"),
  feedbackAnswer: document.getElementById("feedbackAnswer"),
  feedbackExplanation: document.getElementById("feedbackExplanation"),
  nextQuestionBtn: document.getElementById("nextQuestionBtn"),
  finalScore: document.getElementById("finalScore"),
  finalPercent: document.getElementById("finalPercent"),
  finalCorrect: document.getElementById("finalCorrect"),
  finalWrong: document.getElementById("finalWrong"),
  finalStatus: document.getElementById("finalStatus"),
  resultGif: document.getElementById("resultGif"),
  resultMessage: document.getElementById("resultMessage"),
  resultExtra: document.getElementById("resultExtra"),
  retryBtn: document.getElementById("retryBtn"),
  resultHomeBtn: document.getElementById("resultHomeBtn"),
  confettiLayer: document.getElementById("confettiLayer"),
  gameOverGif: document.getElementById("gameOverGif"),
  gameOverScore: document.getElementById("gameOverScore"),
  gameOverPercent: document.getElementById("gameOverPercent"),
  gameOverMessage: document.getElementById("gameOverMessage"),
  gameOverRetryBtn: document.getElementById("gameOverRetryBtn"),
  gameOverHomeBtn: document.getElementById("gameOverHomeBtn"),
  memeOverlay: document.getElementById("memeOverlay"),
  memeOverlayCard: document.getElementById("memeOverlayCard"),
  memeOverlayGif: document.getElementById("memeOverlayGif"),
  memeOverlayText: document.getElementById("memeOverlayText"),
  fxAudio: document.getElementById("fxAudio")
};

const state = {
  currentIndex: 0,
  score: 0,
  correctCount: 0,
  wrongCount: 0,
  answeredCurrent: false,
  answeredQuestions: []
};

function randomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function setImageSource(img, asset) {
  if (!img || !asset) return;
  const local = asset.local || "";
  const fallback = asset.fallback || "";
  img.onerror = () => {
    if (fallback && img.src !== fallback) {
      img.onerror = null;
      img.src = fallback;
    }
  };
  img.src = local || fallback;
}

function showScreen(name) {
  Object.entries(dom.screens).forEach(([screenName, element]) => {
    element.classList.toggle("active", screenName === name);
  });
}

function updateLandingVisuals() {
  dom.landingEyebrow.textContent = randomItem(COPY_BANK.landingEyebrows);
  dom.landingSubtitle.textContent = randomItem(COPY_BANK.landingSubtitles);
  dom.heroBadge.textContent = randomItem(COPY_BANK.heroBadges);
  dom.landingRoast.textContent = randomItem(COPY_BANK.landingRoasts);
  const asset = randomItem(ASSET_CONFIG.introGifs);
  setImageSource(dom.landingHeroGif, asset);
  dom.landingHeroCaption.textContent = asset.caption;
}

function resetQuizState() {
  state.currentIndex = 0;
  state.score = 0;
  state.correctCount = 0;
  state.wrongCount = 0;
  state.answeredCurrent = false;
  state.answeredQuestions = [];
  dom.feedbackBox.classList.add("hidden");
  dom.nextQuestionBtn.disabled = true;
  dom.memeOverlay.classList.add("hidden");
  dom.confettiLayer.innerHTML = "";
}

function startQuiz() {
  resetQuizState();
  showScreen("quiz");
  renderQuestion();
}

function goHome() {
  dom.memeOverlay.classList.add("hidden");
  dom.confettiLayer.innerHTML = "";
  showScreen("landing");
  updateLandingVisuals();
}

function getCurrentQuestion() {
  return window.QUIZ_QUESTIONS[state.currentIndex];
}

function updateScoreboard() {
  const progressCount = state.currentIndex + 1;
  const progressPercent = Math.round((progressCount / QUIZ_CONFIG.totalQuestions) * 100);
  dom.progressText.textContent = `ข้อ ${progressCount}/${QUIZ_CONFIG.totalQuestions}`;
  dom.progressPercent.textContent = `${progressPercent}%`;
  dom.progressFill.style.width = `${progressPercent}%`;
  dom.scoreValue.textContent = String(state.score);
  dom.correctValue.textContent = String(state.correctCount);
  dom.wrongValue.textContent = String(state.wrongCount);
  dom.quizEyebrow.textContent = randomItem(COPY_BANK.quizEyebrows);
}

function renderQuestion() {
  const question = getCurrentQuestion();
  if (!question) {
    finishQuiz();
    return;
  }

  state.answeredCurrent = false;
  dom.feedbackBox.className = "feedback-box hidden";
  dom.nextQuestionBtn.disabled = true;
  updateScoreboard();

  dom.questionTopic.textContent = question.topic;
  dom.questionMood.textContent = randomItem(COPY_BANK.questionMoods);
  dom.questionText.textContent = question.question;
  dom.choicesContainer.innerHTML = "";

  question.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.className = "choice-btn";
    button.type = "button";
    button.innerHTML = `<span class="choice-label">${CHOICE_LABELS[index]}.</span><span>${choice}</span>`;
    button.addEventListener("click", () => handleAnswer(index));
    dom.choicesContainer.appendChild(button);
  });
}

function lockChoices() {
  const buttons = dom.choicesContainer.querySelectorAll(".choice-btn");
  buttons.forEach((button) => {
    button.disabled = true;
  });
  return buttons;
}

function formatCorrectAnswer(question) {
  return `เฉลย: ${CHOICE_LABELS[question.answer]}. ${question.choices[question.answer]}`;
}

function handleAnswer(selectedIndex) {
  if (state.answeredCurrent) return;

  const question = getCurrentQuestion();
  const isCorrect = selectedIndex === question.answer;
  const buttons = lockChoices();
  state.answeredCurrent = true;

  buttons.forEach((button, index) => {
    if (index === selectedIndex) {
      button.classList.add("selected");
    }
    if (index === question.answer) {
      button.classList.add("correct");
    }
    if (index === selectedIndex && !isCorrect) {
      button.classList.add("wrong");
    }
  });

  if (isCorrect) {
    state.score += 1;
    state.correctCount += 1;
  } else {
    state.wrongCount += 1;
  }

  state.answeredQuestions.push({
    id: question.id,
    topic: question.topic,
    selectedIndex,
    isCorrect
  });

  dom.feedbackBox.classList.remove("hidden");
  dom.feedbackBox.classList.add(isCorrect ? "good" : "bad");
  dom.feedbackBadge.textContent = isCorrect ? "ตอบถูก" : "ตอบผิด";
  dom.feedbackRoast.textContent = randomItem(isCorrect ? COPY_BANK.correctRoasts : COPY_BANK.wrongRoasts);
  dom.feedbackAnswer.textContent = formatCorrectAnswer(question);
  dom.feedbackExplanation.textContent = question.explanation;
  dom.nextQuestionBtn.disabled = false;

  showOverlay(isCorrect);
  playFeedbackSound(isCorrect);
  updateScoreboard();
}

function showOverlay(isCorrect) {
  const asset = randomItem(isCorrect ? ASSET_CONFIG.correctGifs : ASSET_CONFIG.wrongGifs);
  setImageSource(dom.memeOverlayGif, asset);
  dom.memeOverlayText.textContent = randomItem(isCorrect ? COPY_BANK.feedbackGood : COPY_BANK.feedbackBad);
  dom.memeOverlayCard.className = `meme-overlay-card ${isCorrect ? "good" : "bad"}`;
  dom.memeOverlay.classList.remove("hidden");

  window.clearTimeout(showOverlay.timerId);
  showOverlay.timerId = window.setTimeout(() => {
    dom.memeOverlay.classList.add("hidden");
  }, QUIZ_CONFIG.overlayDurationMs);
}

function tryPlayAudio(src, fallback) {
  if (!src && !fallback) return;

  const audio = dom.fxAudio;
  audio.pause();
  audio.currentTime = 0;

  const playSource = (source) => {
    if (!source) return Promise.reject(new Error("no-audio-source"));
    audio.src = source;
    audio.load();
    return audio.play();
  };

  playSource(src).catch(() => {
    if (fallback && fallback !== src) {
      playSource(fallback).catch(() => {});
    }
  });
}

function playFeedbackSound(isCorrect) {
  const asset = randomItem(isCorrect ? ASSET_CONFIG.correctSounds : ASSET_CONFIG.wrongSounds);
  if (!asset) return;
  tryPlayAudio(asset.local, asset.fallback);
}

function nextQuestion() {
  if (!state.answeredCurrent) return;
  state.currentIndex += 1;

  if (state.currentIndex >= QUIZ_CONFIG.totalQuestions) {
    finishQuiz();
    return;
  }

  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function buildResultCopy(percent) {
  if (percent >= QUIZ_CONFIG.highScorePercent) {
    return {
      status: "โอเค ยังมีสมอง",
      message: randomItem(COPY_BANK.resultMessages.high)
    };
  }

  if (percent >= QUIZ_CONFIG.midScorePercent) {
    return {
      status: "รอดแบบลุ้น",
      message: randomItem(COPY_BANK.resultMessages.mid)
    };
  }

  return {
    status: "คะแนนชวนหายใจแรง",
    message: randomItem(COPY_BANK.resultMessages.low)
  };
}

function spawnConfetti() {
  dom.confettiLayer.innerHTML = "";
  const colors = ["#ff7a18", "#f4d35e", "#00d3a7", "#ffffff", "#ff5a6b"];
  for (let index = 0; index < 28; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[index % colors.length];
    piece.style.animationDelay = `${Math.random() * 0.5}s`;
    piece.style.setProperty("--drift", `${(Math.random() - 0.5) * 260}px`);
    dom.confettiLayer.appendChild(piece);
  }
  window.setTimeout(() => {
    dom.confettiLayer.innerHTML = "";
  }, 3200);
}

function finishQuiz() {
  const percent = Math.round((state.score / QUIZ_CONFIG.totalQuestions) * 100);

  if (percent < QUIZ_CONFIG.gameOverThresholdPercent) {
    dom.gameOverScore.textContent = `${state.score}/${QUIZ_CONFIG.totalQuestions}`;
    dom.gameOverPercent.textContent = `${percent}%`;
    dom.gameOverMessage.textContent = randomItem(COPY_BANK.gameOverMessages);
    setImageSource(dom.gameOverGif, randomItem(ASSET_CONFIG.gameOverGifs));
    showScreen("gameOver");
    return;
  }

  const copy = buildResultCopy(percent);
  dom.finalScore.textContent = `${state.score}/${QUIZ_CONFIG.totalQuestions}`;
  dom.finalPercent.textContent = `${percent}%`;
  dom.finalCorrect.textContent = String(state.correctCount);
  dom.finalWrong.textContent = String(state.wrongCount);
  dom.finalStatus.textContent = copy.status;
  dom.resultMessage.textContent = copy.message;
  dom.resultExtra.textContent = randomItem(COPY_BANK.resultExtras);
  setImageSource(dom.resultGif, randomItem(ASSET_CONFIG.resultGifs));
  showScreen("result");

  if (percent >= QUIZ_CONFIG.highScorePercent) {
    spawnConfetti();
  } else {
    dom.confettiLayer.innerHTML = "";
  }
}

dom.startQuizBtn.addEventListener("click", startQuiz);
dom.shuffleLandingBtn.addEventListener("click", updateLandingVisuals);
dom.backHomeBtn.addEventListener("click", goHome);
dom.resultHomeBtn.addEventListener("click", goHome);
dom.gameOverHomeBtn.addEventListener("click", goHome);
dom.retryBtn.addEventListener("click", startQuiz);
dom.gameOverRetryBtn.addEventListener("click", startQuiz);
dom.nextQuestionBtn.addEventListener("click", nextQuestion);

if (!QUIZ_CONFIG.totalQuestions) {
  dom.startQuizBtn.disabled = true;
  dom.shuffleLandingBtn.disabled = true;
  dom.landingSubtitle.textContent = "โหลดข้อสอบไม่สำเร็จ เช็ก questions.js ก่อน เว็บยังไม่ยอมปล่อยนายเข้าสนาม";
}

updateLandingVisuals();
