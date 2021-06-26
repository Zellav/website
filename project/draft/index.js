// сложение 2 чисел, передавать в функцию, функция умножает на 2, результат сложение и умножение через функцию)

let first = 2
let two = 2

let three = first + two


function multiplication (num) {
    let first = num * 2
    return first
}


let result = multiplication(three)


document.body.innerHTML = result