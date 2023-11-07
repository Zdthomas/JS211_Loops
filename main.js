// do...while 1-1000

let result = '';
let i = 0

do {
    i = i + 1
    result = result + 1
} while (i < 1000)

console.log(result);

// Create object called person

const person = {

    firstName: "Jane",

    lastName: "Doe",

    birthDate: "Jan 5, 1925",

    gender: "female"

}

// logged Object keys and entries

console.log(Object.keys(person));

console.log(Object.entries(person));

// made the arrayOfPersons

let arrayOfPersons = [ {

    firstName: "David",

    lastName: "Smith",

    birthDate: "Feb 6, 1985",

    gender: "male"},


    {firstName: "Sarah",

    lastName: "Beckman",

    birthDate: "June 25, 1999",

    gender: "female"},


    {firstName: "Kari",

    lastName: "Jones",

    birthDate: "May 17, 1990",

    gender: "female"},


    {firstName: "John",

    lastName: "Doe",

    birthDate: "Oct 8, 2000",

    gender: "male"}

]

// For... of Loop for birthdate being odd date

for (const persons of arrayOfPersons) {

    const birthYear = new Date(persons.birthDate).getFullYear();

    if (birthYear % 2 !== 0) {

      console.log(persons.birthDate);

    }
  }

//   map funtion for persons

arrayOfPersons.map((persons) => console.log(persons))

// Function to seperate by gender.

const male = arrayOfPersons.filter((persons) => persons.gender === "male");

console.log(male);

// Function to grab birthdate before a specific year.

const isBornBefore1990 = (persons) => {

    const birthYear = new Date(persons.birthDate).getFullYear();

    return birthYear < 1990;

  };
  
//   Filter and log the people before said year.

  const personsBornBefore1990 = arrayOfPersons.filter(isBornBefore1990);

  console.log(personsBornBefore1990);


// forEach, find, & findIndex from scratch


const randomStuff = ['dog', 'sword', 'cart', 'chip']

    randomStuff.forEach((stuff) => {

    console.log(`This is ${stuff}.`);

  });

// 
  const foundStuff = randomStuff.find((stuff) => stuff.length > 3)
  console.log(foundStuff)

//   
  const bigStuff = (stuff) => stuff.length > 3;

  console.log(randomStuff.findIndex(bigStuff));