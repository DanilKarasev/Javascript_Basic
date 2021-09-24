var cart = document.getElementById('cart');
var addToCart = document.getElementsByClassName('grid__image_btn');
var totalPrice = 0;

for (var i = 0; i < addToCart.length; i++) {
    addToCart[i].onclick = function (event) {
        var item = document.createElement('li');
        var itemName = document.getElementById('name_' + event.target.id[0]);
        var itemPrice = document.getElementById('price_' + event.target.id[0]);
        item.innerHTML = "<b>Товар: </b> " + itemName.innerText + " / Стоимость: " + itemPrice.innerText + " $ ";
        totalPrice += +itemPrice.innerText;
        cart.append(item);
        document.querySelector(".total_price").textContent = "Сумма заказа: " + totalPrice + " $";
    }
}

var clearCart = document.getElementById("clear_cart");
var items = document.getElementsByTagName('li');

clearCart.onclick = function (e) {//Пока что не могу придумать как удалить все элементы, хотя понимаю в чем проблема
    for (var j = 0; j < items.length; j++){
        items[j].remove();
    }
}


