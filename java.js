

// document.getElementById("myform").addEventListener("submit", function (e) {
//     e.preventDefault(); // Prevent form submission to allow validation

//     let valid = true;
//     let score = 0;

//     // Input values
//     let currentBalance = parseInt(document.getElementById('currentBalance').value) || 0;
//     let monthTransaction = parseInt(document.getElementById("6month_transaction").value) || 0;
//     let annualIncome = parseInt(document.getElementById('annualIncome').value) || 0;
//     let loanAmount = parseInt(document.getElementById('loanAmount').value) || 0;
//     let accountType = document.getElementById("Account").value;
//     let fullname = document.getElementById("fullname").value.trim();

//     // Error message containers
//     document.getElementById("Terrro").textContent = "";
//     document.getElementById("fullNameErro").textContent = "";
//     document.getElementById("anerro").textContent = "";
//     document.getElementById("Loan").textContent = "";
//     document.getElementById("Acerro").textContent = "";
//     document.getElementById("mcerro").textContent = "";

//     // Validation checks
//     if (fullname === "") {
//         document.getElementById("fullNameErro").textContent = "First name cannot be empty";
//         valid = false;
//     }

//     if (currentBalance > 0) {
//         score += 10;
//     } else {
//         score -= 10;
//     }

//     if (currentBalance >= loanAmount) {
//         score += 10;
//     } else {
//         score -= 10;
//     }

//     if (annualIncome >= monthTransaction) {
//         score += 10;
//     } else {
//         score -= 10;
//     }

//     // Additional validations and calculations can be added here

//     // If valid, proceed with form submission or further logic
//     if (valid) {
//         // Example: Submit the form or show the score
//         console.log("Form is valid. Score:", score);
//     } else {
//         console.log("Form is invalid. Please correct the errors.");
//     }
// });





document.getElementById("myform").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission to allow validation

    let valid = true;
    let score = 0;

    // Input values
    let currentBalance = parseInt(document.getElementById('currentBalance').value) || 0;
    let monthTransaction = parseInt(document.getElementById("6month_transaction").value) || 0;
    let annualIncome = parseInt(document.getElementById('annualIncome').value) || 0;
    let loanAmount = parseInt(document.getElementById('loanAmount').value) || 0;
    let accountType = document.getElementById("Account").value;
    let fullname = document.getElementById("fullname").value.trim();

    // Error message containers
    document.getElementById("Terrro").textContent = "";
    document.getElementById("fullNameErro").textContent = "";
    document.getElementById("anerro").textContent = "";
    document.getElementById("Loan").textContent = "";
    document.getElementById("Acerro").textContent = "";
    document.getElementById("mcerro").textContent = "";

    // Validation checks
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

    // Additional validations and calculations can be added here

    // If valid, proceed with form submission or further logic
    if (valid) {
        // Example: Submit the form or show the score
        console.log("Form is valid. Score:", score);
    } else {
        console.log("Form is invalid. Please correct the errors.");
    }
});