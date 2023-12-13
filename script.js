let elem = document.querySelectorAll(".elem");

elem.forEach(function(val){
   
    val.addEventListener("mousemove",(detail)=>{
       //   console.log( val.childNodes[3]);
       val.childNodes[3].style.left= detail.x+"px";
      //  val.childNodes[3].style.top= detail.y+"px";
    })

   val.addEventListener("mouseenter",()=>{
   //   console.log( val.childNodes[3]);
   val.childNodes[3].style.opacity=1;  
   
   })

   val.addEventListener("mouseleave",()=>{
      val.childNodes[3].style.opacity=0;
   })
})










// let elemImage = document.querySelector("#elem1 img");


// elem1.addEventListener("mousemove",function(details){
//    elemImage.style.left = details.x +"px";
//    elemImage.style.top = details.y +"px";
   
// })

// elem1.addEventListener("mouseenter",(details)=>{
//     elemImage.style.opacity= 1;
//  })

//  elem1.addEventListener("mouseleave",(details)=>{
//     elemImage.style.opacity= 0;
   
//  })