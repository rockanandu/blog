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
var footer=document.getElementById("myFooter");

var sticky=footer.offsetTop;

function myFunction() {
 if(window.pageYoffset>sticky){
footer.classList.add("sticky");
}
else
{
footer.classList.remove("sticky");
}
}
