console.log('Loaded!');
// new things
var element=document.getElementById("main text");
element.innerHTML='new value';

//move the picture
var img=document.getElementById('my buddy');
function moveRight() {
    marginLeft = marginLeft + 10;
    imag.style.marginLeft + "px";
}
img.onclick = function() {
    var interval = setInterval(moveRight,100);
};