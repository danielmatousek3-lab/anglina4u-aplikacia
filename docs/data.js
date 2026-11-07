// Obsah platformy Anglina4U – všetko je vlastný, pôvodný obsah.
window.UNITS = [
  { id: 1, title: "Hello!", sk: "Pozdravy a zoznámenie", emoji: "👋", color: "#2B4A8F",
    words: [
      { en: "hello", sk: "ahoj", e: "👋" }, { en: "goodbye", sk: "dovidenia", e: "🫡" },
      { en: "please", sk: "prosím", e: "🙏" }, { en: "thank you", sk: "ďakujem", e: "💐" },
      { en: "yes", sk: "áno", e: "✅" }, { en: "no", sk: "nie", e: "❌" },
      { en: "friend", sk: "kamarát", e: "🧑‍🤝‍🧑" }, { en: "name", sk: "meno", e: "🏷️" }
    ],
    phrases: [
      { en: "What is your name", sk: "Ako sa voláš" }, { en: "My name is Anna", sk: "Volám sa Anna" },
      { en: "Nice to meet you", sk: "Teší ma" }, { en: "How are you today", sk: "Ako sa dnes máš" }
    ],
    gaps: [{ t: "Nice to ___ you.", a: "meet", o: ["meet", "eat", "see"] }, { t: "My ___ is Tom.", a: "name", o: ["name", "friend", "yes"] }],
    dialogue: [
      { who: "bot", en: "Hi! I'm Bruno. What is your name?", sk: "Ahoj! Som Bruno. Ako sa voláš?" },
      { who: "me", en: "My name is Anna.", sk: "Volám sa Anna." },
      { who: "bot", en: "Nice to meet you, Anna! How are you today?", sk: "Teší ma, Anna! Ako sa dnes máš?" },
      { who: "me", en: "I'm fine, thank you.", sk: "Mám sa dobre, ďakujem." },
      { who: "bot", en: "Great! Let's learn English together.", sk: "Skvelé! Poďme sa spolu učiť anglicky." }
    ],
    reading: { title: "A new friend", text: "Tom is my friend. His name is Tom and he is nice. Every day I say hello to Tom. He says hello to me. We are friends.", sk: "Tom je môj kamarát. Volá sa Tom a je milý. Každý deň pozdravím Toma. On pozdraví mňa. Sme kamaráti." } },

  { id: 2, title: "My family", sk: "Rodina a ľudia", emoji: "👨‍👩‍👧", color: "#A3182B",
    words: [
      { en: "mother", sk: "mama", e: "👩" }, { en: "father", sk: "otec", e: "👨" },
      { en: "sister", sk: "sestra", e: "👧" }, { en: "brother", sk: "brat", e: "👦" },
      { en: "grandmother", sk: "babka", e: "👵" }, { en: "baby", sk: "bábätko", e: "👶" },
      { en: "dog", sk: "pes", e: "🐶" }, { en: "house", sk: "dom", e: "🏠" }
    ],
    phrases: [
      { en: "This is my family", sk: "Toto je moja rodina" }, { en: "I have a little sister", sk: "Mám malú sestru" },
      { en: "My father is tall", sk: "Môj otec je vysoký" }, { en: "We live in a big house", sk: "Bývame vo veľkom dome" }
    ],
    gaps: [{ t: "I have a little ___.", a: "sister", o: ["sister", "house", "please"] }, { t: "We live in a big ___.", a: "house", o: ["house", "baby", "name"] }],
    dialogue: [
      { who: "bot", en: "Do you have a brother or a sister?", sk: "Máš brata alebo sestru?" },
      { who: "me", en: "I have a little sister.", sk: "Mám malú sestru." },
      { who: "bot", en: "How old is she?", sk: "Koľko má rokov?" },
      { who: "me", en: "She is five years old.", sk: "Má päť rokov." },
      { who: "bot", en: "Nice! Do you have a dog?", sk: "Pekné! Máš psa?" },
      { who: "me", en: "Yes, I have a dog.", sk: "Áno, mám psa." }
    ],
    reading: { title: "My family", text: "This is my family. My mother and my father are at home. I have a sister and a brother. My grandmother lives in a small house. We have a dog. The dog is my friend.", sk: "Toto je moja rodina. Moja mama a otec sú doma. Mám sestru a brata. Moja babka býva v malom dome. Máme psa. Pes je môj kamarát." } },

  { id: 3, title: "Food & café", sk: "Jedlo a objednávanie", emoji: "☕", color: "#C77D0A",
    words: [
      { en: "water", sk: "voda", e: "💧" }, { en: "coffee", sk: "káva", e: "☕" },
      { en: "bread", sk: "chlieb", e: "🍞" }, { en: "apple", sk: "jablko", e: "🍎" },
      { en: "cheese", sk: "syr", e: "🧀" }, { en: "soup", sk: "polievka", e: "🍲" },
      { en: "menu", sk: "jedálny lístok", e: "📋" }, { en: "bill", sk: "účet", e: "🧾" }
    ],
    phrases: [
      { en: "I would like a coffee", sk: "Dal by som si kávu" }, { en: "Can I have the menu", sk: "Môžem dostať jedálny lístok" },
      { en: "The soup is delicious", sk: "Polievka je výborná" }, { en: "The bill please", sk: "Účet, prosím" }
    ],
    gaps: [{ t: "I would ___ a coffee.", a: "like", o: ["like", "bill", "water"] }, { t: "The ___ please.", a: "bill", o: ["bill", "bread", "dog"] }],
    dialogue: [
      { who: "bot", en: "Good morning! What would you like?", sk: "Dobré ráno! Čo si dáte?" },
      { who: "me", en: "I would like a coffee, please.", sk: "Dal by som si kávu, prosím." },
      { who: "bot", en: "Anything to eat?", sk: "Niečo na jedenie?" },
      { who: "me", en: "Yes, bread and cheese.", sk: "Áno, chlieb a syr." },
      { who: "bot", en: "Of course. Here you are.", sk: "Samozrejme. Nech sa páči." },
      { who: "me", en: "The bill, please.", sk: "Účet, prosím." }
    ],
    reading: { title: "At the café", text: "On Saturday I go to a small café. I would like a coffee and an apple. The soup is delicious here. My friend wants water and bread with cheese. Then we ask for the bill.", sk: "V sobotu idem do malej kaviarne. Dal by som si kávu a jablko. Polievka je tu výborná. Môj kamarát chce vodu a chlieb so syrom. Potom si pýtame účet." } },

  { id: 4, title: "In the city", sk: "Mesto a orientácia", emoji: "🏙️", color: "#1F7A5C",
    words: [
      { en: "street", sk: "ulica", e: "🛣️" }, { en: "bus", sk: "autobus", e: "🚌" },
      { en: "station", sk: "stanica", e: "🚉" }, { en: "school", sk: "škola", e: "🏫" },
      { en: "left", sk: "vľavo", e: "⬅️" }, { en: "right", sk: "vpravo", e: "➡️" },
      { en: "map", sk: "mapa", e: "🗺️" }, { en: "near", sk: "blízko", e: "📍" }
    ],
    phrases: [
      { en: "Where is the station", sk: "Kde je stanica" }, { en: "Turn left at the school", sk: "Odbočte vľavo pri škole" },
      { en: "It is very near", sk: "Je to veľmi blízko" }, { en: "I take the bus to school", sk: "Do školy chodím autobusom" }
    ],
    gaps: [{ t: "Turn ___ at the school.", a: "left", o: ["left", "map", "soup"] }, { t: "Where is the ___?", a: "station", o: ["station", "coffee", "sister"] }],
    dialogue: [
      { who: "bot", en: "Excuse me, where is the station?", sk: "Prepáčte, kde je stanica?" },
      { who: "me", en: "Go straight and turn left.", sk: "Choďte rovno a odbočte vľavo." },
      { who: "bot", en: "Is it far from here?", sk: "Je to odtiaľto ďaleko?" },
      { who: "me", en: "No, it is very near.", sk: "Nie, je to veľmi blízko." },
      { who: "bot", en: "Thank you very much!", sk: "Veľmi pekne ďakujem!" }
    ],
    reading: { title: "My way to school", text: "Every morning I take the bus to school. The bus stops near the station. Then I turn right on a long street. My school is near the map shop. I like my way to school.", sk: "Každé ráno idem autobusom do školy. Autobus zastaví blízko stanice. Potom odbočím vpravo na dlhej ulici. Moja škola je blízko obchodu s mapami. Mám rád cestu do školy." } },

  { id: 5, title: "My day", sk: "Denný režim a čas", emoji: "⏰", color: "#6B3FA0",
    words: [
      { en: "morning", sk: "ráno", e: "🌅" }, { en: "night", sk: "noc", e: "🌙" },
      { en: "breakfast", sk: "raňajky", e: "🥣" }, { en: "work", sk: "práca", e: "💼" },
      { en: "sleep", sk: "spať", e: "😴" }, { en: "clock", sk: "hodiny", e: "🕒" },
      { en: "early", sk: "skoro", e: "🐓" }, { en: "late", sk: "neskoro", e: "🦉" }
    ],
    phrases: [
      { en: "I get up at seven", sk: "Vstávam o siedmej" }, { en: "I have breakfast at home", sk: "Raňajkujem doma" },
      { en: "She goes to work early", sk: "Ona chodí do práce skoro" }, { en: "We sleep at ten", sk: "Spíme o desiatej" }
    ],
    gaps: [{ t: "I get ___ at seven.", a: "up", o: ["up", "late", "map"] }, { t: "We ___ at ten.", a: "sleep", o: ["sleep", "clock", "cheese"] }],
    dialogue: [
      { who: "bot", en: "What time do you get up?", sk: "O koľkej vstávaš?" },
      { who: "me", en: "I get up at seven.", sk: "Vstávam o siedmej." },
      { who: "bot", en: "Do you have breakfast at home?", sk: "Raňajkuješ doma?" },
      { who: "me", en: "Yes, I do.", sk: "Áno, doma." },
      { who: "bot", en: "And when do you go to bed?", sk: "A kedy ideš spať?" },
      { who: "me", en: "I sleep at ten.", sk: "Spím o desiatej." }
    ],
    reading: { title: "A busy day", text: "In the morning I get up early. I have breakfast and I go to work. At night I am tired and I sleep at ten. The clock says it is late. Tomorrow is a new day.", sk: "Ráno vstávam skoro. Raňajkujem a idem do práce. V noci som unavený a spím o desiatej. Hodiny ukazujú, že je neskoro. Zajtra je nový deň." } },

  { id: 6, title: "Free time", sk: "Záľuby a voľný čas", emoji: "🎸", color: "#D1493F",
    words: [
      { en: "music", sk: "hudba", e: "🎵" }, { en: "book", sk: "kniha", e: "📚" },
      { en: "football", sk: "futbal", e: "⚽" }, { en: "swim", sk: "plávať", e: "🏊" },
      { en: "film", sk: "film", e: "🎬" }, { en: "draw", sk: "kresliť", e: "🎨" },
      { en: "weekend", sk: "víkend", e: "🎉" }, { en: "park", sk: "park", e: "🌳" }
    ],
    phrases: [
      { en: "I like to read books", sk: "Rád čítam knihy" }, { en: "What do you do at the weekend", sk: "Čo robíš cez víkend" },
      { en: "We play football in the park", sk: "Hráme futbal v parku" }, { en: "She loves music and films", sk: "Miluje hudbu a filmy" }
    ],
    gaps: [{ t: "We play ___ in the park.", a: "football", o: ["football", "bread", "bill"] }, { t: "I like to ___ books.", a: "read", o: ["read", "swim", "eat"] }],
    dialogue: [
      { who: "bot", en: "What do you do at the weekend?", sk: "Čo robíš cez víkend?" },
      { who: "me", en: "I play football in the park.", sk: "Hrám futbal v parku." },
      { who: "bot", en: "Do you like music?", sk: "Máš rád hudbu?" },
      { who: "me", en: "Yes, I love music and films.", sk: "Áno, milujem hudbu a filmy." },
      { who: "bot", en: "Me too! Let's watch a film.", sk: "Aj ja! Pozrime si film." }
    ],
    reading: { title: "The weekend", text: "At the weekend I do many things. I play football in the park and I like to swim. In the evening I read a book or watch a film. Music is my best friend.", sk: "Cez víkend robím veľa vecí. Hrám futbal v parku a rád plávam. Večer čítam knihu alebo pozerám film. Hudba je môj najlepší kamarát." } }
];

// Doplnkový slovník pre čítanie (klik na slovo)
window.EXTRA_DICT = {
  "is": "je", "are": "sú / si", "am": "som", "the": "(člen)", "a": "(člen) jeden", "an": "(člen) jeden", "and": "a", "he": "on", "she": "ona", "we": "my", "i": "ja",
  "my": "môj", "his": "jeho", "to": "do / k", "in": "v", "at": "o / pri / v", "on": "na", "of": "z / (2. pád)", "with": "s", "every": "každý", "day": "deň", "says": "hovorí", "say": "hovoriť",
  "nice": "milý / pekný", "this": "toto", "have": "mať", "has": "má", "live": "bývať", "lives": "býva", "small": "malý", "big": "veľký", "little": "malý",
  "go": "ísť", "goes": "ide", "like": "mať rád", "would": "by", "here": "tu", "then": "potom", "ask": "pýtať sa", "for": "pre / za", "want": "chcieť", "wants": "chce",
  "it": "to", "very": "veľmi", "bus": "autobus", "take": "ísť (dopravou)", "stops": "zastaví", "turn": "odbočiť", "long": "dlhý", "get": "dostať / vstať", "up": "hore",
  "says it": "hovorí", "tired": "unavený", "tomorrow": "zajtra", "new": "nový", "many": "veľa", "things": "veci", "do": "robiť", "or": "alebo", "best": "najlepší",
  "evening": "večer", "watch": "pozerať", "play": "hrať", "read": "čítať", "love": "milovať", "loves": "miluje", "saturday": "sobota", "home": "doma", "shop": "obchod",
  "way": "cesta", "that": "že / ten", "from": "z / od", "not": "nie", "they": "oni", "you": "ty", "your": "tvoj", "me": "mňa / mne", "good": "dobrý", "fine": "dobre", "great": "skvelé",
  "together": "spolu", "learn": "učiť sa", "english": "angličtina", "today": "dnes", "old": "starý", "years": "roky", "tall": "vysoký", "delicious": "výborný", "far": "ďaleko",
  "straight": "rovno", "excuse": "prepáčte", "time": "čas", "what": "čo", "where": "kde", "when": "kedy", "how": "ako", "who": "kto", "do you": "ty", "weekend": "víkend"
};

// Úvodný test úrovne (A1 – C1)
window.LEVEL_TEST = [
  { l: "A1", q: "She ___ a teacher.", o: ["is", "are", "am"], a: 0 },
  { l: "A1", q: "I ___ from Slovakia.", o: ["am", "is", "be"], a: 0 },
  { l: "A1", q: "How ___ are you?", o: ["old", "age", "years"], a: 0 },
  { l: "A2", q: "Yesterday we ___ to the cinema.", o: ["went", "go", "goes"], a: 0 },
  { l: "A2", q: "There ___ two apples on the table.", o: ["are", "is", "be"], a: 0 },
  { l: "A2", q: "I can't find my keys. ___ are they?", o: ["Where", "When", "Who"], a: 0 },
  { l: "B1", q: "If it rains tomorrow, we ___ at home.", o: ["will stay", "stay", "stayed"], a: 0 },
  { l: "B1", q: "I have lived here ___ 2019.", o: ["since", "for", "from"], a: 0 },
  { l: "B1", q: "She asked me ___ I wanted tea.", o: ["if", "that", "what"], a: 0 },
  { l: "B2", q: "He suggested ___ a taxi.", o: ["taking", "to take", "take"], a: 0 },
  { l: "B2", q: "By the time we arrived, the film ___.", o: ["had started", "started", "has started"], a: 0 },
  { l: "B2", q: "I wish I ___ more free time.", o: ["had", "have", "will have"], a: 0 },
  { l: "C1", q: "Hardly ___ the door when the phone rang.", o: ["had she opened", "she opened", "she had opened"], a: 0 },
  { l: "C1", q: "The proposal, ___ was widely criticised, was withdrawn.", o: ["which", "what", "who"], a: 0 },
  { l: "C1", q: "Had I known, I ___ differently.", o: ["would have acted", "would act", "had acted"], a: 0 }
];

window.ACHIEVEMENTS = [
  { id: "first", e: "🐾", t: "Prvé kroky", d: "Dokonči prvú lekciu" },
  { id: "streak3", e: "🔥", t: "Tri dni v rade", d: "Séria 3 dni" },
  { id: "streak7", e: "🌋", t: "Týždeň s buldogom", d: "Séria 7 dní" },
  { id: "xp100", e: "⭐", t: "100 XP", d: "Získaj 100 XP" },
  { id: "xp500", e: "🏅", t: "500 XP", d: "Získaj 500 XP" },
  { id: "words20", e: "📖", t: "Zberateľ slov", d: "Nauč sa 20 slovíčok" },
  { id: "unit1", e: "🎓", t: "Prvá jednotka", d: "Dokonči všetky lekcie jednotky" },
  { id: "talk", e: "💬", t: "Zhovorčivý", d: "Dokonči rozhovor s Brunom" },
  { id: "perfect", e: "💎", t: "Bez chyby", d: "Lekcia bez jedinej chyby" },
  { id: "test", e: "🧭", t: "Poznám svoju úroveň", d: "Urob test úrovne" }
];
window.ACHIEVEMENTS.push({ id: "gram", e: "📐", t: "Gramatik", d: "Splň cvičenia v 5 gramatických témach" });
