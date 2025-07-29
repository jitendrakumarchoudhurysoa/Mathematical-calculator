let input = document.querySelectorAll(".btn.btn-input");
for(let i=0;i<input.length;i++){
   let e=input[i]
   e.addEventListener("click",()=>{
      let dis=document.getElementById("disp");
      if(dis.innerText==="0"){
         dis.innerText=e.innerText
      }
      else{
      dis.innerText+=e.innerText
      }
   })

}

let clr=document.querySelector("#clear")
clr.addEventListener("click",()=>{
    let dis=document.getElementById("disp");
    dis.innerText="0"
})


let result=document.getElementById("equal")
result.addEventListener("click",()=>{
    let dis=document.getElementById("disp");
    try{
      ans=eval(dis.innerText)
      dis.innerText=ans
    }
    catch(e){
      dis.innerText="ERROR"
    }
})