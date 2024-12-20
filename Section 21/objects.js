const job = {title: 'Developer', location:'New York', salary: 50000};
console.log(new Date().toISOString());
//Date is a constructor function or class

class Job{
    constructor(jobTitle, place, salary){
        this.title = jobTitle;
        this.place = place;
        this.salary = salary;
    }//title place and salary are not variable or constants but a property of the object created using class Job
    describe(){
        console.log(`I am a ${this.title}, I work in ${this.place}, and I earn ${this.salary}.`);
    }//we do not require the keyword function in class.
}

const developer = new Job('Developer', 'New York', 50000);
console.log(developer);
const cook = new Job('Cook', 'Hyderabad', 35000);

developer.describe();
cook.describe();


const input = ['Manish', 'Khullar'];
const firstName = input[0];
const lastName = input[1];
//ARRAY DESTRUCTURING
const [first, last] = input;
console.log(input, first, last);
//OBJECT DESCTRUCTURING
const {title} = job;
const {location:jLocation} = job;
console.log(title, jLocation);
