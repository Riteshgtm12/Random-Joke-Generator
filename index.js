let jokes = ['Why did the chicken cross the playground ? To get to the other slide!',

    'Why did the actor fall through the floorboards ? They were going through a stage!',

    'Why did a scarecrow win a Nobel prize ?e was outstanding in his field!',

    'Why are peppers the best at archery ?Because they habanero!',

    'What did the duck say after she bought chapstick ?Put it on my bill!',

    'Why did an old man fall in a well ?Because he couldnt see that well',

    "What do you call a fake noodleAn impasta!",

    'What did the three - legged dog say when he walked into a saloon“Im looking for the man who shot my paw!”',

    'How do you tell the difference between a bull and a cow ?It is either one or the udder!',

    'Whats red and smells like blue paint ?Red paint!'
    ,
    'Whats the difference between a hippo and a Zippo ?One is very heavy, the other is a little lighter!]'
    ,

    `What do you call a fake noodle?
 An im-pasta`,

    `Why did the banana go to the hospital?
He was peeling really bad.`,

    `What day of the week does the potato look forward to the least?
Fry-day`,

    `What do you call cheese that doesnt belong to you?
Nacho cheese!     ~ Callea J.`,

    `Why did the Oreo go to the dentist?
Because it lost its filling!`,

    `What do you call a bear with no teeth? 
A gummy bear!`,

    `Why do eggs hate jokes?
Because they crack up.`,

    `What are twins favorite fruit?
Pears`,

    `What did Mr. and Mrs. Hamburger name their daughter?
Patty!`,

    `Why did the cookie go to the doctor? 
Because he felt “crumby”`,

    `When potatoes have babies, what are they called?
Tator Tots` ,

    `Where do hamburgers go to dance?
They go to the meat-ball!`,

    `Why did the elephant cross the road?
Because it was the chickes day off` ,

    `What do a car and an elephant have in common?
They both have trunks.`,

    `What color of socks do bears wear? 
They dont wear socks… they have bear feet (bare feet)` ,

    `How does a penguin build a house?
Igloos it together`,

    `Two giraffes run a race. 
They are neck and neck.`,

    `Whats the best day for monkey business?
The first of Ape-ril`,

    `What do you call bears with no ears?
b `,

    `What nickname do you keep for a monkey selling potato chips?
You can call them a chipmunk`,

    `Why cant a cheetah play hide and seek?
Because hes always spotted`,

    `What did the buffalo say when his son went to school?
Bison!`,

    `What do you call a camel with no humps? 
Humphrey`]

function getRandomJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
  }
  
  function generateJoke() {
    const jokeTextElement = document.getElementById("joke-text");
    jokeTextElement.textContent = getRandomJoke();
  }
  
  function Reset() {
    const jokeTextElement = document.getElementById("joke-text");
    jokeTextElement.textContent = "Press the button for a joke!";
  }

  // On page load, show a random joke
//   generateJoke();