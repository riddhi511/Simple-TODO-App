let btn1 = document.querySelector("#btn1");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn1.addEventListener("click", function(event){
    console.log(inp.value);
    let newLi = document.createElement("li");
    newLi.innerText = inp.value;
    ul.appendChild(newLi);

    let btn2 = document.createElement("button");
    btn2.innerText = "Delete";
    btn2.classList.add("btns");
    newLi.appendChild(btn2);

    inp.value = "";

    
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let it = event.target.parentElement;
        console.log(it);
        it.remove();
        console.log("deleted!");
    }
});


// let btn = document.querySelector("button");
// btn.addEventListener("click", function(){
//     let h3Tag = document.querySelector("h3");
//     h3Tag.innerText = getRandomNumber();

//     let divTag = document.querySelector('div');
//     divTag.style.backgroundColor = getRandomNumber();
// });

// function getRandomNumber(){
//     let red = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// };

// let newButton = document.createElement("button");
// newButton.innerText = "Click Me!";

// let bdy = document.querySelector("body");
// bdy.append(newButton);

// newButton.addEventListener("click", function(){
//     newButton.style.backgroundColor = "green";
// })

// let inp = document.querySelector("input");
// inp.addEventListener("input",function(){
//     console.log(this.value);
//     let h2Tag = document.querySelector("h2");
//     h2Tag.innerText = this.value;
// });

