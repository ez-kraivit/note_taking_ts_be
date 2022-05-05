### 🟢 Description (อธิบายเหตุผล)
❗เหตุผลทำไมถึงใช้ Hapi แทนการใช้ Express

### - Hapi
- ✔️ การอ่าน Route ค่อนข้างง่าย 
- ✔️ รองรับการ Request Life Cycle 
- ✔️ รองรับการเขียน OOP
- ✔️ สามารถต่อยอดกับ Framework fastify (Hapi เป็นต้นแบบ)
- ✔️ ยืดหยุ่น ปรับแต่งองค์ประกอบได้
- ✔️ รองรับการทำ Socket and Stream Video
- ✔️ tutorial อ่านง่ายและมีตัวอย่าง
- ✔️ สามารถแตกเป็น Microservice ได้ในอนาคต
- ✔️ Payload ค่อนข้างจัดการง่ายและแยกเป็นส่วน
- ❌ ซับซ้อนน้อยกว่า LoopBack 
- ❌ เหมาะสำหรับ BackEnd ที่มีพื้นฐาน NodeJS

---
### How to Use Dictionary -> src
|Folder|Note|Auth Import|
|-|-|-|
|controllers|ส่วนประกอบของ จัดการ Business|ไม่ต้อง Import Route|
|interFace|ส่วนประกอบของ Type & Interface|ไม่มี|
|migration|ส่วนประกอบของ Entity Table Database|ไม่มี|
|plugins|ส่วนประกอบของ Library TypeScript ปลั๊กอินกลาง|ไม่มี|
|repository|ส่วนประกอบของ Controller Database |ไม่มี|
|routers|ส่วนประกอบของ เส้นทาง Route , Method|ไม่ต้อง Import Controllers|
|validations|ส่วนประกอบของ payload , query , parame ดักจับ HTTP|ไม่มี|

### How to Use hapiRegister.ts
เป็นส่วนประกอบการทำ Plugins Hapi ซึ่งฟังก์ชั่นนี้จะดักจับข้อมูลทั้งหมด นำมาเป็น Register Hapi (สามารถต่อยอดกับการผสมผสาน Library ที่ต้องการขึ้นเป็น Plugins เช่น JWT)

### How to Use server.ts
เป็นส่วนประกอบของการตั้งค่า hapi ทั้งหมด สามารถแก้ไข Port , Cors บรรทัด 14-15 ได้ สามารถออกแบบต่อยอดร่วมกับ Webhook Event ลงใน Line , Discord , Slack ได้

---
### Install Eslint
```
    npm install eslint --save-dev
    npm init @eslint/config
        -  How would you like to use ESLint? : To check syntax, find problems , and enforce code style
        -  What type of modules does your project use? : JavaScript
        -  Which framework does your project use? : None of these
        -  Does your project use TypeScript? : Yes
        -  Where does your code run? : Node
        -  How would you like to define a style for your project? : Use a popular style guide
        -  Which style guide do you want to follow? : google
        -  What format do you want your config file to be in? : JSON
        -  Would you like to install them now? : Yes
        -  Which package manager do you want to use? : yarn
```

### Install Global
```
    npm install -g env-cmd //จัดการในส่วนของ config ที่มี env มากกว่า 1 เช่น uat.env , qc.env
    npm install -g glob //จัดการในส่วนของการอ่าน file and folder 
    npm install -g typescript 
    npm install -g ts-node 
```

### Docker Setup
```
    docker-compose  -f ./postgres/docker-compose.yml up -d    
    docker-compose  -f ./postgres/docker-compose.yml down
```

### BackEnd Setup
```
    yarn dev || yarn start
```

### Create ENV ./config/dev.env
```
    PORT = 5080
    CORS = true
    POSTGRES__HOST = 0.0.0.0
    POSTGRES__USERNAME = postgres
    POSTGRES__PASSWORD = postgres
    POSTGRES__PORT = 5423
    POSTGRES__SCHEMA = public
```

### Send API Thunder Client 
```
    /// Extensions VS Code Install Thunder Client
    Import (Bulk) -> api / thunder-collection_note.json
```
---
### NodeJS Version
- v14.17.3 {node}
- 6.14.13 {npm}
- 1.22.5 {yarn}
