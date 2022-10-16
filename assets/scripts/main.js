
//Create the button
  function generateBtn(label, id){
    const buttonDetail =  document.createElement("button");
    buttonDetail.innerHTML = label;
    buttonDetail.id = id;
    
    return buttonDetail;
  }


window.onload=function(){
    const caunter =  document.querySelector("#caunter");
    const content = document.querySelector("#content");
  // Append button to div 
    content.appendChild(generateBtn("-", "sub"));
    content.appendChild(generateBtn("+", "add"));
  // Create caunter
    const caunterSpan = document.createElement("span");
    caunterSpan.textContent= 0;
    caunter.appendChild(caunterSpan);
  // create function with button 
    document.getElementById("sub").addEventListener("click", function(){
      parseInt(caunterSpan.innerHTML--) 
    })
    document.getElementById("add").addEventListener("click", function(){
    parseInt(caunterSpan.innerHTML++) 
    }) 
  }

