export const BUNDLE_PRICE = 179;

export const subjects = {
  english: {
    slug: "english",
    title: "วิชาภาษาอังกฤษ",
    short: "English",
    price: 99,
    blurb: "สำนวน ไวยากรณ์ คำศัพท์ และเทคนิคอ่านจับใจความ แบบสรุปสั้น เน้นที่ออกสอบจริง",
    chapters: [
      {
        id: "1", title: "Conversation & Expression", desc: "สำนวนสนทนาที่ออกสอบบ่อย",
        cheat: [
          { h: "ขอบคุณ / ตอบรับ", en: "Thank you. → You're welcome. / Not at all. / My pleasure.", body: "เจอ Thank you ให้ตอบกลับด้วยกลุ่ม You're welcome" },
          { h: "ขอร้อง / ขออนุญาต", en: "Would you mind closing the window? → Not at all. / Of course not.", body: "Would you mind + V-ing: ถ้า 'ได้' ต้องตอบเชิงปฏิเสธ (Not at all) เพราะ mind แปลว่า 'รังเกียจ'" },
          { h: "ขอโทษ", en: "I'm sorry I'm late. → That's all right. / Never mind.", body: "ตอบรับคำขอโทษด้วยความไม่ถือสา" },
        ],
        mnemonic: "Would you mind → ตอบ 'ไม่' = ยินดี (Not at all) เพราะคำถามคือ 'รังเกียจไหม'",
        questions: [
          { q: "A: Would you mind closing the window?\nB: ______", choices: ["Yes, I'd love to.", "Not at all.", "Yes, please do.", "No, I don't."], answer: 1, why: "Would you mind ถามว่า 'รังเกียจไหม' ถ้าตอบรับต้องปฏิเสธ จึงตอบ Not at all. ข้ออื่นตอบ Yes ซึ่งแปลว่า 'รังเกียจ'" },
          { q: "A: Thank you very much for your help.\nB: ______", choices: ["You're welcome.", "I'm fine.", "Excuse me.", "Good luck."], answer: 0, why: "ตอบรับคำขอบคุณใช้ You're welcome." },
        ],
      },
      {
        id: "2", title: "Grammar & Structure", desc: "Tense, Passive Voice, Subject-Verb Agreement",
        cheat: [
          { h: "Subject-Verb Agreement", en: "Neither the teacher nor the students are here.", body: "Neither...nor / Either...or / Not only...but also: กริยาตามประธาน 'ตัวหลัง' (ที่ใกล้กริยา)" },
          { h: "Passive Voice", en: "The report was approved by the committee.", body: "รูปแบบ be + V3 เลือก be ให้ตรงกับ tense และประธาน" },
          { h: "Tense สัญญาณคำ", en: "yesterday / ago → Past Simple\nsince / for → Present Perfect", body: "ดูคำบอกเวลาก่อนเสมอ ตอบได้เร็วกว่าแปลทั้งประโยค" },
        ],
        mnemonic: "Neither-nor: 'ตัวหลังคือบอส' กริยาฟังตัวหลัง",
        questions: [
          { q: "Neither the teacher nor the students ______ here.", choices: ["is", "are", "was", "has been"], answer: 1, why: "กริยาตามตัวหลัง students (พหูพจน์) จึงใช้ are" },
          { q: "The report ______ by the committee yesterday.", choices: ["approves", "was approved", "has approved", "is approving"], answer: 1, why: "ประธานถูกกระทำ + yesterday = Past Simple Passive → was approved" },
        ],
      },
      {
        id: "3", title: "Vocabulary & Synonyms", desc: "คลังคำศัพท์พิชิต ก.พ.",
        cheat: [
          { h: "คำที่เจอบ่อย", en: "abundant = plentiful\nreluctant = unwilling\nmitigate = alleviate / reduce", body: "ท่องเป็นคู่ความหมายเดียวกัน ข้อสอบมักให้หา synonym" },
          { h: "ศัพท์ราชการ", en: "regulation = rule\nauthority = power / agency\ncomply with = follow", body: "ศัพท์เกี่ยวกับกฎระเบียบออกบ่อยในข้อสอบ ก.พ." },
        ],
        mnemonic: "reluctant → 'รีบไม่ลง' = ไม่เต็มใจ (unwilling)",
        questions: [
          { q: "The officer was reluctant to sign the document. 'reluctant' means ______.", choices: ["eager", "unwilling", "careful", "ready"], answer: 1, why: "reluctant = ไม่เต็มใจ ตรงกับ unwilling" },
        ],
      },
      {
        id: "4", title: "Reading Comprehension", desc: "เทคนิคกวาดสายตาหาคำตอบ",
        cheat: [
          { h: "ลำดับการอ่าน", en: "Question → Keywords → Scan → Confirm", body: "อ่านคำถามก่อน จับ keyword แล้วกวาดหาในเนื้อเรื่อง อย่าอ่านทุกคำ" },
          { h: "ประโยคใจความหลัก", en: "The topic sentence is usually the first or last sentence.", body: "ถามเรื่องหลัก (main idea) ให้ดูประโยคแรกและประโยคสุดท้ายของย่อหน้า" },
        ],
        mnemonic: "Q-K-S-C: คำถาม → คีย์เวิร์ด → สแกน → ยืนยัน",
        questions: [
          { q: "“Public servants must act with integrity. Transparency builds trust between agencies and citizens, and trust makes policies easier to carry out.”\nWhat is the main idea?", choices: ["Policies are always difficult.", "Transparency builds trust that supports policies.", "Citizens dislike agencies.", "Integrity is not important."], answer: 1, why: "ประโยคที่สองและสามสื่อว่า ความโปร่งใสสร้างความไว้วางใจ ซึ่งช่วยให้นโยบายดำเนินไปได้ง่าย" },
        ],
      },
    ],
  },
  law: {
    slug: "law",
    title: "วิชากฎหมาย",
    short: "Law",
    price: 99,
    blurb: "กฎหมายที่ต้องรู้สำหรับสอบ ก.พ. สรุปเป็นภาษาคน พร้อมเทคนิคจำ",
    chapters: [
      {
        id: "1", title: "รัฐธรรมนูญแห่งราชอาณาจักรไทย", desc: "หมวดสำคัญที่ออกสอบ (ฉบับ พ.ศ. 2560)",
        cheat: [
          { h: "บททั่วไป", body: "ประเทศไทยเป็นราชอาณาจักรอันหนึ่งอันเดียว ไม่อาจแบ่งแยกได้ (ม.1) อำนาจอธิปไตยเป็นของปวงชนชาวไทย พระมหากษัตริย์ทรงใช้ผ่านรัฐสภา คณะรัฐมนตรี และศาล (ม.3)" },
          { h: "ศักดิ์ศรีความเป็นมนุษย์", body: "ศักดิ์ศรีความเป็นมนุษย์ สิทธิ เสรีภาพ และความเสมอภาคของบุคคล ย่อมได้รับความคุ้มครอง (ม.4)" },
        ],
        mnemonic: "อำนาจอธิปไตย = 3 ฝ่าย: นิติบัญญัติ (รัฐสภา) บริหาร (ครม.) ตุลาการ (ศาล)",
        questions: [
          { q: "อำนาจอธิปไตยเป็นของใคร ตามรัฐธรรมนูญ?", choices: ["พระมหากษัตริย์", "รัฐสภา", "ปวงชนชาวไทย", "คณะรัฐมนตรี"], answer: 2, why: "มาตรา 3 ระบุว่าอำนาจอธิปไตยเป็นของปวงชนชาวไทย" },
        ],
      },
      {
        id: "2", title: "พ.ร.บ.ระเบียบข้าราชการพลเรือน พ.ศ. 2551", desc: "ประเภทข้าราชการ และการรักษาวินัย",
        cheat: [
          { h: "ประเภทข้าราชการพลเรือนสามัญ", body: "บริหาร • อำนวยการ • วิชาการ • ทั่วไป" },
          { h: "โทษทางวินัย", body: "ไม่ร้ายแรง: ภาคทัณฑ์ ตัดเงินเดือน ลดเงินเดือน\nร้ายแรง: ปลดออก ไล่ออก" },
        ],
        mnemonic: "บ-อ-ว-ท = บริหาร อำนวยการ วิชาการ ทั่วไป",
        questions: [
          { q: "ข้อใดเป็นโทษทางวินัยอย่างร้ายแรง?", choices: ["ภาคทัณฑ์", "ตัดเงินเดือน", "ลดเงินเดือน", "ไล่ออก"], answer: 3, why: "โทษวินัยอย่างร้ายแรงมี 2 สถาน คือ ปลดออก และไล่ออก ส่วนข้ออื่นเป็นโทษกรณีไม่ร้ายแรง" },
        ],
      },
      {
        id: "3", title: "พ.ร.ฎ.บริหารกิจการบ้านเมืองที่ดี พ.ศ. 2546", desc: "หลักเกณฑ์และวิธีการบริหารกิจการบ้านเมืองที่ดี",
        cheat: [
          { h: "หลักสำคัญ", body: "เกิดประโยชน์สุขแก่ประชาชน • เกิดผลสัมฤทธิ์ต่อภารกิจ • ประสิทธิภาพและความคุ้มค่า • ลดขั้นตอนการปฏิบัติงาน • ปรับปรุงภารกิจให้ทันต่อสถานการณ์ • ประชาชนได้รับความสะดวกและการตอบสนอง • มีการประเมินผลการปฏิบัติราชการอย่างสม่ำเสมอ" },
        ],
        mnemonic: "ข้อสอบมักถามว่า 'ข้อใดไม่ใช่หลัก' ให้หาตัวเลือกที่ขัดกับ 'ประโยชน์ประชาชน' หรือ 'ลดขั้นตอน'",
        questions: [
          { q: "ข้อใดสอดคล้องกับหลักการบริหารกิจการบ้านเมืองที่ดี?", choices: ["เพิ่มขั้นตอนเพื่อความรัดกุม", "ลดขั้นตอนการปฏิบัติงาน", "ไม่ต้องประเมินผลงาน", "ทำงานตามความสะดวกของส่วนราชการ"], answer: 1, why: "หลักข้อหนึ่งคือการลดขั้นตอนการปฏิบัติงาน เพื่อให้ประชาชนได้รับความสะดวก" },
        ],
      },
      {
        id: "4", title: "ป.อาญา (ความผิดต่อตำแหน่งหน้าที่) และ พ.ร.บ.วิธีปฏิบัติราชการทางปกครอง", desc: "ความผิดของเจ้าพนักงาน และการอุทธรณ์คำสั่งทางปกครอง",
        cheat: [
          { h: "ป.อาญา มาตรา 157", body: "เจ้าพนักงานปฏิบัติหรือละเว้นการปฏิบัติหน้าที่โดยมิชอบ เพื่อให้เกิดความเสียหายแก่ผู้อื่น หรือโดยทุจริต ต้องระวางโทษจำคุก 1–10 ปี หรือปรับ 2,000–20,000 บาท หรือทั้งจำทั้งปรับ" },
          { h: "พ.ร.บ.วิธีปฏิบัติราชการทางปกครอง พ.ศ. 2539", body: "ผู้ไม่พอใจคำสั่งทางปกครองอุทธรณ์ได้ภายใน 15 วัน นับแต่ได้รับแจ้งคำสั่ง" },
        ],
        mnemonic: "มาตรา 157 = 'ทำหน้าที่ไม่ชอบ' / อุทธรณ์ = 15 วัน",
        questions: [
          { q: "ตาม พ.ร.บ.วิธีปฏิบัติราชการทางปกครอง ผู้ไม่พอใจคำสั่งทางปกครองต้องอุทธรณ์ภายในกี่วัน?", choices: ["7 วัน", "15 วัน", "30 วัน", "60 วัน"], answer: 1, why: "กำหนดให้อุทธรณ์ภายใน 15 วันนับแต่ได้รับแจ้งคำสั่งทางปกครอง" },
        ],
      },
    ],
  },
};

export const subjectList = Object.values(subjects);
