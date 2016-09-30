console.log('Loaded!');

var img=document.getElementById('madi');
function moveLeft() {
    marginLeft= marginLeft + 10;
    img.style.marginLeft= marginLeft + 'px';
}
img.onClick=function() {
    img.style.marginLeft= '100px';
    
    
}; 
    