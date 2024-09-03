




document.getElementById("myform").addEventListener("submit", function (e) {
    e.preventDefault(); 
    let valid = true;
    let score = 0;

    
    let currentBalance = parseInt(document.getElementById('currentBalance').value) || 0;
    let monthTransaction = parseInt(document.getElementById("6month_transaction").value) || 0;
    let annualIncome = parseInt(document.getElementById('annualIncome').value) || 0;
    let loanAmount = parseInt(document.getElementById('loanAmount').value) || 0;
    let accountType = document.getElementById("Account").value;
    let fullname = document.getElementById("fullname").value.trim();

    
    document.getElementById("Terrro").textContent = "";
    document.getElementById("fullNameErro").textContent = "";
    document.getElementById("anerro").textContent = "";
    document.getElementById("Loan").textContent = "";
    document.getElementById("Acerro").textContent = "";
    document.getElementById("mcerro").textContent = "";

 
    if (fullname === "") {
        document.getElementById("fullNameErro").textContent = "First name cannot be empty";
        valid = false;
    }

    if (currentBalance > 0) {
        score += 10;
    } else {
        score -= 10;
    }

    if (currentBalance >= loanAmount) {
        score += 10;
    } else {
        score -= 10;
    }

    if (annualIncome >= monthTransaction) {
        score += 10;
    } else {
        score -= 10;
    }

    
    if (valid) {
        
        console.log("Form is valid. Score:", score);
    } else {
        console.log("Form is invalid. Please correct the errors.");
    }
});