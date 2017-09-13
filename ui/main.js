//button code
var button=document.getElementById("counter");
//var counter=0;
button.onclick= function(){
    //create the object
    var Request =new XMLHttpRequest();
    //catpure the response and store it in a variable
    
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE) {
            if(request.status===200){
                var counter=request.responseText;
            }
        }
    }
    //render the variable in the correct span
   // counter = counter +1;
   // var counter=document.getElementById("count");
   // span.innerHTML =counter.toString();
   
   //make the request
   request.open("GET","http://anjalirajput4629596.imad.hasura-app.io/counter", true );
   request.send(null);
}