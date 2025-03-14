function greet(){
    console.log("Giovani");
}

function addNumbers(){
    let num1=6
    let num2=10
    sum=num1*num2
    console.log(sum)
}
function addNumberwithparameters(num1, num2){
  
   
    sum=num1+num2
    console.log(sum)
}

function substractnumber(){
    let num1=10
    let num2=5
    sum=num1-num2
    console.log(sum)

}
greet()
addNumbers()
substractnumber()
addNumberwithparameters(20987, 1037249)

function myname(name,age){
console.log(name)
console.log(age)
console.log(`MY name is ${name} and i'm ${age}years old`)
}

myname("jovi",23)

// create a student object(name,grade,age)

var student={
    name:"jovi",
    grade:"A",
    age:20
}
console.log("student:",student)