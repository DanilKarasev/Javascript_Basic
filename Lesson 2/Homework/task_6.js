function task_6() {

    let a = +prompt("Введите число a: ");
    let b = +prompt("Введите число b: ");
    let operation = prompt("Введите желаемую операцию одним символом (+ - / *): ");

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

    function mathOperation(a, b, operation) {
        if (operation === '+'){
            return sum(a,b);
        } else if (operation === '-') {
            return dif(a,b);
        } else if (operation === '/') {
            return div(a,b);
        } else if (operation === '*') {
            return mult(a,b);
        }
    }

    alert(mathOperation(a,b,operation));
}