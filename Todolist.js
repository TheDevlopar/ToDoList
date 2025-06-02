let Box = document.querySelector(".Box-div");
let Add = document.querySelector(".Add");
let Input = document.querySelector(".Input");


 // Main logic starts here i guess...
Add.addEventListener("click", () => {
  if(Input.value === ''){
    Input.placeholder = "Write your task here";
  }
  else{
    Createtask();
  }
})

Input.addEventListener("keydown", (event) => {
  if(event.key === "Enter"){
    if(Input.value === ''){
      Input.placeholder = "Write your task here";
    }
    else{
      Createtask();
    }
  }
})

function Createdelsvg(){
  // Creating an svg using js.. I have no idea how to make one with js T-T. ChatGpt came in clutch.
  const namespace = "http://www.w3.org/2000/svg";
  let svg = document.createElementNS(namespace, "svg");
  const pathelement = document.createElementNS(namespace, "path")
  const pathdata = "M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z";
  pathelement.setAttribute("d", pathdata);
  svg.setAttribute("viewBox", "-70 -80 600 600")
  svg.appendChild(pathelement);
  return svg;
}
function Createeditsvg(){
  const namespace = "http://www.w3.org/2000/svg";
  let svg = document.createElementNS(namespace, "svg");
  const pathelement = document.createElementNS(namespace, "path")
  const pathdata = "M19.5 6L7 19l-4 1 1-4L17 3l2.5 3Z";
  pathelement.setAttribute("d", pathdata);
  svg.setAttribute("viewBox", "-1 -2 24 24");
  svg.appendChild(pathelement);
  return svg;
}

function Createtask(){
  let Task_div = document.createElement("div");
  let Dotbtn = document.createElement("button");
  let Task_text = document.createElement("div");
  let Editbtn = document.createElement("button");
  let Delbtn = document.createElement("button");
  let clicked = false;
  let Delsvg = Createdelsvg();
  let Editsvg = Createeditsvg();
  
  Box.appendChild(Task_div);
  Task_div.classList.add("Task-div");

  Task_div.appendChild(Dotbtn);
  Dotbtn.classList.add("Dot-btn");

  Task_div.appendChild(Task_text);
  Task_text.classList.add("Task-text");
  Task_text.innerText = Input.value;

  Task_div.appendChild(Editbtn);
  Editbtn.classList.add("Edit-btn");
  
  Task_div.appendChild(Delbtn);
  Delbtn.classList.add("Del-btn");

  Delbtn.appendChild(Delsvg);
  Delsvg.classList.add("Del-icon");

  Editbtn.appendChild(Editsvg);
  Editsvg.classList.add("Edit-icon");

  Input.value = '';

  Dotbtn.addEventListener("click", () => {
    if(clicked === false){
      Dotbtn.classList.add("Dot-btn2")
      Task_text.classList.add("linethrough")
      clicked = true;
    }
    else{
      Dotbtn.classList.remove("Dot-btn2");
      Task_text.classList.remove("linethrough")
      clicked = false;
    }
  })

  Delbtn.addEventListener("click", () => {
    Task_div.remove();
  })

  // Edit functionality
  Editbtn.addEventListener("click", () => {
    let Editbox = document.createElement("div");
    Editbox.classList.add("Edit-box");
    Box.appendChild(Editbox);

    let Edittext = document.createElement("div");
    Edittext.classList.add("Edit-text");
    Edittext.innerText = "Enter the updated task";
    Editbox.appendChild(Edittext);

    let Editinput = document.createElement("input");
    Editinput.classList.add("Edit-input");
    Editbox.appendChild(Editinput);

    let btnsdiv = document.createElement("div");
    btnsdiv.classList.add("Edit-btns-div");
    Editbox.appendChild(btnsdiv);
    let Savebtn = document.createElement("button");
    Savebtn.classList.add("Save-btn");
    Savebtn.innerText = "Save";
    btnsdiv.appendChild(Savebtn);
    let Cancelbtn = document.createElement("button");
    Cancelbtn.classList.add("Cancel-btn");
    Cancelbtn.innerText = "Cancel";
    btnsdiv.appendChild(Cancelbtn);

    // Save button functionality
    Savebtn.addEventListener("click", () => {
      if(Editinput.value === ''){
        Editinput.placeholder = "Enter the updated task";
      }
      else{
        Task_text.innerText = Editinput.value;
        Editbox.remove();
      }
    })
    
    // Enter key functionality for the input
    Editinput.addEventListener("keydown", (event) => {
      if(event.key === "Enter"){
        if(Editinput.value === ''){
          Editinput.placeholder = "Enter the updated task";
        }
        else{
          Task_text.innerText = Editinput.value;
          Editbox.remove();
        }
      }
    })

    // Cancel button functionality
    Cancelbtn.addEventListener("click", () => {
      Editbox.remove();
    })
  })
}