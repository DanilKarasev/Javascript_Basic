var prev = document.querySelector(".carousel-control-prev");
var next = document.querySelector(".carousel-control-next");//Получили кнопки

var images = document.querySelectorAll(".carousel-item");//получили массив блоков с изображениями
var miniImages = document.querySelectorAll(".mini_image");//Миниатюры изображений
var i = 2; //Решил начинать со второго элемента, можно менять

images[i].classList.add('active'); //можно было просто добавлять атрибут, но решил через класс, как изначально было в бутстрапе
miniImages[i].classList.add('mini_image_active');

prev.onclick = function () {
    images[i].classList.remove('active');
    miniImages[i].classList.remove('mini_image_active');
    i -= 1;
    if (i < 0) {
        i = images.length - 1;
    }
    images[i].classList.add('active');
    miniImages[i].classList.add('mini_image_active');
}

next.onclick = function () {
    images[i].classList.remove('active');
    miniImages[i].classList.remove('mini_image_active');
    i += 1;
    if (i == images.length) {
        i = 0;
    }
    images[i].classList.add('active');
    miniImages[i].classList.add('mini_image_active');
}