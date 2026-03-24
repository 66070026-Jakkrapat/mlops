# MLOps Meme Exam Arena

เว็บข้อสอบ MLOps แบบ static web app ล้วน เปิด `index.html` ผ่าน browser ได้ทันที ไม่ต้องมี backend ไม่ต้องลง framework เพิ่ม และพร้อมเอาขึ้น GitHub / GitHub Pages ได้เลย

ธีมของเว็บคือกวนแบบคนทำจริง ไม่ใช่ภาษาคู่มือราชการ แต่ยังอ่านง่ายและใช้งานจริงได้

## โครงสร้างไฟล์

- `index.html` หน้าเว็บหลัก
- `style.css` งาน UI/animation/responsive
- `script.js` logic หน้าเว็บ, flow สอบ, score, sound/GIF, result/game over
- `questions.js` ชุดข้อสอบ 120 ข้อ
- `assets/` โฟลเดอร์วาง GIF และเสียง local

## วิธีเปิดใช้ในเครื่อง

1. ดาวน์โหลดหรือ clone โปรเจกต์นี้
2. เปิดไฟล์ `index.html` ด้วย browser ได้เลย
3. ถ้าต้องการให้ path asset local ทำงานครบ ให้ใส่ GIF/MP3 ตาม config ใน `script.js`

หมายเหตุ:
- หน้าแรกไม่มี autoplay เสียง
- เสียงจะเล่นเฉพาะตอนผู้ใช้ตอบคำถาม
- ถ้า local asset ไม่มี ระบบจะใช้ fallback ที่ระบุไว้แทน

## วิธี push ขึ้น GitHub

```bash
git init
git add .
git commit -m "Add static MLOps meme quiz app"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

ถ้า repo มีอยู่แล้ว ให้ข้าม `git init`

## วิธีเปิด GitHub Pages

1. Push โค้ดขึ้น GitHub ก่อน
2. เข้า repo บน GitHub
3. ไปที่ `Settings`
4. ไปที่ `Pages`
5. ใน `Build and deployment` เลือก `Deploy from a branch`
6. เลือก branch `main`
7. เลือก folder `/ (root)`
8. กด save

จากนั้น GitHub จะสร้าง URL สำหรับ Pages ให้

## วิธีเพิ่มหรือเปลี่ยน GIF/เสียงใน `assets/`

ไฟล์ asset ถูกจัดไว้ใน `script.js` ภายใต้ object `ASSET_CONFIG`

ค่าเริ่มต้นในโปรเจกต์นี้ชี้ไปที่ไฟล์ตัวอย่างที่มีอยู่แล้วใน `assets/` บางส่วนก่อน
ถ้าจะเปลี่ยนเป็นของตัวเองก็แก้ชื่อไฟล์ใน config ได้ตรง ๆ

หมวดหลักมี:
- `introGifs`
- `correctGifs`
- `wrongGifs`
- `correctSounds`
- `wrongSounds`
- `resultGifs`
- `gameOverGifs`

รูปแบบแต่ละรายการ:

```js
{
  local: "assets/correct-1.gif",
  fallback: "https://..."
}
```

หรือสำหรับหน้า intro:

```js
{
  local: "assets/intro-1.gif",
  fallback: "https://...",
  caption: "คำบรรยายมีม"
}
```

ถ้าจะใช้ local asset:
1. เอาไฟล์ไปวางใน `assets/`
2. แก้ชื่อ path ใน `ASSET_CONFIG` ให้ตรงกับไฟล์จริง

ถ้าไม่อยากใช้ fallback ภายนอก:
1. ใส่เฉพาะ `local`
2. หรือตั้ง `fallback` เป็น path local สำรองอีกไฟล์

## วิธีแก้ threshold ของ GAME OVER

แก้ที่ `QUIZ_CONFIG.gameOverThresholdPercent` ใน `script.js`

ตัวอย่าง:

```js
gameOverThresholdPercent: 40
```

ถ้าคะแนนรวมต่ำกว่าค่านี้ เว็บจะพาไปหน้า `GAME OVER`

## วิธีแก้ข้อความกวนในเว็บ

แก้ที่ object `COPY_BANK` ใน `script.js`

จุดที่แก้ง่าย:
- `landingEyebrows`
- `landingSubtitles`
- `landingRoasts`
- `quizEyebrows`
- `questionMoods`
- `correctRoasts`
- `wrongRoasts`
- `feedbackGood`
- `feedbackBad`
- `resultMessages`
- `resultExtras`
- `gameOverMessages`

ทุกอย่างเป็น array หรือ object ธรรมดา แก้ข้อความแล้วรีเฟรชหน้าเว็บได้เลย

## วิธีเพิ่มข้อสอบใหม่

ข้อสอบอยู่ใน `questions.js`

แต่ละข้อมีรูปแบบ:

```js
{
  topic: "Docker",
  question: "คำถาม",
  choices: ["ตัวเลือก 1", "ตัวเลือก 2", "ตัวเลือก 3", "ตัวเลือก 4", "ตัวเลือก 5"],
  answer: 0,
  explanation: "เฉลยสั้น ๆ"
}
```

หมายเหตุ:
- `answer` เป็น index ของตัวเลือก เริ่มจาก `0`
- ต้องมีตัวเลือก 5 ข้อเสมอ
- ระบบจะใส่ `id` ให้เองตามลำดับ

## การปรับหน้าตา

โทนหลักอยู่ใน `style.css`

จุดที่แก้ง่าย:
- สีหลักใน `:root`
- ขนาด card / radius / shadow
- animation เช่น `shake`, `confettiFall`, `glitchMove`

## การ deploy แบบ static

โปรเจกต์นี้ใช้แค่:
- HTML
- CSS
- JavaScript

ไม่มี dependency ภายนอกที่ต้อง build ก่อน deploy ดังนั้นเหมาะกับ:
- GitHub Pages
- Netlify แบบ drag-and-drop
- Vercel แบบ static
- เปิดไฟล์ตรงในเครื่อง
