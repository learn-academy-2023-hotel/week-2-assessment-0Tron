// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]

    describe(`multiplyByThree`, () => {
        it(`returns an array with all the numbers multiplied by 3`, () => {
            const numbersArray1 = [6, 7, 8, 9, 10]
            const numbersArray2 = [24, 27, 30, 33, 36]
            expect(multiplyByThree(numbersArray1)).toEqual([18, 21, 24, 27, 30])
            expect(multiplyByThree(numbersArray2)).toEqual([72, 81, 90, 99, 108])
        })
    })

// This is a good fail.  ReferenceError: multiplyByThree is not defined


// b) Create the function that makes the test pass.

const multiplyByThree = (arr) => {
    return arr.map((value) => {
        return value * 3
    })
}

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

// const object1 = { number: 15 }
// // Expected output: "15 is divisible by three"
// const object2 = { number: 0 }
// // Expected output: "0 is divisible by three"
// const object3 = { number: -7 }
// // Expected output: "-7 is not divisible by three"

describe(`divByThree`, () => {
    it(`decide if the number inside it is evenly divisible by three or not`, () => {
        const object1 = { number: 15 }
        const object2 = { number: 0 }
        const object3 = { number: -7 }
        expect(divByThree(object1.number)).toEqual(`15 is divisible by three`)
        expect(divByThree(object2.number)).toEqual(`0 is divisible by three`)
        expect(divByThree(object3.number)).toEqual(`-7 is not divisible by three`)
    })
})

// divByThree › decide if the number inside it is evenly divisible by three or not
//ReferenceError: divByThree is not defined

// b) Create the function that makes the test pass.

const divByThree = (number) => {
    // Parameter is number
    if (number % 3 === 0){
        // checks to see if our parameter when divided by 3 stricktly equals to 0
    return `${number} is divisible by three`
    // if its true it returns this string
    } else {
    return `${number} is not divisible by three` 
    }
    //if its not true it returns this string
}    


// Pseudo code:
// input: Takes in our parameter (number)
// output: See if the number is divisible by 3

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

//the words in the output arent all capatalized and it took my a while to realize and i kept receiving an error.

describe(`capWords`, () => {
    it(`returns an array with all the words capitalized`, () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
        expect(capWords(randomNouns1)).toEqual(["STREETLAMP", "POTATO", "TEETH", "CONCLUSION", "NEPHEW"])
        expect(capWords(randomNouns2)).toEqual(["TEMPERATURE", "DATABASE", "CHOPSTICKS", "MANGO"])
    })
})

//Get a error of ReferenceError: capWords is not defined (This is a good error)

// b) Create the function that makes the test pass.

// functions-loops-arrayExpression.md - Syllabus was used as a reference

 const capWords = (arr) => {
    // Create a function named capWords with a parameter called (arr)
    let newArr = []
    // now we need to create a new array
    for (let i = 0; i < arr.length; i++) {
    // this is where we create our loop, we set our variable i at 0, then it checks to make sure the value of i is less than the lenght of our parameter, finally the ++ means that it increases the value of our i by 1 each iteration
        newArr.push(arr[i].toUpperCase())
    //we use the .toUpperCase mutation to capitalize the string, .push is used to add new items to the end of an array (its adding the items inside the paranthesis)
    }
    return newArr
 }   

//Pseudo:
// input: array of words
// output: returns array capitalized



