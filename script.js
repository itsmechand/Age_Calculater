const animcon = document.getElementById("animcon");


function closeye() {
    animcon.style.backgroundImage = "url('background_img.png')";
    hands.style.bottom = "0%";
}

function openeye() {
    animcon.style.backgroundImage = "url('background_img.png')";
    hands.style.bottom = "-70%";
}

function calculateAge() {
    const birthDateInput = document.getElementById("birthDate").value;
    const resultDiv = document.getElementById('result');

    if (!birthDateInput) {
        alert("Please Enter Your Birth Date");
        return;
    }

    const birthDate = new Date(birthDateInput);
    const today = new Date();

    if (birthDate > today) {
        alert("Birth Date Cannot be in the Future!");
        return;
    }

    // Calculate years
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust for negative months or days
    if (days < 0) {
        months--;
        // Get the last day of the previous month
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    // Create the result HTML with styled spans
    resultDiv.innerHTML = `
        <div class="age-result">
            <div class="age-unit">
                <span class="age-number">${years}</span>
                <span class="age-label">Years</span>
            </div>
            <div class="age-unit">
                <span class="age-number">${months}</span>
                <span class="age-label">Months</span>
            </div>
            <div class="age-unit">
                <span class="age-number">${days}</span>
                <span class="age-label">Days</span>
            </div>
        </div>
    `;

    resultDiv.classList.remove('show');
    // Force a reflow
    void resultDiv.offsetWidth;
    resultDiv.classList.add('show');

    openeye();
}

// Add input event listener for real-time validation
document.getElementById("birthDate").addEventListener("input", function (e) {
    const input = e.target;
    const value = input.value;

    if (value) {
        const date = new Date(value);
        if (date > new Date()) {
            input.setCustomValidity("Birth date cannot be in the future!");
        } else {
            input.setCustomValidity("");
        }
    }
});

document.getElementById("birthDate").addEventListener("focus", closeye);
document.getElementById("birthDate").addEventListener("blur", openeye);
