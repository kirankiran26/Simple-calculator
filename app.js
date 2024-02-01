let numbut = document.querySelectorAll(".num ,.result");
let eq = "";
let resultdivbt=document.querySelector(".resultdiv");
console.log(resultdivbt.innerText);
numbut.forEach(btt => {
    btt.addEventListener("click", () => {
        if (btt.innerText==='=') {
            resultdivbt.append(btt.innerText)
            let result=tocalculatetheresult(eq);
            resultdivbt.append(result)
            console.log(result);
        }
        else if (btt.innerText==='AC') {
            resultdivbt.innerText="";
        }
        else {
            resultdivbt.append(btt.innerText)
            eq = eq + btt.innerText;
            console.log(eq);
            
        } 
    });
});
const tocalculatetheresult = (eq) => {
    let result;
    result=eval(eq);
    return result;
};