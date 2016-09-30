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
    