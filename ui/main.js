console.log('Loaded!');
// new things
var element=document.getElementById("main text");
element.innerHTML='new value';

//move the picture
var img=document.getElementById('my buddy');
img.onclick = function() {
    var interval = setInterval(moveleft,100);
    img.style.marginleft='100px';
};