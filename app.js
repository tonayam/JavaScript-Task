// NUMBER 1
const card = document.querySelector(`.card`);

card.innerHTML = `
        <div class="group-name">
          <h1 class="heading">Team Ares</h1>
        </div>
        <div class="members">
          <ol>
            <li>Austin Tonayam (Group Leader)</li>
            <li>Oriyomi Aladesuru</li>
            <li>Akorode Giyasat</li>
            <li>Izima Obisike</li>
            <li>Igah Abiye</li>
            <li>Amos Thibault Bikari</li>

<li>Susan Mwende</li>

<li>Susan Chekosgei</li>

          </ol>
        </div>
`;
const h1 = document.querySelector(`.heading`);
h1.style.color = `red`;

// NUMBER 2
const Team = [
  `Austin Tonayam`,
  `Oriyomi Aladesuru`,
  `Amos Thibault Bikari`,
  `Akorode Giyasat`,
  `Izima Obisike`,
];
console.log(Team[0]);

// NUMBER 3
const memberInfo = {
  firstName: `Tonayam`,
  lastName: `Austin`,
  bestMovie: `Inglorious Basterds`,
  bestFood: `Spaghetti`,
  complexion: `Dark`,
  birthMonth: `August`,
  state: `Bayelsa State`,
  groupName: `Ares`,
};
console.log(memberInfo.bestMovie);

// NUMBER 4
const noun = `Quentin Tarantino`;
const verb = `directing`;
const adjective = `perfect`;

sentence1 = noun + " is a " + adjective + " Director";
sentence2 = verb + " is what " + noun + " does best";
sentence3 =
  adjective + " dialogues can be found in " + noun + "'s Pulp Fiction";
sentence4 =
  noun + " will be " + verb + " the third installation of Kill Bill next year";
sentence5 = noun + "'s Django was nothing short of " + adjective + "ion";

// NUMBER 5

function divisionFunc(a, b) {
  return a % b;
}

// NUMBER 6
function quadFormular(a, b, c) {
  var result = (-1 * b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
  var result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
  return `${result} and ${result2}`;
}

// NUMBER 7
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks =
  "The " +
  myAdjective +
  " " +
  myNoun +
  " " +
  myVerb +
  " " +
  myAdverb +
  " through the forest";
console.log(wordBlanks);

// NUMBER 8 (AREA OF A CIRCLE)
function Area(r) {
  const PI = 3.142;
  return PI * r * r;
}
console.log(Area(9) + "cm");

// NUMBER 9
function simpleInterest(c, r, t) {
  return c * (1 + r * t);
}
let initialCapital = 8200;
let interestRate = 0.175;
let timePeriod = 2.5;
console.log(
  simpleInterest(initialCapital, interestRate, timePeriod) + " Naira"
);

// NUMBER 10
let a = 10;
let b = 4;
console.log(a % b);

// NUMBER 11 (BMI)
function BMIcalc(mass, height) {
  return mass / (height * height);
}
// DATA 1
const meritsHeight = 78;
const meritsMass = 1.69;
const MeritBMI = BMIcalc(meritsHeight, meritsMass);
console.log("Merit's BMI is " + MeritBMI + " kilograms/meter-square");

const NutjobsHeight = 92;
const NutjobsMass = 1.95;
const NutjobBMI = BMIcalc(NutjobsHeight, NutjobsMass);
console.log("Nutjob's BMI is " + NutjobBMI + " kilograms/meter-square");

const meritHigherBMI = MeritBMI > NutjobBMI;
console.log(meritHigherBMI);

// DATA 2
const meritsHeight2 = 85;
const meritsMass2 = 1.76;
const MeritBMI2 = BMIcalc(meritsHeight2, meritsMass2);
console.log("Merit's BMI is " + MeritBMI2 + " kilograms/meter-square");

const NutjobsHeight2 = 95;
const NutjobsMass2 = 1.88;
const NutjobBMI2 = BMIcalc(NutjobsHeight2, NutjobsMass2);
console.log("Nutjob's BMI is " + NutjobBMI2 + " kilograms/meter-square");

const meritHigherBMI2 = MeritBMI2 > NutjobBMI2;
console.log(meritHigherBMI2);
