const lessons = [
  {
    day: 1,
    title: 'Hangul Basics — Vowels & Consonants',
    pages: [
      { pageNumber: 1, koreanText: '안녕하세요', romanization: 'annyeonghaseyo', explanation: 'The most common Korean greeting, meaning "Hello." Use it when meeting someone politely.' },
      { pageNumber: 2, koreanText: 'ㄱ ㄴ ㄷ ㄹ ㅁ ㅂ ㅅ ㅇ ㅈ ㅊ ㅋ ㅌ ㅍ ㅎ', romanization: 'g n d r m b s ng j ch k t p h', explanation: 'The 14 basic consonants of Hangul. Their shapes mimic mouth positions when making each sound.' },
      { pageNumber: 3, koreanText: 'ㅏ ㅑ ㅓ ㅕ ㅗ ㅛ ㅜ ㅠ ㅡ ㅣ', romanization: 'a ya eo yeo o yo u yu eu i', explanation: 'The 10 basic vowels. Combine them with consonants to form syllable blocks.' },
      { pageNumber: 4, koreanText: '가 나 다 라 마', romanization: 'ga na da ra ma', explanation: 'First syllable blocks: consonant + vowel. ㄱ + ㅏ = 가 (ga). Read left to right, top to bottom.' },
    ],
  },
  {
    day: 2,
    title: 'Double Consonants & Aspirated Sounds',
    pages: [
      { pageNumber: 1, koreanText: 'ㄲ ㄸ ㅃ ㅆ ㅉ', romanization: 'kk tt pp ss jj', explanation: 'Double (tense) consonants — no air release, sharper sound. ㄲ is a tense "k" like in "skill".' },
      { pageNumber: 2, koreanText: 'ㅋ ㅌ ㅍ ㅊ', romanization: 'k t p ch', explanation: 'Aspirated consonants — pronounced with a puff of air. ㅋ (k) vs ㄱ (g), ㅌ (t) vs ㄷ (d).' },
      { pageNumber: 3, koreanText: '까 떠 뻐 쪼', romanization: 'kka tteo ppeo jjwo', explanation: 'Practice words with tense consonants. Listen carefully to the difference from plain consonants.' },
      { pageNumber: 4, koreanText: '커피 / 토마토', romanization: 'keopi / tomato', explanation: 'Loanwords often use aspirated consonants. 커피 (coffee), 토마토 (tomato).' },
    ],
  },
  {
    day: 3,
    title: 'Combined Vowels',
    pages: [
      { pageNumber: 1, koreanText: 'ㅐ ㅔ ㅒ ㅖ', romanization: 'ae e yae ye', explanation: 'Compound vowels built from basic ones. ㅐ and ㅔ sound nearly identical in modern Korean.' },
      { pageNumber: 2, koreanText: 'ㅘ ㅙ ㅚ ㅝ ㅞ ㅟ ㅢ', romanization: 'wa wae oe wo we wi ui', explanation: 'Diphthongs combine ㅗ/ㅜ with other vowels. ㅘ = ㅗ + ㅏ (wa), ㅝ = ㅜ + ㅓ (wo).' },
      { pageNumber: 3, koreanText: '왜 / 웨딩 / 의사', romanization: 'wae / wedding / uisa', explanation: '왜 (why), 웨딩 (wedding), 의사 (doctor). Notice how vowels blend inside one block.' },
      { pageNumber: 4, koreanText: '개 / 게 / 외국', romanization: 'gae / ge / oeguk', explanation: '개 (dog), 게 (crab), 외국 (foreign country). Practice reading compound vowels in context.' },
    ],
  },
  {
    day: 4,
    title: 'Batchim — Final Consonants',
    pages: [
      { pageNumber: 1, koreanText: '받침', romanization: 'batchim', explanation: 'Batchim is the consonant at the bottom of a syllable block. Every block can have up to 4 letters: initial, vowel, and final.' },
      { pageNumber: 2, koreanText: 'ㄱ ㄴ ㄷ ㄹ ㅁ ㅂ ㅅ ㅇ', romanization: 'k n d/t l m b/p s ng', explanation: 'Seven batchim sounds represent all possible finals. ㄷ batchim is pronounced [t], ㅂ as [p].' },
      { pageNumber: 3, koreanText: '한국 / 밥 / 학교', romanization: 'Hanguk / bap / hakgyo', explanation: '한국 (Korea) ends in [k], 밥 (rice/meal) in [p], 학교 (school) has ㄱ batchim before ㄱ initial.' },
      { pageNumber: 4, koreanText: '읽다 / 없다 / 닭', romanization: 'ikda / eopda / dak', explanation: 'Batchim rules change pronunciation. ㄺ in 읽다, ㅄ in 없다, and ㄺ in 닭 (chicken) follow special patterns.' },
    ],
  },
  {
    day: 5,
    title: 'Greetings & Introductions',
    pages: [
      { pageNumber: 1, koreanText: '안녕 / 안녕히 가세요 / 안녕히 계세요', romanization: 'annyeong / annyeonghi gaseyo / annyeonghi gyeseyo', explanation: 'Casual "hi" vs formal goodbyes. Say 가세요 to someone leaving; 계세요 to someone staying.' },
      { pageNumber: 2, koreanText: '저는 ___입니다', romanization: 'jeoneun ___imnida', explanation: 'Formal self-introduction: "I am ___." 저 is the humble "I" used in polite speech.' },
      { pageNumber: 3, koreanText: '만나서 반갑습니다', romanization: 'mannaseo bangapseumnida', explanation: '"Nice to meet you." Used right after introductions in formal settings.' },
      { pageNumber: 4, koreanText: '이름이 뭐예요?', romanization: 'ireumi mwoyeyo?', explanation: '"What is your name?" Combine with: 제 이름은 ___예요 (My name is ___).' },
    ],
  },
  {
    day: 6,
    title: 'Numbers 1–10',
    pages: [
      { pageNumber: 1, koreanText: '하나 둘 셋 넷 다섯', romanization: 'hana dul set net daseot', explanation: 'Native Korean numbers 1–5. Used for counting objects, hours, and age (with exceptions).' },
      { pageNumber: 2, koreanText: '여섯 일곱 여덟 아홉 열', romanization: 'yeoseot ilgop yeodeol ahop yeol', explanation: 'Native Korean numbers 6–10. These change form when used with counters (하나 → 한).' },
      { pageNumber: 3, koreanText: '일 이 삼 사 오', romanization: 'il i sam sa o', explanation: 'Sino-Korean numbers 1–5. Used for dates, money, phone numbers, and minutes.' },
      { pageNumber: 4, koreanText: '육 칠 팔 구 십', romanization: 'yuk chil pal gu sip', explanation: 'Sino-Korean numbers 6–10. Most numbers above 10 mix both systems.' },
    ],
  },
  {
    day: 7,
    title: 'Numbers 11–100 & Counters',
    pages: [
      { pageNumber: 1, koreanText: '열하나 / 스물 / 서른', romanization: 'yeolhana / seumul / seoreun', explanation: '11 (yeolhana), 20 (seumul), 30 (seoreun). Native tens: 스물, 서른, 마흔, 쉰…' },
      { pageNumber: 2, koreanText: '십일 / 이십 / 삼십', romanization: 'sibil / isip / samsip', explanation: 'Sino-Korean tens: 십 (10), 이십 (20), 삼십 (30)… up to 백 (100).' },
      { pageNumber: 3, koreanText: '한 개 / 두 명 / 세 마리', romanization: 'han gae / du myeong / se mari', explanation: 'Counters change the number form: 하나→한, 둘→두. 개 (items), 명 (people), 마리 (animals).' },
      { pageNumber: 4, koreanText: '얼마예요?', romanization: 'eolmayeyo?', explanation: '"How much is it?" Essential for shopping. Answer: ___원이에요 (It\'s ___ won).' },
    ],
  },
  {
    day: 8,
    title: 'Politeness Essentials',
    pages: [
      { pageNumber: 1, koreanText: '네 / 아니요', romanization: 'ne / aniyo', explanation: '"Yes" and "No" in polite speech. 네 is more common than 예 in modern Korean.' },
      { pageNumber: 2, koreanText: '감사합니다 / 고맙습니다', romanization: 'gamsahamnida / gomapseumnida', explanation: 'Both mean "Thank you." 감사합니다 is slightly more formal; 고맙습니다 is warm and common.' },
      { pageNumber: 3, koreanText: '죄송합니다 / 미안해요', romanization: 'joesonghamnida / mianhaeyo', explanation: 'Apologizing: 죄송합니다 (formal sorry), 미안해요 (casual-polite sorry).' },
      { pageNumber: 4, koreanText: '주세요 / 천만에요', romanization: 'juseyo / cheonmaneyo', explanation: '주세요 = "Please give me." 천만에요 = "You\'re welcome" (response to thanks).' },
    ],
  },
  {
    day: 9,
    title: 'Family Members',
    pages: [
      { pageNumber: 1, koreanText: '아버지 / 어머니 / 부모님', romanization: 'abeoji / eomeoni / bumonim', explanation: 'Father, mother, parents. 부모님 adds honorific 님 for respect.' },
      { pageNumber: 2, koreanText: '형 / 오빠 / 누나 / 언니', romanization: 'hyeong / oppa / nuna / eonni', explanation: 'Sibling terms depend on YOUR gender and their age — not just "brother/sister."' },
      { pageNumber: 3, koreanText: '할아버지 / 할머니', romanization: 'harabeoji / halmeoni', explanation: 'Grandfather and grandmother. Often shortened affectionately by families.' },
      { pageNumber: 4, koreanText: '가족이 몇 명이에요?', romanization: 'gajogi myeot myeongieyo?', explanation: '"How many people are in your family?" Reply: 가족은 ___명이에요.' },
    ],
  },
  {
    day: 10,
    title: 'Colors',
    pages: [
      { pageNumber: 1, koreanText: '빨간색 / 파란색 / 노란색', romanization: 'ppalgansaek / paransaek / noransaek', explanation: 'Red, blue, yellow. Korean adds 색 (color) — 빨간색 = red color.' },
      { pageNumber: 2, koreanText: '초록색 / 검은색 / 하얀색', romanization: 'choroksaek / geomsaek / hayansaek', explanation: 'Green, black, white. 하얀색 and 흰색 both mean white.' },
      { pageNumber: 3, koreanText: '무슨 색을 좋아해요?', romanization: 'museun saegeul joahaeyo?', explanation: '"What color do you like?" Answer: 저는 ___을/를 좋아해요.' },
      { pageNumber: 4, koreanText: '분홍색 / 주황색 / 보라색', romanization: 'bunhongsaek / juhwangsaek / borasaek', explanation: 'Pink, orange, purple. Useful for describing clothes and objects.' },
    ],
  },
  {
    day: 11,
    title: 'Days, Dates & Time',
    pages: [
      { pageNumber: 1, koreanText: '월요일 / 화요일 / 수요일 / 목요일 / 금요일', romanization: 'woryoil / hwaill / suyoil / mogyoil / geumyoil', explanation: 'Monday through Friday. 토요일 (Saturday), 일요일 (Sunday) complete the week.' },
      { pageNumber: 2, koreanText: '오늘 / 어제 / 내일', romanization: 'oneul / eoje / naeil', explanation: 'Today, yesterday, tomorrow — essential daily vocabulary.' },
      { pageNumber: 3, koreanText: '지금 몇 시예요?', romanization: 'jigeum myeot siyeyo?', explanation: '"What time is it now?" Hours use native Korean numbers + 시 (o\'clock).' },
      { pageNumber: 4, koreanText: '오전 / 오후 / 반', romanization: 'ojeon / ohu / ban', explanation: 'AM (오전), PM (오후), half (반). Example: 세 시 반 = 3:30.' },
    ],
  },
  {
    day: 12,
    title: 'Basic Verbs — To Be & To Have',
    pages: [
      { pageNumber: 1, koreanText: '이에요 / 예요', romanization: 'ieyo / yeyo', explanation: 'Polite "to be." 이에요 after consonant: 학생이에요. 예요 after vowel: 의사예요.' },
      { pageNumber: 2, koreanText: '아니에요', romanization: 'anieyo', explanation: 'Negative "to be" — "is not." 저는 학생이 아니에요 = I am not a student.' },
      { pageNumber: 3, koreanText: '있어요 / 없어요', romanization: 'isseoyo / eopseoyo', explanation: 'To have / to exist vs. to not have. 시간이 있어요 = I have time.' },
      { pageNumber: 4, koreanText: '뭐 있어요?', romanization: 'mwo isseoyo?', explanation: '"What do you have?" or "What\'s there?" Common at restaurants: 메뉴 뭐 있어요?' },
    ],
  },
  {
    day: 13,
    title: 'Present Tense — ~아/어요',
    pages: [
      { pageNumber: 1, koreanText: '가요 / 와요', romanization: 'gayo / wayo', explanation: 'To go (가요) and to come (와요). Basic movement verbs in present polite form.' },
      { pageNumber: 2, koreanText: '먹어요 / 마셔요', romanization: 'meogeoyo / masyeoyo', explanation: 'To eat and to drink. 먹어요 — add 어요 to verb stem 먹.' },
      { pageNumber: 3, koreanText: '해요 / 봐요 / 자요', romanization: 'haeyo / bwayo / jayo', explanation: 'To do (해요), to see/watch (봐요), to sleep (자요). Irregular but very common.' },
      { pageNumber: 4, koreanText: '학교에 가요', romanization: 'hakgyoe gayo', explanation: 'Sentence pattern: [Place]에 [Verb]. "I go to school." 에 marks destination.' },
    ],
  },
  {
    day: 14,
    title: 'Question Words',
    pages: [
      { pageNumber: 1, koreanText: '뭐 / 무엇', romanization: 'mwo / mueot', explanation: 'Both mean "what." 뭐 is spoken form; 무엇 is written/formal.' },
      { pageNumber: 2, koreanText: '어디 / 언제 / 누구', romanization: 'eodi / eonje / nugu', explanation: 'Where, when, who. 어디에 가요? (Where are you going?)' },
      { pageNumber: 3, koreanText: '왜 / 어떻게 / 얼마', romanization: 'wae / eotteoke / eolma', explanation: 'Why, how, how much. Combine with 요 ending: 왜요? 어떻게요?' },
      { pageNumber: 4, koreanText: '뭐 해요?', romanization: 'mwo haeyo?', explanation: '"What are you doing?" One of the most common daily Korean questions.' },
    ],
  },
  {
    day: 15,
    title: 'Food & Drink Basics',
    pages: [
      { pageNumber: 1, koreanText: '밥 / 김치 / 불고기', romanization: 'bap / gimchi / bulgogi', explanation: 'Rice/meal, kimchi, bulgogi. Core Korean food vocabulary.' },
      { pageNumber: 2, koreanText: '물 / 커피 / 주스', romanization: 'mul / keopi / juseu', explanation: 'Water, coffee, juice. 물 is free at most Korean restaurants.' },
      { pageNumber: 3, koreanText: '맛있어요 / 맛없어요', romanization: 'masisseoyo / maseopseoyo', explanation: '"It\'s delicious" / "It doesn\'t taste good." Essential dining phrases.' },
      { pageNumber: 4, koreanText: '배고파요 / 목말라요', romanization: 'baegopayo / mongmallayo', explanation: '"I\'m hungry" / "I\'m thirsty." Very useful in daily life!' },
    ],
  },
  {
    day: 16,
    title: 'At the Restaurant',
    pages: [
      { pageNumber: 1, koreanText: '메뉴 주세요', romanization: 'menyu juseyo', explanation: '"Menu, please." Or: 메뉴판 좀 주세요 (Please give me the menu).' },
      { pageNumber: 2, koreanText: '이거 주세요', romanization: 'igeo juseyo', explanation: '"This one, please." Point and order — one of the handiest restaurant phrases.' },
      { pageNumber: 3, koreanText: '계산해 주세요', romanization: 'gyesanhae juseyo', explanation: '"Check, please." When ready to pay. Cash and card both widely accepted.' },
      { pageNumber: 4, koreanText: '포장해 주세요 / 여기서 먹을게요', romanization: 'pojanghae juseyo / yeogiseo meogeulgeyo', explanation: 'Takeout please / I\'ll eat here. Know both when ordering.' },
    ],
  },
  {
    day: 17,
    title: 'Shopping & Prices',
    pages: [
      { pageNumber: 1, koreanText: '얼마예요? / 너무 비싸요', romanization: 'eolmayeyo? / neomu bissayo', explanation: '"How much?" / "It\'s too expensive." Key shopping phrases.' },
      { pageNumber: 2, koreanText: '깎아 주세요', romanization: 'kkakka juseyo', explanation: '"Please give a discount." Common at markets, less so in chain stores.' },
      { pageNumber: 3, koreanText: '카드 돼요? / 현금만 돼요?', romanization: 'kadeu dwaeyo? / hyeongeumman dwaeyo?', explanation: '"Do you take card?" / "Cash only?" Always good to ask.' },
      { pageNumber: 4, koreanText: '입어 봐도 돼요?', romanization: 'ibeo bwado dwaeyo?', explanation: '"Can I try this on?" Useful when clothes shopping.' },
    ],
  },
  {
    day: 18,
    title: 'Locations & Directions',
    pages: [
      { pageNumber: 1, koreanText: '여기 / 거기 / 저기', romanization: 'yeogi / geogi / jeogi', explanation: 'Here, there (near you), over there (far). Pointing words for location.' },
      { pageNumber: 2, koreanText: '앞 / 뒤 / 옆 / 안 / 밖', romanization: 'ap / dwi / yeop / an / bak', explanation: 'Front, back, beside, inside, outside — spatial vocabulary.' },
      { pageNumber: 3, koreanText: '왼쪽 / 오른쪽 / 직진', romanization: 'oenjjok / oreunjjok / jikjin', explanation: 'Left, right, straight. Essential for following directions.' },
      { pageNumber: 4, koreanText: '___ 어디에 있어요?', romanization: '___ eodie isseoyo?', explanation: '"Where is ___?" Fill in: 화장실 (restroom), 역 (station), convenience store (편의점).' },
    ],
  },
  {
    day: 19,
    title: 'Transportation',
    pages: [
      { pageNumber: 1, koreanText: '버스 / 지하철 / 택시', romanization: 'beoseu / jihacheol / taeksi', explanation: 'Bus, subway, taxi — main city transport options in Korea.' },
      { pageNumber: 2, koreanText: '표 주세요 / ___역에 가 주세요', romanization: 'pyo juseyo / ___yeoge ga juseyo', explanation: '"Ticket, please" / "Please go to ___ station." Standard taxi phrase.' },
      { pageNumber: 3, koreanText: '교통카드 / 환승', romanization: 'gyotongkadeu / hwanseung', explanation: 'Transit card (T-money) and transfer. Tap when boarding and exiting.' },
      { pageNumber: 4, koreanText: '멀미해요 / 길이 막혀요', romanization: 'meolmihhaeyo / giri makyeoyo', explanation: '"I feel carsick" / "Traffic is bad." Useful travel expressions.' },
    ],
  },
  {
    day: 20,
    title: 'Weather',
    pages: [
      { pageNumber: 1, koreanText: '날씨 / 덥다 / 춥다', romanization: 'nalssi / deopda / chupda', explanation: 'Weather, hot, cold. Korean distinguishes hot (weather) vs spicy hot (맵다).' },
      { pageNumber: 2, koreanText: '비 / 눈 / 바람', romanization: 'bi / nun / baram', explanation: 'Rain, snow, wind. 비 와요 = It\'s raining.' },
      { pageNumber: 3, koreanText: '오늘 날씨 어때요?', romanization: 'oneul nalssi eottaeyo?', explanation: '"How\'s the weather today?" Common small talk opener.' },
      { pageNumber: 4, koreanText: '우산 / 선크림 / 외투', romanization: 'usan / seokeurim / oetu', explanation: 'Umbrella, sunscreen, coat — weather-related items.' },
    ],
  },
  {
    day: 21,
    title: 'Hobbies & Free Time',
    pages: [
      { pageNumber: 1, koreanText: '취미 / 좋아하다', romanization: 'chwimi / joahada', explanation: 'Hobby and to like. 취미가 뭐예요? = What is your hobby?' },
      { pageNumber: 2, koreanText: '영화 보다 / 음악 듣다 / 책 읽다', romanization: 'yeonghwa boda / eumak deutda / chaek ikda', explanation: 'Watch movies, listen to music, read books — common hobby verbs.' },
      { pageNumber: 3, koreanText: '운동하다 / 여행하다', romanization: 'undonghada / yeohaenghada', explanation: 'To exercise and to travel. Popular answers to 취미 questions.' },
      { pageNumber: 4, koreanText: '주말에 뭐 해요?', romanization: 'jumare mwo haeyo?', explanation: '"What do you do on weekends?" Great conversation starter.' },
    ],
  },
  {
    day: 22,
    title: 'Past Tense — ~았/었어요',
    pages: [
      { pageNumber: 1, koreanText: '갔어요 / 왔어요', romanization: 'gasseoyo / wasseoyo', explanation: 'Went and came — past tense of 가다 and 오다.' },
      { pageNumber: 2, koreanText: '먹었어요 / 마셨어요', romanization: 'meogeosseoyo / masyeosseoyo', explanation: 'Ate and drank. Past tense adds 았/었 before 어요.' },
      { pageNumber: 3, koreanText: '했어요 / 봤어요', romanization: 'haesseoyo / bwasseoyo', explanation: 'Did and saw/watched. Yesterday: 어제 ___했어요.' },
      { pageNumber: 4, koreanText: '재미있었어요', romanization: 'jaemiisseosseoyo', explanation: '"It was fun." Useful after events, trips, or movies.' },
    ],
  },
  {
    day: 23,
    title: 'Future Tense — ~(으)ㄹ 거예요',
    pages: [
      { pageNumber: 1, koreanText: '갈 거예요 / 올 거예요', romanization: 'gal geoyeyo / ol geoyeyo', explanation: 'Will go / will come. Future uses verb stem + (으)ㄹ 거예요.' },
      { pageNumber: 2, koreanText: '먹을 거예요 / 할 거예요', romanization: 'meogeul geoyeyo / hal geoyeyo', explanation: 'Will eat / will do. Plans and intentions.' },
      { pageNumber: 3, koreanText: '내일 뭐 할 거예요?', romanization: 'naeil mwo hal geoyeyo?', explanation: '"What will you do tomorrow?" Common future question.' },
      { pageNumber: 4, koreanText: '한국에 갈 거예요', romanization: 'Hanguge gal geoyeyo', explanation: '"I will go to Korea." Share your plans using this pattern.' },
    ],
  },
  {
    day: 24,
    title: 'Adjectives & Descriptions',
    pages: [
      { pageNumber: 1, koreanText: '크다 / 작다 / 예쁘다', romanization: 'keuda / jakda / yeppeuda', explanation: 'Big, small, pretty. Korean adjectives conjugate like verbs: 커요, 작아요, 예뻐요.' },
      { pageNumber: 2, koreanText: '좋다 / 나쁘다 / 재미있다', romanization: 'jota / nappeuda / jaemiitda', explanation: 'Good, bad, fun/interesting. 좋아요 is extremely common.' },
      { pageNumber: 3, koreanText: '맵다 / 달다 / 짜다', romanization: 'maepda / dalda / jjada', explanation: 'Spicy, sweet, salty — taste adjectives for food.' },
      { pageNumber: 4, koreanText: '한국어 어려워요?', romanization: 'Hangugeo eoryeowoyo?', explanation: '"Is Korean difficult?" Answer: 조금 어려워요 (A little difficult) or 안 어려워요 (Not difficult).' },
    ],
  },
  {
    day: 25,
    title: 'Body & Health',
    pages: [
      { pageNumber: 1, koreanText: '머리 / 얼굴 / 손 / 발', romanization: 'meori / eolgul / son / bal', explanation: 'Head, face, hand, foot — basic body parts.' },
      { pageNumber: 2, koreanText: '아파요 / 아프다', romanization: 'apayo / apeuda', explanation: '"It hurts" / "to be sick." 머리가 아파요 = My head hurts.' },
      { pageNumber: 3, koreanText: '병원 / 약국 / 약', romanization: 'byeongwon / yakguk / yak', explanation: 'Hospital, pharmacy, medicine. Where to go when sick.' },
      { pageNumber: 4, koreanText: '감기 / 열 / 기침', romanization: 'gamgi / yeol / gichim', explanation: 'Cold (illness), fever, cough — common symptoms.' },
    ],
  },
  {
    day: 26,
    title: 'School & Work',
    pages: [
      { pageNumber: 1, koreanText: '학교 / 학생 / 선생님', romanization: 'hakgyo / haksaeng / seonsaengnim', explanation: 'School, student, teacher. Always use honorifics for teachers.' },
      { pageNumber: 2, koreanText: '회사 / 직장 / 회의', romanization: 'hoesa / jikjang / hoeui', explanation: 'Company, workplace, meeting — office vocabulary.' },
      { pageNumber: 3, koreanText: '공부하다 / 일하다', romanization: 'gongbuhada / ilhada', explanation: 'To study and to work. 뭐 공부해요? = What do you study?' },
      { pageNumber: 4, koreanText: '바쁘다 / 한가하다', romanization: 'bappeuda / hangahada', explanation: 'Busy vs. free/have spare time. Opposite daily states.' },
    ],
  },
  {
    day: 27,
    title: 'Phone & Messaging',
    pages: [
      { pageNumber: 1, koreanText: '여보세요?', romanization: 'yeoboseyo?', explanation: 'Standard phone greeting in Korean — "Hello?" when answering a call.' },
      { pageNumber: 2, koreanText: '문자 / 카톡', romanization: 'munja / katok', explanation: 'Text message and KakaoTalk — Koreans mostly use 카톡 for messaging.' },
      { pageNumber: 3, koreanText: '나중에 전화할게요', romanization: 'najunge jeonhwahalgeyo', explanation: '"I\'ll call you later." Polite way to end a conversation.' },
      { pageNumber: 4, koreanText: '잠시만요 / 연결해 드릴게요', romanization: 'jamsimanyo / yeongyeolhae deurilgeyo', explanation: 'Hold on a moment / I\'ll connect you (transfer the call).' },
    ],
  },
  {
    day: 28,
    title: 'Honorifics & Politeness Levels',
    pages: [
      { pageNumber: 1, koreanText: '드시다 / 주시다', romanization: 'deusida / jusida', explanation: 'Honorific "to eat" and "to give." Use for elders and respected people.' },
      { pageNumber: 2, koreanText: '—세요 / —십시오', romanization: '—seyo / —sipsio', explanation: 'Polite imperative endings. 앉으세요 (Please sit), 들어오십시오 (Please come in — very formal).' },
      { pageNumber: 3, koreanText: '—님', romanization: '—nim', explanation: 'Honorific suffix after names/titles: 선생님, 어머님, 사장님 (boss).' },
      { pageNumber: 4, koreanText: '말씀하세요', romanization: 'malsseumhaseyo', explanation: 'Honorific "please speak." Used when respectfully asking someone to talk.' },
    ],
  },
  {
    day: 29,
    title: 'Daily Routines',
    pages: [
      { pageNumber: 1, koreanText: '일어나다 / 씻다 / 입다', romanization: 'ireonada / ssitda / ipda', explanation: 'Wake up, wash, get dressed — morning routine verbs.' },
      { pageNumber: 2, koreanText: '출근하다 / 퇴근하다', romanization: 'chulgeunhada / toegeunhada', explanation: 'Go to work and leave work — daily commute vocabulary.' },
      { pageNumber: 3, koreanText: '아침 / 점심 / 저녁', romanization: 'achim / jeomsim / jeonyeok', explanation: 'Morning, lunch/noon, evening/dinner — meal times.' },
      { pageNumber: 4, koreanText: '몇 시에 자요?', romanization: 'myeot sie jayo?', explanation: '"What time do you sleep?" Talk about your daily schedule.' },
    ],
  },
  {
    day: 30,
    title: 'Course Review — Putting It All Together',
    pages: [
      { pageNumber: 1, koreanText: '안녕하세요! 저는 ___입니다.', romanization: 'annyeonghaseyo! jeoneun ___imnida.', explanation: 'Review: greet, introduce yourself. You\'ve learned the building blocks of Korean conversation.' },
      { pageNumber: 2, koreanText: '한국어를 공부한 지 30일 됐어요', romanization: 'Hangugeoreul gongbuhan ji samsip il dwaesseoyo', explanation: '"It\'s been 30 days since I started studying Korean." Celebrate your milestone!' },
      { pageNumber: 3, koreanText: '계속 공부할 거예요', romanization: 'gyesok gongbuhal geoyeyo', explanation: '"I will keep studying." Language learning continues beyond 30 days.' },
      { pageNumber: 4, koreanText: '수고하셨습니다! 화이팅!', romanization: 'sugohaseyeossseumnida! hwaiting!', explanation: '"Great effort! Fighting!" — encouragement used constantly in Korea. You did it! 🎉' },
    ],
  },
];

const quizzes = [
  {
    day: 1,
    questions: [
      { question: 'What does "안녕하세요" mean?', options: ['Goodbye', 'Hello', 'Thank you', 'Sorry'], correctAnswer: 1 },
      { question: 'How many basic consonants are in Hangul?', options: ['10', '14', '19', '24'], correctAnswer: 1 },
      { question: 'Which vowel makes the "a" sound?', options: ['ㅣ', 'ㅡ', 'ㅏ', 'ㅜ'], correctAnswer: 2 },
      { question: 'What is the romanization of 가?', options: ['na', 'da', 'ga', 'ma'], correctAnswer: 2 },
      { question: 'Hangul syllable blocks are read:', options: ['Right to left', 'Bottom to top', 'Left to right, top to bottom', 'Top to bottom only'], correctAnswer: 2 },
    ],
  },
  {
    day: 2,
    questions: [
      { question: 'Which is a tense (double) consonant?', options: ['ㅋ', 'ㄲ', 'ㄱ', 'ㅎ'], correctAnswer: 1 },
      { question: 'Aspirated ㅌ is pronounced with:', options: ['No air', 'A puff of air', 'Nasal tone', 'Silence'], correctAnswer: 1 },
      { question: '커피 uses which type of consonant?', options: ['Plain ㄱ', 'Tense ㄲ', 'Aspirated ㅋ', 'Batchim only'], correctAnswer: 2 },
      { question: 'How many tense consonants are there?', options: ['3', '5', '7', '4'], correctAnswer: 1 },
      { question: 'ㅃ differs from ㅂ by being:', options: ['Aspirated', 'Tense/no release', 'Silent', 'A vowel'], correctAnswer: 1 },
    ],
  },
  {
    day: 3,
    questions: [
      { question: 'ㅘ combines ㅗ with:', options: ['ㅣ', 'ㅏ', 'ㅜ', 'ㅡ'], correctAnswer: 1 },
      { question: 'Which sounds like "we" in wedding?', options: ['ㅘ', 'ㅞ', 'ㅙ', 'ㅟ'], correctAnswer: 1 },
      { question: 'ㅐ and ㅔ in modern Korean are:', options: ['Very different', 'Nearly identical', 'Silent', 'Only in batchim'], correctAnswer: 1 },
      { question: '외국 means:', options: ['Domestic', 'Foreign country', 'Outside home', 'World map'], correctAnswer: 1 },
      { question: 'ㅝ is pronounced:', options: ['wa', 'wo', 'wi', 'we'], correctAnswer: 1 },
    ],
  },
  {
    day: 4,
    questions: [
      { question: 'Batchim refers to:', options: ['First consonant', 'Final consonant in a syllable', 'A vowel pair', 'Double vowel'], correctAnswer: 1 },
      { question: '밥 (rice) batchim is pronounced as:', options: ['[b]', '[p]', '[m]', '[n]'], correctAnswer: 1 },
      { question: 'How many basic batchim sounds exist?', options: ['5', '7', '10', '14'], correctAnswer: 1 },
      { question: '한국 ends with which sound?', options: ['[n]', '[k]', '[g]', '[ng] only'], correctAnswer: 1 },
      { question: '학교 has batchim before:', options: ['Vowel', 'Another consonant ㄱ', 'Nothing', 'Aspirated ㅎ'], correctAnswer: 1 },
    ],
  },
  {
    day: 5,
    questions: [
      { question: 'Say goodbye to someone LEAVING:', options: ['안녕히 계세요', '안녕히 가세요', '안녕', '반갑습니다'], correctAnswer: 1 },
      { question: '저는 ___입니다 means:', options: ['You are', 'I am', 'They are', 'We are'], correctAnswer: 1 },
      { question: '만나서 반갑습니다 means:', options: ['Goodbye', 'Nice to meet you', 'See you later', 'How are you'], correctAnswer: 1 },
      { question: 'Formal "I" in Korean is:', options: ['나', '저', '우리', '너'], correctAnswer: 1 },
      { question: '이름이 뭐예요? asks:', options: ['Your age', 'Your name', 'Your job', 'Your country'], correctAnswer: 1 },
    ],
  },
  {
    day: 6,
    questions: [
      { question: 'Native Korean for "three" is:', options: ['삼', '셋', '석', '세'], correctAnswer: 1 },
      { question: 'Sino-Korean for "five" is:', options: ['다섯', '오', '육', '열'], correctAnswer: 1 },
      { question: 'Native Korean "ten" is:', options: ['십', '열', '일', '이'], correctAnswer: 1 },
      { question: 'Sino-Korean numbers are used for:', options: ['Counting people only', 'Dates and money', 'Age only', 'Animals only'], correctAnswer: 1 },
      { question: 'Native "one" is:', options: ['일', '하나', '한', '첫'], correctAnswer: 1 },
    ],
  },
  {
    day: 7,
    questions: [
      { question: 'Sino-Korean for 20 is:', options: ['스물', '이십', '이십일', '스물하나'], correctAnswer: 1 },
      { question: '한 개 uses which number form?', options: ['하나', '한', '일', '첫'], correctAnswer: 1 },
      { question: '두 명 counts:', options: ['Animals', 'People', 'Flat objects', 'Minutes'], correctAnswer: 1 },
      { question: '얼마예요? means:', options: ['How many', 'How much (price)', 'What time', 'Where'], correctAnswer: 1 },
      { question: 'Native Korean for 11 is:', options: ['십일', '열하나', '일십일', '스물'], correctAnswer: 1 },
    ],
  },
  {
    day: 8,
    questions: [
      { question: 'Polite "yes" is:', options: ['아니요', '네', '글쎄', '응'], correctAnswer: 1 },
      { question: 'Most formal "thank you":', options: ['고마워', '감사합니다', '미안', '안녕'], correctAnswer: 1 },
      { question: '죄송합니다 means:', options: ['Excuse me / Sorry', 'Thank you', 'Hello', 'Goodbye'], correctAnswer: 0 },
      { question: '주세요 means:', options: ['Please give me', 'You\'re welcome', 'No thanks', 'Good night'], correctAnswer: 0 },
      { question: 'Response to "thank you":', options: ['주세요', '천만에요', '죄송합니다', '안녕히 가세요'], correctAnswer: 1 },
    ],
  },
  {
    day: 9,
    questions: [
      { question: '아버지 means:', options: ['Mother', 'Father', 'Brother', 'Grandfather'], correctAnswer: 1 },
      { question: '오빠 is used by:', options: ['Males to older brother', 'Females to older brother', 'Anyone to sister', 'Elders to youth'], correctAnswer: 1 },
      { question: '할머니 means:', options: ['Grandfather', 'Grandmother', 'Aunt', 'Mother'], correctAnswer: 1 },
      { question: '부모님 means:', options: ['Children', 'Parents', 'Siblings', 'Grandparents'], correctAnswer: 1 },
      { question: 'Korean sibling terms depend on:', options: ['Age only', 'Speaker gender and relative age', 'Family name', 'Location'], correctAnswer: 1 },
    ],
  },
  {
    day: 10,
    questions: [
      { question: '빨간색 is:', options: ['Blue', 'Red', 'Green', 'Yellow'], correctAnswer: 1 },
      { question: '파란색 means:', options: ['Green', 'Blue', 'Black', 'White'], correctAnswer: 1 },
      { question: 'What color suffix is used?', options: ['—색', '—이', '—님', '—에'], correctAnswer: 0 },
      { question: '검은색 is:', options: ['White', 'Black', 'Gray', 'Purple'], correctAnswer: 1 },
      { question: '무슨 색을 좋아해요? asks:', options: ['What size', 'What color you like', 'What price', 'What time'], correctAnswer: 1 },
    ],
  },
  {
    day: 11,
    questions: [
      { question: '월요일 is:', options: ['Sunday', 'Monday', 'Friday', 'Saturday'], correctAnswer: 1 },
      { question: '내일 means:', options: ['Yesterday', 'Today', 'Tomorrow', 'Weekend'], correctAnswer: 2 },
      { question: 'Hours use which number system?', options: ['Sino-Korean only', 'Native Korean + 시', 'English numbers', 'No numbers'], correctAnswer: 1 },
      { question: '오후 means:', options: ['Morning', 'Afternoon/PM', 'Midnight', 'Noon exactly'], correctAnswer: 1 },
      { question: '반 in time means:', options: ['Full hour', 'Half', 'Quarter', 'Twice'], correctAnswer: 1 },
    ],
  },
  {
    day: 12,
    questions: [
      { question: '학생이에요 follows a:', options: ['Vowel ending', 'Consonant ending', 'Verb', 'Adjective only'], correctAnswer: 1 },
      { question: '있어요 means:', options: ['To not have', 'To have/exist', 'To go', 'To eat'], correctAnswer: 1 },
      { question: 'Negative "to be" is:', options: ['아니에요', '없어요', '안 가요', '못 해요'], correctAnswer: 0 },
      { question: '의사예요 uses 예요 because:', options: ['Ends in consonant', 'Ends in vowel', 'Is past tense', 'Is a question'], correctAnswer: 1 },
      { question: '없어요 means:', options: ['To have', 'To not have/not exist', 'To like', 'To want'], correctAnswer: 1 },
    ],
  },
  {
    day: 13,
    questions: [
      { question: '가요 means:', options: ['To come', 'To go', 'To eat', 'To sleep'], correctAnswer: 1 },
      { question: '먹어요 means:', options: ['To drink', 'To eat', 'To see', 'To do'], correctAnswer: 1 },
      { question: 'Place marker for destination is:', options: ['—을', '—에', '—에서', '—하고'], correctAnswer: 1 },
      { question: '학교에 가요 means:', options: ['I eat at school', 'I go to school', 'I am at school', 'I leave school'], correctAnswer: 1 },
      { question: '자요 means:', options: ['To sleep', 'To wake', 'To walk', 'To write'], correctAnswer: 0 },
    ],
  },
  {
    day: 14,
    questions: [
      { question: '어디 means:', options: ['What', 'Where', 'When', 'Who'], correctAnswer: 1 },
      { question: '누구 means:', options: ['Why', 'How', 'Who', 'What'], correctAnswer: 2 },
      { question: '왜 means:', options: ['Why', 'Where', 'When', 'How much'], correctAnswer: 0 },
      { question: '얼마 is used for:', options: ['Time', 'Price/amount', 'Location', 'Reason'], correctAnswer: 1 },
      { question: '뭐 해요? asks:', options: ['What are you doing', 'Where are you', 'Who are you', 'When did you'], correctAnswer: 0 },
    ],
  },
  {
    day: 15,
    questions: [
      { question: '밥 can mean:', options: ['Water only', 'Rice/meal', 'Soup only', 'Meat only'], correctAnswer: 1 },
      { question: '맛있어요 means:', options: ['It\'s delicious', 'It\'s expensive', 'It\'s cold', 'It\'s spicy only'], correctAnswer: 0 },
      { question: '배고파요 means:', options: ['I\'m full', 'I\'m hungry', 'I\'m tired', 'I\'m happy'], correctAnswer: 1 },
      { question: '김치 is:', options: ['Fermented vegetable dish', 'Rice cake', 'Noodle soup', 'Fried chicken'], correctAnswer: 0 },
      { question: '목말라요 means:', options: ['I\'m thirsty', 'I\'m sick', 'I\'m lost', 'I\'m late'], correctAnswer: 0 },
    ],
  },
  {
    day: 16,
    questions: [
      { question: '이거 주세요 means:', options: ['This one please', 'Check please', 'Water please', 'Goodbye'], correctAnswer: 0 },
      { question: '계산해 주세요 means:', options: ['Menu please', 'Check/bill please', 'More food please', 'Takeout please'], correctAnswer: 1 },
      { question: '포장해 주세요 is for:', options: ['Dine in', 'Takeout', 'Reservation', 'Complaint'], correctAnswer: 1 },
      { question: '여기서 먹을게요 means:', options: ['Takeout', 'I\'ll eat here', 'Cancel order', 'Too expensive'], correctAnswer: 1 },
      { question: '메뉴 주세요 asks for:', options: ['The menu', 'The bill', 'The restroom', 'The chef'], correctAnswer: 0 },
    ],
  },
  {
    day: 17,
    questions: [
      { question: '너무 비싸요 means:', options: ['Too cheap', 'Too expensive', 'Very good', 'Sold out'], correctAnswer: 1 },
      { question: '깎아 주세요 asks for:', options: ['A discount', 'A refund', 'A receipt', 'A bag only'], correctAnswer: 0 },
      { question: '카드 돼요? asks:', options: ['Do you take card', 'Is it free', 'Is it open', 'Do you deliver'], correctAnswer: 0 },
      { question: '입어 봐도 돼요? is used when:', options: ['Buying food', 'Trying on clothes', 'Taking a taxi', 'Booking hotel'], correctAnswer: 1 },
      { question: 'Shopping "how much?" is:', options: ['몇 시예요', '얼마예요', '누구예요', '어디예요'], correctAnswer: 1 },
    ],
  },
  {
    day: 18,
    questions: [
      { question: '여기 means:', options: ['There (far)', 'Here', 'Over there (near you)', 'Inside'], correctAnswer: 1 },
      { question: '왼쪽 is:', options: ['Right', 'Left', 'Straight', 'Back'], correctAnswer: 1 },
      { question: '직진 means:', options: ['Turn left', 'Go straight', 'Turn around', 'Stop'], correctAnswer: 1 },
      { question: '옆 means:', options: ['Behind', 'Beside/next to', 'Above', 'Under'], correctAnswer: 1 },
      { question: '화장실 어디에 있어요? asks where is the:', options: ['Station', 'Restroom', 'Hospital', 'Bank'], correctAnswer: 1 },
    ],
  },
  {
    day: 19,
    questions: [
      { question: '지하철 is:', options: ['Bus', 'Subway', 'Taxi', 'Train (long distance)'], correctAnswer: 1 },
      { question: '___역에 가 주세요 is said in a:', options: ['Restaurant', 'Taxi', 'School', 'Bank'], correctAnswer: 1 },
      { question: '교통카드 is a:', options: ['Transit card', 'Driver license', 'Passport', 'Ticket stub only'], correctAnswer: 0 },
      { question: '환승 means:', options: ['Transfer between lines', 'Refund', 'Delay', 'Exit only'], correctAnswer: 0 },
      { question: '택시 is:', options: ['Taxi', 'Bus', 'Bicycle', 'Ferry'], correctAnswer: 0 },
    ],
  },
  {
    day: 20,
    questions: [
      { question: '덥다 means:', options: ['Cold (weather)', 'Hot (weather)', 'Spicy', 'Windy'], correctAnswer: 1 },
      { question: '비 와요 means:', options: ['It\'s snowing', 'It\'s raining', 'It\'s sunny', 'It\'s foggy'], correctAnswer: 1 },
      { question: '춥다 means:', options: ['Hot', 'Cold', 'Humid', 'Dry'], correctAnswer: 1 },
      { question: '우산 is:', options: ['Umbrella', 'Sunscreen', 'Coat', 'Fan'], correctAnswer: 0 },
      { question: '오늘 날씨 어때요? asks about:', options: ['Today\'s weather', 'Tomorrow\'s plan', 'Yesterday\'s meal', 'Your name'], correctAnswer: 0 },
    ],
  },
  {
    day: 21,
    questions: [
      { question: '취미 means:', options: ['Job', 'Hobby', 'Family', 'School'], correctAnswer: 1 },
      { question: '영화 보다 means:', options: ['Listen to music', 'Watch movies', 'Read books', 'Play sports'], correctAnswer: 1 },
      { question: '취미가 뭐예요? asks:', options: ['Your hobby', 'Your age', 'Your address', 'Your phone'], correctAnswer: 0 },
      { question: '여행하다 means:', options: ['To travel', 'To cook', 'To sleep', 'To study'], correctAnswer: 0 },
      { question: '주말에 뭐 해요? asks about:', options: ['Weekend plans', 'Morning routine', 'Birthday', 'Work meeting'], correctAnswer: 0 },
    ],
  },
  {
    day: 22,
    questions: [
      { question: '갔어요 is past tense of:', options: ['오다', '가다', '먹다', '자다'], correctAnswer: 1 },
      { question: '먹었어요 means:', options: ['Will eat', 'Ate', 'Eating now', 'Don\'t eat'], correctAnswer: 1 },
      { question: 'Past tense adds before 어요:', options: ['—을', '—았/었', '—ㄹ', '—고'], correctAnswer: 1 },
      { question: '봤어요 means:', options: ['Saw/watched', 'Will see', 'Can see', 'Don\'t see'], correctAnswer: 0 },
      { question: '재미있었어요 means:', options: ['It was fun', 'It will be fun', 'It is boring', 'It is scary'], correctAnswer: 0 },
    ],
  },
  {
    day: 23,
    questions: [
      { question: '갈 거예요 means:', options: ['Went', 'Will go', 'Going now', 'Don\'t go'], correctAnswer: 1 },
      { question: 'Future tense pattern is:', options: ['—았어요', '—(으)ㄹ 거예요', '—고 있어요', '—세요'], correctAnswer: 1 },
      { question: '내일 뭐 할 거예요? asks about:', options: ['Tomorrow\'s plans', 'Yesterday', 'Last year', 'Right now'], correctAnswer: 0 },
      { question: '먹을 거예요 means:', options: ['Will eat', 'Ate', 'Is eating', 'Can\'t eat'], correctAnswer: 0 },
      { question: '한국에 갈 거예요 expresses:', options: ['Past trip', 'Future plan to go to Korea', 'Currently in Korea', 'Don\'t like Korea'], correctAnswer: 1 },
    ],
  },
  {
    day: 24,
    questions: [
      { question: 'Korean adjectives conjugate like:', options: ['Nouns only', 'Verbs', 'Numbers', 'Particles'], correctAnswer: 1 },
      { question: '예쁘다 means:', options: ['Pretty', 'Ugly', 'Big', 'Small'], correctAnswer: 0 },
      { question: '맵다 describes:', options: ['Spicy taste', 'Sweet taste', 'Weather hot', 'Large size'], correctAnswer: 0 },
      { question: '재미있다 means:', options: ['Boring', 'Fun/interesting', 'Difficult', 'Easy'], correctAnswer: 1 },
      { question: '좋아요 often means:', options: ['Good/I like it', 'Bad', 'Expensive', 'Cold'], correctAnswer: 0 },
    ],
  },
  {
    day: 25,
    questions: [
      { question: '머리 means:', options: ['Hand', 'Head', 'Foot', 'Stomach'], correctAnswer: 1 },
      { question: '아파요 means:', options: ['It hurts/I\'m sick', 'I\'m happy', 'I\'m full', 'I\'m fine'], correctAnswer: 0 },
      { question: '병원 is:', options: ['Pharmacy', 'Hospital', 'School', 'Restaurant'], correctAnswer: 1 },
      { question: '감기 is:', options: ['Fever', 'Cold (illness)', 'Cough only', 'Headache only'], correctAnswer: 1 },
      { question: '약 means:', options: ['Medicine', 'Water', 'Food', 'Exercise'], correctAnswer: 0 },
    ],
  },
  {
    day: 26,
    questions: [
      { question: '선생님 means:', options: ['Student', 'Teacher', 'Doctor', 'Boss'], correctAnswer: 1 },
      { question: '공부하다 means:', options: ['To work', 'To study', 'To rest', 'To travel'], correctAnswer: 1 },
      { question: '회사 is:', options: ['School', 'Company', 'Hospital', 'Home'], correctAnswer: 1 },
      { question: '바쁘다 means:', options: ['Busy', 'Free/idle', 'Happy', 'Tired only'], correctAnswer: 0 },
      { question: '일하다 means:', options: ['To work', 'To play', 'To sleep', 'To eat'], correctAnswer: 0 },
    ],
  },
  {
    day: 27,
    questions: [
      { question: '여보세요? is used when:', options: ['Answering the phone', 'Meeting in person', 'Writing email', 'Ordering food'], correctAnswer: 0 },
      { question: '카톡 refers to:', options: ['KakaoTalk', 'Instagram', 'Email', 'Fax'], correctAnswer: 0 },
      { question: '나중에 전화할게요 means:', options: ['I\'ll call later', 'Wrong number', 'Hang up now', 'No signal'], correctAnswer: 0 },
      { question: '잠시만요 means:', options: ['Hold on/wait a moment', 'Goodbye forever', 'Wrong number', 'Call again tomorrow'], correctAnswer: 0 },
      { question: '문자 is:', options: ['Text message', 'Letter mail only', 'Voice call', 'Video only'], correctAnswer: 0 },
    ],
  },
  {
    day: 28,
    questions: [
      { question: 'Honorific "to eat" is:', options: ['먹다', '드시다', '마시다', '자다'], correctAnswer: 1 },
      { question: '—님 adds:', options: ['Honor/respect', 'Past tense', 'Question', 'Negation'], correctAnswer: 0 },
      { question: '앉으세요 means:', options: ['Please sit', 'Please stand', 'Please leave', 'Please eat'], correctAnswer: 0 },
      { question: '선생님 uses:', options: ['Honorific suffix 님', 'Casual 반말', 'Past tense', 'Future tense'], correctAnswer: 0 },
      { question: 'Honorifics are used for:', options: ['Elders and respected people', 'Only children', 'Only foreigners', 'Never in Korean'], correctAnswer: 0 },
    ],
  },
  {
    day: 29,
    questions: [
      { question: '일어나다 means:', options: ['Wake up', 'Go to sleep', 'Eat breakfast', 'Leave work'], correctAnswer: 0 },
      { question: '출근하다 means:', options: ['Go to work', 'Leave work', 'Go to school only', 'Go home'], correctAnswer: 0 },
      { question: '저녁 often refers to:', options: ['Morning', 'Lunch', 'Evening/dinner', 'Midnight'], correctAnswer: 2 },
      { question: '퇴근하다 means:', options: ['Leave/finish work', 'Start work', 'Overtime start', 'Lunch break'], correctAnswer: 0 },
      { question: '몇 시에 자요? asks:', options: ['What time you sleep', 'What time you wake', 'What you eat', 'Where you work'], correctAnswer: 0 },
    ],
  },
  {
    day: 30,
    questions: [
      { question: '수고하셨습니다 expresses:', options: ['Congratulations on effort', 'Goodbye angrily', 'Question', 'Apology'], correctAnswer: 0 },
      { question: '화이팅! means:', options: ['Good luck / You can do it', 'Good night', 'I\'m sorry', 'Thank you for food'], correctAnswer: 0 },
      { question: '계속 공부할 거예요 means:', options: ['I will keep studying', 'I will stop studying', 'I never studied', 'Study is easy'], correctAnswer: 0 },
      { question: 'After 30 days you should:', options: ['Stop entirely', 'Keep practicing Korean', 'Forget Hangul', 'Only use English'], correctAnswer: 1 },
      { question: '안녕하세요! 저는 ___입니다 is:', options: ['Self-introduction pattern', 'Goodbye phrase', 'Food order', 'Weather question'], correctAnswer: 0 },
    ],
  },
];

module.exports = { lessons, quizzes };
