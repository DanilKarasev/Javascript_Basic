function task_5() {

    let a = +prompt("Введите число a: ");
    let b = +prompt("Введите число b: ");

    function sum(a,b) {
        return a + b;
    }

    function dif(a,b){
        return a - b;
    }

    function div(a,b) {
        return a / b;
    }

    function mult(a,b) {
        return a * b;
    }

    document.write("Сумма чисел a и b: " + sum(a,b) + "<br>");
    document.write("Разность чисел a и b: " + dif(a,b) + "<br>");
    document.write("a раделить на b: " + div(a,b) + "<br>");
    document.write("Произведение чисел a и b: " + mult(a,b));
}