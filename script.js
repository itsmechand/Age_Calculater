const animcon = document.getElementById("animcon");
const hands = document.getElementById("hands");

function closeye() {
    animcon.style.backgroundImage = "url('https://raw.githubusercontent.com/naaficodes/Monkey-Login/master/images/monkey_pwd.gif')";
    hands.style.bottom = "0%";
}

function openeye() {
    animcon.style.backgroundImage = "url('https://raw.githubusercontent.com/naaficodes/Monkey-Login/master/images/monkey.gif')";
    hands.style.bottom = "-70%";
}

function calculateAge() {
    const birthDateInput = document.getElementById("birthDate").value;
    const resultDiv = document.getElementById('result');
    
    if (!birthDateInput) {
        alert("Please enter your birth date");
        return;
    }

    const birthDate = new Date(birthDateInput);
    const today = new Date();

    if (birthDate > today) {
        alert("Birth date cannot be in the future!");
        return;
    }

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    resultDiv.innerHTML = `Your age is ${age} years old`;
    
    openeye();
}

document.getElementById("birthDate").addEventListener("focus", closeye);
document.getElementById("birthDate").addEventListener("blur", openeye);