var rect = document.querySelector("#center");

rect.addEventListener("mousemove" , function(details) { // tells us the position of the mouse pointer inside the rectangle
    var rectanglelocation = rect.getBoundingClientRect()
    var insiderectval = details.clientX - rectanglelocation.left; // 

    if(insiderectval < rectanglelocation.width / 2){
    
    }
    else{
     
    }
})