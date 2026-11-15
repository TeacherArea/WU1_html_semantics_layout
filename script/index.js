const showTime = new Date();

document.getElementById("showYear").textContent = showTime.getFullYear();


function verifyAge() {
    let age = prompt("Vänligen ange din ålder");

    if (age > 0 && age > 18 && age < 120) {
        document.getElementById("ageConfirmation").innerText = "Välkommen!";
        document.getElementById("showCourses").style.display = "block";
    }
    else {
        alert("Du måste ange en mänsklig ålder och vara över 18 för att läsa våra kurser.");
    }
}

function hideCourses() {
    document.getElementById("showCourses").style.display = "none";
}

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", function() {
    navMenu.classList.toggle("responsive");

    const isOpen = navMenu.classList.contains("responsive");
    menuButton.setAttribute("aria-expanded", String(isOpen));
});