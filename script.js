const animcon = document.getElementById("animcon");
const hands = document.getElementById("hands");

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

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    resultDiv.innerHTML = `Your Age is ${age} Years Old`;
    
    openeye();
}

document.getElementById("birthDate").addEventListener("focus", closeye);
document.getElementById("birthDate").addEventListener("blur", openeye);
