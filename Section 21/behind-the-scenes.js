const hobbies = ['Sports','Reading'];//a pointer to the array is stored
const age = 32; // the value itself is stored
const person = {
    age: 32
};
person.name = 'Manish';
console.log(person);
console.log(hobbies);
hobbies.push('Cooking');
console.log(hobbies);

//Primitive values: numbers, strings, boolean, undefined etc
//Stored in different memory sections in computer
//Reference values: objects, arrays, functions

function getAdultParameters(p){
    // p.age -= 14;
    // return p.age;
    return p.age - 18;
}
console.log(getAdultParameters(person));
console.log(person);

function getAdultParameters2(p){
    p.age -= 14;
    return p.age;
    // return p.age - 18;
}
console.log(getAdultParameters2({age: person.age}));
console.log(getAdultParameters2({...person}));
console.log(person);

const hobby = ['Trekking', 'Gymming'];
const newHobby = hobby;
newHobby.push('Snorkelling');
console.log(hobby);