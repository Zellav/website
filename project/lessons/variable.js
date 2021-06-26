//const           // обьявленная переменная защищена от перезаписи своего значения
//let             // переменная может быть перезаписана в ходе работы (имеет блочную область видимости)
//var             // переменная может быть перезаписана в ходе работы (устаревший способ, но не утративший актуальность)


// -- Примеры использования --
const num1 = 1      
//num1 = 2            //! ошибка

let num2 = 1        
num2 = 2            //* перезаписано

var num3 = 1
num3 = 2            //* перезаписано


/** 
    Как правило, всегда объявляйте переменные с помощью, constесли вы не знаете, что значение изменится.

    Всегда используйте, const когда объявляете:

    *Новый массив 
    *Новый объект
    *Новая функция
    *Новый RegExp (регулярное выражение)


    Ключевое слово constнемного вводит в заблуждение.
    Он не определяет постоянное значение. Он определяет постоянную ссылку на значение.

    Из-за этого ты НЕ МОЖЕШЬ:

    *Переназначить постоянное значение
    *Переназначить постоянный массив
    *Переназначить постоянный объект

    Но ты можешь:

    *Изменить постоянный массив
    *Изменить постоянный объект
*/

// --const--
const arr = ['one', 'two', 'three']
arr = ['foo', 'bar']                                        //! ошибка

const car = {type:"Fiat", model:"500", color:"white"}
car.color = "red"                                           //* теперь color "red"

const car2 = {type:"Fiat", model:"500", color:"white"}
car2 = {type:"Volvo", model:"EX60", color:"red"}             //! ошибка, так как это попытка перезаписи переменной в целом

// --let--
//? Переменные, определенные как let, нельзя повторно объявить
//? Вы не можете случайно повторно объявить переменную
let x = "one"
let x = "two"                                               //! ошибка, попытка повторно обьявить переменную(именно обьявить)

// --var--
//? Но var можно повторно обьявить
var x = "one"
var x = "two"                                               //* нежданчик =)
