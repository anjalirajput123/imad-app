console.log('Loaded!');
// new things
var element=document.getElementById("main text");
element.innerHTML='new value';

//move the picture
var img=document.getElementById('my buddy');
var marginRight= 0;
function moveRight() {
    marginLeft = marginLeft + 1;
    imag.style.marginLeft + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight,50);
};