/* Business English A1–C1: 20 jednotiek (slová, frázy, vety na doplnenie, dialóg, úloha). Vlastný pôvodný obsah. */
window.BIZ = [
/* ---------------- A1 ---------------- */
{ id: "b01", lvl: "A1", emoji: "🤝", title: "Meeting colleagues", sk: "Zoznámenie v práci",
  words: [
    { en: "colleague", sk: "kolega" }, { en: "manager", sk: "vedúci" }, { en: "boss", sk: "šéf" }, { en: "company", sk: "firma" },
    { en: "team", sk: "tím" }, { en: "employee", sk: "zamestnanec" }, { en: "customer", sk: "zákazník" }, { en: "job", sk: "práca, zamestnanie" }],
  phrases: [
    { en: "I work for a small company", sk: "Pracujem pre malú firmu" }, { en: "This is my colleague Tom", sk: "Toto je môj kolega Tom" },
    { en: "I am the new manager", sk: "Som nový vedúci" }, { en: "Nice to meet you", sk: "Teší ma" }],
  gaps: [{ t: "I work ___ a bank.", a: "for", o: ["for", "on", "of"] }, { t: "This is our new ___, Mr Brown.", a: "manager", o: ["manager", "table", "email"] }],
  dialogue: [
    { who: "bot", en: "Hello, I'm Helen. I work in sales.", sk: "Dobrý deň, som Helen. Pracujem v obchode." },
    { who: "me", en: "Nice to meet you. I'm Marek.", sk: "Teší ma. Som Marek." },
    { who: "bot", en: "What do you do, Marek?", sk: "Čím sa živíš, Marek?" },
    { who: "me", en: "I'm an accountant. I work for a small company.", sk: "Som účtovník. Pracujem pre malú firmu." },
    { who: "bot", en: "That's interesting. This is my colleague, Tom.", sk: "To je zaujímavé. Toto je môj kolega Tom." },
    { who: "me", en: "Hello, Tom. Nice to meet you.", sk: "Dobrý deň, Tom. Teší ma." }],
  task: { sk: "Predstav sa kolegovi: meno, firma, práca (3 vety).", model: "Hello, I'm Marek. I work for a small company. I'm an accountant." } },
{ id: "b02", lvl: "A1", emoji: "🏢", title: "The office", sk: "Kancelária",
  words: [
    { en: "desk", sk: "pracovný stôl" }, { en: "computer", sk: "počítač" }, { en: "printer", sk: "tlačiareň" }, { en: "phone", sk: "telefón" },
    { en: "meeting room", sk: "zasadacia miestnosť" }, { en: "folder", sk: "zložka" }, { en: "pen", sk: "pero" }, { en: "chair", sk: "stolička" }],
  phrases: [
    { en: "This is my desk", sk: "Toto je môj stôl" }, { en: "The printer is broken", sk: "Tlačiareň je pokazená" },
    { en: "Where is the meeting room", sk: "Kde je zasadacia miestnosť" }, { en: "I need a pen", sk: "Potrebujem pero" }],
  gaps: [{ t: "I work on my ___ every day.", a: "computer", o: ["computer", "chair", "folder"] }, { t: "The ___ is in room two.", a: "printer", o: ["printer", "boss", "team"] }],
  dialogue: [
    { who: "bot", en: "Welcome to the office. This is your desk.", sk: "Vitajte v kancelárii. Toto je váš stôl." },
    { who: "me", en: "Thank you. Where is the printer?", sk: "Ďakujem. Kde je tlačiareň?" },
    { who: "bot", en: "The printer is next to the meeting room.", sk: "Tlačiareň je vedľa zasadacej miestnosti." },
    { who: "me", en: "And where is the toilet?", sk: "A kde je toaleta?" },
    { who: "bot", en: "It's on the left.", sk: "Je naľavo." },
    { who: "me", en: "Great. Thanks for your help.", sk: "Skvelé. Ďakujem za pomoc." }],
  task: { sk: "Opíš svoj pracovný stôl (3 vety).", model: "This is my desk. I have a computer and a phone. I need a printer." } },
{ id: "b03", lvl: "A1", emoji: "📞", title: "Phone and email basics", sk: "Telefón a e-mail",
  words: [
    { en: "email", sk: "e-mail" }, { en: "address", sk: "adresa" }, { en: "number", sk: "číslo" }, { en: "message", sk: "správa" },
    { en: "call", sk: "hovor, volať" }, { en: "mobile", sk: "mobil" }, { en: "name", sk: "meno" }, { en: "spell", sk: "hláskovať" }],
  phrases: [
    { en: "What is your email address", sk: "Aká je vaša e-mailová adresa" }, { en: "Can you spell that please", sk: "Môžete to hláskovať, prosím" },
    { en: "My mobile number is", sk: "Moje číslo mobilu je" }, { en: "I will call you later", sk: "Zavolám vám neskôr" }],
  gaps: [{ t: "Can you ___ your name?", a: "spell", o: ["spell", "call", "work"] }, { t: "I will send you an ___.", a: "email", o: ["email", "desk", "boss"] }],
  dialogue: [
    { who: "bot", en: "Good morning, Smith Trading. How can I help you?", sk: "Dobré ráno, Smith Trading. Ako vám môžem pomôcť?" },
    { who: "me", en: "Hello, can I speak to Mr Brown, please?", sk: "Dobrý deň, môžem hovoriť s pánom Brownom?" },
    { who: "bot", en: "I'm sorry, he is not here. Can I take a message?", sk: "Prepáčte, nie je tu. Môžem odkázať?" },
    { who: "me", en: "Yes. My name is Marek Novak.", sk: "Áno. Volám sa Marek Novák." },
    { who: "bot", en: "Can you spell that, please?", sk: "Môžete to hláskovať, prosím?" },
    { who: "me", en: "N-O-V-A-K. My number is 0900 123 456.", sk: "N-O-V-A-K. Moje číslo je 0900 123 456." }],
  task: { sk: "Napíš 2 vety: kto si a aké je tvoje telefónne číslo a e-mail.", model: "My name is Marek Novak. My email is marek@example.com and my mobile number is 0900 123 456." } },
{ id: "b04", lvl: "A1", emoji: "🗓️", title: "Days and times", sk: "Dni a časy",
  words: [
    { en: "Monday", sk: "pondelok" }, { en: "Friday", sk: "piatok" }, { en: "morning", sk: "ráno, dopoludnie" }, { en: "afternoon", sk: "popoludnie" },
    { en: "lunch", sk: "obed" }, { en: "appointment", sk: "stretnutie, termín" }, { en: "early", sk: "skoro, skorý" }, { en: "late", sk: "neskoro" }],
  phrases: [
    { en: "The meeting is on Monday", sk: "Schôdzka je v pondelok" }, { en: "I start work at eight", sk: "Začínam prácu o ôsmej" },
    { en: "I have an appointment at ten", sk: "Mám stretnutie o desiatej" }, { en: "Sorry I am late", sk: "Prepáčte, meškám" }],
  gaps: [{ t: "The meeting is ___ Friday.", a: "on", o: ["on", "in", "at"] }, { t: "We have lunch ___ twelve.", a: "at", o: ["at", "on", "of"] }],
  dialogue: [
    { who: "bot", en: "When is the meeting?", sk: "Kedy je schôdzka?" },
    { who: "me", en: "It's on Friday morning.", sk: "Je v piatok ráno." },
    { who: "bot", en: "What time does it start?", sk: "O koľkej sa začína?" },
    { who: "me", en: "At nine o'clock.", sk: "O deviatej." },
    { who: "bot", en: "Is it in the meeting room?", sk: "Je to v zasadacej miestnosti?" },
    { who: "me", en: "Yes. Please don't be late.", sk: "Áno. Prosím, nemeškajte." }],
  task: { sk: "Napíš, kedy začínaš a končíš prácu (2 vety).", model: "I start work at eight. I finish work at four." } },
/* ---------------- A2 ---------------- */
{ id: "b05", lvl: "A2", emoji: "📋", title: "Meetings", sk: "Schôdzky",
  words: [
    { en: "agenda", sk: "program schôdzky" }, { en: "minutes", sk: "zápis zo schôdzky" }, { en: "deadline", sk: "termín odovzdania" }, { en: "schedule", sk: "rozvrh, plán" },
    { en: "attend", sk: "zúčastniť sa" }, { en: "cancel", sk: "zrušiť" }, { en: "postpone", sk: "odložiť" }, { en: "discuss", sk: "diskutovať" }],
  phrases: [
    { en: "Let's start the meeting", sk: "Začnime schôdzku" }, { en: "Can we postpone the meeting", sk: "Môžeme schôdzku odložiť" },
    { en: "The deadline is next Friday", sk: "Termín je budúci piatok" }, { en: "I cannot attend on Tuesday", sk: "V utorok sa nemôžem zúčastniť" }],
  gaps: [{ t: "Let's look at the ___ for today.", a: "agenda", o: ["agenda", "address", "folder"] }, { t: "We need to ___ the meeting because Mr Smith is ill.", a: "postpone", o: ["postpone", "discuss", "attend"] }],
  dialogue: [
    { who: "bot", en: "Good morning everyone. Let's start the meeting.", sk: "Dobré ráno všetkým. Začnime schôdzku." },
    { who: "bot", en: "First, the agenda. We will discuss the new project.", sk: "Najprv program. Budeme diskutovať o novom projekte." },
    { who: "me", en: "What is the deadline?", sk: "Aký je termín?" },
    { who: "bot", en: "The deadline is the end of June.", sk: "Termín je koniec júna." },
    { who: "me", en: "Can we have the minutes after the meeting?", sk: "Môžeme dostať zápis po schôdzke?" },
    { who: "bot", en: "Yes, I'll send them tomorrow.", sk: "Áno, pošlem ho zajtra." }],
  task: { sk: "Napíš e-mail (3 vety), v ktorom odkladáš schôdzku na budúci týždeň.", model: "Hello, I am sorry but I cannot attend the meeting on Tuesday. Can we postpone it to next week? Please let me know." } },
{ id: "b06", lvl: "A2", emoji: "✈️", title: "Business travel", sk: "Služobné cesty",
  words: [
    { en: "flight", sk: "let" }, { en: "ticket", sk: "lístok" }, { en: "reservation", sk: "rezervácia" }, { en: "luggage", sk: "batožina" },
    { en: "passport", sk: "pas" }, { en: "delay", sk: "meškanie" }, { en: "arrive", sk: "prísť" }, { en: "leave", sk: "odísť, odlietať" }],
  phrases: [
    { en: "I have a reservation", sk: "Mám rezerváciu" }, { en: "The flight is delayed", sk: "Let mešká" },
    { en: "What time do we arrive", sk: "Kedy prídeme" }, { en: "Where can I check in", sk: "Kde sa môžem odbaviť" }],
  gaps: [{ t: "I have a ___ at the hotel.", a: "reservation", o: ["reservation", "passport", "delay"] }, { t: "The ___ leaves at six.", a: "flight", o: ["flight", "agenda", "boss"] }],
  dialogue: [
    { who: "bot", en: "Good evening. Do you have a reservation?", sk: "Dobrý večer. Máte rezerváciu?" },
    { who: "me", en: "Yes, under the name Novak.", sk: "Áno, na meno Novák." },
    { who: "bot", en: "Can I see your passport, please?", sk: "Môžem vidieť váš pas, prosím?" },
    { who: "me", en: "Here you are. What time is breakfast?", sk: "Nech sa páči. Kedy sú raňajky?" },
    { who: "bot", en: "From seven to ten.", sk: "Od siedmej do desiatej." },
    { who: "me", en: "Thank you. My flight leaves at noon.", sk: "Ďakujem. Môj let odlieta na poludnie." }],
  task: { sk: "Napíš, kedy odlietaš a kde budeš bývať (2 vety).", model: "My flight leaves at nine. I have a reservation at the Grand Hotel." } },
{ id: "b07", lvl: "A2", emoji: "🛒", title: "Customers and orders", sk: "Zákazníci a objednávky",
  words: [
    { en: "order", sk: "objednávka" }, { en: "delivery", sk: "dodávka" }, { en: "invoice", sk: "faktúra" }, { en: "price", sk: "cena" },
    { en: "discount", sk: "zľava" }, { en: "offer", sk: "ponuka" }, { en: "stock", sk: "sklad, zásoba" }, { en: "available", sk: "dostupný" }],
  phrases: [
    { en: "I would like to place an order", sk: "Chcel by som urobiť objednávku" }, { en: "Is it available", sk: "Je to dostupné" },
    { en: "When will it be delivered", sk: "Kedy to bude doručené" }, { en: "Can you give me a discount", sk: "Môžete mi dať zľavu" }],
  gaps: [{ t: "We will send you the ___ by email.", a: "invoice", o: ["invoice", "luggage", "agenda"] }, { t: "The product is ___ in our stock.", a: "available", o: ["available", "late", "early"] }],
  dialogue: [
    { who: "me", en: "Hello, I would like to place an order.", sk: "Dobrý deň, chcel by som urobiť objednávku." },
    { who: "bot", en: "Of course. What would you like?", sk: "Samozrejme. Čo si želáte?" },
    { who: "me", en: "Fifty boxes of paper, please. Is it available?", sk: "Päťdesiat škatúľ papiera, prosím. Je to dostupné?" },
    { who: "bot", en: "Yes, it's in stock. The price is ten euros a box.", sk: "Áno, je na sklade. Cena je desať eur za škatuľu." },
    { who: "me", en: "Can you give me a discount?", sk: "Môžete mi dať zľavu?" },
    { who: "bot", en: "For fifty boxes, yes: ten percent.", sk: "Pri päťdesiatich škatuliach áno: desať percent." }],
  task: { sk: "Napíš krátku objednávku (3 vety): čo chceš a kedy to potrebuješ.", model: "I would like to order twenty boxes of paper. Please send them next Monday. Thank you." } },
{ id: "b08", lvl: "A2", emoji: "💶", title: "Money and prices", sk: "Peniaze a ceny",
  words: [
    { en: "cost", sk: "stáť, náklady" }, { en: "cheap", sk: "lacný" }, { en: "expensive", sk: "drahý" }, { en: "pay", sk: "platiť" },
    { en: "cash", sk: "hotovosť" }, { en: "receipt", sk: "doklad" }, { en: "bank", sk: "banka" }, { en: "salary", sk: "plat" }],
  phrases: [
    { en: "How much does it cost", sk: "Koľko to stojí" }, { en: "Can I pay by card", sk: "Môžem platiť kartou" },
    { en: "I need a receipt", sk: "Potrebujem doklad" }, { en: "That is too expensive", sk: "To je príliš drahé" }],
  gaps: [{ t: "How much does it ___?", a: "cost", o: ["cost", "pay", "spell"] }, { t: "I get my ___ at the end of the month.", a: "salary", o: ["salary", "receipt", "desk"] }],
  dialogue: [
    { who: "me", en: "Excuse me, how much does this laptop cost?", sk: "Prepáčte, koľko stojí tento notebook?" },
    { who: "bot", en: "It costs six hundred euros.", sk: "Stojí šesťsto eur." },
    { who: "me", en: "That's expensive. Do you have a cheaper one?", sk: "To je drahé. Máte lacnejší?" },
    { who: "bot", en: "Yes, this one costs four hundred.", sk: "Áno, tento stojí štyristo." },
    { who: "me", en: "I'll take it. Can I pay by card?", sk: "Beriem ho. Môžem platiť kartou?" },
    { who: "bot", en: "Of course. Here is your receipt.", sk: "Samozrejme. Tu je váš doklad." }],
  task: { sk: "Napíš, čo si naposledy kúpil pre firmu a koľko to stálo (2 vety).", model: "I bought a printer for the office. It cost two hundred euros." } },
/* ---------------- B1 ---------------- */
{ id: "b09", lvl: "B1", emoji: "☎️", title: "Telephoning", sk: "Telefonovanie",
  words: [
    { en: "extension", sk: "linka, klapka" }, { en: "put through", sk: "prepojiť" }, { en: "hold on", sk: "chvíľu počkať" }, { en: "voicemail", sk: "odkazová schránka" },
    { en: "reception", sk: "recepcia" }, { en: "urgent", sk: "naliehavý" }, { en: "return a call", sk: "zavolať späť" }, { en: "connection", sk: "spojenie" }],
  phrases: [
    { en: "I'll put you through to the manager", sk: "Prepojím vás na vedúceho" }, { en: "Could you hold on a moment", sk: "Mohli by ste chvíľu počkať" },
    { en: "I'm calling about the invoice", sk: "Volám kvôli faktúre" }, { en: "Could you ask him to call me back", sk: "Mohli by ste mu odkázať, aby mi zavolal späť" }],
  gaps: [{ t: "Please ___ on, I'll check.", a: "hold", o: ["hold", "put", "pay"] }, { t: "It's an ___ matter. I need an answer today.", a: "urgent", o: ["urgent", "cheap", "early"] }],
  dialogue: [
    { who: "bot", en: "Good morning, Delta Systems. How can I help?", sk: "Dobré ráno, Delta Systems. Ako môžem pomôcť?" },
    { who: "me", en: "Hello, I'm calling about the invoice. Could I speak to Ms Hall?", sk: "Dobrý deň, volám kvôli faktúre. Mohol by som hovoriť s pani Hallovou?" },
    { who: "bot", en: "Could you hold on a moment? I'll put you through.", sk: "Mohli by ste chvíľu počkať? Prepojím vás." },
    { who: "bot", en: "I'm afraid her line is busy. Would you like to leave a message?", sk: "Obávam sa, že má obsadené. Chcete nechať odkaz?" },
    { who: "me", en: "Yes, could you ask her to call me back? It's urgent.", sk: "Áno, mohli by ste jej odkázať, aby mi zavolala späť? Je to naliehavé." },
    { who: "bot", en: "Certainly. Can I have your number?", sk: "Isteže. Môžem dostať vaše číslo?" }],
  task: { sk: "Nahraj si odkaz pre kolegu (3 vety): kto si, prečo voláš, kedy má zavolať.", model: "Hello, this is Marek Novak. I'm calling about the delivery. Could you call me back this afternoon?" } },
{ id: "b10", lvl: "B1", emoji: "✉️", title: "Emails and reports", sk: "E-maily a správy",
  words: [
    { en: "attachment", sk: "príloha" }, { en: "regards", sk: "pozdrav" }, { en: "forward", sk: "preposlať" }, { en: "reply", sk: "odpoveď, odpovedať" },
    { en: "draft", sk: "návrh, koncept" }, { en: "report", sk: "správa" }, { en: "summary", sk: "zhrnutie" }, { en: "recipient", sk: "adresát" }],
  phrases: [
    { en: "Please find attached the report", sk: "V prílohe nájdete správu" }, { en: "I look forward to hearing from you", sk: "Teším sa na vašu odpoveď" },
    { en: "I am writing to confirm our meeting", sk: "Píšem, aby som potvrdil našu schôdzku" }, { en: "Thank you for your quick reply", sk: "Ďakujem za rýchlu odpoveď" }],
  gaps: [{ t: "Please find the report in the ___.", a: "attachment", o: ["attachment", "extension", "salary"] }, { t: "Best ___, Anna", a: "regards", o: ["regards", "reports", "replies"] }],
  dialogue: [
    { who: "bot", en: "Did you read my email about the budget?", sk: "Čítal si môj e-mail o rozpočte?" },
    { who: "me", en: "Yes, I read it. I will reply this afternoon.", sk: "Áno, čítal som ho. Odpoviem dnes popoludní." },
    { who: "bot", en: "Please forward it to the finance team.", sk: "Prepošli ho, prosím, finančnému tímu." },
    { who: "me", en: "Of course. Should I add the summary as an attachment?", sk: "Samozrejme. Mám pridať zhrnutie ako prílohu?" },
    { who: "bot", en: "Yes, and send me a draft first.", sk: "Áno, a pošli mi najprv návrh." },
    { who: "me", en: "I'll do it before lunch.", sk: "Spravím to pred obedom." }],
  task: { sk: "Napíš krátky e-mail (4 vety) s prílohou: čo posielaš a čo od adresáta čakáš.", model: "Dear Ms Hall, I am writing to confirm our meeting on Friday. Please find attached the agenda. I look forward to hearing from you. Best regards, Marek Novak" } },
{ id: "b11", lvl: "B1", emoji: "📊", title: "Presentations", sk: "Prezentácie",
  words: [
    { en: "slide", sk: "snímka" }, { en: "audience", sk: "publikum" }, { en: "chart", sk: "graf" }, { en: "topic", sk: "téma" },
    { en: "point", sk: "bod" }, { en: "conclusion", sk: "záver" }, { en: "questions", sk: "otázky" }, { en: "introduce", sk: "predstaviť" }],
  phrases: [
    { en: "Today I'm going to talk about sales", sk: "Dnes budem hovoriť o predaji" }, { en: "Let me move on to the next slide", sk: "Prejdem na ďalšiu snímku" },
    { en: "As you can see in this chart", sk: "Ako vidíte v tomto grafe" }, { en: "Does anyone have any questions", sk: "Má niekto nejaké otázky" }],
  gaps: [{ t: "Let me ___ the topic first.", a: "introduce", o: ["introduce", "forward", "cancel"] }, { t: "As you can see in this ___, sales are growing.", a: "chart", o: ["chart", "agenda", "receipt"] }],
  dialogue: [
    { who: "me", en: "Good morning everyone. Today I'm going to talk about our sales.", sk: "Dobré ráno všetkým. Dnes budem hovoriť o našom predaji." },
    { who: "me", en: "First, let me introduce the main points.", sk: "Najprv predstavím hlavné body." },
    { who: "me", en: "As you can see in this chart, sales grew by ten percent.", sk: "Ako vidíte v tomto grafe, predaj vzrástol o desať percent." },
    { who: "me", en: "Now let me move on to the next slide.", sk: "Teraz prejdem na ďalšiu snímku." },
    { who: "me", en: "To conclude, we had a very good year.", sk: "Na záver, mali sme veľmi dobrý rok." },
    { who: "me", en: "Thank you. Does anyone have any questions?", sk: "Ďakujem. Má niekto nejaké otázky?" }],
  task: { sk: "Napíš úvod prezentácie (3 vety): pozdrav, téma, čo sa dozvedia.", model: "Good morning, everyone. Today I'm going to talk about our new product. I'll explain the price, the market and our plans." } },
{ id: "b12", lvl: "B1", emoji: "🤝", title: "Negotiating basics", sk: "Základy vyjednávania",
  words: [
    { en: "proposal", sk: "návrh" }, { en: "agreement", sk: "dohoda" }, { en: "terms", sk: "podmienky" }, { en: "compromise", sk: "kompromis" },
    { en: "accept", sk: "prijať" }, { en: "reject", sk: "odmietnuť" }, { en: "bargain", sk: "výhodná kúpa, zjednať" }, { en: "contract", sk: "zmluva" }],
  phrases: [
    { en: "We would like to make a proposal", sk: "Chceli by sme predložiť návrh" }, { en: "I'm afraid we cannot accept that", sk: "Obávam sa, že to nemôžeme prijať" },
    { en: "Could we meet halfway", sk: "Mohli by sme sa stretnúť na pol ceste" }, { en: "Let's agree on the terms", sk: "Dohodnime sa na podmienkach" }],
  gaps: [{ t: "We need a ___ that works for both sides.", a: "compromise", o: ["compromise", "chart", "receipt"] }, { t: "I'm afraid we cannot ___ this price.", a: "accept", o: ["accept", "attend", "arrive"] }],
  dialogue: [
    { who: "bot", en: "Our price is fifty euros per unit.", sk: "Naša cena je päťdesiat eur za kus." },
    { who: "me", en: "I'm afraid we cannot accept that. It's too high.", sk: "Obávam sa, že to nemôžeme prijať. Je to príliš veľa." },
    { who: "bot", en: "What price would you suggest?", sk: "Akú cenu by ste navrhli?" },
    { who: "me", en: "We would like to offer forty. We will order a large quantity.", sk: "Chceli by sme ponúknuť štyridsať. Objednáme veľké množstvo." },
    { who: "bot", en: "Could we meet halfway at forty-five?", sk: "Mohli by sme sa stretnúť na pol ceste pri štyridsiatich piatich?" },
    { who: "me", en: "That sounds fair. Let's agree on the terms.", sk: "To znie férovo. Dohodnime sa na podmienkach." }],
  task: { sk: "Navrhni cenu a zdôvodni ju (3 vety).", model: "We would like to offer forty euros per unit. We will order a large quantity. Could we meet halfway if you need more?" } },
/* ---------------- B2 ---------------- */
{ id: "b13", lvl: "B2", emoji: "📈", title: "Marketing and sales", sk: "Marketing a predaj",
  words: [
    { en: "target market", sk: "cieľový trh" }, { en: "brand", sk: "značka" }, { en: "campaign", sk: "kampaň" }, { en: "market share", sk: "podiel na trhu" },
    { en: "competitor", sk: "konkurent" }, { en: "launch", sk: "uviesť na trh" }, { en: "promote", sk: "propagovať" }, { en: "revenue", sk: "tržby" }],
  phrases: [
    { en: "We plan to launch the product in spring", sk: "Plánujeme uviesť produkt na jar" }, { en: "Our main competitor has lowered its prices", sk: "Náš hlavný konkurent znížil ceny" },
    { en: "The campaign increased our market share", sk: "Kampaň zvýšila náš podiel na trhu" }, { en: "We need to promote the brand online", sk: "Musíme propagovať značku online" }],
  gaps: [{ t: "Our ___ is young people aged 18 to 25.", a: "target market", o: ["target market", "contract", "salary"] }, { t: "The new ___ will start in March.", a: "campaign", o: ["campaign", "invoice", "delay"] }],
  dialogue: [
    { who: "bot", en: "How did the last campaign go?", sk: "Ako dopadla posledná kampaň?" },
    { who: "me", en: "Very well. Our revenue increased by twelve percent.", sk: "Veľmi dobre. Naše tržby vzrástli o dvanásť percent." },
    { who: "bot", en: "And what about our competitors?", sk: "A čo naši konkurenti?" },
    { who: "me", en: "One of them has lowered its prices, so we need to promote our brand more.", sk: "Jeden z nich znížil ceny, takže musíme viac propagovať našu značku." },
    { who: "bot", en: "When do you plan to launch the new product?", sk: "Kedy plánujete uviesť nový produkt?" },
    { who: "me", en: "In spring, after the online campaign.", sk: "Na jar, po online kampani." }],
  task: { sk: "Opíš plán kampane (4 vety): cieľová skupina, produkt, kanál, termín.", model: "Our target market is young professionals. We will launch a new app in April. We plan to promote it on social media. The campaign will run for two months." } },
{ id: "b14", lvl: "B2", emoji: "🧮", title: "Finance and budgets", sk: "Financie a rozpočty",
  words: [
    { en: "budget", sk: "rozpočet" }, { en: "profit", sk: "zisk" }, { en: "loss", sk: "strata" }, { en: "expenses", sk: "výdavky" },
    { en: "forecast", sk: "prognóza" }, { en: "cash flow", sk: "peňažný tok" }, { en: "invest", sk: "investovať" }, { en: "overspend", sk: "prekročiť rozpočet" }],
  phrases: [
    { en: "We made a profit of two million", sk: "Dosiahli sme zisk dva milióny" }, { en: "We have to cut expenses", sk: "Musíme znížiť výdavky" },
    { en: "The forecast looks positive", sk: "Prognóza vyzerá pozitívne" }, { en: "We stayed within the budget", sk: "Ostali sme v rámci rozpočtu" }],
  gaps: [{ t: "If we ___ again, we will have a problem.", a: "overspend", o: ["overspend", "launch", "attend"] }, { t: "Our ___ is higher than last year.", a: "profit", o: ["profit", "agenda", "reply"] }],
  dialogue: [
    { who: "bot", en: "Can you show me the budget for next year?", sk: "Môžeš mi ukázať rozpočet na budúci rok?" },
    { who: "me", en: "Of course. Expenses are up ten percent, mainly because of energy costs.", sk: "Samozrejme. Výdavky sú vyššie o desať percent, hlavne kvôli nákladom na energiu." },
    { who: "bot", en: "And the forecast?", sk: "A prognóza?" },
    { who: "me", en: "It looks positive. We expect a profit of two million.", sk: "Vyzerá pozitívne. Očakávame zisk dva milióny." },
    { who: "bot", en: "We should invest part of it in new equipment.", sk: "Časť by sme mali investovať do nového vybavenia." },
    { who: "me", en: "I agree, as long as we stay within the budget.", sk: "Súhlasím, pokiaľ ostaneme v rámci rozpočtu." }],
  task: { sk: "Zhrň finančný výsledok firmy (4 vety) pomocou slov profit, expenses, forecast.", model: "This year we made a profit of one million. Expenses were higher than expected. However, the forecast for next year is positive. We plan to invest in new equipment." } },
{ id: "b15", lvl: "B2", emoji: "👥", title: "Managing people", sk: "Riadenie ľudí a HR",
  words: [
    { en: "recruit", sk: "prijímať ľudí" }, { en: "interview", sk: "pohovor" }, { en: "candidate", sk: "uchádzač" }, { en: "appraisal", sk: "hodnotenie zamestnanca" },
    { en: "promotion", sk: "povýšenie" }, { en: "resign", sk: "dať výpoveď" }, { en: "workload", sk: "pracovné zaťaženie" }, { en: "delegate", sk: "deleguovať" }],
  phrases: [
    { en: "We are recruiting two new employees", sk: "Prijímame dvoch nových zamestnancov" }, { en: "She was promoted last month", sk: "Minulý mesiac ju povýšili" },
    { en: "I need to delegate some tasks", sk: "Musím niektoré úlohy deleguovať" }, { en: "The candidate made a good impression", sk: "Uchádzač zanechal dobrý dojem" }],
  gaps: [{ t: "Our ___ is too heavy at the moment.", a: "workload", o: ["workload", "forecast", "profit"] }, { t: "He decided to ___ and start his own business.", a: "resign", o: ["resign", "recruit", "delegate"] }],
  dialogue: [
    { who: "bot", en: "How did the interviews go?", sk: "Ako dopadli pohovory?" },
    { who: "me", en: "Quite well. One candidate made a very good impression.", sk: "Celkom dobre. Jeden uchádzač zanechal veľmi dobrý dojem." },
    { who: "bot", en: "Is the workload in your team still too heavy?", sk: "Je pracovné zaťaženie vo vašom tíme stále príliš veľké?" },
    { who: "me", en: "Yes, that's why we need two new people.", sk: "Áno, preto potrebujeme dvoch nových ľudí." },
    { who: "bot", en: "Perhaps you could delegate more tasks.", sk: "Možno by si mohol deleguovať viac úloh." },
    { who: "me", en: "I'll try, but my team is already stretched.", sk: "Skúsim to, ale môj tím je už vyťažený." }],
  task: { sk: "Opíš uchádzača, ktorého by si prijal (4 vety).", model: "I would recruit Anna. She has five years of experience and speaks three languages. She made a very good impression at the interview. I think she will fit into our team." } },
{ id: "b16", lvl: "B2", emoji: "🛠️", title: "Complaints and problem solving", sk: "Reklamácie a riešenie problémov",
  words: [
    { en: "complaint", sk: "sťažnosť, reklamácia" }, { en: "refund", sk: "vrátenie peňazí" }, { en: "replacement", sk: "náhrada" }, { en: "apologise", sk: "ospravedlniť sa" },
    { en: "faulty", sk: "chybný" }, { en: "resolve", sk: "vyriešiť" }, { en: "compensation", sk: "odškodnenie" }, { en: "inconvenience", sk: "nepríjemnosť" }],
  phrases: [
    { en: "I would like to make a complaint", sk: "Chcel by som podať sťažnosť" }, { en: "We apologise for the inconvenience", sk: "Ospravedlňujeme sa za nepríjemnosti" },
    { en: "We will send you a replacement", sk: "Pošleme vám náhradu" }, { en: "I will look into it immediately", sk: "Hneď to preskúmam" }],
  gaps: [{ t: "The product was ___, so I want a refund.", a: "faulty", o: ["faulty", "cheap", "early"] }, { t: "We will do everything to ___ the problem.", a: "resolve", o: ["resolve", "postpone", "launch"] }],
  dialogue: [
    { who: "me", en: "I would like to make a complaint. The printer I bought is faulty.", sk: "Chcel by som podať sťažnosť. Tlačiareň, ktorú som kúpil, je chybná." },
    { who: "bot", en: "I'm very sorry to hear that. We apologise for the inconvenience.", sk: "Veľmi ma to mrzí. Ospravedlňujeme sa za nepríjemnosti." },
    { who: "me", en: "It stopped working after two days. I want a refund.", sk: "Prestala fungovať po dvoch dňoch. Chcem vrátiť peniaze." },
    { who: "bot", en: "I will look into it immediately. We can offer a replacement or a refund.", sk: "Hneď to preskúmam. Môžeme ponúknuť náhradu alebo vrátenie peňazí." },
    { who: "me", en: "A refund, please.", sk: "Vrátenie peňazí, prosím." },
    { who: "bot", en: "Certainly. It will arrive within five working days.", sk: "Samozrejme. Dorazí do piatich pracovných dní." }],
  task: { sk: "Napíš sťažnosť (4 vety): čo si kúpil, aký je problém, čo žiadaš.", model: "I am writing to complain about the laptop I bought on 3 May. It stopped working after a week. I would like a full refund. Please let me know when I can expect it." } },
/* ---------------- C1 ---------------- */
{ id: "b17", lvl: "C1", emoji: "🚀", title: "Strategy and growth", sk: "Stratégia a rast",
  words: [
    { en: "strategy", sk: "stratégia" }, { en: "expand", sk: "rozšíriť" }, { en: "acquisition", sk: "akvizícia, prevzatie" }, { en: "stakeholder", sk: "zainteresovaná strana" },
    { en: "competitive advantage", sk: "konkurenčná výhoda" }, { en: "diversify", sk: "diverzifikovať" }, { en: "sustainable", sk: "udržateľný" }, { en: "niche", sk: "úzky segment trhu" }],
  phrases: [
    { en: "We aim to expand into new markets", sk: "Chceme expandovať na nové trhy" }, { en: "Our competitive advantage is quality", sk: "Naša konkurenčná výhoda je kvalita" },
    { en: "The acquisition will strengthen our position", sk: "Akvizícia posilní našu pozíciu" }, { en: "We must keep all stakeholders informed", sk: "Musíme informovať všetky zainteresované strany" }],
  gaps: [{ t: "To reduce risk, the company decided to ___.", a: "diversify", o: ["diversify", "resign", "apologise"] }, { t: "Growth must be ___ in the long term.", a: "sustainable", o: ["sustainable", "faulty", "urgent"] }],
  dialogue: [
    { who: "bot", en: "What is the company's main strategy for the next five years?", sk: "Aká je hlavná stratégia firmy na najbližších päť rokov?" },
    { who: "me", en: "We aim to expand into Eastern Europe while keeping our costs under control.", sk: "Chceme expandovať do východnej Európy a pritom udržať náklady pod kontrolou." },
    { who: "bot", en: "Wouldn't an acquisition be faster?", sk: "Nebola by akvizícia rýchlejšia?" },
    { who: "me", en: "Possibly, but it carries risks. Our competitive advantage is our service.", sk: "Možno, ale nesie riziká. Naša konkurenčná výhoda je služba." },
    { who: "bot", en: "Have you consulted the stakeholders?", sk: "Konzultovali ste to so zainteresovanými stranami?" },
    { who: "me", en: "Yes, and the board has approved the plan in principle.", sk: "Áno, a predstavenstvo plán v zásade schválilo." }],
  task: { sk: "Obhájiť stratégiu rastu (5 viet): ciele, riziká, konkurenčná výhoda.", model: "Our strategy is to expand into two new markets over five years. Our competitive advantage is our customer service. The main risk is the cost of entering a new market. We will reduce it by working with local partners. The board supports the plan." } },
{ id: "b18", lvl: "C1", emoji: "📑", title: "Contracts and legal terms", sk: "Zmluvy a právne pojmy",
  words: [
    { en: "clause", sk: "ustanovenie, doložka" }, { en: "liability", sk: "zodpovednosť, záväzok" }, { en: "terminate", sk: "ukončiť" }, { en: "breach", sk: "porušenie" },
    { en: "confidentiality", sk: "dôvernosť" }, { en: "amend", sk: "zmeniť, doplniť" }, { en: "party", sk: "zmluvná strana" }, { en: "binding", sk: "záväzný" }],
  phrases: [
    { en: "Either party may terminate the contract", sk: "Ktorákoľvek zmluvná strana môže zmluvu ukončiť" }, { en: "This clause limits our liability", sk: "Toto ustanovenie obmedzuje našu zodpovednosť" },
    { en: "Any breach must be reported immediately", sk: "Každé porušenie sa musí nahlásiť okamžite" }, { en: "The agreement is legally binding", sk: "Dohoda je právne záväzná" }],
  gaps: [{ t: "Both parties signed the ___ agreement.", a: "binding", o: ["binding", "urgent", "cheap"] }, { t: "Any ___ of confidentiality may lead to legal action.", a: "breach", o: ["breach", "niche", "forecast"] }],
  dialogue: [
    { who: "bot", en: "Have you reviewed clause twelve?", sk: "Prezreli ste ustanovenie dvanásť?" },
    { who: "me", en: "Yes. It limits our liability to the value of the contract, which I find acceptable.", sk: "Áno. Obmedzuje našu zodpovednosť na hodnotu zmluvy, čo považujem za prijateľné." },
    { who: "bot", en: "And the termination clause?", sk: "A doložka o ukončení?" },
    { who: "me", en: "Either party may terminate with thirty days' notice. I'd like to amend that to sixty.", sk: "Ktorákoľvek strana môže ukončiť s tridsaťdňovou výpoveďou. Chcel by som to zmeniť na šesťdesiat." },
    { who: "bot", en: "I'll raise it with our legal team.", sk: "Prejdem to s našimi právnikmi." },
    { who: "me", en: "Thank you. The agreement is only binding once both parties have signed.", sk: "Ďakujem. Dohoda je záväzná až po podpise oboch strán." }],
  task: { sk: "Navrhni zmenu v zmluve (4 vety): ktorá doložka, aká zmena, prečo.", model: "I would like to amend clause nine. The notice period should be sixty days instead of thirty. This gives both parties more time to find alternatives. Please let me know if you agree." } },
{ id: "b19", lvl: "C1", emoji: "🧭", title: "Leadership and change", sk: "Líderstvo a zmena",
  words: [
    { en: "leadership", sk: "vedenie, líderstvo" }, { en: "motivate", sk: "motivovať" }, { en: "restructure", sk: "reorganizovať" }, { en: "resistance", sk: "odpor" },
    { en: "implement", sk: "zaviesť, realizovať" }, { en: "vision", sk: "vízia" }, { en: "accountable", sk: "zodpovedný, ručiaci" }, { en: "empower", sk: "splnomocniť, posilniť" }],
  phrases: [
    { en: "We are going to restructure the department", sk: "Chystáme sa reorganizovať oddelenie" }, { en: "Good leaders motivate their teams", sk: "Dobrí lídri motivujú svoje tímy" },
    { en: "There is some resistance to the change", sk: "Voči zmene je určitý odpor" }, { en: "Everyone is accountable for the results", sk: "Každý je zodpovedný za výsledky" }],
  gaps: [{ t: "The manager wants to ___ the new system next month.", a: "implement", o: ["implement", "terminate", "forward"] }, { t: "A clear ___ helps people understand the change.", a: "vision", o: ["vision", "refund", "clause"] }],
  dialogue: [
    { who: "bot", en: "How are staff reacting to the restructuring?", sk: "Ako zamestnanci reagujú na reorganizáciu?" },
    { who: "me", en: "There is some resistance, which is understandable.", sk: "Je tu určitý odpor, čo je pochopiteľné." },
    { who: "bot", en: "How do you plan to handle it?", sk: "Ako to plánujete zvládnuť?" },
    { who: "me", en: "By communicating a clear vision and empowering team leaders to make decisions.", sk: "Jasným odkomunikovaním vízie a splnomocnením vedúcich tímov rozhodovať." },
    { who: "bot", en: "And who will be accountable for the results?", sk: "A kto bude zodpovedný za výsledky?" },
    { who: "me", en: "Each department head, with quarterly reviews.", sk: "Každý vedúci oddelenia, so štvrťročnými hodnoteniami." }],
  task: { sk: "Opíš, ako by si viedol zamestnancov cez zmenu (5 viet).", model: "I would first explain the vision behind the change. Then I would listen to concerns and respond honestly. I would empower team leaders to make decisions. Each department head would be accountable for results. We would review progress every quarter." } },
{ id: "b20", lvl: "C1", emoji: "🏁", title: "Negotiation and deal-making", sk: "Vyjednávanie a uzatváranie obchodov",
  words: [
    { en: "leverage", sk: "páka, vyjednávacia sila" }, { en: "concession", sk: "ústupok" }, { en: "bottom line", sk: "spodná hranica, podstata" }, { en: "deadlock", sk: "slepá ulička, pat" },
    { en: "counteroffer", sk: "protiponuka" }, { en: "mutually beneficial", sk: "obojstranne výhodný" }, { en: "close the deal", sk: "uzavrieť obchod" }, { en: "walk away", sk: "odísť od rokovania" }],
  phrases: [
    { en: "We are prepared to make a concession", sk: "Sme ochotní urobiť ústupok" }, { en: "That is our bottom line", sk: "To je naša spodná hranica" },
    { en: "Let's find a mutually beneficial solution", sk: "Nájdime obojstranne výhodné riešenie" }, { en: "We would rather walk away than accept that", sk: "Radšej odídeme, než by sme to prijali" }],
  gaps: [{ t: "After hours of talks, we reached a ___.", a: "deadlock", o: ["deadlock", "refund", "vision"] }, { t: "We made a ___ at forty-five euros.", a: "counteroffer", o: ["counteroffer", "complaint", "appraisal"] }],
  dialogue: [
    { who: "bot", en: "We cannot go below fifty euros per unit.", sk: "Nemôžeme ísť pod päťdesiat eur za kus." },
    { who: "me", en: "I understand, but our volume gives us some leverage. Our counteroffer is forty-five.", sk: "Rozumiem, ale náš objem nám dáva určitú vyjednávaciu silu. Naša protiponuka je štyridsaťpäť." },
    { who: "bot", en: "That would leave us almost no margin.", sk: "To by nám nenechalo takmer žiadnu maržu." },
    { who: "me", en: "We are prepared to make a concession on payment terms, though.", sk: "Sme však ochotní urobiť ústupok pri platobných podmienkach." },
    { who: "bot", en: "Which would mean?", sk: "Čo by znamenalo?" },
    { who: "me", en: "Payment within fifteen days. That is a mutually beneficial solution, and it is our bottom line.", sk: "Platba do pätnástich dní. Je to obojstranne výhodné riešenie a je to naša spodná hranica." }],
  task: { sk: "Napíš protiponuku (5 viet): cena, ústupok, argument, spodná hranica.", model: "Thank you for your offer. We would like to make a counteroffer of forty-five euros per unit. In return, we can make a concession on payment terms and pay within fifteen days. We believe this is mutually beneficial. This is our bottom line. We hope to close the deal this week." } }
];
