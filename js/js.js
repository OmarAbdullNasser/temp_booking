/*function active_click(){

let no_active= document.getElementsByClassName("no-active");
no_active.forEach((item, i) => {
  item.addEventListener("click",function(){
  item.classList.add("active");

  });

});

}
active_click();*/

function crona_click(){
  let x=document.getElementById("crona-link");
  let y= document.getElementById("CT");
  let z=document.getElementById("up");
  let c= document.getElementById("down");
  let f=document.getElementById("offer");
  let close =document.getElementById("close");

  x.addEventListener("click", function(){
  y.classList.toggle("CT");
  c.classList.toggle("DW");
  z.classList.toggle("UP");

  });

  close.addEventListener("click", function(){
    f.style.display="none";
  });

}
crona_click();
