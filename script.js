// Get references to the button and skills container
var toggleSkillsBtn = document.getElementById("toggle-skills-btn");
var skillsContainer = document.getElementById("skills-container");
// Function to toggle the visibility of the skills section
toggleSkillsBtn.addEventListener("click", function () {
    if (skillsContainer.style.display === "none" || !skillsContainer.style.display) {
        skillsContainer.style.display = "flex";
        toggleSkillsBtn.textContent = "Hide Skills";
    }
    else {
        skillsContainer.style.display = "none";
        toggleSkillsBtn.textContent = "Show Skills";
    }
});
