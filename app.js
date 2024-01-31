let numbut = document.querySelectorAll(".num ,.result");
let eq = "";

numbut.forEach(btt => {
    btt.addEventListener("click", () => {
        if (btt.innerText==='=') {
            console.log("lool");
        }
        else {
            eq = eq + btt.innerText;
            console.log(eq);
        } 
    });
});
