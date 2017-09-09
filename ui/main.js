console.log('Loaded!');
// new things
var element=document.getElementById("main text");
element.innerHTML='new value';

//move the picture
var img=document.getElementById('my buddy');
img.onclick = function() {
    img.style.marginleft='100px';
};