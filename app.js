let numbut = document.querySelectorAll(".num, .result");
let eq = "";
let resultdivbt = document.querySelector(".resultdiv");

numbut.forEach(btt => {
    btt.addEventListener("click", () => {
        if (btt.innerText === '=') {
            let result = tocalculatetheresult(eq);
            resultdivbt.innerText = eq + '=' + result;
            eq = result.toString();  // Reset eq to the calculated result if user want to cont calculation 
            console.log(eq);
        } else if (btt.innerText === 'AC') {
            resultdivbt.innerText = "";
            eq = "";
        } else {
            resultdivbt.innerText += btt.innerText;
            eq += btt.innerText;
        }
    });
});

const tocalculatetheresult = (eq) => {
    try {
        let lo = replaceXtoStarForMultiplication(eq);
        let result = eval(lo);
        if (!Number.isFinite(result)) {
            throw new Error("Invalid result");
        }
        return result;
    } catch (error) {
        console.error("Invalid expression:", error.message);
        return "Error";
    }
};

const replaceXtoStarForMultiplication = (eq) => {
    return eq.replace(/x/g, '*').replace(/÷/g, '/');
};
