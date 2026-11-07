// Jednotky 7–10 (A2–B1)
window.UNITS.push(
{ id: 7, title: "Travel", sk: "Cestovanie a hotel", emoji: "✈️", color: "#0F6E8C",
  words: [
    { en: "ticket", sk: "lístok", e: "🎫" }, { en: "airport", sk: "letisko", e: "🛫" }, { en: "suitcase", sk: "kufor", e: "🧳" }, { en: "passport", sk: "pas", e: "🛂" },
    { en: "hotel", sk: "hotel", e: "🏨" }, { en: "room", sk: "izba", e: "🛏️" }, { en: "train", sk: "vlak", e: "🚆" }, { en: "holiday", sk: "dovolenka", e: "🏖️" }],
  phrases: [
    { en: "I have a reservation", sk: "Mám rezerváciu" }, { en: "What time does the train leave", sk: "O koľkej odchádza vlak" },
    { en: "Where can I buy a ticket", sk: "Kde si môžem kúpiť lístok" }, { en: "We are going on holiday", sk: "Ideme na dovolenku" }],
  gaps: [{ t: "I have a ___ at the hotel.", a: "reservation", o: ["reservation", "suitcase", "holiday"] }, { t: "Where can I buy a ___?", a: "ticket", o: ["ticket", "room", "water"] }],
  dialogue: [
    { who: "bot", en: "Good evening. Can I help you?", sk: "Dobrý večer. Môžem vám pomôcť?" },
    { who: "me", en: "I have a reservation for two nights.", sk: "Mám rezerváciu na dve noci." },
    { who: "bot", en: "May I see your passport, please?", sk: "Môžem vidieť váš pas?" },
    { who: "me", en: "Here you are.", sk: "Nech sa páči." },
    { who: "bot", en: "Your room is on the second floor.", sk: "Vaša izba je na druhom poschodí." },
    { who: "me", en: "Thank you very much.", sk: "Veľmi pekne ďakujem." }],
  reading: { title: "Going on holiday", text: "We are going on holiday by train. I have my passport, my ticket and a big suitcase. The hotel is near the station. Our room is small but nice.", sk: "Ideme na dovolenku vlakom. Mám pas, lístok a veľký kufor. Hotel je blízko stanice. Naša izba je malá, ale pekná." } },

{ id: 8, title: "Health", sk: "Zdravie a telo", emoji: "🩺", color: "#B03A6B",
  words: [
    { en: "doctor", sk: "lekár", e: "👨‍⚕️" }, { en: "headache", sk: "bolesť hlavy", e: "🤕" }, { en: "medicine", sk: "liek", e: "💊" }, { en: "fever", sk: "horúčka", e: "🌡️" },
    { en: "hand", sk: "ruka", e: "✋" }, { en: "tooth", sk: "zub", e: "🦷" }, { en: "healthy", sk: "zdravý", e: "🥗" }, { en: "rest", sk: "odpočívať", e: "🛋️" }],
  phrases: [
    { en: "I don't feel well", sk: "Necítim sa dobre" }, { en: "I have a headache", sk: "Bolí ma hlava" },
    { en: "You should see a doctor", sk: "Mal by si ísť k lekárovi" }, { en: "Take this medicine twice a day", sk: "Užívaj tento liek dvakrát denne" }],
  gaps: [{ t: "I don't feel ___.", a: "well", o: ["well", "tooth", "train"] }, { t: "You should see a ___.", a: "doctor", o: ["doctor", "hotel", "map"] }],
  dialogue: [
    { who: "bot", en: "What's the matter?", sk: "Čo sa deje?" },
    { who: "me", en: "I have a headache and a fever.", sk: "Bolí ma hlava a mám horúčku." },
    { who: "bot", en: "How long have you felt like this?", sk: "Ako dlho sa tak cítiš?" },
    { who: "me", en: "Since yesterday morning.", sk: "Od včerajšieho rána." },
    { who: "bot", en: "Take this medicine and rest at home.", sk: "Uži tento liek a odpočívaj doma." }],
  reading: { title: "At the doctor", text: "Today I don't feel well. I have a headache and a fever. The doctor says I should rest and take medicine. Tomorrow I want to be healthy again.", sk: "Dnes sa necítim dobre. Bolí ma hlava a mám horúčku. Lekár hovorí, že mám odpočívať a brať liek. Zajtra chcem byť zasa zdravý." } },

{ id: 9, title: "Shopping", sk: "Nákupy a oblečenie", emoji: "🛍️", color: "#7A5C00",
  words: [
    { en: "shop", sk: "obchod", e: "🏪" }, { en: "price", sk: "cena", e: "🏷️" }, { en: "cheap", sk: "lacný", e: "🪙" }, { en: "expensive", sk: "drahý", e: "💎" },
    { en: "shoes", sk: "topánky", e: "👟" }, { en: "jacket", sk: "bunda", e: "🧥" }, { en: "size", sk: "veľkosť", e: "📏" }, { en: "money", sk: "peniaze", e: "💶" }],
  phrases: [
    { en: "How much is this jacket", sk: "Koľko stojí táto bunda" }, { en: "Do you have a bigger size", sk: "Máte väčšiu veľkosť" },
    { en: "It is too expensive", sk: "Je to príliš drahé" }, { en: "I will take it", sk: "Zoberiem si to" }],
  gaps: [{ t: "How ___ is this jacket?", a: "much", o: ["much", "many", "size"] }, { t: "It is too ___.", a: "expensive", o: ["expensive", "shoes", "hand"] }],
  dialogue: [
    { who: "bot", en: "Can I help you?", sk: "Môžem vám pomôcť?" },
    { who: "me", en: "How much is this jacket?", sk: "Koľko stojí táto bunda?" },
    { who: "bot", en: "It is fifty euros.", sk: "Stojí päťdesiat eur." },
    { who: "me", en: "Do you have a bigger size?", sk: "Máte väčšiu veľkosť?" },
    { who: "bot", en: "Yes, here you are.", sk: "Áno, nech sa páči." },
    { who: "me", en: "Great, I will take it.", sk: "Skvelé, zoberiem si to." }],
  reading: { title: "New shoes", text: "I need new shoes. The shop in town has many shoes but the price is high. I find cheap shoes in my size. I pay with money and I am happy.", sk: "Potrebujem nové topánky. Obchod v meste má veľa topánok, ale cena je vysoká. Nájdem lacné topánky v mojej veľkosti. Zaplatím peniazmi a som šťastný." } },

{ id: 10, title: "Weather", sk: "Počasie a príroda", emoji: "⛅", color: "#3A7D44",
  words: [
    { en: "sun", sk: "slnko", e: "☀️" }, { en: "rain", sk: "dážď", e: "🌧️" }, { en: "snow", sk: "sneh", e: "❄️" }, { en: "wind", sk: "vietor", e: "💨" },
    { en: "cold", sk: "zima (chlad)", e: "🥶" }, { en: "hot", sk: "horúco", e: "🥵" }, { en: "forest", sk: "les", e: "🌲" }, { en: "mountain", sk: "hora", e: "⛰️" }],
  phrases: [
    { en: "What is the weather like today", sk: "Aké je dnes počasie" }, { en: "It is going to rain tomorrow", sk: "Zajtra bude pršať" },
    { en: "I love walking in the forest", sk: "Rád chodím po lese" }, { en: "It is very cold in the mountains", sk: "V horách je veľká zima" }],
  gaps: [{ t: "It is going to ___ tomorrow.", a: "rain", o: ["rain", "forest", "price"] }, { t: "What is the ___ like today?", a: "weather", o: ["weather", "doctor", "ticket"] }],
  dialogue: [
    { who: "bot", en: "What is the weather like today?", sk: "Aké je dnes počasie?" },
    { who: "me", en: "It is sunny but windy.", sk: "Je slnečno, ale veterno." },
    { who: "bot", en: "Is it going to rain tomorrow?", sk: "Bude zajtra pršať?" },
    { who: "me", en: "Yes, and it will be cold.", sk: "Áno, a bude zima." },
    { who: "bot", en: "Then let's stay at home and watch a film.", sk: "Tak ostaňme doma a pozrime film." }],
  reading: { title: "A day in the mountains", text: "Today the sun is out and the wind is not strong. We walk in the forest and then go up the mountain. At the top it is cold. Tomorrow there will be snow.", sk: "Dnes svieti slnko a vietor nie je silný. Prechádzame sa lesom a potom ideme hore na horu. Navrchu je zima. Zajtra bude sneh." } }
);
Object.assign(window.EXTRA_DICT, { "but": "ale", "will": "(budúci čas)", "be": "byť", "out": "von / vonku", "top": "vrchol", "up": "hore", "pay": "platiť", "need": "potrebovať", "find": "nájsť", "happy": "šťastný", "high": "vysoký / vysoká", "many": "veľa", "today": "dnes", "again": "znova", "should": "mal by", "feel": "cítiť sa", "by": "(dopravným prostriedkom)", "not": "nie", "strong": "silný", "walk": "prechádzať sa", "town": "mesto", "our": "náš" });
