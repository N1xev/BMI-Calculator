let calculateBtn = document.getElementById("calculateBtn");
calculateBtn.addEventListener("click", calculateBMI);


function calculateBMI(){
    let res = document.getElementById("bmiResults");
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value) /100;
    let mass = weight / (height**2);

    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
        res.innerHTML = "Please enter valid weight and height.";
        res.classList.remove("fade-in");
        void res.offsetWidth;
        res.classList.add("fade-in");
        return;
    }

    let resultText;
    if (mass < 18.5) {
        resultText = `Your BMI is ${mass.toFixed(2)}, and you are <strong>Underweight</strong>.`;
    } else if (mass >= 18.5 && mass <= 24.9) {
        resultText = `Your BMI is ${mass.toFixed(2)}, and you are <strong>Normal weight</strong>.`;
    } else if (mass >= 25 && mass <= 29.9) {
        resultText = `Your BMI is ${mass.toFixed(2)}, and you are <strong>Overweight</strong>.`;
    } else if (mass >= 30 && mass <= 34.9) {
        resultText = `Your BMI is ${mass.toFixed(2)}, and you have <strong>Obesity Class I</strong>.`;
    } else if (mass >= 35 && mass <= 39.9) {
        resultText = `Your BMI is ${mass.toFixed(2)}, and you have <strong>Obesity Class II</strong>.`;
    } else if (mass >= 40) {
        resultText = `Your BMI is ${mass.toFixed(2)}, and you have <strong>Obesity Class III</strong>.`;
    } else {
        resultText = `Try again later.`;
    }

    res.innerHTML = resultText;
    res.classList.remove("fade-in");
    void res.offsetWidth;
    res.classList.add("fade-in");}