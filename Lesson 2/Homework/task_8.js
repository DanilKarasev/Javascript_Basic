function task_8() {

    var val = +prompt('Введите число: ');
    var pow = +prompt('Введите степень числа: ');

    function power(val, pow) {
        if (val == 0) {
            return 0;
        } else if (pow == 0) {
            return 1;
        } else if (pow < 0) {
            return power(1/val, -pow);
        } else
            return val * power(val, pow - 1);
    }

    alert(power(val, pow));
}