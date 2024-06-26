console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
 firstName: 'Abdirizak',
 lastName:' Mohamed',
 hasSibling: true,
 shoeCount: 20,
 favThreeFoods : ['Ugali','Rice', 'Pasta' ]
};
console.log('A little about me:', me); // An OBJECT with key-value pair

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
let fullName = `${me.firstName}${me.lastName}`; //used template literals/Backticks

console.log(fullName); // Abdirizak Mohamed


/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
    //  first favorite food
    console.log(me.favThreeFoods[0]); //Ugali

    // Last favorite food 
    console.log(me.favThreeFoods[2]) // pasta (..using index)

    // Below console.logs are just for TRIAL & ERROR (Doing it differently to get same Ouput) !

    let array = me.favThreeFoods;
    console.log(array[array.length -1]) // pasta (..using .length method..In case you don't know the length of the array!)

    console.log(me.favThreeFoods[me.favThreeFoods.length -1]) // same ouput as two above .."pasta"

/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/

   // Current shoeCount
   console.log(me.shoeCount) // 20

   // Updated shoeCount
   me.shoeCount = 21;
   console.log(me.shoeCount); // 21


/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
  // added new property
me.favoriteColor = "Blue"

  // console.log the Object
console.log(me) // An Object containing favoriteColor-Blue pair 

 // Console.log the value 
console.log(me.favoriteColor) // Blue