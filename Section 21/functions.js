function greetUser(greetingPrefix, userName = 'User'){
    // console.log('Hi '+userName+' !');
    // console.log(greetingPrefix+' '+userName+' !');
    console.log(`${greetingPrefix} 
        ${userName}`);//${} are template literals
}

greetUser('Hi','Max');
greetUser('Hello');

function sumUpp(num1, num2, num3){
    return num1 + num2 + num3;
}

// console.log(sumUpp(1,2));//NaN

function sumUp(numbers){
    let result = 0;
    for (const number of numbers){
        result += number;
    }
    return result;
}

console.log(sumUp([23,45,67]));

function restSumUp(...numbers){//rest parameters with spread operator
    let result = 0;
    for (const number of numbers){
        result += number;
    }
    return result;
}
const inputNumbers = [4,8,10,34,67,12];
console.log(restSumUp(inputNumbers));
console.log(restSumUp(...inputNumbers));
console.log(restSumUp(4,8,10,34,67,12));
console.dir(restSumUp);