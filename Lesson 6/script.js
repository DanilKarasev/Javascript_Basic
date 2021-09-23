function getColor() {
    var red = (Math.random() * 255).toFixed(0);
    var blue = (Math.random() * 255).toFixed(0);
    var green = (Math.random() * 255).toFixed(0);
    return "rgb("+red+","+green+", "+blue+")";
}