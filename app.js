let numbut = document.querySelectorAll(".num ,.result");
let eq = "";
let resultdivbt=document.querySelector(".resultdiv");
numbut.forEach(btt => {
    btt.addEventListener("click", () => {
        if (btt.innerText==='=') {
            resultdivbt.append(btt.innerText)
            let result=tocalculatetheresult(eq);
            resultdivbt.append(result)
        }
        else if (btt.innerText==='AC') {
            resultdivbt.innerText="";
        }
        else {
            resultdivbt.append(btt.innerText)
            eq = eq + btt.innerText;
        } 
    });
});
const tocalculatetheresult = (eq) => {
    let lo=replacingxtostarformuti(eq);
    let result;
    try {
        result = eval(lo);
        if (!Number.isFinite(result)) {
            result = "Error";
        }
    } catch (error) {
        result = "Error";
        console.error("Invalid expression:", error);
    }
    return result;
};
const replacingxtostarformuti=(eq)=>{
   let replacedst="";
   for(let i=0;i<eq.length;i++) {
    if (eq.charAt(i)==='x') {
        replacedst+='*';
    }
    else{
        replacedst+=eq.charAt(i);
    }
   }
   return replacedst;
};