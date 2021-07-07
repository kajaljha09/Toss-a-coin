function toss()
{
    var num=Math.random()*2;
    var toss1=Math.floor(num)+1;
    var tossing="images/pic" + toss1+ ".jpg"
    document.querySelector(".img").setAttribute("src",tossing)
   
    
}