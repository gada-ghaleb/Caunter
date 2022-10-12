



window.onload=function(){


    const caunter =  document.querySelector("#caunter");
    const content = document.querySelector("#content");
    
    const caunterSpan = document.createElement("span");
    caunterSpan.textContent= 0;
    caunter.appendChild(caunterSpan);
    

    const buttonDecrement =  document.createElement("button");
    buttonDecrement.innerHTML = "-";
    buttonDecrement.id = "btn";
    content.appendChild(buttonDecrement);
    
    const buttonIncrement = document.createElement("button");
    buttonIncrement.innerHTML = "+";
    buttonIncrement.id = "btn";
    content.appendChild(buttonIncrement);
    
     buttonDecrement.onclick = function(){
     parseInt(caunterSpan.innerHTML--)
   }
   buttonIncrement.onclick = function(){
  parseInt(caunterSpan.innerHTML++)
   }
      
   }


















/*

//Variables
let myContainer = document.querySelector(".container");
let myBox = document.querySelector(".box")
let myCaunter = document.querySelector(".caunter");
let myContent = document.querySelector(".content");


//create element

    let myCaunterSpan = document.createElement("span");
    let myContentButtonDecrement  = document.createElement("button");
    let myContentButtonIncrement  = document.createElement("button");
    
    
    // Create text
    let myCaunterSpanValue = document.createTextNode("0")
    let myContentButtonDecrementText = document.createTextNode("-")
    let myContentButtonIncrementText = document.createTextNode("+")
    //create id and class
    
    
    myContentButtonIncrement.id = "increment"
    myContentButtonDecrement.id = "decrement"
    
    // create pendChild
    
    myCaunter.appendChild(myCaunterSpan);
    myCaunterSpan.appendChild(myCaunterSpanValue);
    myContent.appendChild(myContentButtonDecrement);
    myContentButtonDecrement.appendChild(myContentButtonDecrementText);
    myContent.appendChild(myContentButtonIncrement);
    myContentButtonIncrement.appendChild(myContentButtonIncrementText);
    
    
    
    //Creat function
    
    
    
    
    
    myContentButtonDecrement.onclick = function(){
      parseInt(myCaunterSpan.innerHTML--)
    }
    myContentButtonIncrement.onclick = function(){
   parseInt(myCaunterSpan.innerHTML++)
    }
*/












