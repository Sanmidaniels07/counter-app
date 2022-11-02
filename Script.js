// let age = 20;
// let firstName = 'daniel';
// const pi = 3.142;

// // concatination

// // let result = 'my name is ' + firstName + ' i am ' + age + ' years old'
// // console.log(result);

// let result = `my name is  ${firstName} and  i am  ${age}  years old`
// console.log(result);


// // operations
// let int1 = 31;
// let Int2 = 20;

// // let Result = int1 + Int2
// // console.log(Result);

// // let reSult = Int2 - int1
// // console.log(reSult);

// // let reSulT = Int2 / int1
// // console.log(reSulT);

// // MODULUS
// let RESULT = int1 % Int2 
// console.log(RESULT);

let counter = document.getElementById("counter_el")
console.log(counter);


let count = 0;
function increment(){
    count = count + 1
    counter.innerText = count
    
    
}

increment()

function decrement(){
    count = count - 1
    counter.innerText = count
    
    
}

decrement()



let saveEl = document.getElementById('save-el')

function save(){
    let vari = count + ' - '
    saveEl.textContent += vari
}
save()


function reset(){
    let counter_el = 0
    document.getElementById('counter_el').innerText = counter_el
  
}
reset()
// let welcomeEl =document.getElementById("welcome-el")

// let name = 'TIWA'
// let greeting = 'welcome back'

// function welcomeel(){
//     welcomeEl.innerText = greeting +', ' + name 
// }

// welcomeel()

let greet = 'hi linda'
let name = 'tope'

function greeting(){
    console.log('gree' + ' name ')
}
greeting()

let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

function add3Points() {
    myPoints += 3
}

function remove1Points() {
    myPoints -= 1
}

add3Points()
add3Points()
add3Points()
remove1Points()