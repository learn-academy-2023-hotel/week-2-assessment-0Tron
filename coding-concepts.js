// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Hotel 2023"
console.log(cohort.split(" "))

// a) Your answer: It will spit "Hotel 2023" into "Hotel, 2023" due to space in the commas 
// b) Verify and explain: Converts a string into an array. The outcome was "Hotel, 2023"

// --------------------2) What will this log?

const greeter = (name) => {
 return `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: it will log "Hello, LEARN Student"
// b) Verify and explain: the result came back as "undefined", this is because we used  the arrow function syntax without a return, this will log the function undefined (syllabus - functions.md)

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer:This will log only the odd numbers 11, 13, 15
// b) Verify and explain: This is a higher-order-function since we are using the .filter() method. onlyOdds is our array that uses the .filter method to evaluate wether our argument is odd or even

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer:i believe this will return "JavaScript". 
// b) Verify and explain: myCodingSKills is our object, languages is the key and javascript is our value and since it stated the 0 index we know that JavaScript is our answer since we start with 0 not 1

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Hotel"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer:i think this will log student = George, cohort = Hotel, year = 2023
// b) Verify and explain: 

// Learn { student: 'George', cohort: 'Hotel', year: 2023 } This is what it logged.

// We know this is a class and that this is a blue print for our class. the .This refers to the object it belongs too

