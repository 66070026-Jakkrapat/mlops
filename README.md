# MLOps Quiz Web — Meme Edition

เว็บข้อสอบ 120 ข้อ แบบกวนตีน พร้อมเฉลยทันที และรองรับการใส่ gif/mp3 ของคุณเอง

## วิธีใช้ไฟล์มีมของคุณ

สร้างโฟลเดอร์ชื่อ `assets` ไว้ระดับเดียวกับ `index.html` แล้วนำไฟล์ต่อไปนี้ไปใส่:

### GIF
- `giphy.gif`
- `cat.gif`
- `happy-cat.gif`
- `cat-meme-laughing-gif.gif`
- `7fd493d029e88f51324cc8e3ebb8d403.gif`

### MP3
- `spongebob-fail.mp3`
- `low-cortisol-song.mp3`
- `anime-wow-sound-effect.mp3`
- `yaaiihmiikhrangthii1-4.mp3`
- `singsakdisitthi.mp3`
- `dry-fart.mp3`
- `7-epidtawtlkkhaaef.mp3`
- `cat-laugh-meme-1.mp3`
- `drip-goku-meme-song-original-dragon-ball-super-music-clash-of-gods.mp3`

ถ้าชื่อไฟล์ไม่ตรง ให้แก้ใน `script.js` ตรงตัวแปร `ASSET_CONFIG`

## เปิดใช้งานในเครื่อง

เปิด `index.html` ได้เลย

## Push ขึ้น GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

## เปิด GitHub Pages

- ไปที่ Settings
- เข้า Pages
- เลือก Deploy from a branch
- เลือก branch `main` และโฟลเดอร์ `/root`

จากนั้นรอสักครู่ GitHub Pages จะสร้างลิงก์เว็บให้

## หมายเหตุ

- เบราว์เซอร์บางตัวจะไม่ยอม autoplay เสียงจนกว่าผู้ใช้จะกดปุ่มก่อน
- ถ้า gif หรือ mp3 ไม่ขึ้น แปลว่ายังไม่ได้วางไฟล์ใน `assets/` หรือชื่อไฟล์ไม่ตรง
- เว็บนี้เป็น static site จึง deploy ง่ายมาก
