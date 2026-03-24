window.QUIZ_QUESTIONS = [
  {
    "id": 1,
    "topic": "Docker Basics",
    "question": "ข้อใดอธิบายความหมายของ Docker ได้ถูกต้องที่สุด",
    "choices": [
      "โปรแกรมสำหรับเขียนโค้ด Python โดยเฉพาะ",
      "แพลตฟอร์มสำหรับสร้างและรันแอปในคอนเทนเนอร์ให้สภาพแวดล้อมสม่ำเสมอ",
      "ฐานข้อมูลสำหรับเก็บโมเดล AI",
      "ระบบควบคุมเวอร์ชันเหมือน Git",
      "เว็บโฮสติ้งของ Google Cloud เท่านั้น"
    ],
    "answer": 1,
    "explanation": "Docker คือแพลตฟอร์มที่ช่วยแพ็กโค้ดและ dependencies ไว้ใน container เพื่อให้รันได้เหมือนกันหลายเครื่อง."
  },
  {
    "id": 2,
    "topic": "Docker Basics",
    "question": "Container Image เปรียบได้ใกล้เคียงกับอะไรที่สุด",
    "choices": [
      "เครื่องเซิร์ฟเวอร์จริงที่กำลังรันอยู่",
      "ไฟล์ log ของระบบ",
      "แม่พิมพ์หรือพิมพ์เขียวสำหรับสร้าง container",
      "ฐานข้อมูลเก็บ metrics",
      "branch หลักของ Git"
    ],
    "answer": 2,
    "explanation": "Image เป็นพิมพ์เขียวที่ใช้สร้าง container จริงอีกที ส่วน container คืออินสแตนซ์ที่กำลังทำงาน."
  },
  {
    "id": 3,
    "topic": "Docker Basics",
    "question": "เหตุผลสำคัญที่วิชา MLOps ใช้ Docker บนเครื่องนักศึกษาคืออะไร",
    "choices": [
      "เพื่อแทน GitHub",
      "เพื่อจำลอง Linux environment ให้ทำงานเหมือนกันแม้เครื่องจริงต่างกัน",
      "เพื่อเพิ่มความเร็วอินเทอร์เน็ต",
      "เพื่อให้ใช้ Jupyter โดยไม่ต้องมี browser",
      "เพื่อป้องกันการลบไฟล์ด้วยคำสั่ง git restore"
    ],
    "answer": 1,
    "explanation": "Docker ช่วยให้ทุกคนมี environment เดียวกันและลดปัญหา OS/Dependency ไม่ตรงกัน."
  },
  {
    "id": 4,
    "topic": "Docker Basics",
    "question": "ข้อใดเป็นปัญหาที่ Docker ช่วยลดได้ดีที่สุด",
    "choices": [
      "ลืม commit โค้ด",
      "ลืมตั้งชื่อ dataset version",
      "It works on my machine",
      "คะแนน BLEU ต่ำ",
      "Position bias ของ LLM"
    ],
    "answer": 2,
    "explanation": "ปัญหา 'It works on my machine' เกิดจาก environment ไม่ตรงกัน ซึ่ง Docker ช่วยแก้โดยแพ็กทุกอย่างไว้เหมือนกัน."
  },
  {
    "id": 5,
    "topic": "Docker Basics",
    "question": "คำสั่งใดใช้สร้าง Docker image จาก Dockerfile",
    "choices": [
      "docker start -f Dockerfile",
      "docker build -f ./Dockerfile -t tuchsanai/mlops_2568_2:latest .",
      "docker image run ./Dockerfile",
      "docker push ./Dockerfile",
      "docker ps -f Dockerfile"
    ],
    "answer": 1,
    "explanation": "docker build ใช้สร้าง image จาก Dockerfile และ tag ชื่อ image ตามที่กำหนด."
  },
  {
    "id": 6,
    "topic": "Docker Basics",
    "question": "ในคำสั่ง docker build -f ./Dockerfile -t myimg:latest . เครื่องหมายจุด (.) ด้านท้ายหมายถึงอะไร",
    "choices": [
      "ให้ใช้ Docker Hub เป็น registry",
      "ให้ลบไฟล์ชั่วคราวทั้งหมด",
      "ให้ใช้โฟลเดอร์ปัจจุบันเป็น build context",
      "ให้รัน image ทันที",
      "ให้เปิด port แบบอัตโนมัติ"
    ],
    "answer": 2,
    "explanation": "จุดท้ายคำสั่งหมายถึง current directory ซึ่งเป็น build context ที่ Docker จะใช้ตอนสร้าง image."
  },
  {
    "id": 7,
    "topic": "Docker Basics",
    "question": "คำสั่ง docker push tuchsanai/mlops_2568_2:latest มีหน้าที่อะไร",
    "choices": [
      "ดาวน์โหลด image จาก Docker Hub",
      "อัปโหลด image ไปยัง registry",
      "สร้าง container ใหม่",
      "เปลี่ยนชื่อ container",
      "ดูรายการ container ทั้งหมด"
    ],
    "answer": 1,
    "explanation": "docker push คือการส่ง image ที่เรามีอยู่ขึ้นไปเก็บใน registry เช่น Docker Hub."
  },
  {
    "id": 8,
    "topic": "Docker Basics",
    "question": "ข้อใดอธิบาย docker run -d -p 8888:8888 --name mlops-container image ได้ถูกต้อง",
    "choices": [
      "-d คือ delete container หลังรันจบ",
      "-p 8888:8888 คือ map พอร์ต host ไปยังพอร์ตใน container",
      "--name ใช้ตั้งชื่อ image ไม่ใช่ container",
      "คำสั่งนี้ใช้ได้เฉพาะ Windows",
      "คำสั่งนี้ไม่สามารถรันเบื้องหลังได้"
    ],
    "answer": 1,
    "explanation": "-p ใช้ map พอร์ต host:container และ -d คือ detached mode ให้รันเบื้องหลัง."
  },
  {
    "id": 9,
    "topic": "Docker Basics",
    "question": "flag -d ใน docker run หมายถึงอะไร",
    "choices": [
      "debug mode",
      "default mode",
      "detached mode ทำงานเบื้องหลัง",
      "delete mode",
      "data mode"
    ],
    "answer": 2,
    "explanation": "detached mode ทำให้ container รันอยู่เบื้องหลัง แม้ปิด terminal ก็ยังทำงานได้."
  },
  {
    "id": 10,
    "topic": "Docker Basics",
    "question": "หากรัน JupyterLab ใน container แล้ว map ไว้ที่ 8888 เรามักเข้าใช้งานผ่าน URL ใด",
    "choices": [
      "http://localhost:5000",
      "http://localhost:8080",
      "http://localhost:8888",
      "http://docker.io:8888",
      "http://127.0.0.1:3306"
    ],
    "answer": 2,
    "explanation": "เมื่อ map port 8888:8888 ก็เข้าใช้งานที่ host ผ่าน http://localhost:8888 ได้."
  },
  {
    "id": 11,
    "topic": "Docker Basics",
    "question": "คำสั่งใดใช้ดูเฉพาะ container ที่กำลังทำงานอยู่",
    "choices": [
      "docker ps",
      "docker ps -a",
      "docker logs",
      "docker images -a",
      "docker run"
    ],
    "answer": 0,
    "explanation": "docker ps แสดงเฉพาะ container ที่กำลังรันอยู่ ส่วน docker ps -a แสดงทั้งหมดรวมที่หยุดแล้ว."
  },
  {
    "id": 12,
    "topic": "Docker Basics",
    "question": "ถ้าต้องการดู container ทั้งหมดทั้งที่สถานะ Up และ Exited ควรใช้คำสั่งใด",
    "choices": [
      "docker ps",
      "docker history",
      "docker ps -a",
      "docker inspect -r",
      "docker run -a"
    ],
    "answer": 2,
    "explanation": "docker ps -a ใช้ดู container ทั้งหมดรวมถึงตัวที่หยุดไปแล้ว."
  },
  {
    "id": 13,
    "topic": "Docker Basics",
    "question": "ในผลลัพธ์ docker ps ถ้าช่อง STATUS แสดงว่า Exited หมายถึงอะไร",
    "choices": [
      "container กำลังรันอยู่ปกติ",
      "container เปิด port ไม่ได้",
      "container หยุดทำงานแล้ว",
      "image ถูกลบออกจากระบบ",
      "registry ปฏิเสธการเชื่อมต่อ"
    ],
    "answer": 2,
    "explanation": "Exited หมายถึง container สิ้นสุดการทำงานแล้ว อาจจบปกติหรือเกิด error ก็ได้."
  },
  {
    "id": 14,
    "topic": "Docker Basics",
    "question": "ถ้าเราไม่ได้ตั้งชื่อ container เอง Docker มักทำอะไร",
    "choices": [
      "ไม่อนุญาตให้รัน",
      "ใช้ชื่อ image เป็นชื่อ container เสมอ",
      "สุ่มชื่อเล่นให้ container",
      "ตั้งชื่อเป็น latest อัตโนมัติ",
      "ตั้งชื่อเท่ากับ port ที่เปิด"
    ],
    "answer": 2,
    "explanation": "Docker จะสุ่มชื่อ container ให้อัตโนมัติถ้าเราไม่กำหนด --name เอง."
  },
  {
    "id": 15,
    "topic": "Docker Basics",
    "question": "ข้อใดอธิบายความต่างของ CMD กับ ENTRYPOINT ได้ถูกต้องที่สุด",
    "choices": [
      "CMD ถูก append เสมอ ส่วน ENTRYPOINT ถูก override เสมอ",
      "CMD เป็นคำสั่ง default ที่ถูก override ได้ ส่วน ENTRYPOINT เป็นคำสั่งหลักที่ arguments มักถูกต่อท้าย",
      "ทั้งสองอย่างทำงานเหมือนกันทุกกรณี",
      "ENTRYPOINT ใช้ได้เฉพาะ private registry",
      "CMD ใช้ได้เฉพาะกับ Windows container"
    ],
    "answer": 1,
    "explanation": "CMD เป็นคำสั่ง default ที่ถูกแทนได้ง่าย ส่วน ENTRYPOINT ล็อกคำสั่งหลักและสิ่งที่พิมพ์ต่อท้ายมักเป็น argument."
  },
  {
    "id": 16,
    "topic": "Git Basics",
    "question": "Git คืออะไร",
    "choices": [
      "เครื่องมือทำ container",
      "ระบบ version control สำหรับติดตามการเปลี่ยนแปลงโค้ด",
      "ฐานข้อมูลเก็บ artifact",
      "ภาษาสคริปต์สำหรับ Jupyter",
      "ระบบจัดการ model registry"
    ],
    "answer": 1,
    "explanation": "Git คือ version control system ที่ใช้ติดตามเวอร์ชันและประวัติการเปลี่ยนแปลงของโค้ด."
  },
  {
    "id": 17,
    "topic": "Git Basics",
    "question": "ข้อใดอธิบาย Distributed Version Control System ได้ถูกต้อง",
    "choices": [
      "ต้องพึ่งพา server กลางเพียงจุดเดียวเสมอ",
      "ทุกคนมี local repository ของตนเองและ commit ได้แม้ไม่มีอินเทอร์เน็ต",
      "ไม่มีประวัติการเปลี่ยนแปลงในเครื่อง",
      "ใช้ได้เฉพาะกับ GitHub",
      "ไม่สามารถทำงานเป็นทีมได้"
    ],
    "answer": 1,
    "explanation": "DVCS อย่าง Git ให้แต่ละคนมี local repo ของตัวเอง จึงทำงานและ commit แบบออฟไลน์ได้."
  },
  {
    "id": 18,
    "topic": "Git Basics",
    "question": "จุดอ่อนสำคัญของ Centralized Version Control System คืออะไร",
    "choices": [
      "branch เร็วเกินไป",
      "ไม่มี audit trail",
      "single point of failure ที่ server กลาง",
      "ไม่ต้องใช้อินเทอร์เน็ต",
      "เก็บประวัติไว้ในเครื่องทุกคน"
    ],
    "answer": 2,
    "explanation": "CVCS พึ่ง server กลางมาก หาก server ล่มทุกคนอาจทำงานต่อไม่ได้."
  },
  {
    "id": 19,
    "topic": "Git Basics",
    "question": "GitHub คืออะไรเมื่อเทียบกับ Git",
    "choices": [
      "GitHub คือคำสั่งหนึ่งของ Git",
      "Git และ GitHub เป็นสิ่งเดียวกัน",
      "GitHub คือบริการโฮสต์ remote repository ส่วน Git คือโปรแกรม VCS",
      "GitHub คือ local repository",
      "Git คือเว็บไซต์ ส่วน GitHub คือ library"
    ],
    "answer": 2,
    "explanation": "Git คือเครื่องมือ version control ส่วน GitHub คือแพลตฟอร์มคลาวด์สำหรับเก็บและแชร์ Git repository."
  },
  {
    "id": 20,
    "topic": "Git Basics",
    "question": "คำสั่ง git init ใช้ทำอะไร",
    "choices": [
      "ดาวน์โหลด repo จาก GitHub",
      "สร้าง branch ใหม่",
      "เริ่มต้นโฟลเดอร์ให้เป็น Git repository",
      "อัปโหลดโค้ดขึ้น remote",
      "ลบ commit ล่าสุด"
    ],
    "answer": 2,
    "explanation": "git init ใช้สร้าง .git และทำให้โฟลเดอร์เริ่มติดตามด้วย Git."
  },
  {
    "id": 21,
    "topic": "Git Basics",
    "question": "โฟลเดอร์ซ่อน .git มีหน้าที่หลักอะไร",
    "choices": [
      "เก็บ dataset ขนาดใหญ่",
      "เก็บประวัติและ metadata ของ repository",
      "เก็บ Docker image",
      "เก็บ notebook ที่รันไม่ผ่าน",
      "เก็บรหัสผ่านของ GitHub"
    ],
    "answer": 1,
    "explanation": ".git คือที่เก็บข้อมูลภายในของ Git เช่น object, refs และประวัติ commit."
  },
  {
    "id": 22,
    "topic": "Git Basics",
    "question": "คำสั่ง git status ใช้เพื่ออะไร",
    "choices": [
      "ดูเฉพาะ branch บน remote",
      "ดูสถานะไฟล์ว่ามีอะไรเปลี่ยนแปลงและอยู่ขั้นไหน",
      "ย้อนกลับไป commit เก่า",
      "รวม branch สองอัน",
      "ลบ staged files ทั้งหมด"
    ],
    "answer": 1,
    "explanation": "git status ใช้ตรวจว่าไฟล์ไหน modified, staged หรือ untracked."
  },
  {
    "id": 23,
    "topic": "Git Basics",
    "question": "หน้าที่หลักของไฟล์ .gitignore คืออะไร",
    "choices": [
      "เก็บชื่อผู้เขียน commit",
      "บอก Git ให้ละเว้นไฟล์หรือโฟลเดอร์บางอย่างไม่ต้องติดตาม",
      "เก็บ URL ของ remote",
      "บังคับให้ทุกคนใช้ branch main",
      "เก็บ token สำหรับ docker login"
    ],
    "answer": 1,
    "explanation": ".gitignore ใช้ระบุไฟล์/โฟลเดอร์ที่ไม่ต้องการให้ Git track เช่น log, secret, dependency."
  },
  {
    "id": 24,
    "topic": "Git Basics",
    "question": "ข้อใดควรใส่ใน .gitignore มากที่สุด",
    "choices": [
      "README.md",
      "source code หลักของโปรเจกต์",
      "API keys และไฟล์รหัสผ่าน",
      "ไฟล์เอกสารที่ใช้สอน",
      "ข้อความ commit message"
    ],
    "answer": 2,
    "explanation": "ข้อมูลลับ เช่น API keys หรือ secrets ไม่ควรถูก commit ขึ้น repo และควรใส่ใน .gitignore."
  },
  {
    "id": 25,
    "topic": "Git Basics",
    "question": "คำสั่ง git clone ใช้ทำอะไร",
    "choices": [
      "เปลี่ยนชื่อ branch",
      "ดึง repository ที่มีอยู่แล้วมาลงเครื่อง",
      "ลบ remote เดิม",
      "สร้าง tag ของ Docker image",
      "ย้ายไฟล์ไป staging area"
    ],
    "answer": 1,
    "explanation": "git clone ใช้คัดลอกทั้ง repo พร้อมประวัติมาจาก remote ลงเครื่อง."
  },
  {
    "id": 26,
    "topic": "Git Basics",
    "question": "วงจรพื้นที่ทำงานของ Git ที่ถูกต้องที่สุดคือข้อใด",
    "choices": [
      "Remote -> Local -> Staging -> Working",
      "Working Directory -> Staging Area -> Local Repository -> Remote Repository",
      "Working Directory -> Remote -> Staging -> Local",
      "Staging -> Working -> Local -> Remote",
      "Local -> Working -> Remote -> Staging"
    ],
    "answer": 1,
    "explanation": "ลำดับมาตรฐานคือแก้ไฟล์ใน Working แล้ว add ไป Staging commit เข้า Local และ push ไป Remote."
  },
  {
    "id": 27,
    "topic": "Git Basics",
    "question": "คำสั่ง git add ทำหน้าที่อะไร",
    "choices": [
      "ย้ายไฟล์จาก remote มา working directory",
      "ย้ายไฟล์จาก working directory ไป staging area",
      "ย้ายไฟล์จาก local repo ไป remote repo",
      "ย้ายไฟล์จาก staging area กลับ working directory",
      "ลบไฟล์จาก repository"
    ],
    "answer": 1,
    "explanation": "git add เอาไฟล์ที่เปลี่ยนแปลงแล้วไปอยู่ใน staging area เพื่อเตรียม commit."
  },
  {
    "id": 28,
    "topic": "Git Basics",
    "question": "คำสั่ง git commit -m \"message\" มีหน้าที่หลักอะไร",
    "choices": [
      "อัปโหลดโค้ดขึ้น GitHub",
      "สร้าง snapshot ของสิ่งที่ staged ไว้ลง local repository",
      "ลบไฟล์ untracked",
      "รวม branch โดยอัตโนมัติ",
      "ดูความต่างระหว่างสองไฟล์"
    ],
    "answer": 1,
    "explanation": "commit คือการบันทึก snapshot ของไฟล์ที่ staged พร้อมข้อความอธิบาย."
  },
  {
    "id": 29,
    "topic": "Git Basics",
    "question": "คำสั่ง git remote -v มักใช้เพื่อตรวจสอบอะไร",
    "choices": [
      "เวอร์ชันของ Git ที่ติดตั้ง",
      "ประวัติ commit ทั้งหมด",
      "URL ของ remote repository ที่เชื่อมอยู่",
      "conflict ใน branch ปัจจุบัน",
      "diff ของไฟล์ล่าสุด"
    ],
    "answer": 2,
    "explanation": "git remote -v แสดงชื่อ remote เช่น origin และ URL ที่ใช้ fetch/push."
  },
  {
    "id": 30,
    "topic": "Git Basics",
    "question": "คำสั่ง git push มีหน้าที่อะไร",
    "choices": [
      "เอาโค้ดจาก remote มารวมในเครื่อง",
      "ส่ง commits จาก local repository ไป remote repository",
      "ดูประวัติ local commits",
      "ย้ายไฟล์เข้า staging",
      "สร้าง token ใหม่"
    ],
    "answer": 1,
    "explanation": "push ใช้ดัน commits ที่มีใน local ไปยัง remote."
  },
  {
    "id": 31,
    "topic": "Git Basics",
    "question": "คำสั่ง git fetch ต่างจาก git pull อย่างไรโดยสรุป",
    "choices": [
      "fetch ลบไฟล์เก่า แต่ pull ไม่ลบ",
      "fetch ดึงข้อมูลมาอย่างเดียวไม่ merge ส่วน pull ดึงแล้ว merge ให้ทันที",
      "fetch ใช้ได้เฉพาะ local repo",
      "pull ปลอดภัยกว่า fetch เสมอ",
      "ไม่มีความต่าง"
    ],
    "answer": 1,
    "explanation": "git fetch ปลอดภัยกว่าเพราะแค่อัปเดตข้อมูลจาก remote โดยไม่ merge เข้ากับ branch ปัจจุบัน."
  },
  {
    "id": 32,
    "topic": "Git Basics",
    "question": "เหตุใดจึงไม่แนะนำให้ใช้ git pull ตอนยังมี uncommitted changes",
    "choices": [
      "เพราะ pull ใช้ไม่ได้บน branch main",
      "เพราะ pull ต้องการ internet ความเร็วสูงเท่านั้น",
      "เพราะอาจเกิด merge conflicts และทำให้งานที่ค้างอยู่สับสนหรือพังได้",
      "เพราะ pull จะลบ remote ทั้งหมด",
      "เพราะ pull ไม่ดึง branch อื่น"
    ],
    "answer": 2,
    "explanation": "เมื่อยังมีงานค้างที่ไม่ commit การ pull อาจชนกับของใหม่จาก remote จนเกิด conflict หรือทำให้สภาพงานสับสน."
  },
  {
    "id": 33,
    "topic": "Git Basics",
    "question": "คำสั่ง git log ใช้ทำอะไร",
    "choices": [
      "ดูประวัติ commit",
      "สร้าง commit ใหม่",
      "ดู remote URL",
      "stage ทุกไฟล์",
      "เปลี่ยน default branch"
    ],
    "answer": 0,
    "explanation": "git log ใช้ดูประวัติ commits และรายละเอียดต่างๆ เช่น hash, author, message."
  },
  {
    "id": 34,
    "topic": "Git Basics",
    "question": "คำสั่ง git diff มักใช้เพื่ออะไร",
    "choices": [
      "ดู branch บน remote",
      "เปรียบเทียบความแตกต่างของไฟล์/การเปลี่ยนแปลง",
      "แก้ merge conflict อัตโนมัติ",
      "รีเซ็ต branch ไปอดีต",
      "push ขึ้น GitHub"
    ],
    "answer": 1,
    "explanation": "git diff ช่วยดูว่ามีบรรทัดใดถูกเพิ่ม ลบ หรือแก้ไข."
  },
  {
    "id": 35,
    "topic": "Git Basics",
    "question": "ปัจจุบันชื่อ branch หลักที่นิยมใช้แทน master คืออะไร",
    "choices": [
      "origin",
      "head",
      "main",
      "latest",
      "primary-branch"
    ],
    "answer": 2,
    "explanation": "ปัจจุบันนิยมใช้ชื่อ main เป็น branch หลักแทน master ในหลายแพลตฟอร์ม."
  },
  {
    "id": 36,
    "topic": "Git Branches & Undo",
    "question": "Branch ใน Git เปรียบได้ใกล้เคียงกับอะไรที่สุด",
    "choices": [
      "ไฟล์ zip ของทั้งโปรเจกต์",
      "pointer ที่ชี้ไปยัง commit ล่าสุดของเส้นทางพัฒนา",
      "remote server สำรอง",
      "stage ของ MLflow model",
      "Docker volume"
    ],
    "answer": 1,
    "explanation": "Branch ใน Git เป็น pointer ไปยัง commit ปัจจุบันของเส้นทางพัฒนานั้น ไม่ใช่การคัดลอกทั้งโฟลเดอร์."
  },
  {
    "id": 37,
    "topic": "Git Branches & Undo",
    "question": "HEAD ใน Git คืออะไร",
    "choices": [
      "ชื่อ branch กลางบน GitHub",
      "พื้นที่เก็บ artifacts",
      "ตัวชี้ว่าขณะนี้เรากำลังอยู่ที่ branch หรือ commit ไหน",
      "คำสั่งลบ commit",
      "ชนิดของ merge"
    ],
    "answer": 2,
    "explanation": "HEAD เป็นตัวบอกตำแหน่งปัจจุบันของเราในประวัติ Git."
  },
  {
    "id": 38,
    "topic": "Git Branches & Undo",
    "question": "คำสั่ง git branch มีหน้าที่หลักอะไร",
    "choices": [
      "ดูรายการ branch และสร้าง branch ใหม่ได้",
      "ดึง remote ล่าสุด",
      "รวม branch เข้าหากัน",
      "ดู diff ของ commit",
      "รีเซ็ต staging"
    ],
    "answer": 0,
    "explanation": "git branch ใช้แสดงรายชื่อ branch และสร้าง branch ได้ เช่น git branch feature-x."
  },
  {
    "id": 39,
    "topic": "Git Branches & Undo",
    "question": "หลังพิมพ์ git branch new_feature แล้วจะเกิดอะไรขึ้นโดยปกติ",
    "choices": [
      "ระบบจะย้ายไป branch new_feature ทันที",
      "ระบบจะสร้าง branch ใหม่ แต่ยังอยู่ branch เดิมจนกว่าจะ switch/checkout",
      "ระบบจะ merge new_feature เข้ากับ main ทันที",
      "ระบบจะ push branch ไป remote ทันที",
      "ระบบจะลบ branch เดิมอัตโนมัติ"
    ],
    "answer": 1,
    "explanation": "git branch เฉยๆ แค่สร้าง branch ยังไม่ย้าย HEAD ไป branch นั้น."
  },
  {
    "id": 40,
    "topic": "Git Branches & Undo",
    "question": "คำสั่ง git switch feature-x ใช้ทำอะไร",
    "choices": [
      "ลบ branch feature-x",
      "รวม feature-x เข้ากับ branch ปัจจุบัน",
      "ย้าย HEAD ไปยัง branch feature-x",
      "เปลี่ยนชื่อ feature-x",
      "ดูประวัติของ feature-x เท่านั้น"
    ],
    "answer": 2,
    "explanation": "git switch ใช้สลับไปทำงานบน branch ที่ระบุ."
  },
  {
    "id": 41,
    "topic": "Git Branches & Undo",
    "question": "การลบ branch ด้วย git branch -d จะมีข้อควรระวังสำคัญข้อใด",
    "choices": [
      "ลบได้แม้กำลังยืนอยู่บน branch นั้น",
      "Git จะเตือนถ้า branch ยังไม่ fully merged",
      "คำสั่งนี้ลบเฉพาะ remote branch",
      "ลบแล้ว auto-merge เข้ากับ main ก่อน",
      "ใช้ได้เฉพาะกับ branch main"
    ],
    "answer": 1,
    "explanation": "git branch -d เป็นการลบแบบปลอดภัย Git จะเตือนถ้า branch ยังไม่ถูก merge ครบ."
  },
  {
    "id": 42,
    "topic": "Git Branches & Undo",
    "question": "ถ้าต้องการบังคับลบ branch ที่ยังไม่ fully merged ควรใช้คำสั่งใด",
    "choices": [
      "git branch -r",
      "git branch -m",
      "git branch -D",
      "git delete branch",
      "git reset --hard branch"
    ],
    "answer": 2,
    "explanation": "ตัว D ใหญ่คือ force delete branch ใช้เมื่อมั่นใจว่าต้องการทิ้งงานจริงๆ."
  },
  {
    "id": 43,
    "topic": "Git Branches & Undo",
    "question": "ข้อใดอธิบาย Fast-forward merge ได้ถูกต้อง",
    "choices": [
      "Git จะสร้าง merge commit ใหม่ทุกครั้ง",
      "เกิดเมื่อ branch หลักไม่มี commit ใหม่เพิ่มหลังแตก branch ทำให้เลื่อน pointer ไปข้างหน้าได้เลย",
      "เกิดเฉพาะตอน conflict",
      "ใช้ได้เฉพาะ remote repository",
      "เป็นการ merge ที่ช้ากว่าแบบอื่น"
    ],
    "answer": 1,
    "explanation": "Fast-forward เกิดเมื่อเส้นทางตรงกันและ Git เลื่อน pointer ของ branch หลักไปยังปลาย branch ใหม่ได้เลย."
  },
  {
    "id": 44,
    "topic": "Git Branches & Undo",
    "question": "ถ้าทั้ง branch หลักและ branch ฟีเจอร์มี commit ใหม่แยกกัน แล้ว merge กัน ปกติมักเกิดอะไร",
    "choices": [
      "Git จะลบ commit เก่าทั้งหมด",
      "Git มักสร้าง merge commit เชื่อมสองเส้นทาง",
      "Git จะรีเซ็ตกลับ root commit",
      "ต้องใช้ docker merge",
      "ไม่สามารถ merge ได้ทุกกรณี"
    ],
    "answer": 1,
    "explanation": "เมื่อมีการแตกประวัติเป็นสองทาง Git มักทำ 3-way merge และสร้าง merge commit หากรวมได้สำเร็จ."
  },
  {
    "id": 45,
    "topic": "Git Branches & Undo",
    "question": "Merge conflict มักเกิดเมื่อใด",
    "choices": [
      "เมื่อ branch สองอันเพิ่มไฟล์คนละไฟล์",
      "เมื่อทั้งสอง branch แก้ไฟล์เดียวกันคนละบรรทัดที่ไม่ทับกันเสมอ",
      "เมื่อทั้งสอง branch แก้ส่วนเดียวกันของไฟล์เดียวกันจน Git รวมอัตโนมัติไม่ได้",
      "เมื่อใช้ git status บ่อยเกินไป",
      "เมื่อมีไฟล์ README.md"
    ],
    "answer": 2,
    "explanation": "Conflict มักเกิดเมื่อมีการแก้ส่วนเดียวกันของไฟล์เดียวกันหรือหนึ่งฝั่งลบอีกฝั่งแก้."
  },
  {
    "id": 46,
    "topic": "Git Branches & Undo",
    "question": "คำสั่ง git checkout <commit-hash> ใช้เพื่ออะไรเป็นหลักในบริบท Undoing Changes",
    "choices": [
      "ลบ commit นั้นออกจากประวัติ",
      "ย้อนกลับไปดูสถานะโค้ดของ commit นั้น",
      "merge commit นั้นเข้ากับ main",
      "push commit นั้นขึ้น remote",
      "สร้าง tag ให้ commit นั้นทันที"
    ],
    "answer": 1,
    "explanation": "git checkout hash ใช้เปิดดูโค้ดในอดีต ไม่ได้ลบประวัติ commit นั้น."
  },
  {
    "id": 47,
    "topic": "Git Branches & Undo",
    "question": "Detached HEAD หมายถึงอะไร",
    "choices": [
      "อยู่ในสถานะที่ HEAD ชี้ไปยัง commit โดยตรง ไม่ได้ชี้ชื่อ branch",
      "GitHub หลุดการเชื่อมต่อ",
      "remote branch ถูกลบ",
      "ไฟล์ใน staging area หายทั้งหมด",
      "branch หลักถูก rename"
    ],
    "answer": 0,
    "explanation": "Detached HEAD คือสถานะที่เรา checkout ไปยัง commit ตรงๆ ไม่ได้อยู่บน branch ปกติ."
  },
  {
    "id": 48,
    "topic": "Git Branches & Undo",
    "question": "คำสั่ง git restore file.py โดยทั่วไปใช้ทำอะไร",
    "choices": [
      "ลบ file.py ออกจาก repo ถาวร",
      "ดึง file.py กลับจาก remote",
      "คืนไฟล์ใน working directory ให้กลับไปเหมือนสถานะล่าสุดที่ commit ไว้",
      "ย้าย file.py ไป staging",
      "สร้าง branch ใหม่ชื่อ file.py"
    ],
    "answer": 2,
    "explanation": "git restore ใช้ทิ้งการแก้ไขใน working directory และคืนไฟล์ไปสภาพของ HEAD โดยทั่วไป."
  },
  {
    "id": 49,
    "topic": "Git Branches & Undo",
    "question": "คำสั่ง git restore --staged file.py ใช้ทำอะไร",
    "choices": [
      "ลบไฟล์ออกจาก working directory",
      "ดึงไฟล์ออกจาก staging area แต่คงเนื้อหาที่แก้ไว้ใน working directory",
      "คืนไฟล์ไป remote version",
      "ลบ commit ล่าสุดที่เกี่ยวข้องกับ file.py",
      "รวมทุก branch ที่มี file.py"
    ],
    "answer": 1,
    "explanation": "--staged ใช้ unstage ไฟล์ที่ add ผิด โดยไม่ทำให้เนื้อหาในไฟล์หาย."
  },
  {
    "id": 50,
    "topic": "Git Branches & Undo",
    "question": "คำสั่ง git restore --source HEAD~2 file.py หมายถึงอะไร",
    "choices": [
      "ลบสองบรรทัดแรกของไฟล์",
      "ดึงไฟล์จาก remote ชื่อ HEAD~2",
      "คืน file.py ให้เหมือนสถานะเมื่อ 2 commits ก่อนหน้า",
      "สร้าง branch ใหม่ชื่อ HEAD~2",
      "push file.py ไปยัง commit ที่สอง"
    ],
    "answer": 2,
    "explanation": "--source HEAD~2 ใช้เลือกแหล่งต้นทางเป็น commit ก่อนหน้าสองจุด."
  },
  {
    "id": 51,
    "topic": "Git Branches & Undo",
    "question": "ข้อใดอธิบาย git reset แบบธรรมดาได้ถูกต้องกว่า --hard",
    "choices": [
      "ลบทั้งประวัติและไฟล์ใน working directory เสมอ",
      "ย้าย branch pointer ย้อนกลับ แต่เก็บการเปลี่ยนแปลงของไฟล์ไว้ให้แก้ต่อได้",
      "เหมือน git restore ทุกอย่าง",
      "ใช้ได้เฉพาะกับ remote branch",
      "ไม่กระทบ commit history"
    ],
    "answer": 1,
    "explanation": "git reset แบบ default จะย้าย pointer กลับ แต่ไม่ทำลายเนื้อหาไฟล์ใน working directory ทั้งหมดแบบ --hard."
  },
  {
    "id": 52,
    "topic": "Git Branches & Undo",
    "question": "ข้อใดคือความแตกต่างสำคัญที่สุดของ git reset --hard",
    "choices": [
      "ปลอดภัยกว่า git reset แบบธรรมดา",
      "ลบเฉพาะ remote repo",
      "ย้าย pointer และทิ้งการเปลี่ยนแปลงในไฟล์ให้กลับไปเหมือน commit เป้าหมาย",
      "ทำงานเหมือน git fetch",
      "ใช้เปลี่ยนชื่อ branch"
    ],
    "answer": 2,
    "explanation": "--hard รุนแรงกว่า เพราะทำให้ทั้งประวัติที่ถอยกลับและไฟล์ใน working directory/index กลับไปตาม commit เป้าหมาย."
  },
  {
    "id": 53,
    "topic": "Git Branches & Undo",
    "question": "ถ้าอยากแค่ดูโค้ดเก่าโดยไม่กระทบ history ควรเลือกอะไรเหมาะสุด",
    "choices": [
      "git reset --hard",
      "git checkout <hash>",
      "git branch -D",
      "git push -f",
      "git remote -v"
    ],
    "answer": 1,
    "explanation": "ถ้าต้องการเพียงดูโค้ดเก่า ใช้ checkout ไปยัง commit ได้ โดยไม่ลบ history."
  },
  {
    "id": 54,
    "topic": "Git Branches & Undo",
    "question": "ถ้าเผลอ git add ไฟล์ทดลองที่ยังไม่อยาก commit ควรใช้คำสั่งใดเหมาะที่สุด",
    "choices": [
      "git reset --hard",
      "git restore --staged <file>",
      "git checkout <file>",
      "git merge <file>",
      "git branch -d <file>"
    ],
    "answer": 1,
    "explanation": "สถานการณ์นี้ต้องการเอาไฟล์ออกจาก staging area แต่ยังเก็บเนื้อหาที่แก้ไว้ จึงเหมาะกับ restore --staged."
  },
  {
    "id": 55,
    "topic": "MLflow Tracking",
    "question": "MLflow ถูกสร้างมาเพื่อช่วยแก้ปัญหาอะไรเด่นที่สุด",
    "choices": [
      "Network latency ใน Docker",
      "ความวุ่นวายในการทดลอง ML และการทำซ้ำผลลัพธ์",
      "การ merge branch ของ Git",
      "การแปลภาษาด้วย LLM",
      "การเปิด port บน GCP"
    ],
    "answer": 1,
    "explanation": "MLflow เด่นเรื่องจัดการ experiment tracking, reproducibility และ collaboration ในงาน ML."
  },
  {
    "id": 56,
    "topic": "MLflow Tracking",
    "question": "ข้อใดไม่ใช่ 4 องค์ประกอบหลักของ MLflow",
    "choices": [
      "Tracking",
      "Projects",
      "Models",
      "Registry",
      "Checkout"
    ],
    "answer": 4,
    "explanation": "องค์ประกอบหลักคือ Tracking, Projects, Models และ Registry; Checkout เป็นคำสั่งของ Git."
  },
  {
    "id": 57,
    "topic": "MLflow Tracking",
    "question": "MLflow Tracking มีหน้าที่หลักอะไร",
    "choices": [
      "ควบคุม version ของ source code",
      "บันทึกการทดลอง ML เช่น parameters, metrics, artifacts",
      "รัน container orchestration",
      "สร้าง cloud VM",
      "แปลข้อความอัตโนมัติ"
    ],
    "answer": 1,
    "explanation": "Tracking ใช้เก็บรายละเอียดของการทดลอง ML อย่างเป็นระบบ."
  },
  {
    "id": 58,
    "topic": "MLflow Tracking",
    "question": "Experiment ใน MLflow เปรียบได้ใกล้เคียงกับอะไร",
    "choices": [
      "ไฟล์โมเดลหนึ่งไฟล์",
      "แฟ้มหรือโฟลเดอร์ใหญ่ที่รวมหลาย runs ที่เกี่ยวข้องกัน",
      "ค่าพารามิเตอร์ตัวเดียว",
      "remote repository",
      "Docker image"
    ],
    "answer": 1,
    "explanation": "Experiment ใช้เป็นกลุ่มของหลายการทดลอง (runs) ที่เกี่ยวข้องกัน."
  },
  {
    "id": 59,
    "topic": "MLflow Tracking",
    "question": "Run ใน MLflow หมายถึงอะไร",
    "choices": [
      "การเปิด browser ดู UI หนึ่งครั้ง",
      "การเทรนหรือทดลองหนึ่งรอบภายใต้ experiment",
      "การสร้าง branch ใหม่",
      "การ deploy model ขึ้น production",
      "การ push code ไป GitHub"
    ],
    "answer": 1,
    "explanation": "หนึ่ง run มักเท่ากับหนึ่งครั้งของการรันโค้ดทดลองหรือ train model."
  },
  {
    "id": 60,
    "topic": "MLflow Tracking",
    "question": "ข้อใดอธิบาย Parameters ใน MLflow ได้ถูกต้อง",
    "choices": [
      "ผลลัพธ์ที่วัดได้หลังการทดลอง",
      "ไฟล์ที่ได้จากการทดลอง",
      "ค่าตั้งต้นหรือค่าที่ป้อนเข้าก่อนเริ่มรัน มักเป็นค่าคงที่ของ run",
      "ชื่อผู้พัฒนา",
      "URL ของ artifact store"
    ],
    "answer": 2,
    "explanation": "Parameters คือ input settings เช่น learning_rate, epochs ซึ่งโดยทั่วไปเป็นค่าคงที่ของ run นั้น."
  },
  {
    "id": 61,
    "topic": "MLflow Tracking",
    "question": "ข้อใดอธิบาย Metrics ใน MLflow ได้ถูกต้อง",
    "choices": [
      "ค่าที่ตั้งก่อนเริ่มเทรนและไม่เปลี่ยน",
      "ผลลัพธ์ที่วัดได้ระหว่างหรือหลังการทดลอง เช่น accuracy, loss",
      "ไฟล์โมเดลที่เซฟไว้",
      "ชื่อ experiment",
      "Docker tag ของ image"
    ],
    "answer": 1,
    "explanation": "Metrics คือค่าที่ใช้วัดผล เช่น accuracy, loss และอาจเปลี่ยนตาม step ได้."
  },
  {
    "id": 62,
    "topic": "MLflow Tracking",
    "question": "Artifacts ใน MLflow คืออะไร",
    "choices": [
      "ค่าพารามิเตอร์ที่เก็บในฐานข้อมูล",
      "ไฟล์ที่เกิดจากการทดลอง เช่น model.pkl, confusion_matrix.png",
      "branch บน remote",
      "URL ของ tracking server",
      "คำสั่งใน Dockerfile"
    ],
    "answer": 1,
    "explanation": "Artifacts คือไฟล์ต่างๆ ที่ได้จาก run เช่น models, plots, csv."
  },
  {
    "id": 63,
    "topic": "MLflow Tracking",
    "question": "Tags ใน MLflow ใช้ทำอะไรเป็นหลัก",
    "choices": [
      "เก็บไฟล์โมเดลขนาดใหญ่",
      "เก็บ metadata เพื่อช่วยจัดกลุ่มและค้นหา runs",
      "ใช้แทน metrics ทุกชนิด",
      "ใช้รัน JupyterLab",
      "บังคับ rollback model"
    ],
    "answer": 1,
    "explanation": "Tags ใช้เก็บ metadata เช่น developer, environment เพื่อช่วยค้นหาและจัดการ runs."
  },
  {
    "id": 64,
    "topic": "MLflow Tracking",
    "question": "Backend Store ของ MLflow มักเก็บข้อมูลประเภทใด",
    "choices": [
      "ไฟล์โมเดลขนาดใหญ่ทั้งหมด",
      "parameters, metrics, tags และ metadata",
      "Docker images",
      "เฉพาะรูปภาพตัวอย่าง dataset",
      "เฉพาะ source code"
    ],
    "answer": 1,
    "explanation": "Backend store เหมาะกับ metadata และข้อมูลตัวเลข/ข้อความที่ค้นหาได้เร็ว เช่น บน SQLite หรือ PostgreSQL."
  },
  {
    "id": 65,
    "topic": "MLflow Tracking",
    "question": "Artifact Store ของ MLflow มักเก็บอะไร",
    "choices": [
      "เฉพาะชื่อ experiment",
      "เฉพาะ run id",
      "ไฟล์จริง เช่น โมเดล รูปภาพ กราฟ และ CSV",
      "เฉพาะ URL ของ remote tracking",
      "เฉพาะค่า loss ล่าสุด"
    ],
    "answer": 2,
    "explanation": "Artifact store ใช้เก็บไฟล์จริงที่มีขนาดใหญ่หรือเป็น binary."
  },
  {
    "id": 66,
    "topic": "MLflow Tracking",
    "question": "คำสั่ง Python ใดใช้กำหนดที่อยู่ของ MLflow tracking server",
    "choices": [
      "mlflow.set_artifact_uri(...)",
      "mlflow.set_tracking_uri(...)",
      "mlflow.remote_uri(...)",
      "mlflow.start_server(...)",
      "mlflow.set_backend_store(...)"
    ],
    "answer": 1,
    "explanation": "set_tracking_uri ใช้ระบุ address ของ tracking server ที่โค้ดจะส่งข้อมูลไป."
  },
  {
    "id": 67,
    "topic": "MLflow Tracking",
    "question": "ถ้าต้องการเลือกหรือสร้าง experiment ชื่อ my-experiment ควรใช้คำสั่งใด",
    "choices": [
      "mlflow.create_run('my-experiment')",
      "mlflow.log_experiment('my-experiment')",
      "mlflow.set_experiment('my-experiment')",
      "mlflow.use_experiment('my-experiment')",
      "mlflow.start_experiment('my-experiment')"
    ],
    "answer": 2,
    "explanation": "set_experiment จะเลือก experiment เดิมหรือสร้างใหม่ถ้ายังไม่มี."
  },
  {
    "id": 68,
    "topic": "MLflow Tracking",
    "question": "เหตุใดจึงนิยมใช้ with mlflow.start_run():",
    "choices": [
      "เพราะทำให้ทุก metrics เป็น parameters",
      "เพราะจะปิด run ให้อัตโนมัติเมื่อจบบล็อกโค้ด",
      "เพราะใช้ได้เฉพาะกับ Docker",
      "เพราะบังคับ autolog ทุก library",
      "เพราะไม่ต้อง set experiment"
    ],
    "answer": 1,
    "explanation": "Context manager ช่วยเปิด-ปิด run อัตโนมัติ ลดความผิดพลาดจากการลืม end run."
  },
  {
    "id": 69,
    "topic": "MLflow Tracking",
    "question": "คำสั่งใดใช้บันทึกค่าพารามิเตอร์ learning_rate=0.01",
    "choices": [
      "mlflow.log_metric('learning_rate', 0.01)",
      "mlflow.log_param('learning_rate', 0.01)",
      "mlflow.log_artifact('learning_rate', 0.01)",
      "mlflow.set_param('learning_rate', 0.01)",
      "mlflow.add_param('learning_rate', 0.01)"
    ],
    "answer": 1,
    "explanation": "ค่าตั้งต้นต้องใช้ log_param ไม่ใช่ log_metric."
  },
  {
    "id": 70,
    "topic": "MLflow Tracking",
    "question": "คำสั่งใดใช้บันทึก metric accuracy=0.95",
    "choices": [
      "mlflow.log_metric('accuracy', 0.95)",
      "mlflow.log_param('accuracy', 0.95)",
      "mlflow.log_artifact('accuracy', 0.95)",
      "mlflow.set_metric('accuracy', 0.95)",
      "mlflow.add_metric('accuracy', 0.95)"
    ],
    "answer": 0,
    "explanation": "accuracy เป็นผลลัพธ์ที่วัดได้ จึงต้องใช้ log_metric."
  },
  {
    "id": 71,
    "topic": "MLflow Tracking",
    "question": "คำสั่งใดใช้บันทึกไฟล์ model.pkl เป็น artifact",
    "choices": [
      "mlflow.log_model('model.pkl')",
      "mlflow.log_artifact('model.pkl')",
      "mlflow.set_artifact('model.pkl')",
      "mlflow.track_file('model.pkl')",
      "mlflow.push_artifact('model.pkl')"
    ],
    "answer": 1,
    "explanation": "log_artifact ใช้บันทึกไฟล์ไปยัง artifact store."
  },
  {
    "id": 72,
    "topic": "MLflow Tracking",
    "question": "ข้อใดคือประโยชน์ของการใส่ step ตอน log metric",
    "choices": [
      "ทำให้ metric กลายเป็น parameter",
      "ทำให้ MLflow วาดกราฟประวัติของ metric ตามเวลา/epoch ได้",
      "ทำให้ artifact เล็กลง",
      "ทำให้ run ถูก archived",
      "ทำให้ไม่ต้อง set tracking URI"
    ],
    "answer": 1,
    "explanation": "step ทำให้ metric ถูกบันทึกเป็นลำดับ เช่น ตาม epoch จึงดูกราฟแนวโน้มได้."
  },
  {
    "id": 73,
    "topic": "MLflow Tracking",
    "question": "คำสั่ง mlflow.search_runs(...) มักคืนข้อมูลในรูปแบบใด",
    "choices": [
      "Docker container",
      "Git branch",
      "Pandas DataFrame",
      "YAML file",
      "HTML page"
    ],
    "answer": 2,
    "explanation": "search_runs มักคืนข้อมูลเป็น DataFrame ทำให้กรอง/เรียง/วิเคราะห์ต่อได้ง่าย."
  },
  {
    "id": 74,
    "topic": "MLflow Tracking",
    "question": "Autologging ของ MLflow มีประโยชน์เด่นอย่างไร",
    "choices": [
      "ลบความจำเป็นของ tracking server",
      "ช่วยบันทึก parameters/metrics/model บางส่วนอัตโนมัติตาม library ที่ใช้",
      "ทำให้ไม่ต้องมี experiment",
      "ใช้แทน model registry",
      "ทำให้ผลลัพธ์ model ดีขึ้นโดยตรง"
    ],
    "answer": 1,
    "explanation": "Autologging ช่วยลดโค้ดมือและบันทึกข้อมูลสำคัญอัตโนมัติเมื่อใช้ library ที่รองรับ."
  },
  {
    "id": 75,
    "topic": "MLflow Tracking",
    "question": "ใน lab ที่ใช้ทั้ง JupyterLab และ MLflow UI มักแยกพอร์ตเพราะเหตุใด",
    "choices": [
      "เพื่อให้เครื่องเร็วขึ้นเสมอ",
      "เพราะสองบริการเป็นคนละบริการและต้องมี endpoint แยกกัน",
      "เพราะพอร์ตเดียวใช้กับ Linux ไม่ได้",
      "เพื่อบังคับให้ใช้ Docker Hub",
      "เพื่อกัน Git conflict"
    ],
    "answer": 1,
    "explanation": "JupyterLab และ MLflow UI เป็นคนละ service จึงนิยมใช้คนละพอร์ต."
  },
  {
    "id": 76,
    "topic": "MLflow Tracking",
    "question": "ข้อใดคือความหมายของ Reproducibility ในบริบท MLflow",
    "choices": [
      "ทำให้ model เล็กลง",
      "สามารถทำการทดลองซ้ำแล้วได้ผลลัพธ์ใกล้เคียง/เหมือนเดิมเพราะรู้การตั้งค่าและบริบทครบ",
      "เปลี่ยน model version ได้เร็ว",
      "บังคับให้ทุกคนใช้ cloud เท่านั้น",
      "ลดค่าใช้จ่าย GPU เสมอ"
    ],
    "answer": 1,
    "explanation": "MLflow ช่วยให้ทดลองซ้ำได้เพราะมีข้อมูลการตั้งค่าและผลลัพธ์ถูกบันทึกไว้อย่างเป็นระบบ."
  },
  {
    "id": 77,
    "topic": "MLflow Tracking",
    "question": "ใน production จริง Backend Store มักนิยมใช้อะไรมากกว่า SQLite",
    "choices": [
      "Notepad",
      "PostgreSQL หรือ MySQL",
      "PNG",
      "Excel",
      "Dockerfile"
    ],
    "answer": 1,
    "explanation": "ระบบ production มักใช้ฐานข้อมูลที่รองรับ concurrent access และ scale ดีกว่า เช่น PostgreSQL/MySQL."
  },
  {
    "id": 78,
    "topic": "MLflow Tracking",
    "question": "หากหลายทีมต้องการเห็นผลการทดลองร่วมกัน ควรใช้แนวคิดใด",
    "choices": [
      "Local-only tracking",
      "Remote tracking server ร่วมกัน",
      "Detached HEAD",
      "Fast-forward merge",
      "CMD override"
    ],
    "answer": 1,
    "explanation": "Remote tracking server ทำให้ทุกทีม log และดูผลจากศูนย์กลางเดียวกันได้."
  },
  {
    "id": 79,
    "topic": "MLflow Tracking",
    "question": "ข้อใดจับคู่ถูกต้อง",
    "choices": [
      "Parameter = accuracy, Metric = learning rate",
      "Parameter = epochs, Metric = loss",
      "Artifact = run name, Tag = model.pkl",
      "Backend store = PNG files, Artifact store = SQL",
      "Experiment = step, Run = Docker image"
    ],
    "answer": 1,
    "explanation": "epochs เป็นค่าตั้งต้นจึงเป็น parameter ส่วน loss เป็นผลวัดระหว่างเทรนจึงเป็น metric."
  },
  {
    "id": 80,
    "topic": "Model Registry & Dataset Versioning",
    "question": "Model Registry มีบทบาทเด่นที่สุดข้อใด",
    "choices": [
      "ใช้แทน Git ในการ version source code",
      "เป็นศูนย์กลางจัดการเวอร์ชันของโมเดลและสถานะการใช้งาน",
      "ใช้วาดกราฟ training loss เท่านั้น",
      "ใช้ build Docker image",
      "ใช้สร้าง VM บน GCP"
    ],
    "answer": 1,
    "explanation": "Registry คือระบบจัดการเวอร์ชันโมเดลอย่างเป็นระบบ เช่น register, promote, rollback."
  },
  {
    "id": 81,
    "topic": "Model Registry & Dataset Versioning",
    "question": "Registered Model ใน MLflow คืออะไร",
    "choices": [
      "ค่าความแม่นยำสูงสุดของโมเดล",
      "ชื่อหลักของโมเดลที่มีหลายเวอร์ชันอยู่ภายใต้ชื่อเดียวกัน",
      "ไฟล์ .pkl ไฟล์เดียว",
      "stage Production เท่านั้น",
      "alias ของ dataset"
    ],
    "answer": 1,
    "explanation": "Registered Model คือชื่อหลัก เช่น fraud-detector ที่สามารถมี version หลายตัว."
  },
  {
    "id": 82,
    "topic": "Model Registry & Dataset Versioning",
    "question": "Model Version คืออะไร",
    "choices": [
      "ชื่อ experiment",
      "หนึ่งเวอร์ชันของโมเดลที่เชื่อมโยงกับ run/artifacts เฉพาะ",
      "database backend",
      "branch ของ Git",
      "port ของ server"
    ],
    "answer": 1,
    "explanation": "แต่ละ version คือโมเดลคนละรุ่นที่มักอ้างอิงกลับไปยัง run ใน tracking ได้."
  },
  {
    "id": 83,
    "topic": "Model Registry & Dataset Versioning",
    "question": "ระบบ Stages แบบเก่าของ MLflow มีข้อจำกัดอย่างไร",
    "choices": [
      "ไม่มีสถานะ Production",
      "หนึ่งเวอร์ชันผูกได้หลาย stage ไม่จำกัด",
      "ชื่อป้ายตายตัวและยืดหยุ่นน้อยกว่า aliases",
      "ใช้โหลดโมเดลไม่ได้",
      "ไม่มี UI"
    ],
    "answer": 2,
    "explanation": "Stages มีชื่อป้ายจำกัดเช่น None/Staging/Production/Archived จึงยืดหยุ่นน้อยกว่า alias."
  },
  {
    "id": 84,
    "topic": "Model Registry & Dataset Versioning",
    "question": "ข้อใดอธิบาย Model Alias ได้ถูกต้อง",
    "choices": [
      "เป็นชื่อ branch ของ Git",
      "เป็นนามแฝงที่ตั้งเองได้ เช่น @champion, @challenger และย้ายไปผูกกับเวอร์ชันต่างๆ ได้",
      "เป็นชนิดของ metric",
      "เป็น run id แบบใหม่",
      "ใช้ได้เฉพาะกับ Docker registry"
    ],
    "answer": 1,
    "explanation": "Alias ช่วยเรียกโมเดลเชิงธุรกิจได้ยืดหยุ่น เช่น champion/challenger โดยไม่ hardcode version."
  },
  {
    "id": 85,
    "topic": "Model Registry & Dataset Versioning",
    "question": "ถ้าระบบ production ต้องโหลดโมเดลที่พร้อมใช้งานล่าสุด ควรอ้างอิงแบบใดเหมาะสุด",
    "choices": [
      "runs:/latest/model",
      "models:/fraud-model@champion",
      "git://fraud-model/main",
      "docker://fraud-model:latest",
      "http://localhost/model.pkl"
    ],
    "answer": 1,
    "explanation": "การอ้างผ่าน alias เช่น @champion เหมาะกับ production เพราะสลับเวอร์ชันได้โดยไม่แก้โค้ดผู้เรียก."
  },
  {
    "id": 86,
    "topic": "Model Registry & Dataset Versioning",
    "question": "ข้อดีสำคัญของการใช้ alias แทนการ hardcode version คืออะไร",
    "choices": [
      "โมเดลแม่นขึ้นอัตโนมัติ",
      "เปลี่ยนเวอร์ชันจริงได้โดยไม่ต้องแก้โค้ดที่โหลดโมเดล",
      "ทำให้ artifact store หายไป",
      "ไม่ต้องมี tracking",
      "ไม่ต้องมี run id"
    ],
    "answer": 1,
    "explanation": "Alias ช่วย decouple โค้ดผู้ใช้จากเลขเวอร์ชันจริง ทำให้ promote/rollback ง่าย."
  },
  {
    "id": 87,
    "topic": "Model Registry & Dataset Versioning",
    "question": "การ Register model จาก run ภายหลัง เหมาะกับกรณีใด",
    "choices": [
      "เมื่ออยากเก็บทุก run เข้า registry ทันทีโดยไม่คัดเลือก",
      "เมื่อทดลองหลาย run แล้วคัด run ที่ดีที่สุดค่อยนำมาลงทะเบียน",
      "เมื่อไม่มี tracking server",
      "เมื่อใช้ GitHub Actions เท่านั้น",
      "เมื่อไม่มี model artifact"
    ],
    "answer": 1,
    "explanation": "รูปแบบนี้เหมาะเมื่อมีหลายการทดลองและต้องการเลือกเฉพาะตัวที่ดีที่สุดเข้าคลัง."
  },
  {
    "id": 88,
    "topic": "Model Registry & Dataset Versioning",
    "question": "Dataset Versioning คืออะไร",
    "choices": [
      "การแปลง dataset เป็น Docker image",
      "การติดตามเวอร์ชันและการเปลี่ยนแปลงของข้อมูลอย่างเป็นระบบ",
      "การแปลง dataset เป็น metric",
      "การตั้งชื่อ branch ตาม dataset",
      "การอัปโหลด dataset ขึ้น GitHub อย่างเดียว"
    ],
    "answer": 1,
    "explanation": "Dataset Versioning ช่วยรู้ว่าข้อมูลชุดไหนถูกใช้ train/validate และย้อนกลับได้."
  },
  {
    "id": 89,
    "topic": "Model Registry & Dataset Versioning",
    "question": "เป้าหมายหลัก 3 อย่างของ dataset versioning คือข้อใด",
    "choices": [
      "Compression, Encryption, Styling",
      "Traceability, Reproducibility, Rollback",
      "Merge, Rebase, Cherry-pick",
      "Accuracy, Precision, Recall",
      "Build, Run, Push"
    ],
    "answer": 1,
    "explanation": "การทำเวอร์ชันข้อมูลช่วยตามรอย ทำซ้ำ และย้อนกลับสู่ข้อมูลเก่าได้."
  },
  {
    "id": 90,
    "topic": "Model Registry & Dataset Versioning",
    "question": "ข้อใดอธิบาย Semantic Versioning กับ dataset ได้เหมาะสม",
    "choices": [
      "ใช้กับข้อมูลไม่ได้ ใช้กับซอฟต์แวร์เท่านั้น",
      "MAJOR เปลี่ยนเมื่อโครงสร้างข้อมูลเปลี่ยน, MINOR เมื่อเพิ่มข้อมูลแบบเข้ากันได้, PATCH เมื่อแก้เล็กน้อย",
      "MAJOR ใช้ทุกครั้งที่เพิ่ม 1 แถว",
      "PATCH ใช้เฉพาะเมื่อเปลี่ยนไฟล์เป็นภาพ",
      "MINOR ใช้แทน hash เสมอ"
    ],
    "answer": 1,
    "explanation": "Semantic Versioning ใช้กับ dataset ได้โดยตีความระดับการเปลี่ยนแปลงของ schema/ข้อมูล."
  },
  {
    "id": 91,
    "topic": "Model Registry & Dataset Versioning",
    "question": "ถ้า dataset เดิมเพิ่มคอลัมน์ใหม่ที่ทำให้ schema เปลี่ยนอย่างมีนัยสำคัญ ควรขยับเวอร์ชันแบบใดตาม semantic versioning",
    "choices": [
      "เพิ่ม PATCH",
      "เพิ่ม MINOR",
      "เพิ่ม MAJOR",
      "ไม่ต้องเปลี่ยนเวอร์ชัน",
      "เปลี่ยนเป็น alias แทน"
    ],
    "answer": 2,
    "explanation": "การเปลี่ยน schema สำคัญถือเป็น breaking change จึงควรเพิ่ม MAJOR."
  },
  {
    "id": 92,
    "topic": "Model Registry & Dataset Versioning",
    "question": "ถ้าเพียงเพิ่มแถวข้อมูลใหม่โดย schema เดิมยังใช้ได้ ควรขยับเวอร์ชันแบบใด",
    "choices": [
      "MAJOR",
      "MINOR",
      "PATCH",
      "Archived",
      "Champion"
    ],
    "answer": 1,
    "explanation": "การเพิ่มข้อมูลโดยยังเข้ากันได้กับเดิมมักถือเป็น MINOR."
  },
  {
    "id": 93,
    "topic": "Model Registry & Dataset Versioning",
    "question": "ถ้าแก้ typo เล็กน้อยในค่าบางแถวโดยไม่เปลี่ยนโครงสร้างและความหมายหลัก ควรขยับแบบใด",
    "choices": [
      "MAJOR",
      "MINOR",
      "PATCH",
      "Production",
      "Alias"
    ],
    "answer": 2,
    "explanation": "การแก้เล็กน้อยไม่กระทบ schema หรือ logic มักเป็น PATCH."
  },
  {
    "id": 94,
    "topic": "Model Registry & Dataset Versioning",
    "question": "Date-based versioning เหมาะมากกับกรณีใด",
    "choices": [
      "dataset ที่ update เป็น snapshot รายวัน/รายเวลา",
      "dataset ที่ต้องการตรวจ byte-level integrity เท่านั้น",
      "model registry",
      "branch naming ใน Git",
      "Docker CMD"
    ],
    "answer": 0,
    "explanation": "เวอร์ชันตามวันที่เหมาะกับข้อมูลที่เก็บ snapshot ตามรอบเวลา เช่น ทุกวัน."
  },
  {
    "id": 95,
    "topic": "Model Registry & Dataset Versioning",
    "question": "เหตุใด Hash-based versioning จึงถูกมองว่าเป็นมาตรฐานสูงสุด",
    "choices": [
      "เพราะคนอ่านง่ายที่สุด",
      "เพราะผูกกับการเปลี่ยนแปลงเนื้อไฟล์จริง ถ้าไฟล์เปลี่ยนแม้เล็กน้อย hash ก็เปลี่ยน",
      "เพราะไม่ต้องคำนวณอะไร",
      "เพราะใช้แทน MLflow ได้ทั้งหมด",
      "เพราะบอกความหมายเชิงธุรกิจชัดกว่าทุกแบบ"
    ],
    "answer": 1,
    "explanation": "Hash-based versioning แม่นยำและอัตโนมัติ เพราะอิงกับเนื้อไฟล์จริงและตรวจ integrity ได้ดีมาก."
  },
  {
    "id": 96,
    "topic": "Model Registry & Dataset Versioning",
    "question": "ถ้าไฟล์ข้อมูลเปลี่ยนไปเพียง 1 byte โดยใช้ hash-based versioning จะเกิดอะไรขึ้นตามหลักการ",
    "choices": [
      "hash มักไม่เปลี่ยน",
      "เฉพาะชื่อไฟล์เปลี่ยน",
      "hash จะเปลี่ยนไป ทำให้ตรวจพบว่าชุดข้อมูลไม่เหมือนเดิม",
      "ต้องรอให้เปลี่ยน 1 MB ก่อน",
      "Git เท่านั้นที่ตรวจพบ"
    ],
    "answer": 2,
    "explanation": "Hash function ออกแบบให้ข้อมูลเปลี่ยนเพียงเล็กน้อยก็ให้ fingerprint ใหม่."
  },
  {
    "id": 97,
    "topic": "Model Registry & Dataset Versioning",
    "question": "การเก็บค่า hash ของ dataset ลง MLflow มีประโยชน์อะไร",
    "choices": [
      "ทำให้ dataset เล็กลง",
      "ช่วยตรวจ integrity และตามรอยว่าชุดข้อมูลที่ใช้จริงตรงกับที่บันทึกหรือไม่",
      "ใช้แทน artifact store",
      "ทำให้ metrics สูงขึ้น",
      "ไม่ต้องใช้ version naming"
    ],
    "answer": 1,
    "explanation": "hash ช่วยตรวจว่าข้อมูลถูกแก้ไขหรือเสียหายหรือไม่เมื่อเทียบกับเวอร์ชันที่เคยบันทึก."
  },
  {
    "id": 98,
    "topic": "Model Registry & Dataset Versioning",
    "question": "สำหรับข้อมูลภาพจำนวนมาก ข้อใดเหมาะสมที่สุดในการทำ tracking",
    "choices": [
      "เก็บ pixel ของทุกรูปเป็น parameters",
      "เก็บ metadata เช่น จำนวนรูป ขนาดภาพ class distribution และ sample images เป็น artifacts",
      "ไม่ต้อง track อะไรเพราะเป็นไฟล์ใหญ่",
      "เก็บชื่อไฟล์เพียง 1 ไฟล์",
      "แปลงรูปทั้งหมดเป็น commit message"
    ],
    "answer": 1,
    "explanation": "ข้อมูลภาพเป็น unstructured และใหญ่ จึงเหมาะกับการเก็บ metadata + ตัวอย่างภาพ ไม่ใช่ raw pixel ทั้งหมด."
  },
  {
    "id": 99,
    "topic": "Model Registry & Dataset Versioning",
    "question": "ตัวอย่าง metadata schema ที่ดีสำหรับ image dataset ควรมีอะไรบ้าง",
    "choices": [
      "จำนวนรูป, image size, class distribution, source URI/hash, sample previews",
      "เฉพาะชื่อผู้สอน",
      "เฉพาะ loss curve",
      "เฉพาะ run id และ branch name",
      "เฉพาะ Docker port"
    ],
    "answer": 0,
    "explanation": "Schema ที่ดีควรบอกบริบทข้อมูลภาพ เช่น จำนวนรูป ขนาด สัดส่วนคลาส ที่มา และตัวอย่าง."
  },
  {
    "id": 100,
    "topic": "Model Registry & Dataset Versioning",
    "question": "สำหรับข้อมูลตาราง (CSV/Tabular) ควรบันทึกอะไรเพื่อช่วยติดตาม drift และคุณภาพข้อมูล",
    "choices": [
      "num_rows, num_columns, missing values, summary statistics",
      "เฉพาะชื่อไฟล์",
      "เฉพาะ hash ของ code",
      "เฉพาะ Docker image",
      "เฉพาะ alias @champion"
    ],
    "answer": 0,
    "explanation": "ข้อมูลตารางควรติดตามสถิติที่ช่วยเห็นความต่างของข้อมูลแต่ละเวอร์ชัน."
  },
  {
    "id": 101,
    "topic": "Model Registry & Dataset Versioning",
    "question": "Data Lineage หมายถึงอะไร",
    "choices": [
      "การจัด layout ของ dashboard",
      "การตามรอยที่มาที่ไปของข้อมูลและความสัมพันธ์กับโมเดล/การแปลงต่างๆ",
      "การสร้าง branch ย่อยหลายอัน",
      "การแปลง text เป็น image",
      "การตั้งค่า temperature"
    ],
    "answer": 1,
    "explanation": "Lineage ทำให้รู้ว่าโมเดลนี้มาจากข้อมูลเวอร์ชันไหน ผ่าน pipeline อะไรมาบ้าง."
  },
  {
    "id": 102,
    "topic": "Model Registry & Dataset Versioning",
    "question": "ประโยชน์สำคัญของ Lineage เมื่อโมเดล production ทำงานแย่ลงคืออะไร",
    "choices": [
      "ช่วยเพิ่ม accuracy อัตโนมัติ",
      "ช่วยสืบย้อนหาว่าใช้ข้อมูลเวอร์ชันไหนหรือ pipeline ขั้นตอนไหนเป็นต้นเหตุ",
      "ช่วยเปิด Docker container ใหม่",
      "ช่วย rename branch",
      "ช่วยตั้ง prompt ให้ดีขึ้น"
    ],
    "answer": 1,
    "explanation": "เมื่อ model fail เราสามารถตามกลับไปยัง dataset/version/pipeline ที่เกี่ยวข้องเพื่อหา root cause."
  },
  {
    "id": 103,
    "topic": "Model Registry & Dataset Versioning",
    "question": "แนวคิด Immutability ใน dataset versioning คืออะไร",
    "choices": [
      "ลบข้อมูลเก่าทุกครั้งที่มีเวอร์ชันใหม่",
      "เมื่อบันทึกเวอร์ชันแล้วไม่ควรแก้ทับเวอร์ชันเดิม แต่สร้างเวอร์ชันใหม่แทน",
      "ใช้ได้เฉพาะภาพไม่ใช้กับ CSV",
      "ต้องเก็บใน Git เท่านั้น",
      "ห้ามมี alias"
    ],
    "answer": 1,
    "explanation": "การไม่แก้ทับเวอร์ชันเดิมช่วยให้ audit, reproducibility และ rollback เชื่อถือได้."
  },
  {
    "id": 104,
    "topic": "Prompt Engineering & GCP",
    "question": "Few-shot Prompting คืออะไร",
    "choices": [
      "การสั่ง AI แบบไม่ให้ตัวอย่างใดๆ",
      "การให้ตัวอย่างอินพุต/เอาต์พุตเพื่อให้ AI จับรูปแบบที่ต้องการ",
      "การใช้ AI หลายตัวโหวต",
      "การให้ AI วิจารณ์ตัวเอง",
      "การแตก branch ของเหตุผล"
    ],
    "answer": 1,
    "explanation": "Few-shot คือการยกตัวอย่างให้โมเดลเห็น pattern ก่อนตอบงานจริง."
  },
  {
    "id": 105,
    "topic": "Prompt Engineering & GCP",
    "question": "Chain-of-Thought เหมาะกับงานประเภทใดมากที่สุด",
    "choices": [
      "งานที่ต้องการแค่ตอบสั้นที่สุดเสมอ",
      "งานที่ต้องใช้เหตุผลเป็นขั้นตอน เช่น คำนวณ วิเคราะห์ ตรรกะ",
      "งาน deploy Docker",
      "งานเก็บ artifact store",
      "งาน rename branch"
    ],
    "answer": 1,
    "explanation": "CoT ช่วยให้โมเดลค่อยๆ ให้เหตุผลทีละขั้น ลดการตอบแบบข้ามขั้นตอน."
  },
  {
    "id": 106,
    "topic": "Prompt Engineering & GCP",
    "question": "Self-Consistency ทำงานอย่างไรโดยสรุป",
    "choices": [
      "ให้ AI ตอบครั้งเดียวแล้วยอมรับทันที",
      "ให้ AI สร้างหลายเส้นทางคำตอบแล้วใช้เสียงข้างมากหรือการรวมผลเลือกคำตอบสุดท้าย",
      "ให้มนุษย์ตรวจทุกครั้งเท่านั้น",
      "เป็นชื่อใหม่ของ few-shot",
      "ใช้บันทึก metrics ใน MLflow"
    ],
    "answer": 1,
    "explanation": "Self-Consistency ใช้หลาย reasoning paths แล้วเลือกคำตอบที่สอดคล้องกันมากที่สุด."
  },
  {
    "id": 107,
    "topic": "Prompt Engineering & GCP",
    "question": "Prompt Chaining เหมาะกับสถานการณ์ใด",
    "choices": [
      "งานซับซ้อนที่ควรแยกเป็นหลายขั้นและนำ output ขั้นก่อนหน้าไปเป็น input ขั้นถัดไป",
      "งานที่ต้องการเพียง token น้อยที่สุด",
      "งานที่ต้องใช้ Git merge",
      "งานที่ไม่มีโครงสร้างเลยและไม่แบ่งย่อย",
      "การเปิด GCP trial"
    ],
    "answer": 0,
    "explanation": "Prompt chaining ช่วยให้โมเดลโฟกัสทีละขั้นในงานใหญ่."
  },
  {
    "id": 108,
    "topic": "Prompt Engineering & GCP",
    "question": "Reflection แตกต่างจากการตอบรอบเดียวอย่างไร",
    "choices": [
      "Reflection คือให้ AI กลับมาอ่านและปรับปรุงคำตอบของตัวเองอีกรอบ",
      "Reflection คือการลบคำตอบเดิมทิ้งทันที",
      "Reflection ใช้เฉพาะข้อมูลภาพ",
      "Reflection คือการ build docker image",
      "Reflection ไม่มีประโยชน์กับงานเขียน"
    ],
    "answer": 0,
    "explanation": "Reflection ช่วยขัดเกลาคำตอบให้ดีขึ้นโดยให้โมเดลตรวจทานตนเอง."
  },
  {
    "id": 109,
    "topic": "Prompt Engineering & GCP",
    "question": "Tree-of-Thought เหมาะกับปัญหาแบบใด",
    "choices": [
      "ปัญหาที่มีทางเลือกเดียวชัดเจนเสมอ",
      "ปัญหาที่ต้องสำรวจหลายทางเลือกหรือหลายแผนก่อนตัดสินใจ",
      "ใช้แทน Git branches",
      "ใช้แทน model registry",
      "ใช้สำหรับเปิด port เท่านั้น"
    ],
    "answer": 1,
    "explanation": "ToT เหมาะกับปัญหาที่ต้องแตกกิ่งของเหตุผลและเปรียบเทียบทางเลือก."
  },
  {
    "id": 110,
    "topic": "Prompt Engineering & GCP",
    "question": "Self-Feedback คืออะไร",
    "choices": [
      "ให้ AI ประเมินผลงานของตัวเองตามเกณฑ์หรือ rubric ที่กำหนด",
      "ให้ผู้ใช้ด่า AI",
      "ให้ AI ตั้ง temperature เอง",
      "ให้ AI rename model",
      "ให้ AI เปลี่ยน dataset schema"
    ],
    "answer": 0,
    "explanation": "Self-Feedback คือการให้โมเดลตรวจผลงานตัวเองตาม rubric ชัดเจน."
  },
  {
    "id": 111,
    "topic": "Prompt Engineering & GCP",
    "question": "Self-Critique เน้นอะไร",
    "choices": [
      "ให้ AI ชมงานตัวเอง",
      "ให้ AI จับผิด วิจารณ์หาจุดอ่อนของคำตอบอย่างเข้มงวด",
      "ให้ AI ลด token เสมอ",
      "ให้ AI สร้าง Docker CMD",
      "ให้ AI push ขึ้น GitHub"
    ],
    "answer": 1,
    "explanation": "Self-Critique คือโหมดตรวจจับข้อบกพร่องแบบจริงจังหรือ adversarial."
  },
  {
    "id": 112,
    "topic": "Prompt Engineering & GCP",
    "question": "BLEU score มักนิยมใช้กับงานใด",
    "choices": [
      "แปลภาษา",
      "จัดการ branch",
      "สร้าง Docker image",
      "เก็บ model registry",
      "เปิด VM"
    ],
    "answer": 0,
    "explanation": "BLEU วัดการทับซ้อนของคำและนิยมใช้ประเมินงาน machine translation."
  },
  {
    "id": 113,
    "topic": "Prompt Engineering & GCP",
    "question": "ROUGE score มักนิยมใช้กับงานใด",
    "choices": [
      "สรุปความ",
      "Docker networking",
      "Git fetch",
      "data hashing",
      "cloud billing"
    ],
    "answer": 0,
    "explanation": "ROUGE นิยมใช้กับงาน summarization เพราะเน้นการครอบคลุมเนื้อหาสำคัญ."
  },
  {
    "id": 114,
    "topic": "Prompt Engineering & GCP",
    "question": "ข้อใดเป็น bias ที่พบได้ใน LLM-as-a-Judge",
    "choices": [
      "Verbosity bias",
      "Position bias",
      "Self-enhancement bias",
      "Sycophancy",
      "ถูกทุกข้อ"
    ],
    "answer": 4,
    "explanation": "Bias เหล่านี้พบได้จริง เช่น ชอบคำตอบยาว ชอบลำดับต้นๆ เข้าข้างตัวเอง หรือเอาใจผู้ใช้."
  },
  {
    "id": 115,
    "topic": "Prompt Engineering & GCP",
    "question": "Sycophancy ในบริบท LLM evaluation หมายถึงอะไร",
    "choices": [
      "ชอบคำตอบที่สั้นเกินไป",
      "ชอบให้คะแนนคำตอบที่สอดคล้องเอาใจผู้ใช้มากกว่าความจริง",
      "ชอบอ้างอิงงานวิจัย",
      "ชอบเฉพาะคำตอบจากมนุษย์",
      "ไม่ยอมใช้ rubric"
    ],
    "answer": 1,
    "explanation": "Sycophancy คือการเออออตามผู้ใช้หรือบริบทมากเกินจนเสียความเป็นกลาง."
  },
  {
    "id": 116,
    "topic": "Prompt Engineering & GCP",
    "question": "Google Cloud Platform (GCP) คืออะไรโดยสรุป",
    "choices": [
      "โปรแกรม local สำหรับเขียน Python",
      "แพลตฟอร์ม cloud สำหรับให้บริการ compute, storage และบริการอื่นๆ ผ่านอินเทอร์เน็ต",
      "ระบบ version control",
      "โมเดลภาษา",
      "private docker registry เท่านั้น"
    ],
    "answer": 1,
    "explanation": "GCP คือชุดบริการคลาวด์ของ Google สำหรับ compute, storage, analytics และอื่นๆ."
  },
  {
    "id": 117,
    "topic": "Prompt Engineering & GCP",
    "question": "Compute Engine บน GCP เปรียบได้ใกล้เคียงกับอะไร",
    "choices": [
      "ฐานข้อมูลภาพ",
      "เครื่องคอมพิวเตอร์เสมือนหรือ VM บนคลาวด์",
      "ระบบ version control",
      "artifact store ในเครื่อง",
      "token สำหรับ GitHub"
    ],
    "answer": 1,
    "explanation": "Compute Engine คือบริการ VM ที่เช่าใช้ได้ตามต้องการบนคลาวด์."
  },
  {
    "id": 118,
    "topic": "Prompt Engineering & GCP",
    "question": "Cloud Storage บน GCP เหมาะกับงานใดมากที่สุดในบริบท MLOps",
    "choices": [
      "เก็บไฟล์โมเดล ข้อมูล และ artifacts ขนาดใหญ่",
      "แก้ merge conflicts",
      "ทำ few-shot prompting",
      "สร้าง git commits",
      "ใช้แทน Jupyter"
    ],
    "answer": 0,
    "explanation": "Cloud Storage เหมาะกับการเก็บไฟล์และ object ขนาดใหญ่ เช่น model artifacts, datasets."
  },
  {
    "id": 119,
    "topic": "Prompt Engineering & GCP",
    "question": "BigQuery บน GCP เด่นเรื่องใด",
    "choices": [
      "เป็นระบบคลังข้อมูลสำหรับวิเคราะห์ข้อมูลขนาดใหญ่ด้วย SQL",
      "เป็นเครื่องมือสร้าง Dockerfile",
      "เป็นระบบ branch management",
      "เป็น LLM-as-a-Judge",
      "เป็น UI ของ MLflow"
    ],
    "answer": 0,
    "explanation": "BigQuery เป็น analytics data warehouse สำหรับ query ข้อมูลขนาดใหญ่มากด้วย SQL."
  },
  {
    "id": 120,
    "topic": "Prompt Engineering & GCP",
    "question": "GKE หรือ Google Kubernetes Engine เหมาะกับสถานการณ์ใด",
    "choices": [
      "เมื่อต้องจัดการและสเกล container จำนวนมากอย่างอัตโนมัติ",
      "เมื่อต้องแก้ไฟล์ .gitignore",
      "เมื่อต้องการแปลภาษา",
      "เมื่อต้องการเก็บ parameters",
      "เมื่อต้องการ rename dataset version"
    ],
    "answer": 0,
    "explanation": "GKE ช่วย orchestrate และ scale container clusters อัตโนมัติ เหมาะกับระบบ production ขนาดใหญ่."
  }
];