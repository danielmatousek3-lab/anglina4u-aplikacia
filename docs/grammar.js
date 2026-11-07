// Gramatika A1–C1. Každá téma: vysvetlenie (Slovak), príklady, časté chyby, cvičenie.
window.GRAMMAR = [
// ================= A1 =================
{ id: "be", lvl: "A1", cat: "Slovesá", t: "To be – byť", sum: "I am, you are, he is… Najdôležitejšie sloveso angličtiny.",
  body: `<p>Sloveso <b>to be</b> sa používa na vyjadrenie toho, kto/čo je, aký je, odkiaľ je a koľko má rokov. Na rozdiel od slovenčiny sa <b>nedá vynechať</b> – v angličtine vždy potrebujeme podmet aj sloveso.</p>
<table class="gt"><tr><th></th><th>Kladná</th><th>Záporná</th><th>Otázka</th></tr>
<tr><td>I</td><td>I am (I'm)</td><td>I am not (I'm not)</td><td>Am I?</td></tr>
<tr><td>you</td><td>you are (you're)</td><td>you aren't</td><td>Are you?</td></tr>
<tr><td>he / she / it</td><td>he is (he's)</td><td>he isn't</td><td>Is he?</td></tr>
<tr><td>we / you / they</td><td>we are (we're)</td><td>we aren't</td><td>Are we?</td></tr></table>
<p><b>Použitie:</b> meno, povolanie, národnosť, vek (<i>I am 10</i> – nie „I have 10“), pocity (<i>I am hungry</i>), počasie (<i>It is cold</i>).</p>
<p><b>Krátke odpovede:</b> Are you a student? – Yes, I am. / No, I'm not. (V krátkej odpovedi sa nikdy nepoužije skrátený tvar: <i>Yes, I'm</i> je chyba.)</p>`,
  ex: [["I am a teacher.", "Som učiteľ."], ["She is from Slovakia.", "Je zo Slovenska."], ["They aren't at home.", "Nie sú doma."], ["Are you hungry?", "Si hladný?"], ["It is ten o'clock.", "Je desať hodín."]],
  mist: [["I have 12 years.", "I am 12 years old.", "Vek vyjadrujeme slovesom to be, nie have."], ["She is teacher.", "She is a teacher.", "Pred povolaním potrebujeme člen a/an."], ["Is raining.", "It is raining.", "Podmet nikdy nevynechávame."]],
  quiz: [["She ___ a doctor.", ["is", "are", "am"], 0], ["We ___ not tired.", ["is", "are", "am"], 1], ["___ you from Košice?", ["Is", "Am", "Are"], 2]] },

{ id: "articles", lvl: "A1", cat: "Podstatné mená", t: "Členy a / an / the", sum: "Kedy použiť a, an, the a kedy nič.",
  body: `<p>Slovenčina členy nemá, preto sú pre nás ťažké. Pravidlo je jednoduché:</p>
<ul><li><b>a / an</b> – „nejaký, jeden“. Prvýkrát spomíname vec alebo hovoríme všeobecne. <b>a</b> pred spoluhláskovým <i>zvukom</i> (a dog, a university), <b>an</b> pred samohláskovým zvukom (an apple, an hour).</li>
<li><b>the</b> – „ten konkrétny“. Obaja vieme, o čom je reč, alebo je vec jedinečná (the sun, the moon, the Prime Minister).</li>
<li><b>žiadny člen</b> – pri množnom čísle všeobecne (<i>Dogs are friendly</i>), pri nepočítateľných podstatných menách (<i>Water is life</i>), pri jedlách (<i>have breakfast</i>), jazykoch, väčšine krajín a miest.</li></ul>
<p><b>Prvý/druhý výskyt:</b> <i>I saw a dog. <u>The</u> dog was big.</i></p>
<p><b>Vždy s the:</b> the UK, the USA, the Alps, the Danube, the cinema, the radio (ale: <i>at school, at work, in bed</i> – bez člena).</p>`,
  ex: [["I have a dog. The dog is brown.", "Mám psa. Ten pes je hnedý."], ["She eats an apple every day.", "Každý deň zje jablko."], ["The sun is hot.", "Slnko je horúce."], ["I like music.", "Mám rád hudbu."], ["We go to school by bus.", "Chodíme do školy autobusom."]],
  mist: [["I am student.", "I am a student.", "Pred počítateľným podstatným menom v jednotnom čísle potrebujeme člen."], ["I have a breakfast at 7.", "I have breakfast at 7.", "Pri jedlách (breakfast, lunch, dinner) člen nepoužívame."], ["a hour", "an hour", "h v hour sa nevyslovuje, slovo sa začína samohláskovým zvukom."]],
  quiz: [["I have ___ umbrella.", ["a", "an", "the"], 1], ["___ moon is bright tonight.", ["A", "The", "—"], 1], ["She plays ___ tennis.", ["the", "a", "—"], 2]] },

{ id: "plurals", lvl: "A1", cat: "Podstatné mená", t: "Množné číslo", sum: "Pravidelné aj nepravidelné množné čísla.",
  body: `<p>Väčšina podstatných mien robí množné číslo pridaním <b>-s</b>: <i>book → books</i>.</p>
<table class="gt"><tr><th>Pravidlo</th><th>Príklad</th></tr>
<tr><td>-s, -ss, -sh, -ch, -x, -o → <b>-es</b></td><td>bus → buses, box → boxes, potato → potatoes</td></tr>
<tr><td>spoluhláska + y → <b>-ies</b></td><td>city → cities, baby → babies</td></tr>
<tr><td>samohláska + y → <b>-s</b></td><td>day → days, boy → boys</td></tr>
<tr><td>-f / -fe → <b>-ves</b></td><td>knife → knives, leaf → leaves</td></tr></table>
<p><b>Nepravidelné:</b> man → men, woman → women, child → children, foot → feet, tooth → teeth, mouse → mice, person → people. <b>Rovnaké:</b> sheep, fish, deer.</p>
<p>Pozor: <i>news, money, information, advice</i> sú v angličtine <b>nepočítateľné</b> – nemajú množné číslo (<i>The news is good</i>).</p>`,
  ex: [["two cats", "dve mačky"], ["three children", "tri deti"], ["many cities", "veľa miest"], ["My feet are cold.", "Studnú mi nohy."], ["The news is good.", "Správy sú dobré."]],
  mist: [["two childs", "two children", "Child má nepravidelné množné číslo."], ["The news are bad.", "The news is bad.", "News je nepočítateľné – sloveso je v jednotnom čísle."]],
  quiz: [["one box, two ___", ["boxs", "boxes", "boxies"], 1], ["one baby, two ___", ["babys", "babies", "babyes"], 1], ["one woman, two ___", ["womans", "women", "womens"], 1]] },

{ id: "pronouns", lvl: "A1", cat: "Zámená", t: "Zámená a privlastňovacie tvary", sum: "I – me – my – mine a ich použitie.",
  body: `<table class="gt"><tr><th>Podmet</th><th>Predmet</th><th>Privl. prídavné</th><th>Privl. zámeno</th></tr>
<tr><td>I</td><td>me</td><td>my</td><td>mine</td></tr><tr><td>you</td><td>you</td><td>your</td><td>yours</td></tr>
<tr><td>he</td><td>him</td><td>his</td><td>his</td></tr><tr><td>she</td><td>her</td><td>her</td><td>hers</td></tr>
<tr><td>it</td><td>it</td><td>its</td><td>—</td></tr><tr><td>we</td><td>us</td><td>our</td><td>ours</td></tr><tr><td>they</td><td>them</td><td>their</td><td>theirs</td></tr></table>
<p><b>Podmet</b> robí dej (<i>She</i> likes tea). <b>Predmet</b> dej prijíma (Tom likes <i>her</i>). <b>My, your…</b> stoja pred podstatným menom (<i>my book</i>). <b>Mine, yours…</b> stoja samostatne (<i>The book is mine</i>).</p>
<p>Pozor: <i>its</i> (jeho/jej o veci) nemá apostrof; <i>it's</i> = it is. Privlastnenie pri osobách: <i>Tom's book</i> (apostrof + s).</p>`,
  ex: [["This is my bag. It's mine.", "Toto je moja taška. Je moja."], ["Tom likes her.", "Tom ju má rád."], ["Their house is big.", "Ich dom je veľký."], ["Give it to us.", "Daj to nám."], ["The dog wags its tail.", "Pes vrtí chvostom."]],
  mist: [["Me and him are friends.", "He and I are friends.", "Ako podmet používame he/I, nie him/me."], ["The cat licks it's paw.", "The cat licks its paw.", "its = jeho; it's = it is."]],
  quiz: [["This is ___ house. (we)", ["our", "ours", "us"], 0], ["Can you help ___? (I)", ["I", "my", "me"], 2], ["The pen is ___. (she)", ["her", "hers", "she"], 1]] },

{ id: "demonstr", lvl: "A1", cat: "Zámená", t: "This / that / these / those", sum: "Ukazovacie zámená – blízko a ďaleko.",
  body: `<table class="gt"><tr><th></th><th>blízko</th><th>ďaleko</th></tr><tr><td>jednotné</td><td><b>this</b> (toto)</td><td><b>that</b> (tamto)</td></tr><tr><td>množné</td><td><b>these</b> (tieto)</td><td><b>those</b> (tamtie)</td></tr></table>
<p>Používame ich pred podstatným menom (<i>this book</i>) alebo samostatne (<i>What is that?</i>). Pri telefonovaní: <i>Hello, this is Anna</i> (Tu Anna).</p>`,
  ex: [["This is my brother.", "Toto je môj brat."], ["Those shoes are expensive.", "Tamtie topánky sú drahé."], ["What are these?", "Čo sú toto?"], ["Is that your car?", "Je to tamto tvoje auto?"]],
  mist: [["This books are new.", "These books are new.", "Množné číslo = these."]],
  quiz: [["___ apples here are fresh.", ["This", "These", "That"], 1], ["Look at ___ birds over there!", ["those", "these", "that"], 0]] },

{ id: "thereis", lvl: "A1", cat: "Vety", t: "There is / There are", sum: "Vyjadrujeme, že niečo existuje alebo sa niekde nachádza.",
  body: `<p>Slovenské „je tam, nachádza sa“ vyjadríme <b>there is</b> (jednotné číslo a nepočítateľné) a <b>there are</b> (množné číslo).</p>
<table class="gt"><tr><th>Kladná</th><th>Záporná</th><th>Otázka</th></tr><tr><td>There is a cat.</td><td>There isn't a cat.</td><td>Is there a cat?</td></tr><tr><td>There are two cats.</td><td>There aren't any cats.</td><td>Are there any cats?</td></tr></table>
<p>V zápore a otázke v množnom čísle používame <b>any</b>. Používame to na <b>nový</b> údaj; ak už poznáme vec, hovoríme <i>The cat is on the sofa</i>.</p>`,
  ex: [["There is a park near my house.", "Blízko môjho domu je park."], ["There are three rooms.", "Sú tam tri izby."], ["Is there any milk?", "Je tam nejaké mlieko?"], ["There aren't any chairs.", "Nie sú tam žiadne stoličky."]],
  mist: [["It is a cat in the garden.", "There is a cat in the garden.", "Existenciu vyjadrujeme there is, nie it is."]],
  quiz: [["___ two books on the table.", ["There is", "There are", "It is"], 1], ["___ any water in the bottle?", ["Is there", "Are there", "There is"], 0]] },

{ id: "have", lvl: "A1", cat: "Slovesá", t: "Have / have got", sum: "Vlastníme, máme, jeme… sloveso have.",
  body: `<p><b>Have</b> a <b>have got</b> vyjadrujú vlastníctvo a vlastnosti: <i>I have a car = I've got a car</i>. <b>Have got</b> je hovorovejšie (hlavne britská angličtina).</p>
<table class="gt"><tr><th>have</th><th>have got</th></tr><tr><td>I have a dog.</td><td>I've got a dog.</td></tr><tr><td>She has a dog.</td><td>She's got a dog.</td></tr><tr><td>Do you have a dog?</td><td>Have you got a dog?</td></tr><tr><td>I don't have a dog.</td><td>I haven't got a dog.</td></tr></table>
<p>Pri činnostiach (<i>have breakfast, have a shower, have a good time</i>) sa používa len <b>have</b> (bez got): <i>Do you have lunch at noon?</i></p>`,
  ex: [["I have two sisters.", "Mám dve sestry."], ["He's got a new phone.", "Má nový telefón."], ["Do you have a pen?", "Máš pero?"], ["We have dinner at seven.", "Večeriame o siedmej."]],
  mist: [["She have a dog.", "She has a dog.", "3. osoba je has."], ["I've got breakfast.", "I have breakfast.", "Pri činnostiach nepoužívame have got."]],
  quiz: [["He ___ a bike.", ["have", "has", "haves"], 1], ["___ you got a sister?", ["Do", "Have", "Are"], 1]] },

{ id: "can", lvl: "A1", cat: "Slovesá", t: "Can – schopnosť a povolenie", sum: "Môcť, vedieť, smieť, žiadať.",
  body: `<p><b>Can</b> je modálne sloveso. Nemení sa pre osoby (he can, nie he cans) a po ňom ide <b>sloveso bez to</b>.</p>
<ul><li><b>schopnosť:</b> <i>I can swim.</i> (viem plávať)</li><li><b>povolenie:</b> <i>You can go now.</i></li><li><b>žiadosť:</b> <i>Can you help me?</i></li></ul>
<p>Záporná: <b>can't / cannot</b> (nikdy „can not“ oddelene). Otázka: inverzia – <i>Can she swim?</i> Minulý čas: <b>could</b> (<i>I could swim when I was five</i>).</p>`,
  ex: [["I can speak English.", "Viem po anglicky."], ["She can't drive.", "Ona nevie šoférovať."], ["Can I open the window?", "Môžem otvoriť okno?"], ["He could read at four.", "Vedel čítať vo štyroch."]],
  mist: [["She cans swim.", "She can swim.", "Can nemá -s."], ["I can to swim.", "I can swim.", "Po can nepoužívame to."]],
  quiz: [["___ you play the guitar?", ["Can", "Do", "Are"], 0], ["He ___ run fast.", ["can", "cans", "can to"], 0]] },

{ id: "presimple", lvl: "A1", cat: "Časy", t: "Present simple – jednoduchý prítomný čas", sum: "Zvyky, fakty, pravidelné deje.",
  body: `<p><b>Použitie:</b> zvyky (<i>I get up at 7</i>), všeobecné pravdy (<i>Water boils at 100°C</i>), rozvrhy (<i>The train leaves at 6</i>), stále stavy (<i>She lives in Košice</i>).</p>
<p><b>Tvorenie:</b> základný tvar slovesa; v <b>3. osobe jednotného čísla</b> pridáme <b>-s / -es</b> (he works, she watches, it goes; study → studies).</p>
<table class="gt"><tr><th>Kladná</th><th>Záporná</th><th>Otázka</th></tr><tr><td>I work</td><td>I don't work</td><td>Do I work?</td></tr><tr><td>she works</td><td>she doesn't work</td><td>Does she work?</td></tr></table>
<p>V zápore a otázke použijeme <b>do / does</b> a hlavné sloveso je v základnom tvare (<i>Does she <u>work</u>?</i> – nie works!). Signálne slová: always, usually, often, sometimes, never, every day, on Mondays.</p>`,
  ex: [["I get up at seven.", "Vstávam o siedmej."], ["She works in a bank.", "Pracuje v banke."], ["He doesn't like coffee.", "Nemá rád kávu."], ["Do you live here?", "Bývaš tu?"], ["The sun rises in the east.", "Slnko vychádza na východe."]],
  mist: [["She work here.", "She works here.", "3. osoba potrebuje -s."], ["Does she works?", "Does she work?", "Po does ide základný tvar slovesa."], ["He don't like it.", "He doesn't like it.", "He/she/it → doesn't."]],
  quiz: [["He ___ football on Sundays.", ["play", "plays", "playing"], 1], ["___ she like pizza?", ["Do", "Does", "Is"], 1], ["We ___ TV in the morning.", ["don't watch", "doesn't watch", "not watch"], 0]] },

{ id: "freq", lvl: "A1", cat: "Príslovky", t: "Príslovky frekvencie", sum: "always, usually, often, sometimes, never – kam ich dať vo vete.",
  body: `<p>Hovoria, ako <b>často</b> sa niečo deje: <b>always</b> (100 %), <b>usually</b>, <b>often</b>, <b>sometimes</b>, <b>rarely / seldom</b>, <b>never</b> (0 %).</p>
<p><b>Pozícia:</b> <u>pred</u> hlavným slovesom, ale <u>za</u> slovesom to be: <i>She <b>always</b> comes late. She is <b>always</b> late.</i> Pri pomocných slovesách stojí medzi nimi: <i>I have <b>never</b> been there.</i></p>
<p><b>Sometimes</b> môže byť aj na začiatku vety. <b>Never</b> sa používa s kladným slovesom (nie „I don't never“).</p>`,
  ex: [["I usually walk to work.", "Do práce zvyčajne chodím pešo."], ["He is never late.", "Nikdy nechodí neskoro."], ["Sometimes we eat out.", "Niekedy jeme vonku."], ["She rarely watches TV.", "Zriedka pozerá televíziu."]],
  mist: [["I go always to school.", "I always go to school.", "Príslovka stojí pred hlavným slovesom."], ["I don't never smoke.", "I never smoke.", "Never už obsahuje zápor."]],
  quiz: [["She ___ gets up early.", ["always", "is always", "does always"], 0], ["He is ___ happy.", ["never", "not never", "don't never"], 0]] },

{ id: "prescont", lvl: "A1", cat: "Časy", t: "Present continuous – priebehový prítomný čas", sum: "Čo sa deje práve teraz alebo v tomto období.",
  body: `<p><b>Tvorenie:</b> <b>am / is / are + sloveso-ing</b>.</p>
<ul><li><b>práve teraz:</b> <i>I am reading now.</i></li><li><b>dočasné obdobie:</b> <i>She is studying French this year.</i></li><li><b>dohodnutý plán na blízku budúcnosť:</b> <i>We are meeting tomorrow.</i></li></ul>
<p><b>Pravopis -ing:</b> make → making (vypadne -e), run → running (zdvojí sa spoluhláska), lie → lying.</p>
<p><b>Stavové slovesá</b> (know, like, love, want, need, understand, believe) sa zvyčajne <u>nepoužívajú</u> v priebehovom čase: <i>I know the answer</i> (nie I am knowing).</p>`,
  ex: [["I'm cooking dinner.", "Varím večeru."], ["They aren't working today.", "Dnes nepracujú."], ["What are you doing?", "Čo robíš?"], ["He is living in Prague now.", "Teraz býva v Prahe."]],
  mist: [["I am knowing him.", "I know him.", "Stavové slovesá nepoužívame v continuous."], ["She is runing.", "She is running.", "Zdvojenie spoluhlásky."]],
  quiz: [["Listen! Somebody ___.", ["sings", "is singing", "sing"], 1], ["We ___ TV now.", ["aren't watching", "don't watching", "not watch"], 0]] },

{ id: "imperative", lvl: "A1", cat: "Vety", t: "Rozkazovací spôsob", sum: "Open the door! Don't be late!",
  body: `<p>Rozkazovací spôsob je <b>základný tvar slovesa bez podmetu</b>: <i>Sit down. Open your books.</i> Záporný: <b>Don't + sloveso</b> (<i>Don't run!</i>). Zdvorilejšie s <b>please</b>: <i>Please sit down</i>. Výzva „poďme“: <b>Let's + sloveso</b> (<i>Let's go!</i>).</p>`,
  ex: [["Close the door, please.", "Zavri dvere, prosím."], ["Don't be late.", "Nechoď neskoro."], ["Let's play football.", "Poďme hrať futbal."], ["Be quiet!", "Buď ticho!"]],
  mist: [["Don't to run.", "Don't run.", "Po don't ide základný tvar bez to."]],
  quiz: [["___ be afraid.", ["Not", "Don't", "Doesn't"], 1], ["___ have lunch together.", ["Let's", "Lets to", "Let"], 0]] },

{ id: "questions", lvl: "A1", cat: "Vety", t: "Otázky a opytovacie slová", sum: "Who, what, where, when, why, how – a poradie slov.",
  body: `<table class="gt"><tr><th>Slovo</th><th>Význam</th><th>Príklad</th></tr><tr><td>who</td><td>kto</td><td>Who is she?</td></tr><tr><td>what</td><td>čo</td><td>What do you want?</td></tr><tr><td>where</td><td>kde</td><td>Where do you live?</td></tr><tr><td>when</td><td>kedy</td><td>When is the lesson?</td></tr><tr><td>why</td><td>prečo</td><td>Why are you sad?</td></tr><tr><td>how</td><td>ako</td><td>How are you?</td></tr><tr><td>how much / many</td><td>koľko</td><td>How many books?</td></tr></table>
<p><b>Poradie:</b> opytovacie slovo + pomocné sloveso + podmet + hlavné sloveso: <i>Where <b>do you</b> live?</i> Ak je to sloveso to be: <i>Where <b>are you</b>?</i> Pri otázke na <b>podmet</b> sa pomocné sloveso nepoužíva: <i>Who lives here?</i></p>`,
  ex: [["Where do you work?", "Kde pracuješ?"], ["Why is he crying?", "Prečo plače?"], ["How much is it?", "Koľko to stojí?"], ["Who called you?", "Kto ti volal?"]],
  mist: [["Where you live?", "Where do you live?", "V otázke potrebujeme pomocné sloveso do."], ["Who does live here?", "Who lives here?", "Pri otázke na podmet sa do nepoužíva."]],
  quiz: [["___ do you get up?", ["When", "Who", "Whose"], 0], ["Where ___ she from?", ["do", "is", "does"], 1]] },

{ id: "prepos", lvl: "A1", cat: "Predložky", t: "Predložky miesta a času", sum: "in, on, at – najčastejšie predložky.",
  body: `<table class="gt"><tr><th>Predložka</th><th>Čas</th><th>Miesto</th></tr><tr><td><b>at</b></td><td>presný čas: at 5 o'clock, at night, at the weekend (BrE)</td><td>bod: at home, at school, at the door</td></tr><tr><td><b>on</b></td><td>dni a dátumy: on Monday, on 5 May</td><td>povrch: on the table, on the wall</td></tr><tr><td><b>in</b></td><td>mesiace, roky, obdobia: in May, in 2024, in summer, in the morning</td><td>vnútri: in the room, in Košice, in Slovakia</td></tr></table>
<p>Ďalšie: <b>under</b> (pod), <b>next to</b> (vedľa), <b>between</b> (medzi), <b>behind</b> (za), <b>in front of</b> (pred), <b>opposite</b> (oproti), <b>from … to</b> (od … do), <b>for</b> (po dobu: for two hours), <b>since</b> (od: since 2020).</p>`,
  ex: [["The meeting is at 9.", "Stretnutie je o deviatej."], ["My birthday is on 5 May.", "Narodeniny mám 5. mája."], ["I was born in 2010.", "Narodil som sa v roku 2010."], ["The cat is under the table.", "Mačka je pod stolom."]],
  mist: [["I'll see you in Monday.", "I'll see you on Monday.", "Pri dňoch používame on."], ["I live at Košice.", "I live in Košice.", "Pri mestách používame in."]],
  quiz: [["We have a lesson ___ Friday.", ["on", "in", "at"], 0], ["She wakes up ___ six.", ["in", "at", "on"], 1], ["It is ___ the box.", ["in", "at", "to"], 0]] },

// ================= A2 =================
{ id: "countable", lvl: "A2", cat: "Podstatné mená", t: "Počítateľné a nepočítateľné – some, any, much, many", sum: "Kedy použiť much a kedy many, some a any.",
  body: `<p><b>Počítateľné</b> môžeme počítať (<i>an apple, two apples</i>). <b>Nepočítateľné</b> nie (<i>water, milk, money, advice, information, bread</i>) – nemajú množné číslo a nemajú a/an. Ich množstvo vyjadríme výrazmi: <i>a glass of water, a piece of advice, a slice of bread</i>.</p>
<table class="gt"><tr><th></th><th>počítateľné</th><th>nepočítateľné</th></tr><tr><td>kladná</td><td>some apples, a lot of apples</td><td>some milk, a lot of milk</td></tr><tr><td>záporná / otázka</td><td>any apples, many apples</td><td>any milk, much milk</td></tr><tr><td>koľko?</td><td>How many apples?</td><td>How much milk?</td></tr><tr><td>trochu / málo</td><td>a few / few</td><td>a little / little</td></tr></table>
<p><b>Some</b> používame aj v ponukách a žiadostiach: <i>Would you like some tea?</i> <b>A few / a little</b> = niekoľko, trocha (kladné); <b>few / little</b> = málo, takmer žiadne (záporný nádych).</p>`,
  ex: [["I need some water.", "Potrebujem trochu vody."], ["Is there any bread?", "Je tam nejaký chlieb?"], ["How many eggs do you want?", "Koľko vajec chceš?"], ["We don't have much time.", "Nemáme veľa času."], ["I have a few friends here.", "Mám tu niekoľko priateľov."]],
  mist: [["I need an advice.", "I need some advice.", "Advice je nepočítateľné."], ["How many money?", "How much money?", "Money je nepočítateľné – much."]],
  quiz: [["How ___ sugar do you take?", ["many", "much", "few"], 1], ["There aren't ___ chairs.", ["some", "any", "much"], 1], ["I have ___ friends in Prague. (málo)", ["few", "little", "a little"], 0]] },

{ id: "pastsimple", lvl: "A2", cat: "Časy", t: "Past simple – jednoduchý minulý čas", sum: "Ukončené deje v minulosti.",
  body: `<p><b>Použitie:</b> dej, ktorý sa <b>skončil v minulosti</b> a vieme (alebo hovoríme) kedy: <i>I visited Rome last year.</i> Signálne slová: yesterday, last week, in 2019, two days ago, when I was a child.</p>
<p><b>Pravidelné slovesá:</b> + <b>-ed</b> (work → worked; live → lived; study → studied; stop → stopped). <b>Nepravidelné</b> sa musíme naučiť (go → went, see → saw, have → had – pozri tabuľku nepravidelných slovies).</p>
<table class="gt"><tr><th>Kladná</th><th>Záporná</th><th>Otázka</th></tr><tr><td>I worked / went</td><td>I didn't work / go</td><td>Did you work / go?</td></tr></table>
<p>V zápore a otázke je pomocné sloveso <b>did</b> a hlavné sloveso je v <u>základnom tvare</u>: <i>Did you <b>go</b>?</i> (nie went). Sloveso <b>to be</b>: was / were (<i>I was</i>, <i>we were</i>; zápor wasn't / weren't; otázka Was he…?).</p>
<p><b>Výslovnosť -ed:</b> /t/ (worked), /d/ (played), /ɪd/ (wanted, needed).</p>`,
  ex: [["I watched a film yesterday.", "Včera som pozeral film."], ["She didn't come to school.", "Neprišla do školy."], ["Did you see him?", "Videl si ho?"], ["We went to Vienna in May.", "V máji sme išli do Viedne."], ["It was cold last night.", "Včera v noci bola zima."]],
  mist: [["Did you went there?", "Did you go there?", "Po did ide základný tvar."], ["I buyed a book.", "I bought a book.", "Buy je nepravidelné: bought."]],
  quiz: [["She ___ to London last year.", ["go", "went", "goed"], 1], ["I ___ see him yesterday.", ["didn't", "don't", "wasn't"], 0], ["___ you at home last night?", ["Did", "Were", "Was"], 1]] },

{ id: "compar", lvl: "A2", cat: "Prídavné mená", t: "Stupňovanie prídavných mien", sum: "bigger, the biggest, more interesting, as … as.",
  body: `<table class="gt"><tr><th>Typ</th><th>2. stupeň</th><th>3. stupeň</th></tr><tr><td>krátke (1 slabika): tall</td><td>tall<b>er</b> (than)</td><td>the tall<b>est</b></td></tr><tr><td>-y: easy</td><td>eas<b>ier</b></td><td>the eas<b>iest</b></td></tr><tr><td>dlhé (2+ slabiky): interesting</td><td><b>more</b> interesting</td><td>the <b>most</b> interesting</td></tr><tr><td>nepravidelné: good / bad / far</td><td>better / worse / farther</td><td>the best / the worst / the farthest</td></tr></table>
<p>Pri krátkych slovách s jednou samohláskou a spoluhláskou zdvojíme spoluhlásku: big → bigger → the biggest.</p>
<p><b>Porovnanie:</b> <i>than</i> (ako) – <i>She is taller than me</i>. <b>as … as</b> (rovnako ako) – <i>He is as old as I am</i>. <b>not as … as</b> – <i>It's not as cold as yesterday</i>.</p>`,
  ex: [["My bag is bigger than yours.", "Moja taška je väčšia než tvoja."], ["This is the best day ever.", "Toto je najlepší deň vôbec."], ["This exercise is more difficult than that one.", "Toto cvičenie je ťažšie ako tamto."], ["She is as tall as her mother.", "Je rovnako vysoká ako jej mama."]],
  mist: [["more tall", "taller", "Krátke prídavné mená stupňujeme -er."], ["the most good", "the best", "Good je nepravidelné."]],
  quiz: [["Today is ___ than yesterday.", ["hot", "hotter", "more hot"], 1], ["She is the ___ student in class.", ["clever", "cleverest", "more clever"], 1], ["This film is ___ than the book.", ["more boring", "boringer", "most boring"], 0]] },

{ id: "future1", lvl: "A2", cat: "Časy", t: "Budúcnosť: will a going to", sum: "Plány, predpovede a okamžité rozhodnutia.",
  body: `<p><b>Going to</b> (am/is/are + going to + sloveso):</p><ul><li>predchádzajúci <b>plán / zámer</b>: <i>I'm going to study medicine.</i></li><li>predpoveď podložená <b>dôkazom, ktorý vidíme</b>: <i>Look at the clouds – it's going to rain.</i></li></ul>
<p><b>Will</b> (will + sloveso, zápor won't):</p><ul><li><b>okamžité rozhodnutie</b>: <i>The phone is ringing. I'll answer it.</i></li><li>sľub, ponuka: <i>I'll help you.</i></li><li>predpoveď / názor: <i>I think it will be sunny.</i></li></ul>
<p><b>Present continuous</b> pre dohodnutý plán s časom a miestom: <i>I'm meeting Anna at 6.</i></p>`,
  ex: [["I'm going to learn Italian.", "Chystám sa učiť taliančinu."], ["I'll carry that for you.", "Ponesiem ti to."], ["It's going to snow.", "Bude snežiť."], ["She won't be late.", "Nebude meškať."]],
  mist: [["I will meet her tomorrow at 6 (dohodnuté).", "I'm meeting her tomorrow at 6.", "Dohodnutý plán – present continuous."]],
  quiz: [["Look! The baby ___ fall.", ["will", "is going to", "going to"], 1], ["I'm thirsty. I ___ get some water.", ["will", "am going to", "do"], 0]] },

{ id: "perfect1", lvl: "A2", cat: "Časy", t: "Present perfect – predprítomný čas", sum: "Skúsenosti a výsledky, ktoré sú dôležité teraz.",
  body: `<p><b>Tvorenie:</b> <b>have / has + 3. tvar slovesa (past participle)</b>: <i>I have seen</i>, <i>she has finished</i>. Pravidelné: -ed; nepravidelné: pozri tabuľku (go – went – <u>gone</u>).</p>
<p><b>Použitie:</b></p><ul><li><b>skúsenosť v živote</b> (bez presného času): <i>I have been to Spain.</i></li><li><b>výsledok je dôležitý teraz</b>: <i>I have lost my keys</i> (a nemám ich).</li><li><b>dej trvajúci do dnes</b> s <i>for / since</i>: <i>I have lived here for ten years.</i></li><li><b>čerstvá správa</b>: <i>The bus has just arrived.</i></li></ul>
<p>Signálne slová: <b>ever, never, already, yet, just, so far, for, since</b>. S presným časom v minulosti (yesterday, last week, in 2019) používame <b>past simple</b>, nie perfect.</p>`,
  ex: [["I have never been to Japan.", "Nikdy som nebol v Japonsku."], ["She has already eaten.", "Už jedla."], ["Have you finished yet?", "Už si skončil?"], ["We've lived here since 2018.", "Bývame tu od roku 2018."]],
  mist: [["I have seen him yesterday.", "I saw him yesterday.", "S yesterday používame past simple."], ["I am here since Monday.", "I have been here since Monday.", "Dej trvajúci do teraz → present perfect."]],
  quiz: [["I ___ my homework. I can go out now.", ["have done", "did", "do"], 0], ["She ___ in Prague for five years.", ["lives", "has lived", "lived"], 1], ["___ you ever eaten sushi?", ["Did", "Have", "Do"], 1]] },

{ id: "pastcont", lvl: "A2", cat: "Časy", t: "Past continuous – minulý priebehový čas", sum: "Čo sa dialo v určitom okamihu v minulosti.",
  body: `<p><b>Tvorenie:</b> <b>was / were + sloveso-ing</b>.</p><p><b>Použitie:</b> dej, ktorý práve prebiehal v určitom čase v minulosti: <i>At 8 o'clock I was having dinner.</i> Často spolu s past simple – dlhší dej (continuous) je prerušený kratším (simple): <i>I <b>was walking</b> home when it <b>started</b> to rain.</i> Spojky: <b>when</b> (so simple), <b>while</b> (s continuous): <i>While I was cooking, he was reading.</i></p>`,
  ex: [["I was sleeping at midnight.", "O polnoci som spal."], ["They were playing football when it started to rain.", "Hrali futbal, keď začalo pršať."], ["What were you doing at 7?", "Čo si robil o siedmej?"], ["She wasn't listening.", "Nepočúvala."]],
  mist: [["While I walked, I met him.", "While I was walking, I met him.", "Dlhší prebiehajúci dej po while je continuous."]],
  quiz: [["I ___ TV when she called.", ["watched", "was watching", "watching"], 1], ["While we ___, the lights went out.", ["ate", "were eating", "eat"], 1]] },

{ id: "modals1", lvl: "A2", cat: "Slovesá", t: "Must, have to, should", sum: "Povinnosť, zákaz, rada.",
  body: `<table class="gt"><tr><th>Sloveso</th><th>Význam</th><th>Príklad</th></tr><tr><td><b>must</b></td><td>musieť (vlastné rozhodnutie, silná potreba)</td><td>I must study tonight.</td></tr><tr><td><b>have to</b></td><td>musieť (pravidlo, nutnosť zvonka)</td><td>I have to wear a uniform.</td></tr><tr><td><b>mustn't</b></td><td><u>nesmieš</u> (zákaz)</td><td>You mustn't smoke here.</td></tr><tr><td><b>don't have to</b></td><td><u>nemusíš</u> (nie je to potrebné)</td><td>You don't have to come.</td></tr><tr><td><b>should</b></td><td>mal by si (rada)</td><td>You should see a doctor.</td></tr></table>
<p>Pozor: <i>mustn't</i> ≠ <i>don't have to</i>! Po modálnych slovesách (must, should) nasleduje sloveso bez <i>to</i>.</p>`,
  ex: [["You mustn't park here.", "Tu nesmieš parkovať."], ["We don't have to wear a tie.", "Nemusíme nosiť kravatu."], ["She should sleep more.", "Mala by viac spať."], ["Do I have to go?", "Musím ísť?"]],
  mist: [["You must to go.", "You must go.", "Po must nepoužívame to."], ["You don't must stay.", "You don't have to stay.", "Nemusíš = don't have to."]],
  quiz: [["Tomorrow is Sunday. We ___ go to school.", ["mustn't", "don't have to", "should"], 1], ["You ___ drive fast near schools.", ["mustn't", "don't have to", "have to"], 0]] },

{ id: "adverbs", lvl: "A2", cat: "Príslovky", t: "Príslovky spôsobu", sum: "quickly, well, hard, fast – ako sa dej deje.",
  body: `<p>Z prídavného mena vytvoríme príslovku pridaním <b>-ly</b>: quick → quickly, careful → carefully; -y → -ily: happy → happily. Nepravidelné: <b>good → well</b>, <b>fast → fast</b>, <b>hard → hard</b> (hardly = sotva!), <b>late → late</b> (lately = nedávno).</p>
<p>Príslovky bližšie určujú <b>sloveso</b> (<i>She sings beautifully</i>), prídavné mená sa používajú pri to be a pri slovesách zmyslov (<i>She looks happy</i>).</p>`,
  ex: [["He drives carefully.", "Šoféruje opatrne."], ["She speaks English well.", "Hovorí dobre po anglicky."], ["We worked hard.", "Pracovali sme tvrdo."], ["The film was really good.", "Film bol naozaj dobrý."]],
  mist: [["She speaks good English? Fine. She speaks English good.", "She speaks English well.", "Dobre ako príslovka je well."]],
  quiz: [["He runs very ___.", ["fast", "fastly", "quick"], 0], ["She plays the piano ___.", ["good", "well", "goodly"], 1]] },

{ id: "gerinf", lvl: "A2", cat: "Slovesá", t: "Gerund (-ing) a infinitív (to)", sum: "enjoy doing, want to do – ktoré sloveso potrebuje čo.",
  body: `<p>Po niektorých slovesách ide <b>-ing</b>, po iných <b>to + sloveso</b>.</p>
<table class="gt"><tr><th>+ -ing</th><th>+ to infinitív</th></tr><tr><td>enjoy, like, love, hate, finish, stop, mind, avoid, suggest, keep, practise</td><td>want, need, decide, hope, plan, learn, promise, agree, refuse, manage, would like</td></tr></table>
<p>Po <b>predložkách</b> ide vždy -ing (<i>interested in learning, before leaving</i>). <b>Let, make</b> + sloveso bez to (<i>She made me laugh</i>).</p>
<p>Pozor na zmenu významu: <i>I stopped smoking</i> (prestal som) vs. <i>I stopped to smoke</i> (zastavil som, aby som si zapálil).</p>`,
  ex: [["I enjoy swimming.", "Rád plávam."], ["She wants to travel.", "Chce cestovať."], ["He is good at drawing.", "Je dobrý v kreslení."], ["We decided to go home.", "Rozhodli sme sa ísť domov."]],
  mist: [["I want going home.", "I want to go home.", "Po want ide to + infinitív."], ["She enjoys to read.", "She enjoys reading.", "Po enjoy ide -ing."]],
  quiz: [["I hope ___ you soon.", ["see", "to see", "seeing"], 1], ["She finished ___ the report.", ["write", "to write", "writing"], 2]] },

{ id: "irregular", lvl: "A2", cat: "Tabuľky", t: "Nepravidelné slovesá", sum: "Tabuľka najdôležitejších nepravidelných slovies.",
  body: `<table class="gt"><tr><th>Infinitív</th><th>Past simple</th><th>Past participle</th><th>Slovensky</th></tr>
<tr><td>be</td><td>was/were</td><td>been</td><td>byť</td></tr><tr><td>become</td><td>became</td><td>become</td><td>stať sa</td></tr><tr><td>begin</td><td>began</td><td>begun</td><td>začať</td></tr><tr><td>break</td><td>broke</td><td>broken</td><td>rozbiť</td></tr><tr><td>bring</td><td>brought</td><td>brought</td><td>priniesť</td></tr><tr><td>build</td><td>built</td><td>built</td><td>stavať</td></tr><tr><td>buy</td><td>bought</td><td>bought</td><td>kúpiť</td></tr><tr><td>catch</td><td>caught</td><td>caught</td><td>chytiť</td></tr><tr><td>choose</td><td>chose</td><td>chosen</td><td>vybrať</td></tr><tr><td>come</td><td>came</td><td>come</td><td>prísť</td></tr><tr><td>cost</td><td>cost</td><td>cost</td><td>stáť</td></tr><tr><td>cut</td><td>cut</td><td>cut</td><td>rezať</td></tr><tr><td>do</td><td>did</td><td>done</td><td>robiť</td></tr><tr><td>draw</td><td>drew</td><td>drawn</td><td>kresliť</td></tr><tr><td>drink</td><td>drank</td><td>drunk</td><td>piť</td></tr><tr><td>drive</td><td>drove</td><td>driven</td><td>šoférovať</td></tr><tr><td>eat</td><td>ate</td><td>eaten</td><td>jesť</td></tr><tr><td>fall</td><td>fell</td><td>fallen</td><td>padnúť</td></tr><tr><td>feel</td><td>felt</td><td>felt</td><td>cítiť</td></tr><tr><td>find</td><td>found</td><td>found</td><td>nájsť</td></tr><tr><td>fly</td><td>flew</td><td>flown</td><td>lietať</td></tr><tr><td>forget</td><td>forgot</td><td>forgotten</td><td>zabudnúť</td></tr><tr><td>get</td><td>got</td><td>got</td><td>dostať</td></tr><tr><td>give</td><td>gave</td><td>given</td><td>dať</td></tr><tr><td>go</td><td>went</td><td>gone/been</td><td>ísť</td></tr><tr><td>grow</td><td>grew</td><td>grown</td><td>rásť</td></tr><tr><td>have</td><td>had</td><td>had</td><td>mať</td></tr><tr><td>hear</td><td>heard</td><td>heard</td><td>počuť</td></tr><tr><td>hide</td><td>hid</td><td>hidden</td><td>skryť</td></tr><tr><td>keep</td><td>kept</td><td>kept</td><td>držať</td></tr><tr><td>know</td><td>knew</td><td>known</td><td>vedieť</td></tr><tr><td>leave</td><td>left</td><td>left</td><td>odísť</td></tr><tr><td>lose</td><td>lost</td><td>lost</td><td>stratiť</td></tr><tr><td>make</td><td>made</td><td>made</td><td>urobiť</td></tr><tr><td>meet</td><td>met</td><td>met</td><td>stretnúť</td></tr><tr><td>pay</td><td>paid</td><td>paid</td><td>platiť</td></tr><tr><td>put</td><td>put</td><td>put</td><td>položiť</td></tr><tr><td>read</td><td>read</td><td>read</td><td>čítať</td></tr><tr><td>ride</td><td>rode</td><td>ridden</td><td>jazdiť</td></tr><tr><td>run</td><td>ran</td><td>run</td><td>bežať</td></tr><tr><td>say</td><td>said</td><td>said</td><td>povedať</td></tr><tr><td>see</td><td>saw</td><td>seen</td><td>vidieť</td></tr><tr><td>sell</td><td>sold</td><td>sold</td><td>predať</td></tr><tr><td>send</td><td>sent</td><td>sent</td><td>poslať</td></tr><tr><td>sing</td><td>sang</td><td>sung</td><td>spievať</td></tr><tr><td>sit</td><td>sat</td><td>sat</td><td>sedieť</td></tr><tr><td>sleep</td><td>slept</td><td>slept</td><td>spať</td></tr><tr><td>speak</td><td>spoke</td><td>spoken</td><td>hovoriť</td></tr><tr><td>spend</td><td>spent</td><td>spent</td><td>stráviť / minúť</td></tr><tr><td>swim</td><td>swam</td><td>swum</td><td>plávať</td></tr><tr><td>take</td><td>took</td><td>taken</td><td>vziať</td></tr><tr><td>teach</td><td>taught</td><td>taught</td><td>učiť</td></tr><tr><td>tell</td><td>told</td><td>told</td><td>povedať</td></tr><tr><td>think</td><td>thought</td><td>thought</td><td>myslieť</td></tr><tr><td>understand</td><td>understood</td><td>understood</td><td>rozumieť</td></tr><tr><td>wear</td><td>wore</td><td>worn</td><td>nosiť (oblečenie)</td></tr><tr><td>win</td><td>won</td><td>won</td><td>vyhrať</td></tr><tr><td>write</td><td>wrote</td><td>written</td><td>písať</td></tr></table>
<p>Tip: slovesá sa ľahšie učia po skupinách: <i>buy–bought–bought, bring–brought–brought, think–thought–thought</i> (rovnaký vzor -ought).</p>`,
  ex: [["I wrote a letter.", "Napísal som list."], ["She has eaten already.", "Už jedla."], ["We bought a car last year.", "Minulý rok sme kúpili auto."]],
  mist: [["I have went.", "I have gone.", "3. tvar slovesa go je gone."]],
  quiz: [["Past simple of 'take':", ["taked", "took", "taken"], 1], ["Past participle of 'write':", ["wrote", "written", "writed"], 1]] },

// ================= B1 =================
{ id: "perfcomp", lvl: "B1", cat: "Časy", t: "Present perfect vs. past simple a perfect continuous", sum: "Kedy použiť ktorý čas a čo je have been doing.",
  body: `<table class="gt"><tr><th>Past simple</th><th>Present perfect</th></tr><tr><td>čas je uvedený alebo jasný (yesterday, in 2019, when I was young)</td><td>čas nie je uvedený; spojenie s prítomnosťou (ever, never, just, already, yet, for, since)</td></tr><tr><td>I <b>lived</b> in Rome for two years. (už tam nebývam)</td><td>I <b>have lived</b> in Rome for two years. (stále tam bývam)</td></tr></table>
<p><b>Present perfect continuous:</b> <b>have / has been + -ing</b>. Zdôrazňuje <b>trvanie</b> deja alebo jeho dôsledok: <i>I have been waiting for an hour.</i> <i>Your eyes are red – have you been crying?</i></p>
<p><b>Rozdiel:</b> <i>I have read the book</i> (výsledok: mám prečítané) vs. <i>I have been reading the book</i> (trvanie, možno ešte nie som hotový). Stavové slovesá majú vždy simple: <i>I have known him for years.</i></p>
<p><b>For</b> = ako dlho (for two weeks), <b>since</b> = od kedy (since Monday).</p>`,
  ex: [["I have been studying English for three years.", "Učím sa po anglicky už tri roky."], ["She lost her keys yesterday.", "Včera stratila kľúče."], ["Have you ever been to Italy?", "Bol si niekedy v Taliansku?"], ["It has been raining all day.", "Prší celý deň."]],
  mist: [["I am learning English since 2020.", "I have been learning English since 2020.", "Dej trvajúci do dnes → perfect (continuous)."]],
  quiz: [["I ___ here since 2015.", ["live", "have lived", "lived"], 1], ["He ___ for you for an hour.", ["waits", "has been waiting", "waited"], 1], ["We ___ to Paris in 2019.", ["went", "have gone", "have been going"], 0]] },

{ id: "cond1", lvl: "B1", cat: "Podmienky", t: "Podmienkové vety 0 a 1", sum: "If it rains, we stay home. If you heat ice, it melts.",
  body: `<p><b>Zero conditional</b> – všeobecné pravdy: <b>If + present simple, present simple</b>: <i>If you heat ice, it melts.</i></p>
<p><b>First conditional</b> – reálna možnosť v budúcnosti: <b>If + present simple, will + sloveso</b>: <i>If it rains tomorrow, we <b>will stay</b> at home.</i></p>
<p>Dôležité: v časti s <i>if</i> <u>nikdy</u> nepoužívame will (<i>If it will rain</i> je chyba). Poradie častí môžeme otočiť (bez čiarky): <i>We will stay at home if it rains.</i> Namiesto <i>if</i> môžeme použiť <b>unless</b> (= if not): <i>Unless you hurry, you will be late.</i> Podobné spojky: <b>when, as soon as, before, until</b> (aj tie sa spájajú s prítomným časom pre budúcnosť).</p>`,
  ex: [["If you study, you will pass.", "Ak sa budeš učiť, prejdeš."], ["If I see him, I'll tell him.", "Ak ho uvidím, poviem mu."], ["Unless you leave now, you'll miss the train.", "Ak hneď neodídeš, zmeškáš vlak."], ["I'll call you as soon as I arrive.", "Zavolám ti, hneď ako prídem."]],
  mist: [["If it will rain, we stay home.", "If it rains, we will stay home.", "V if-vete používame prítomný čas."]],
  quiz: [["If she ___ early, she will catch the bus.", ["leaves", "will leave", "left"], 0], ["I ___ you if I find it.", ["will tell", "tell", "told"], 0], ["___ you hurry, you'll be late.", ["If", "Unless", "When"], 1]] },

{ id: "cond2", lvl: "B1", cat: "Podmienky", t: "Druhá podmienka – If I were…", sum: "Nereálne alebo málo pravdepodobné situácie.",
  body: `<p><b>If + past simple, would + sloveso</b>: <i>If I had a million euros, I would buy a house.</i> (Nemám ich – je to predstava.)</p>
<p>Pri <b>to be</b> sa vo formálnej angličtine používa <b>were</b> pre všetky osoby: <i>If I <b>were</b> you, I would apologise.</i> (Na tvojom mieste by som sa ospravedlnil.)</p>
<p>Past simple tu <u>nevyjadruje minulosť</u>, ale nereálnosť. Aj tu: v if-časti nepoužívame would. Namiesto would môžeme použiť <b>could</b> alebo <b>might</b>.</p>`,
  ex: [["If I were rich, I would travel the world.", "Keby som bol bohatý, cestoval by som po svete."], ["If she knew, she would help.", "Keby vedela, pomohla by."], ["What would you do if you won the lottery?", "Čo by si robil, keby si vyhral v lotérii?"], ["If I were you, I wouldn't go.", "Na tvojom mieste by som nešiel."]],
  mist: [["If I would have time, I would come.", "If I had time, I would come.", "V if-časti ide past simple, nie would."]],
  quiz: [["If I ___ taller, I would play basketball.", ["am", "were", "would be"], 1], ["She would help if she ___ the answer.", ["knows", "knew", "would know"], 1]] },

{ id: "passive1", lvl: "B1", cat: "Slovesný rod", t: "Trpný rod (Passive voice)", sum: "Dôležitý je dej alebo výsledok, nie ten, kto ho robí.",
  body: `<p><b>Tvorenie:</b> <b>to be (v príslušnom čase) + past participle</b>.</p>
<table class="gt"><tr><th>Čas</th><th>Činný</th><th>Trpný</th></tr><tr><td>present simple</td><td>They make cars here.</td><td>Cars <b>are made</b> here.</td></tr><tr><td>past simple</td><td>Someone stole my bike.</td><td>My bike <b>was stolen</b>.</td></tr><tr><td>present perfect</td><td>They have finished it.</td><td>It <b>has been finished</b>.</td></tr><tr><td>will</td><td>They will build a bridge.</td><td>A bridge <b>will be built</b>.</td></tr><tr><td>modál</td><td>You must do it.</td><td>It <b>must be done</b>.</td></tr></table>
<p>Použijeme ho, keď <b>nevieme</b> kto dej urobil, <b>nie je dôležité</b> kto ho urobil, alebo pre formálny štýl (správy, vedecké texty). Pôvodcu môžeme uviesť s <b>by</b>: <i>The book was written <b>by</b> Orwell.</i></p>`,
  ex: [["English is spoken all over the world.", "Po anglicky sa hovorí po celom svete."], ["The window was broken yesterday.", "Okno sa včera rozbilo."], ["The report must be finished today.", "Správa musí byť dokončená dnes."], ["This house was built in 1900.", "Tento dom bol postavený v roku 1900."]],
  mist: [["The cake was ate.", "The cake was eaten.", "V trpnom rode ide 3. tvar (past participle)."]],
  quiz: [["The letter ___ yesterday.", ["was sent", "sent", "is sent"], 0], ["Rice ___ in Asia.", ["grows", "is grown", "grown"], 1], ["The room ___ be cleaned.", ["must", "must be", "must been"], 1]] },

{ id: "reported", lvl: "B1", cat: "Nepriama reč", t: "Nepriama reč (Reported speech)", sum: "She said that she was tired – posun časov a zmena zámen.",
  body: `<p>Nepriama reč prerozpráva, čo niekto povedal. Zvyčajne <b>posúvame čas o krok späť</b> a menia sa zámená a časové údaje.</p>
<table class="gt"><tr><th>Priama reč</th><th>Nepriama reč</th></tr><tr><td>present simple: „I <b>work</b>.“</td><td>She said she <b>worked</b>.</td></tr><tr><td>present continuous: „I am working.“</td><td>She said she <b>was working</b>.</td></tr><tr><td>past simple: „I worked.“</td><td>She said she <b>had worked</b>.</td></tr><tr><td>present perfect: „I have worked.“</td><td>She said she <b>had worked</b>.</td></tr><tr><td>will: „I will work.“</td><td>She said she <b>would work</b>.</td></tr><tr><td>can: „I can work.“</td><td>She said she <b>could work</b>.</td></tr></table>
<p><b>Časové údaje:</b> now → then, today → that day, tomorrow → the next day, yesterday → the day before, here → there.</p>
<p><b>Otázky:</b> poradie ako v oznamovacej vete, bez do/did: <i>He asked where I lived.</i> Áno/nie otázky s <b>if / whether</b>: <i>She asked if I was ready.</i></p>
<p><b>Príkazy:</b> <i>He told me to sit down.</i> / <i>He told me not to talk.</i> <b>say</b> (nemá osobu) vs. <b>tell</b> (+ osoba): <i>She said that…</i> / <i>She told me that…</i></p>`,
  ex: [["He said he was tired.", "Povedal, že je unavený."], ["She told me she had finished.", "Povedala mi, že skončila."], ["They asked where I lived.", "Pýtali sa, kde bývam."], ["He asked me if I could help.", "Opýtal sa ma, či môžem pomôcť."], ["The teacher told us to be quiet.", "Učiteľ nám povedal, aby sme boli ticho."]],
  mist: [["He asked where did I live.", "He asked where I lived.", "V nepriamej otázke nepoužívame inverziu ani did."], ["She said me she was tired.", "She told me / She said she was tired.", "Say sa nepoužíva priamo s osobou."]],
  quiz: [["'I am hungry,' he said. → He said he ___ hungry.", ["is", "was", "had been"], 1], ["'Where do you live?' → She asked where I ___.", ["lived", "do live", "live did"], 0], ["'Don't run!' → He told us ___.", ["not to run", "to not run", "don't run"], 0]] },

{ id: "relative", lvl: "B1", cat: "Vedľajšie vety", t: "Vzťažné vety (who, which, that, whose)", sum: "Spájame vety a upresňujeme podstatné meno.",
  body: `<table class="gt"><tr><th>Zámeno</th><th>Použitie</th><th>Príklad</th></tr><tr><td><b>who</b></td><td>osoby</td><td>The man <b>who</b> lives next door is a doctor.</td></tr><tr><td><b>which</b></td><td>veci, zvieratá</td><td>The book <b>which</b> I read was great.</td></tr><tr><td><b>that</b></td><td>osoby aj veci (definujúce vety)</td><td>The film <b>that</b> we saw was boring.</td></tr><tr><td><b>whose</b></td><td>čí</td><td>The girl <b>whose</b> bag was stolen cried.</td></tr><tr><td><b>where</b></td><td>miesto</td><td>This is the town <b>where</b> I was born.</td></tr></table>
<p><b>Definujúce</b> vety sú nevyhnutné pre význam (bez čiarky): <i>The students who study hard pass.</i> <b>Nedefinujúce</b> pridávajú doplnkovú informáciu (v čiarkach, <u>nie s that</u>): <i>My brother, <b>who</b> lives in Rome, is a chef.</i></p>
<p>Ak je zámeno <u>predmetom</u> vzťažnej vety, môžeme ho vynechať: <i>The book (that) I read…</i> Ak je podmetom, vynechať ho nesmieme: <i>The man who lives…</i></p>`,
  ex: [["The woman who called you is my aunt.", "Žena, ktorá ti volala, je moja teta."], ["This is the house where I grew up.", "Toto je dom, kde som vyrastal."], ["My phone, which is new, is broken.", "Môj telefón, ktorý je nový, je pokazený."], ["That's the boy whose dog ran away.", "To je chlapec, ktorému utiekol pes."]],
  mist: [["The man which lives here is a teacher.", "The man who lives here is a teacher.", "Pre osoby používame who."]],
  quiz: [["The car ___ I bought is red.", ["who", "that", "whose"], 1], ["She is the woman ___ son is a pilot.", ["who", "which", "whose"], 2]] },

{ id: "usedto", lvl: "B1", cat: "Časy", t: "Used to a would", sum: "Zvyky a stavy v minulosti, ktoré už neplatia.",
  body: `<p><b>Used to + infinitív</b>: dlhodobý zvyk alebo stav v minulosti, ktorý už <u>neplatí</u>: <i>I used to play football every day.</i> / <i>She used to live in Prague.</i> Záporná: <b>didn't use to</b>, otázka: <b>Did you use to…?</b> (bez -d!).</p>
<p><b>Would + infinitív</b> môže nahradiť used to len pri <b>opakovaných činnostiach</b> (nie pri stavoch): <i>Every summer we would go to the lake.</i> ✔ <i>I would live in Prague.</i> ✘</p>
<p>Nezamieňať s <b>be / get used to + -ing</b> = zvyknúť si na: <i>I'm used to getting up early.</i></p>`,
  ex: [["We used to live in a small village.", "Kedysi sme bývali v malej dedine."], ["Did you use to smoke?", "Fajčil si kedysi?"], ["He didn't use to like fish.", "Kedysi nemal rád ryby."], ["I'm used to working at night.", "Som zvyknutý pracovať v noci."]],
  mist: [["Did you used to play?", "Did you use to play?", "Po did sa používa use (bez -d)."]],
  quiz: [["I ___ to walk to school when I was a child.", ["used", "use", "am used"], 0], ["I'm not used ___ early.", ["get up", "to getting up", "to get up"], 1]] },

{ id: "deduct", lvl: "B1", cat: "Slovesá", t: "Modálne slovesá odhadu: must, might, can't", sum: "Ako sa hádať, čo je pravda.",
  body: `<table class="gt"><tr><th>Istota</th><th>Sloveso</th><th>Príklad</th></tr><tr><td>~95 % áno</td><td><b>must be</b></td><td>He's wearing a uniform. He <b>must be</b> a policeman.</td></tr><tr><td>~50 %</td><td><b>may / might / could be</b></td><td>She <b>might be</b> at home.</td></tr><tr><td>~95 % nie</td><td><b>can't be</b></td><td>It <b>can't be</b> true!</td></tr></table>
<p>Pozor: opak <i>must</i> pri odhade je <b>can't</b> (nie mustn't). Odhady o minulosti: <b>must / might / can't + have + past participle</b>: <i>She must have forgotten.</i></p>`,
  ex: [["He must be tired after the trip.", "Musí byť unavený po ceste."], ["That can't be Tom – he's in Spain.", "To nemôže byť Tom – je v Španielsku."], ["They might come tonight.", "Možno dnes večer prídu."], ["She must have missed the bus.", "Určite zmeškala autobus."]],
  mist: [["It mustn't be true.", "It can't be true.", "Pri odhade je záporom must can't."]],
  quiz: [["The lights are off. They ___ be at home.", ["can't", "mustn't", "doesn't"], 0], ["He ___ have forgotten his keys. He is knocking.", ["must", "can't", "mustn't"], 0]] },

{ id: "linkers", lvl: "B1", cat: "Spojky", t: "Spojovacie výrazy (linking words)", sum: "although, however, because of, in spite of…",
  body: `<table class="gt"><tr><th>Funkcia</th><th>Výrazy</th></tr><tr><td>dôvod</td><td><b>because</b> + veta; <b>because of</b> + podstatné meno; <b>as, since</b></td></tr><tr><td>dôsledok</td><td><b>so, therefore, as a result</b></td></tr><tr><td>kontrast</td><td><b>but, although / even though</b> + veta; <b>despite / in spite of</b> + podst. meno / -ing; <b>however, nevertheless</b> (na začiatku vety)</td></tr><tr><td>pridanie</td><td><b>and, also, in addition, moreover</b></td></tr><tr><td>účel</td><td><b>to + inf., in order to, so that</b></td></tr></table>
<p><i>Although it was raining, we went out.</i> = <i>Despite the rain, we went out.</i> Pozor: po <b>although</b> nikdy nedávame <i>but</i> (<i>Although he is rich, but…</i> je chyba).</p>`,
  ex: [["He stayed home because of the rain.", "Zostal doma kvôli dažďu."], ["Although she was tired, she continued.", "Hoci bola unavená, pokračovala."], ["It was cold. However, we went swimming.", "Bolo chladno. Napriek tomu sme išli plávať."], ["I called her so that she wouldn't worry.", "Zavolal som jej, aby sa nebála."]],
  mist: [["Despite it was late, we stayed.", "Despite the late hour / Although it was late, we stayed.", "Despite je predložka – nasleduje podstatné meno alebo -ing."]],
  quiz: [["___ he was ill, he went to work.", ["Despite", "Although", "Because of"], 1], ["We stayed in ___ the weather.", ["although", "because", "because of"], 2]] },

// ================= B2 =================
{ id: "pastperf", lvl: "B2", cat: "Časy", t: "Past perfect – predminulý čas", sum: "Dej, ktorý sa stal skôr než iný dej v minulosti.",
  body: `<p><b>Tvorenie:</b> <b>had + past participle</b> (had finished, had gone). Záporná: <i>hadn't</i>; otázka: <i>Had you…?</i></p>
<p><b>Použitie:</b> vyjadruje, že dej sa odohral <b>skôr</b> než iný minulý dej: <i>When I arrived, the film <b>had</b> already <b>started</b>.</i> (Najprv film začal, potom som prišiel.) Často s <b>already, just, by the time, before, after, when, never… before</b>.</p>
<p>Ak sa udalosti dejú po sebe a poradie je jasné (after, before), môžeme použiť aj past simple. <b>Past perfect continuous</b> (<i>had been + -ing</i>) zdôrazňuje trvanie pred iným minulým dejom: <i>She was tired because she <b>had been working</b> all day.</i></p>`,
  ex: [["I had already eaten when he called.", "Už som jedol, keď zavolal."], ["She said she had never seen the sea.", "Povedala, že nikdy nevidela more."], ["By the time we arrived, the shop had closed.", "Kým sme prišli, obchod už zavrel."], ["He was exhausted. He had been running.", "Bol vyčerpaný. Behal."]],
  mist: [["When I came, the train already left.", "…the train had already left.", "Skorší dej v minulosti → past perfect."]],
  quiz: [["I ___ my keys, so I couldn't get in.", ["lost", "had lost", "have lost"], 1], ["They ___ for an hour when it started to rain.", ["walked", "had been walking", "were walking"], 1]] },

{ id: "cond3", lvl: "B2", cat: "Podmienky", t: "Tretia a zmiešaná podmienka", sum: "If I had known… – nereálna minulosť.",
  body: `<p><b>Third conditional</b> – ľutujeme alebo hodnotíme to, čo sa v minulosti <u>nestalo</u>: <b>If + past perfect, would have + past participle</b>: <i>If I had studied, I would have passed.</i> (Neučil som sa, neprešiel som.)</p>
<p><b>Mixed conditional</b> – kombinácia: <i>If I had taken the job (minulosť), I would be rich now (prítomnosť).</i> alebo <i>If she weren't so shy, she would have spoken to him.</i></p>
<p>Namiesto would have môžeme použiť <b>could have / might have</b>. Podmienku možno vyjadriť inverziou (formálne): <i>Had I known, I would have called.</i></p>`,
  ex: [["If it hadn't rained, we would have gone.", "Keby nepršalo, boli by sme išli."], ["I would have helped if you had asked.", "Bol by som pomohol, keby si sa spýtal."], ["If I had moved to London, I would speak better English now.", "Keby som sa presťahoval do Londýna, hovoril by som teraz lepšie po anglicky."], ["Had I known, I would have told you.", "Keby som bol vedel, bol by som ti povedal."]],
  mist: [["If I would have known, I would have come.", "If I had known, I would have come.", "V if-časti ide past perfect."]],
  quiz: [["If I ___ harder, I would have passed.", ["studied", "had studied", "would study"], 1], ["She would have come if she ___ the way.", ["knew", "had known", "has known"], 1]] },

{ id: "wish", lvl: "B2", cat: "Podmienky", t: "Wish a if only", sum: "Priania a ľútosť: I wish I had…",
  body: `<table class="gt"><tr><th>Situácia</th><th>Vzor</th><th>Príklad</th></tr><tr><td>nespokojnosť s prítomnosťou</td><td>wish + <b>past simple</b></td><td>I wish I <b>had</b> more time.</td></tr><tr><td>ľútosť nad minulosťou</td><td>wish + <b>past perfect</b></td><td>I wish I <b>had studied</b> more.</td></tr><tr><td>sťažnosť na správanie / želanie zmeny</td><td>wish + <b>would</b></td><td>I wish you <b>would stop</b> talking.</td></tr></table>
<p><b>If only</b> je silnejšie: <i>If only I were taller!</i> Po wish používame pri to be <b>were</b> (aj <i>was</i> v neformálnom štýle). Na priania do budúcnosti, ktoré môžeme ovplyvniť, používame <b>hope</b>: <i>I hope you will come.</i></p>`,
  ex: [["I wish I lived by the sea.", "Prial by som si bývať pri mori."], ["She wishes she had called him.", "Želá si, aby mu bola zavolala."], ["If only it would stop raining!", "Keby tak prestalo pršať!"], ["I wish you wouldn't shout.", "Prial by som si, aby si nekričal."]],
  mist: [["I wish I would have more money.", "I wish I had more money.", "Wish + past simple pre prítomnosť."]],
  quiz: [["I wish I ___ speak French. (nevie)", ["can", "could", "would"], 1], ["I wish I ___ that email yesterday. (poslal som ho)", ["didn't send", "hadn't sent", "wouldn't send"], 1]] },

{ id: "future2", lvl: "B2", cat: "Časy", t: "Budúce časy: continuous, perfect", sum: "At 5 I will be working. By Friday I will have finished.",
  body: `<ul><li><b>Future continuous</b> (<i>will be + -ing</i>): dej, ktorý bude <u>prebiehať</u> v určitom čase: <i>This time tomorrow I'll be flying to Rome.</i> Aj zdvorilá otázka na plány: <i>Will you be using the car tonight?</i></li>
<li><b>Future perfect</b> (<i>will have + past participle</i>): dej bude <u>dokončený</u> do určitého času: <i>By 2030 she will have graduated.</i> Signály: by, by the time, by then.</li>
<li><b>Future perfect continuous</b> (<i>will have been + -ing</i>): trvanie do bodu v budúcnosti: <i>In June I will have been working here for ten years.</i></li></ul>`,
  ex: [["At 8 tomorrow I'll be sleeping.", "Zajtra o ôsmej budem spať."], ["By next year we will have moved.", "Do budúceho roka sa presťahujeme."], ["Will you be coming to the party?", "Prídeš na oslavu?"], ["By June she will have been teaching for 20 years.", "Do júna bude učiť 20 rokov."]],
  mist: [["By Friday I will finish it. (už hotové)", "By Friday I will have finished it.", "Dokončenie do času → future perfect."]],
  quiz: [["This time next week I ___ on the beach.", ["will lie", "will be lying", "will have lain"], 1], ["By 2030 they ___ a new bridge.", ["will build", "will have built", "are building"], 1]] },

{ id: "causative", lvl: "B2", cat: "Slovesný rod", t: "Kauzatívne have/get a pokročilý trpný rod", sum: "I had my hair cut. It is said that…",
  body: `<p><b>Kauzatív:</b> niekto iný urobí niečo <u>pre nás</u>: <b>have / get + predmet + past participle</b>: <i>I had my car repaired. I'm getting my hair cut tomorrow.</i> (Nestrihám si vlasy sám.)</p>
<p><b>Neosobný trpný rod:</b> <i>It is said that he is rich</i> / <i>He is said to be rich.</i> Podobne: believed, thought, known, reported, expected.</p>
<p><b>Trpný rod s modálnymi a perfektom:</b> <i>The work should have been finished.</i> / <i>The room is being cleaned</i> (passive continuous). <b>Slovesá s dvoma predmetmi:</b> <i>He was given a book.</i> <b>Trpný rod s infinitívom / gerundom:</b> <i>She hates being told what to do.</i></p>`,
  ex: [["I had my phone repaired.", "Dal som si opraviť telefón."], ["She is having her house painted.", "Nechá si vymaľovať dom."], ["He is believed to be innocent.", "Verí sa, že je nevinný."], ["The bridge is being built.", "Most sa stavia."]],
  mist: [["I cut my hair yesterday (u holiča).", "I had my hair cut yesterday.", "Ak to robí niekto iný, použijeme have + past participle."]],
  quiz: [["I'm going to ___ my car washed.", ["have", "make", "do"], 0], ["The report is ___ to be false.", ["said", "say", "saying"], 0]] },

{ id: "gerinf2", lvl: "B2", cat: "Slovesá", t: "Gerund a infinitív – zmena významu", sum: "remember doing × remember to do",
  body: `<table class="gt"><tr><th>Sloveso</th><th>+ -ing</th><th>+ to infinitív</th></tr><tr><td>remember</td><td>spomenúť si na minulosť: I remember <b>locking</b> the door.</td><td>nezabudnúť urobiť: Remember <b>to lock</b> the door.</td></tr><tr><td>forget</td><td>I'll never forget <b>meeting</b> her.</td><td>Don't forget <b>to call</b>.</td></tr><tr><td>stop</td><td>prestať: He stopped <b>smoking</b>.</td><td>zastaviť, aby: He stopped <b>to smoke</b>.</td></tr><tr><td>try</td><td>vyskúšať: Try <b>pressing</b> Ctrl+Z.</td><td>snažiť sa: Try <b>to open</b> the door.</td></tr><tr><td>regret</td><td>ľutovať, že som: I regret <b>saying</b> it.</td><td>s ľútosťou oznamovať: I regret <b>to inform</b> you…</td></tr></table>
<p>Bez zmeny významu: <i>begin, start, continue, like, love, hate, prefer</i> (rozdiel je malý). Po <b>suggest, admit, deny, consider, risk, imagine, can't help</b> ide -ing; po <b>afford, manage, fail, tend, pretend, seem</b> ide to.</p>`,
  ex: [["I remember meeting him last year.", "Pamätám sa, ako som ho stretol minulý rok."], ["Remember to buy milk.", "Nezabudni kúpiť mlieko."], ["She stopped to talk to a friend.", "Zastavila sa, aby sa porozprávala s priateľom."], ["We tried restarting the computer.", "Skúsili sme reštartovať počítač."]],
  mist: [["He suggested to go out.", "He suggested going out.", "Po suggest ide -ing."]],
  quiz: [["I didn't mean ___ you.", ["to hurt", "hurting", "hurt"], 0], ["He admitted ___ the money.", ["to take", "taking", "take"], 1]] },

// ================= C1 =================
{ id: "inversion", lvl: "C1", cat: "Štýl", t: "Inverzia po záporných príslovkách", sum: "Never have I seen… – formálny a dôrazný štýl.",
  body: `<p>Po niektorých záporných alebo obmedzujúcich výrazoch na začiatku vety použijeme <b>poradie ako v otázke</b> (pomocné sloveso + podmet):</p>
<table class="gt"><tr><th>Výraz</th><th>Príklad</th></tr><tr><td><b>never, rarely, seldom, hardly ever</b></td><td>Never have I seen such a view.</td></tr><tr><td><b>hardly … when / no sooner … than</b></td><td>Hardly had she opened the door when the phone rang. / No sooner had we arrived than it began to rain.</td></tr><tr><td><b>not only … but also</b></td><td>Not only did he forget the tickets, but he also lost his passport.</td></tr><tr><td><b>only after / only when / only then</b></td><td>Only then did I realise the truth.</td></tr><tr><td><b>under no circumstances / on no account</b></td><td>Under no circumstances should you open it.</td></tr><tr><td><b>little</b></td><td>Little did he know what was waiting.</td></tr><tr><td><b>so + prídavné / such</b></td><td>So loud was the noise that nobody slept.</td></tr></table>
<p>Ak v kladnej vete nie je pomocné sloveso, doplníme <i>do/does/did</i>. Inverzia je typická pre formálne písanie, prejavy a literatúru.</p>`,
  ex: [["Rarely do we see such talent.", "Zriedka vidíme taký talent."], ["No sooner had he left than it began to snow.", "Sotva odišiel, začalo snežiť."], ["Under no circumstances should you share the password.", "Za žiadnych okolností nezdieľaj heslo."], ["Only after the meeting did I understand.", "Až po porade som pochopil."]],
  mist: [["Never I have seen such a thing.", "Never have I seen such a thing.", "Po never na začiatku vety nasleduje inverzia."]],
  quiz: [["Hardly ___ the house when it started to rain.", ["she had left", "had she left", "she left"], 1], ["Not only ___ late, but he was also rude.", ["he was", "was he", "did he"], 1]] },

{ id: "cleft", lvl: "C1", cat: "Štýl", t: "Zdôrazňujúce vety (cleft sentences)", sum: "It was Tom who… / What I need is…",
  body: `<p>Cleft vety <b>vyzdvihnú</b> určitú časť informácie.</p>
<ul><li><b>It-cleft:</b> It + be + zdôraznená časť + that/who…: <i>It was <b>Anna</b> who broke the window.</i> / <i>It was <b>yesterday</b> that I met him.</i></li>
<li><b>Wh-cleft (pseudo-cleft):</b> What + podmet + sloveso + be + zdôraznená časť: <i>What I need is <b>a holiday</b>.</i> <i>What she did was (to) call the police.</i></li>
<li><b>All / The thing / The reason:</b> <i>All I want is peace.</i> <i>The reason why I left is simple.</i></li></ul>
<p>Takto môžeme zdôrazniť podmet, predmet, čas, miesto alebo dôvod – a zároveň posunúť dôraz bez zmeny významu vety.</p>`,
  ex: [["It was the noise that woke me up.", "Zobudil ma práve hluk."], ["What I really want is a quiet evening.", "Čo naozaj chcem, je pokojný večer."], ["It is education that changes lives.", "Práve vzdelanie mení životy."], ["All she wanted was to be heard.", "Chcela len, aby ju počuli."]],
  mist: [["It was me who broke it. (v texte)", "It was I who broke it. (formálne) / It was me that broke it.", "Formálne I, hovorovo me – obe sú bežné."]],
  quiz: [["___ I need is more time.", ["It", "What", "That"], 1], ["It was in Paris ___ they met.", ["where", "that", "what"], 1]] },

{ id: "participle", lvl: "C1", cat: "Štýl", t: "Príčastia a skrátené vety", sum: "Walking home, I met… – ako skrátiť vety.",
  body: `<p>Príčastia nám umožňujú nahradiť vedľajšiu vetu a písať <b>stručnejšie</b>.</p>
<ul><li><b>-ing (prítomné príčastie):</b> súčasný dej / dôvod: <i><u>Walking</u> home, I met an old friend.</i> (= While I was walking home…) <i><u>Feeling</u> tired, she went to bed.</i> (= Because she felt tired…)</li>
<li><b>Perfektné príčastie – having + past participle:</b> predchádzajúci dej: <i><u>Having finished</u> his work, he went home.</i></li>
<li><b>-ed / 3. tvar (trpné príčastie):</b> <i><u>Written</u> in 1850, the book is still popular.</i> (= The book, which was written…)</li></ul>
<p><b>Pravidlo:</b> podmet skrátenej a hlavnej vety musí byť <u>ten istý</u> – inak vzniká tzv. „dangling participle“: <i>Walking home, the rain started</i> (chyba: dážď nechodí domov).</p>`,
  ex: [["Having read the book, she saw the film.", "Keď prečítala knihu, pozrela si film."], ["Not knowing what to say, he stayed silent.", "Nevediac, čo povedať, mlčal."], ["The man standing there is my uncle.", "Muž, ktorý tam stojí, je môj strýko."], ["Built in 1900, the bridge needs repair.", "Most postavený v roku 1900 potrebuje opravu."]],
  mist: [["Walking down the street, the rain began.", "Walking down the street, I felt the rain begin.", "Podmet oboch častí musí byť rovnaký."]],
  quiz: [["___ the email, she closed her laptop.", ["Sent", "Having sent", "Send"], 1], ["The documents ___ yesterday are on your desk.", ["signing", "signed", "to sign"], 1]] },

{ id: "subjunctive", lvl: "C1", cat: "Štýl", t: "Subjunktív a formálne štruktúry", sum: "It is essential that he be informed.",
  body: `<p>Po výrazoch vyjadrujúcich <b>návrh, požiadavku, nutnosť</b> sa v formálnej angličtine používa <b>základný tvar slovesa</b> (bez -s a bez will): <i>It is essential that she <b>be</b> informed.</i> / <i>I suggest that he <b>see</b> a doctor.</i></p>
<p><b>Spúšťacie slová:</b> suggest, recommend, insist, demand, propose, request + it is essential / vital / important / necessary that…</p>
<p>V britskej angličtine sa často používa <b>should</b>: <i>I suggest that he should see a doctor.</i> Ďalšie formálne štruktúry: <b>were to</b> (<i>Were you to refuse, we would…</i>), <b>suppose / supposing</b>, <b>as if / as though + past</b> (<i>He talks as if he knew everything</i>), <b>It's time + past simple</b> (<i>It's time we left</i>).</p>`,
  ex: [["The manager insists that every employee attend.", "Manažér trvá na tom, aby sa zúčastnil každý zamestnanec."], ["It is vital that he be there.", "Je nevyhnutné, aby tam bol."], ["He behaves as if he were the boss.", "Správa sa, akoby bol šéf."], ["It's time we went home.", "Je čas ísť domov."]],
  mist: [["I suggest that he sees a doctor.", "I suggest that he see / should see a doctor.", "V subjunktíve nepoužívame -s."]],
  quiz: [["They demanded that he ___ immediately.", ["leaves", "leave", "left"], 1], ["It's high time you ___ your homework.", ["do", "did", "will do"], 1]] },

{ id: "perfmodal", lvl: "C1", cat: "Slovesá", t: "Modálne slovesá v minulosti", sum: "should have, could have, needn't have, may have.",
  body: `<table class="gt"><tr><th>Štruktúra</th><th>Význam</th><th>Príklad</th></tr><tr><td><b>should have + p.p.</b></td><td>mal som (ale nespravil som)</td><td>You <b>should have called</b> me.</td></tr><tr><td><b>shouldn't have + p.p.</b></td><td>nemal som (ale spravil som)</td><td>I <b>shouldn't have said</b> that.</td></tr><tr><td><b>could have + p.p.</b></td><td>mohol som (ale nespravil som) / bolo možné</td><td>She <b>could have won</b>.</td></tr><tr><td><b>needn't have + p.p.</b></td><td>nemusel som (ale spravil som)</td><td>You <b>needn't have come</b>.</td></tr><tr><td><b>must have + p.p.</b></td><td>určite sa stalo</td><td>He <b>must have forgotten</b>.</td></tr><tr><td><b>may / might have + p.p.</b></td><td>možno sa stalo</td><td>They <b>might have left</b>.</td></tr><tr><td><b>can't have + p.p.</b></td><td>nemohlo sa stať</td><td>He <b>can't have seen</b> us.</td></tr></table>`,
  ex: [["You should have told me earlier.", "Mal si mi to povedať skôr."], ["I needn't have bought so much food.", "Nemusel som kupovať toľko jedla."], ["She can't have known the truth.", "Nemohla poznať pravdu."], ["We could have taken a taxi.", "Mohli sme ísť taxíkom."]],
  mist: [["You should called me.", "You should have called me.", "Po should have ide 3. tvar slovesa."]],
  quiz: [["He's not here. He ___ left already.", ["must have", "should have", "needn't have"], 0], ["I ___ to the party. It was boring.", ["shouldn't have gone", "can't have gone", "needn't go"], 0]] },

{ id: "hedging", lvl: "C1", cat: "Štýl", t: "Akademický štýl a zmäkčovanie tvrdení (hedging)", sum: "It would appear that… – opatrné a formálne vyjadrovanie.",
  body: `<p>V akademických a formálnych textoch opatrne <b>zmäkčujeme tvrdenia</b>, aby sme nepôsobili príliš kategoricky:</p>
<ul><li><b>Zmäkčovacie slovesá:</b> seem, appear, tend, suggest, indicate – <i>The data <u>suggest</u> that…</i></li><li><b>Modálne slovesá:</b> may, might, could, would – <i>This <u>may</u> be due to…</i></li><li><b>Príslovky:</b> probably, presumably, arguably, apparently, generally, to some extent</li><li><b>Neosobné výrazy:</b> It would appear that…, It is widely believed that…, There is evidence to suggest that…</li></ul>
<p><b>Spájanie argumentov:</b> furthermore, moreover, nevertheless, nonetheless, consequently, whereas, in contrast, by and large, in conclusion. <b>Nominalizácia</b> (zhustenie): <i>People are using more energy → The increased use of energy…</i> Vyhýbame sa kontrakciám (<i>don't</i> → <i>do not</i>) a hovorovým slovám.</p>`,
  ex: [["The results would appear to confirm the theory.", "Zdá sa, že výsledky potvrdzujú teóriu."], ["This is arguably the best solution.", "Toto je pravdepodobne najlepšie riešenie."], ["Moreover, the findings are consistent with earlier studies.", "Zistenia navyše zodpovedajú skoršiemu výskumu."], ["There is evidence to suggest that sleep affects memory.", "Existujú dôkazy, že spánok ovplyvňuje pamäť."]],
  mist: [["The data prove that this is 100 % true.", "The data suggest that this is likely true.", "V akademickom texte zvyčajne zmäkčujeme."]],
  quiz: [["It ___ that the plan has failed.", ["is", "would appear", "will be"], 1], ["___, the experiment must be repeated.", ["Consequently", "Whereas", "Albeit"], 0]] }
];
