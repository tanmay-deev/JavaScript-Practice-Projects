let btn = document.querySelector("#btn");
let body = document.querySelector("body");

let currMode = "light";

btn.addEventListener("click", () => {
    if(currMode === "light"){
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
})

// btn.onclick = () =>{
//     console.log("btn was clicked onclick");
// }

// btn.addEventListener("click", (evt) => {
//     console.log("btn was clicked");
// })
// btn.addEventListener("click", () => {
//     console.log("btn was clicked");
// })
// btn.addEventListener("click", () => {
//     console.log("btn was clicked");
// })
// btn.addEventListener("click", () => {
//     console.log("btn was clicked");
// })