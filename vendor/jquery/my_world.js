window.onscroll=function() {myFunction()};
var header=document.getElementById("myHeader");

var sticky=header.offsetTop;

function myFunction() {
 if(window.pageYoffset>sticky){
header.classList.add("sticky");
}
else
{
header.classList.remove("sticky");
}
}
