let container = document.querySelector(".calculatorBody")
let body = document.querySelector("body")
let parentDiv =  document.createElement("div")

let div
let colors = ["red", "green", "blue", "yellow",
 "orange", "purple", "cyan", "pink", "brown", "teal",
 "maroon", "olive", "navy", "violet", "indigo", "azure", "beige"];
let lineName
let buttonName
for(let i = 0; i < 4; i++){ // < 30
    parentDiv =  document.createElement("section")
    lineName = "lineButton".concat((i+1))
    parentDiv.setAttribute("className",lineName)
    // parentDiv.setAttribute("class",`lineButton${i+1}`)
    console.log(parentDiv);
    
    for (let index = 0; index < 4; index++) { // <25

        // Button creation 
        div = document.createElement("input")
        div.setAttribute("type","submit")
        buttonName = "button".concat((index+1))
        // div.setAttribute("class",`button${index+1}`)
        div.setAttribute("className",`${buttonName} smallButton`)
        div.style.backgroundColor = "gray"
        div.style.width = "57px"  //17px
        div.style.height = "57px" // 17px
        console.log(index, div);

        div.setAttribute("value","1")
        
        parentDiv.appendChild(div)
        console.log(parentDiv)
    }
container.appendChild(parentDiv)
}
let K,m,b
let j = 9
document.querySelector("section").querySelectorAll("input").forEach(element => {
    console.log(element);
    element.value = j
    element.style.fontSize = "20px"
    if(j==6){
        element.value = "X"
        K=j
    }
    j--
});
// K = 4
document.querySelectorAll("section")[1].querySelectorAll("input").forEach(element => {
    console.log(element);
    element.value = K
    element.style.fontSize = "20px"
    if (K==3) {
        element.value = "-"
        m = K
    }
    K--
});
document.querySelectorAll("section")[2].querySelectorAll("input").forEach(element => {
    console.log(element);
    element.value = m
    element.style.fontSize = "20px"
    if (m==0) {
        element.value = "/"
        b = m
    }
    m--
});
document.querySelectorAll("section")[3].querySelectorAll("input").forEach(element => {
    console.log(element);
    element.value = b
    element.style.fontSize = "20px"
    if (b==-1) {
        element.value = "/"
        
    }else if(b == -2){
        element.value = "."
    }else if (b == -3){
        element.value = "= "
    }
    b--
});

let nbr1
let nbr2
let result
let ecranInput = document.querySelector(".ecran")
document.querySelectorAll(".smallButton").forEach(element => {
    element.addEventListener("click", ()=>{
        ecranInput.value = element.innerText
        switch(element.innerText){
            case "0":
                result = "";
                break;
            case "=":
                try {
                    ecranInput.value = eval(ecran);
                } catch (error) {
                    ecranInput.value = "UNKNOWN"
                };
                result = input.value 
                break;
                default:
                    result += element.innerText;
        };
        ecranInput.value = result
    })
    
});




