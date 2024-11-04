var x = document.getElementById("hands");
var y = document.getElementById("animcon");

function closeye() {
    y.style.backgroundImage = "url('background_img.png')";
    x.style.marginTop = "0%";
}

function openeye() {
    y.style.backgroundImage = "url('background_img.png')";
    x.style.marginTop = "110%";
}

function calculateAge() {
    var birthDateInput = document.getElementById("birthDate").value;
    var birthDate = new Date(birthDateInput);
    var today = new Date();

    if (!birthDateInput || birthDate > today) {
        alert("Please Enter a Valid Birth Date.");
        return false; 
    }

    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<strong>Your Age is: ${age} Years</strong>`;
    y.style.backgroundImage = "url('background_img.png')";
    
    return false; 
}
