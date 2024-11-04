var x = document.getElementById("hands");
var y = document.getElementById("animcon");

function closeye() {
    y.style.backgroundImage = "url('https://raw.githubusercontent.com/naaficodes/Monkey-Login/master/images/monkey_pwd.gif')";
    x.style.marginTop = "0%";
}

function openeye() {
    y.style.backgroundImage = "url('https://raw.githubusercontent.com/naaficodes/Monkey-Login/master/images/monkey.gif')";
    x.style.marginTop = "110%";
}

function calculateAge() {
    var birthDateInput = document.getElementById("birthDate").value;
    var birthDate = new Date(birthDateInput);
    var today = new Date();

    if (!birthDateInput || birthDate > today) {
        alert("Please enter a valid birth date.");
        return false; 
    }

    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<strong>Your age is: ${age} years.</strong>`;
    y.style.backgroundImage = "url('https://raw.githubusercontent.com/naaficodes/Monkey-Login/master/images/monkey_age.gif')";
    
    return false; 
}
