console.log('Loaded!');
var i=2;
var img=document.getElementById('madi');
var marginLeft=0;

    function moveLeft() {
    marginLeft= marginLeft + 2;
    img.style.marginLeft= marginLeft + 'px';
}
img.onclick=function() {
    var interval=setInterval(moveLeft,100);
    }; 
    var button=document.getElementById('counter');
    button.onclick=function(){
        var request=new XMLHttpRequest();
        request.onreadystatechange=function(){
            if(request.readyState===XMLHttpRequest.DONE){
                if(request.status===200){
                    var counter=request.responseText;
                    var span=document.getElementById('count');
                    span.innerHTML=counter.toString();
                }
            }
        };
    };
    request.open('GET','http://shyamsundar1123.imad.hasura-app.io/counter');
    request.send(null);