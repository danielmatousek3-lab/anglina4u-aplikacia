/* Tvorba otázok: príbehy a články podľa úrovne. Zvýraznená časť vety je v hranatých zátvorkách.
   Každá veta: [veta, [prijateľné otázky]]. kind: story = príbeh, gen = článok (všeobecná angličtina), biz = Business English. */
window.ASK = [
{ id: "a1-day", kind: "story", lv: "A1", t: "Anna's day", sk: "Annin deň", tense: "Present Simple",
  tip: "Present Simple: otázka sa tvorí s do/does + základný tvar slovesa (Where does Anna work?). Keď sa pýtame na podmet, do/does nepoužijeme (Who works in the shop?).",
  s: [
    ["Anna gets up [at seven] every day.", ["What time does Anna get up?", "What time does Anna get up every day?", "When does Anna get up?", "When does Anna get up every day?"]],
    ["She has [toast and tea] for breakfast.", ["What does she have for breakfast?", "What does Anna have for breakfast?"]],
    ["Anna works [in a shop].", ["Where does Anna work?"]],
    ["[Her brother] works in the shop too.", ["Who works in the shop too?", "Who works in the shop?"]],
    ["They go home [by bus].", ["How do they go home?"]],
    ["In the evening Anna watches TV [with her sister].", ["Who does Anna watch TV with?", "Who does she watch TV with?", "With whom does Anna watch TV?", "Who does Anna watch TV with in the evening?"]]
  ] },
{ id: "a1-park", kind: "story", lv: "A1", t: "At the park", sk: "V parku", tense: "Present Continuous",
  tip: "Present Continuous: am/is/are + sloveso s -ing. Otázka: is/are na začiatku (What is the boy riding?).",
  s: [
    ["The children are playing [in the park].", ["Where are the children playing?"]],
    ["A boy is riding [a red bike].", ["What is the boy riding?", "What is a boy riding?"]],
    ["[Two girls] are sitting on the bench.", ["Who is sitting on the bench?", "Who are sitting on the bench?"]],
    ["They are eating [ice cream].", ["What are they eating?", "What are the girls eating?"]],
    ["A man is walking his dog [near the lake].", ["Where is the man walking his dog?", "Where is a man walking his dog?"]],
    ["The sun is shining, so everybody is [smiling].", ["What is everybody doing?", "What are the people doing?"]]
  ] },
{ id: "a1-yesterday", kind: "story", lv: "A1", t: "Yesterday", sk: "Včera", tense: "Past Simple",
  tip: "Past Simple: did + základný tvar slovesa (What did they cook?). Pri slovese be: was/were na začiatok (How was the village?).",
  s: [
    ["Tom visited [his grandmother] yesterday.", ["Who did Tom visit yesterday?", "Who did Tom visit?"]],
    ["The village was [very quiet].", ["What was the village like?", "How was the village?"]],
    ["Tom went there [by train].", ["How did Tom go there?", "How did Tom get there?"]],
    ["They cooked [chicken and rice].", ["What did they cook?"]],
    ["[His cousin] came too.", ["Who came too?", "Who came?"]],
    ["They went home [at six].", ["What time did they go home?", "When did they go home?"]]
  ] },
{ id: "a2-london", kind: "story", lv: "A2", t: "A trip to London", sk: "Výlet do Londýna", tense: "Past Simple",
  tip: "Past Simple: did + základný tvar. Pýtame sa na podmet bez did: Who bought an umbrella?",
  s: [
    ["Last summer, Sara flew [to London] with her friend.", ["Where did Sara fly last summer?", "Where did Sara fly to last summer?", "Where did Sara fly with her friend?", "Where did Sara fly to?"]],
    ["They stayed [in a small hotel] near the river.", ["Where did they stay?"]],
    ["On the first day, they [visited the British Museum].", ["What did they do on the first day?", "What did Sara and her friend do on the first day?"]],
    ["The tickets cost [twenty pounds].", ["How much did the tickets cost?", "How much were the tickets?"]],
    ["After lunch it [started to rain].", ["What happened after lunch?"]],
    ["[Sara's friend] bought an umbrella.", ["Who bought an umbrella?"]]
  ] },
{ id: "a2-plans", kind: "story", lv: "A2", t: "Summer plans", sk: "Plány na leto", tense: "going to",
  tip: "be going to: am/is/are + going to + základný tvar. Otázka: is/are na začiatok (Who is Tom going to visit?).",
  s: [
    ["Tom is going to visit [his cousin] in Spain.", ["Who is Tom going to visit in Spain?", "Who is Tom going to visit?"]],
    ["They are going to stay [for two weeks].", ["How long are they going to stay?"]],
    ["They are going to fly [from Vienna].", ["Where are they going to fly from?"]],
    ["[Tom's mother] is going to drive them to the airport.", ["Who is going to drive them to the airport?"]],
    ["In Spain, they are going to [swim and play volleyball] on the beach.", ["What are they going to do on the beach?", "What are they going to do in Spain?"]],
    ["They are going to come back [on the 20th of August].", ["When are they going to come back?"]]
  ] },
{ id: "a2-ever", kind: "story", lv: "A2", t: "Have you ever...?", sk: "Už si niekedy...?", tense: "Present Perfect (skúsenosti)",
  tip: "Present Perfect: have/has + 3. tvar slovesa. Otázka: have/has na začiatok (How many countries has Mia visited?).",
  s: [
    ["Mia has visited [five countries].", ["How many countries has Mia visited?"]],
    ["She has been to Italy [twice].", ["How many times has she been to Italy?", "How many times has Mia been to Italy?"]],
    ["[Her brother] has never flown in a plane.", ["Who has never flown in a plane?"]],
    ["They have eaten [sushi] only once.", ["What have they eaten only once?"]],
    ["Mia has just bought [a new camera].", ["What has Mia just bought?"]],
    ["She has already taken [200 photos].", ["How many photos has she already taken?", "How many photos has Mia already taken?"]]
  ] },
{ id: "b1-job", kind: "story", lv: "B1", t: "A new job", sk: "Nová práca", tense: "Present Perfect (for, since)",
  tip: "for + dĺžka (for three years), since + začiatok (since 2020). Otázka: How long has/have + podmet + 3. tvar?",
  s: [
    ["Peter has worked in the bank [for three years].", ["How long has Peter worked in the bank?", "How long has Peter been working in the bank?"]],
    ["He has lived in Brno [since 2020].", ["How long has he lived in Brno?", "Since when has he lived in Brno?", "How long has Peter lived in Brno?"]],
    ["His colleague [Anna] has helped him a lot.", ["Who has helped him a lot?", "Who has helped Peter a lot?"]],
    ["Peter has applied for [a new job] in Prague.", ["What has Peter applied for?", "What has he applied for in Prague?", "What has Peter applied for in Prague?"]],
    ["He hasn't received [an answer] yet.", ["What hasn't he received yet?", "What has he not received yet?", "What hasn't Peter received yet?"]],
    ["He has been waiting [for two weeks].", ["How long has he been waiting?", "How long has Peter been waiting?"]]
  ] },
{ id: "b1-storm", kind: "story", lv: "B1", t: "The storm", sk: "Búrka", tense: "Past Continuous a Past Simple",
  tip: "Past Continuous: was/were + -ing (dlhší dej), Past Simple (krátky dej). Otázka: What was Tom carrying? Where were you walking?",
  s: [
    ["While we were walking [in the mountains], a storm started.", ["Where were we walking when a storm started?", "Where were you walking when the storm started?", "Where were we walking when the storm started?", "Where were you walking when a storm started?"]],
    ["The sky [suddenly became dark].", ["What happened to the sky?"]],
    ["Tom was carrying [a heavy backpack].", ["What was Tom carrying?"]],
    ["[Eva] was taking photos when the first thunder came.", ["Who was taking photos when the first thunder came?", "Who was taking photos?"]],
    ["We ran [into a small hut].", ["Where did we run?", "Where did you run?"]],
    ["We were waiting there [for two hours].", ["How long were we waiting there?", "How long were you waiting there?"]]
  ] },
{ id: "b1-cond1", kind: "story", lv: "B1", t: "If it rains", sk: "Ak bude pršať", tense: "First Conditional",
  tip: "First Conditional: If + Present Simple, will + základný tvar. Otázka: What will we do if it rains?",
  s: [
    ["If it rains tomorrow, we will [stay at home].", ["What will we do if it rains tomorrow?", "What will we do tomorrow if it rains?"]],
    ["If the weather is nice, we'll go [to the lake].", ["Where will we go if the weather is nice?"]],
    ["If we leave early, we will avoid [the traffic].", ["What will we avoid if we leave early?"]],
    ["If Tom comes, he'll bring [his guitar].", ["What will Tom bring if he comes?", "What will Tom bring?"]],
    ["We'll buy fresh bread [at the bakery].", ["Where will we buy fresh bread?"]],
    ["If everything goes well, we will be back [at nine].", ["What time will we be back if everything goes well?", "When will we be back if everything goes well?", "What time will we be back?", "When will we be back?"]]
  ] },
{ id: "b2-wallet", kind: "story", lv: "B2", t: "The lost wallet", sk: "Stratená peňaženka", tense: "Past Perfect",
  tip: "Past Perfect: had + 3. tvar (dej, ktorý sa stal skôr ako iný v minulosti). Otázka: What had Jack left at home?",
  s: [
    ["When Jack arrived at the station, he realised that he had left [his wallet] at home.", ["What had Jack left at home?", "What had Jack left at home when he arrived at the station?"]],
    ["He had already bought his ticket [online].", ["How had he bought his ticket?", "How had Jack already bought his ticket?", "How had he already bought his ticket?"]],
    ["Before the train left, he had called [his sister].", ["Who had he called before the train left?", "Who had Jack called before the train left?"]],
    ["She had found the wallet [under his bed].", ["Where had she found the wallet?"]],
    ["[A neighbour] had brought it to her flat.", ["Who had brought it to her flat?"]],
    ["By the time Jack reached Vienna, his sister had transferred [some money] to his account.", ["What had his sister transferred to his account?", "What had his sister transferred to his account by the time Jack reached Vienna?"]]
  ] },
{ id: "b2-museum", kind: "story", lv: "B2", t: "The new museum", sk: "Nové múzeum", tense: "Passive",
  tip: "Trpný rod: be + 3. tvar. Otázka: When was the museum built? Who was it designed by? (alebo By whom was it designed?).",
  s: [
    ["The museum was built [in 2019].", ["When was the museum built?"]],
    ["It was designed by [a famous architect].", ["Who was it designed by?", "By whom was it designed?", "Who was the museum designed by?", "By whom was the museum designed?"]],
    ["[Over ten thousand] visitors are welcomed every month.", ["How many visitors are welcomed every month?"]],
    ["The paintings are protected [by special glass].", ["What are the paintings protected by?", "How are the paintings protected?"]],
    ["A new exhibition will be opened [next Friday].", ["When will a new exhibition be opened?", "When will the new exhibition be opened?"]],
    ["Photos cannot be taken [in the main hall].", ["Where cannot photos be taken?", "Where can not photos be taken?", "Where can't photos be taken?", "Where can photos not be taken?"]]
  ] },
{ id: "b2-cond2", kind: "story", lv: "B2", t: "If I won", sk: "Keby som vyhral", tense: "Second Conditional",
  tip: "Second Conditional: If + Past Simple, would + základný tvar. Otázka: What would you buy if you won the lottery?",
  s: [
    ["If I won the lottery, I would buy [a house by the sea].", ["What would you buy if you won the lottery?", "What would I buy if I won the lottery?"]],
    ["I would travel [around the world].", ["Where would you travel?", "Where would I travel?", "Where would you travel if you won the lottery?", "Where would I travel if I won the lottery?"]],
    ["My parents would [stop working].", ["What would your parents do?", "What would my parents do?"]],
    ["If I had more free time, I would learn [Italian].", ["What would you learn if you had more free time?", "What would I learn if I had more free time?"]],
    ["If my sister lived closer, we would meet [every weekend].", ["How often would you meet if your sister lived closer?", "How often would we meet if my sister lived closer?", "How often would you meet your sister if she lived closer?"]],
    ["[My best friend] would be very surprised.", ["Who would be very surprised?"]]
  ] },
{ id: "c1-career", kind: "story", lv: "C1", t: "A career story", sk: "Príbeh kariéry", tense: "Zmiešané časy",
  tip: "Zmiešané časy: Present Perfect Continuous (has been working), Past Perfect (had translated), Future Perfect Continuous (will have been living). Otázka vždy začína pomocným slovesom pre daný čas.",
  s: [
    ["Marta has been working as a translator [for twelve years].", ["How long has Marta been working as a translator?"]],
    ["She started her career [at a small agency in Prague].", ["Where did she start her career?", "Where did Marta start her career?"]],
    ["By the time she was thirty, she had translated [more than twenty books].", ["How many books had she translated by the time she was thirty?", "How many books had Marta translated by the time she was thirty?"]],
    ["At the moment, she is working on [a novel by a Slovak author].", ["What is she working on at the moment?", "What is Marta working on at the moment?"]],
    ["Next year, she will have been living abroad [for ten years].", ["How long will she have been living abroad next year?", "How long will Marta have been living abroad next year?"]],
    ["She hopes to [open her own agency] one day.", ["What does she hope to do one day?", "What does Marta hope to do one day?"]]
  ] },
{ id: "c1-interview", kind: "story", lv: "C1", t: "The interview", sk: "Pohovor", tense: "Reported speech",
  tip: "Nepriama reč: pýtame sa na obsah, napr. What did the manager ask Eva? What did Eva say? Sloveso v hlavnej vete je v minulom čase.",
  s: [
    ["The manager asked Eva [why she wanted the job].", ["What did the manager ask Eva?", "What did the manager ask?"]],
    ["Eva said that she [had been working in marketing for five years].", ["What did Eva say?"]],
    ["He asked her whether she [could start in March].", ["What did he ask her?", "What did the manager ask her?"]],
    ["She told him that [her salary expectations were flexible].", ["What did she tell him?", "What did Eva tell him?"]],
    ["[The manager] promised that he would call her by Friday.", ["Who promised that he would call her by Friday?", "Who promised to call her by Friday?"]],
    ["She said she would wait [until Friday].", ["How long did she say she would wait?", "Until when did she say she would wait?", "How long did Eva say she would wait?"]]
  ] },
{ id: "c1-cond3", kind: "story", lv: "C1", t: "What if...", sk: "Čo keby...", tense: "Third Conditional",
  tip: "Third Conditional: If + Past Perfect, would have + 3. tvar (nereálna minulosť). Otázka: What would Tom have missed if he had left earlier?",
  s: [
    ["If Tom had left earlier, he wouldn't have missed [the train].", ["What wouldn't Tom have missed if he had left earlier?", "What would Tom not have missed if he had left earlier?"]],
    ["If he hadn't missed it, he would have arrived [on time].", ["When would he have arrived if he hadn't missed it?", "When would he have arrived if he had not missed it?", "When would he have arrived?"]],
    ["If he had arrived on time, he would have met [the director].", ["Who would he have met if he had arrived on time?", "Who would Tom have met if he had arrived on time?", "Who would he have met?"]],
    ["If he had met the director, [he would have got the job].", ["What would have happened if he had met the director?", "What would have happened if Tom had met the director?"]],
    ["If Tom had known about the delay, he would have taken [a taxi].", ["What would he have taken if he had known about the delay?", "What would Tom have taken if he had known about the delay?", "What would he have taken?"]],
    ["[Nobody] could have predicted it.", ["Who could have predicted it?"]]
  ] },
{ id: "g-b1-coffee", kind: "gen", lv: "B1", t: "Coffee around the world", sk: "Káva vo svete", tense: "Všeobecná angličtina",
  tip: "Čas (Present Simple) a štruktúra otázky: do/does + podmet + sloveso (Where does coffee come from?). Pri otázke na podmet: Which country produces...?",
  s: [
    ["Coffee comes originally from [Ethiopia].", ["Where does coffee come from originally?", "Where does coffee originally come from?", "Where does coffee come from?"]],
    ["People in Italy usually drink coffee [standing at the bar].", ["How do people in Italy usually drink coffee?"]],
    ["The average Finn drinks [about ten kilos] of coffee a year.", ["How much coffee does the average Finn drink a year?", "How much coffee does the average Finn drink?"]],
    ["In Sweden, people have a coffee break called [fika].", ["What is the coffee break in Sweden called?", "What do people in Sweden call their coffee break?", "What is the coffee break called in Sweden?"]],
    ["[Brazil] produces more coffee than any other country.", ["Which country produces more coffee than any other country?", "What country produces more coffee than any other country?", "Which country produces more coffee than any other?"]],
    ["Many people drink coffee [to stay awake].", ["Why do many people drink coffee?"]]
  ] },
{ id: "g-b2-sleep", kind: "gen", lv: "B2", t: "Sleep and health", sk: "Spánok a zdravie", tense: "Všeobecná angličtina",
  tip: "Otázky na množstvo: How many (počítateľné), How much (nepočítateľné). Na podmet sa pýtame bez do/does: Who often goes to bed late?",
  s: [
    ["Adults need [seven to nine hours] of sleep every night.", ["How many hours of sleep do adults need every night?", "How much sleep do adults need every night?", "How many hours of sleep do adults need?"]],
    ["Lack of sleep can [weaken the immune system].", ["What can lack of sleep do?"]],
    ["[Teenagers] often go to bed late because of their phones.", ["Who often goes to bed late because of their phones?", "Who often go to bed late because of their phones?"]],
    ["Doctors recommend turning off screens [an hour before bed].", ["When do doctors recommend turning off screens?", "How long before bed do doctors recommend turning off screens?"]],
    ["A recent study was carried out [at a university in Oxford].", ["Where was a recent study carried out?", "Where was the recent study carried out?"]],
    ["Good sleep habits can be learned [in just a few weeks].", ["How quickly can good sleep habits be learned?", "How long does it take to learn good sleep habits?", "How soon can good sleep habits be learned?"]]
  ] },
{ id: "g-c1-phones", kind: "gen", lv: "C1", t: "Smartphones and teenagers", sk: "Smartfóny a tínedžeri", tense: "Všeobecná angličtina",
  tip: "Pozor na poradie slov a na tvar slovesa po pomocnom (did, had, would). Pri vete s podmetom vo vete použi Which/Who bez do/does.",
  s: [
    ["Smartphones were introduced [in the early 2000s].", ["When were smartphones introduced?"]],
    ["Teenagers now spend [around four hours] a day on their phones.", ["How many hours do teenagers spend a day on their phones?", "How much time do teenagers now spend a day on their phones?", "How many hours a day do teenagers spend on their phones?", "How many hours do teenagers now spend a day on their phones?"]],
    ["Critics claim that constant notifications [damage concentration].", ["What do critics claim?", "What do critics claim constant notifications do?"]],
    ["[Some schools] have banned phones during lessons.", ["Which schools have banned phones during lessons?", "Who has banned phones during lessons?"]],
    ["Had phones not been so widespread, social media would have grown [more slowly].", ["How would social media have grown if phones had not been so widespread?", "How would social media have grown?"]],
    ["Experts advise parents to set [clear time limits].", ["What do experts advise parents to set?", "What do experts advise parents to do?"]]
  ] },
{ id: "b-b1-remote", kind: "biz", lv: "B1", t: "Working from home", sk: "Práca z domu", tense: "Business English",
  tip: "Present Simple a Present Perfect v pracovnom kontexte. Otázka: What do managers organise? What has become very popular?",
  s: [
    ["More and more employees work [from home] today.", ["Where do more and more employees work today?", "Where do more and more employees work?"]],
    ["Many companies offer [flexible hours] to their staff.", ["What do many companies offer to their staff?", "What do many companies offer their staff?"]],
    ["Working from home saves [about an hour] a day on travelling.", ["How much time does working from home save a day on travelling?", "How much time does working from home save a day?", "How long does working from home save a day on travelling?"]],
    ["However, some people feel [lonely] when they work alone.", ["How do some people feel when they work alone?"]],
    ["Managers organise [online meetings] to keep teams connected.", ["What do managers organise to keep teams connected?", "What do managers organise?"]],
    ["[Video calls] have become very popular in recent years.", ["What has become very popular in recent years?"]]
  ] },
{ id: "b-b1-meeting", kind: "biz", lv: "B1", t: "A busy meeting", sk: "Rušná schôdzka", tense: "Business English",
  tip: "Past Simple (did) a Future (will). Otázka: What time did the meeting start? How long did it last?",
  s: [
    ["The sales meeting started [at ten o'clock].", ["What time did the sales meeting start?", "When did the sales meeting start?"]],
    ["Mr Brown presented [the results for the last quarter].", ["What did Mr Brown present?"]],
    ["The sales rose [by five percent].", ["By how much did the sales rise?", "How much did the sales rise?", "By how much did sales rise?", "How much did sales rise?"]],
    ["[The marketing manager] suggested a new advertising campaign.", ["Who suggested a new advertising campaign?"]],
    ["The team will discuss the budget [next Monday].", ["When will the team discuss the budget?"]],
    ["The meeting lasted [two hours].", ["How long did the meeting last?"]]
  ] },
{ id: "b-b2-service", kind: "biz", lv: "B2", t: "Customer service", sk: "Služby zákazníkom", tense: "Business English",
  tip: "Trpný rod a Present Perfect v obchodnej angličtine. Otázka: Who are complaints handled by? alebo Who handles complaints? (obe sú správne).",
  s: [
    ["Good customer service builds [long-term loyalty].", ["What does good customer service build?"]],
    ["Customers expect a reply [within 24 hours].", ["When do customers expect a reply?", "How soon do customers expect a reply?", "How quickly do customers expect a reply?"]],
    ["Complaints are handled [by a specialist team].", ["Who are complaints handled by?", "By whom are complaints handled?", "Who handles complaints?", "Who handles the complaints?", "Who are the complaints handled by?"]],
    ["The company has introduced [a 24-hour chat service].", ["What has the company introduced?"]],
    ["Since then, customer satisfaction has increased [by 15 percent].", ["By how much has customer satisfaction increased since then?", "How much has customer satisfaction increased since then?", "By how much has customer satisfaction increased?", "How much has customer satisfaction increased?"]],
    ["Next year, the company is planning to [hire twenty more agents].", ["What is the company planning to do next year?"]]
  ] },
{ id: "b-b2-startup", kind: "biz", lv: "B2", t: "A startup story", sk: "Príbeh startupu", tense: "Business English",
  tip: "Past Simple, Past Perfect a Present Continuous pre plány. Otázka: How much money had they received? How many people work for the company?",
  s: [
    ["Two friends founded the startup [in 2018].", ["When did two friends found the startup?", "When did the two friends found the startup?", "When was the startup founded?"]],
    ["They started [in a rented garage].", ["Where did they start?"]],
    ["Their first product was [a language-learning app].", ["What was their first product?"]],
    ["After a year, they had received [two million euros] from investors.", ["How much money had they received after a year?", "How much had they received from investors?", "How much money had they received from investors?", "How much had they received after a year?"]],
    ["Today, [more than fifty people] work for the company.", ["How many people work for the company today?", "How many people work for the company?"]],
    ["They are now planning to open an office [in Berlin].", ["Where are they planning to open an office?", "Where are they now planning to open an office?"]]
  ] },
{ id: "b-c1-results", kind: "biz", lv: "C1", t: "Quarterly results", sk: "Štvrťročné výsledky", tense: "Business English",
  tip: "Odborná slovná zásoba (revenue, margins, board) a zložitejšie časy, vrátane inverzie v podmienkových vetách.",
  s: [
    ["The company reported a profit of [four million euros] in the third quarter.", ["What profit did the company report in the third quarter?", "How much profit did the company report in the third quarter?", "How much profit did the company report?", "What profit did the company report?"]],
    ["Revenue grew by [eight percent] compared with the same period last year.", ["By how much did revenue grow compared with the same period last year?", "How much did revenue grow compared with the same period last year?", "By how much did revenue grow?", "How much did revenue grow?"]],
    ["[Rising energy costs] had reduced margins earlier in the year.", ["What had reduced margins earlier in the year?"]],
    ["The board has approved [a new investment plan].", ["What has the board approved?"]],
    ["Had the company not cut costs, it would have reported [a loss].", ["What would the company have reported had it not cut costs?", "What would the company have reported if it had not cut costs?", "What would the company have reported if it hadn't cut costs?", "What would the company have reported?"]],
    ["Analysts expect growth to slow down [next year].", ["When do analysts expect growth to slow down?"]]
  ] }
];
