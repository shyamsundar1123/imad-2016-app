console.log('Loaded!');
var img=document.getElementById('madi');
var marginLeft=0;
function moveLeft() {
    marginLeft= marginLeft + 10;
    img.style.marginLeft= marginLeft + 'px';
}
img.onClick=function() {
    var interval=setInterval(moveLeft,100);
    
    
}; 
    