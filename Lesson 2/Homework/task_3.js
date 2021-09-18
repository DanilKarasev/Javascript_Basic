function task_3() {

    do {
        var min = +prompt("Введите минимальное значение диапазона двух чисел (обязательно отрицательное): ");
        if (min > 0) {
            alert("Число должно быть отрицательным!")
        } else if (isNaN(min)) {
            alert("Неверный ввод");
        }
    } while (min >= 0 || isNaN(min));

    do {
        var max = +prompt("Введите максимальное значение диапазона двух чисел(обязательно положительное): ");
        if (max < 0) {
            alert("Число должно быть положительным!")
        } else if (isNaN(max))  {
            alert("Неверный ввод");
        }
    } while (max < 0 || isNaN(max));


    var a = Math.floor(Math.random() * (max - min + 1)) + min;
    var b = Math.floor(Math.random() * (max - min + 1)) + min;

    if (a >= 0 && b >= 0) {
        alert("Число a: " + a + "\nЧисло b: " + b + "\nРазность чисел: " + (Math.max(a,b) - Math.min(a,b)));
    } else if (a < 0 && b < 0) {
        alert("Число a: " + a + "\nЧисло b: " + b + "\nПроизведение чисел: " + a * b);
    } else {
        alert("Число a: " + a + "\nЧисло b: " + b + "\nСумма чисел: " + (a + b));
    }
}