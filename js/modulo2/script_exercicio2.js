function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
   }

function segunda2(ref) {
    var newColor = getRandomColor();

    var target = document.getElementById(ref.id);

    target.style.backgroundColor = newColor;
}