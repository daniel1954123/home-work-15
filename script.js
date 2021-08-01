'use strict'

const userInput1 = +prompt('Ведите любое число');
const userInput2 = +prompt('Ведите любое число');
const userInput3 = +prompt('Ведите любое число');

const decision = (obj,operation) =>{
    switch (operation){
        case '%':
            return obj.num1 % obj.num3
        case '/':
            return obj.num1 / obj.num2 / obj.num3
        case '+':
            return obj.num1 + obj.num2 + obj.num3
        case '-':
            return obj.num1 - obj.num2 - obj.num3
        case '*':
            return obj.num1 * obj.num2 * obj.num3
        default:
            return 'Не верно'
    }
}

const task = (num1,num2,num3,cb) => {
    const obj ={
        num1,
        num2,
        num3,
    }
    return `Остаток от деления = ${decision(obj,'%')}  Произведение = ${decision(obj,'*')}  
       Сложение = ${decision(obj,'+')} Вычитание = ${decision(obj,'-')} Деление = ${decision(obj,'/')}`
}

console.log(task(userInput1,userInput2,userInput3,decision));