// script.ts
document.addEventListener('DOMContentLoaded', function () {
    // Get references to the button and the skill section
    var toggleButton = document.getElementById('toggleButton');
    var skillSection = document.getElementById('skillSection');
    // Add an event listener to the button
    toggleButton.addEventListener('click', function () {
        // Toggle the 'hidden' class on the skill section
        if (skillSection.classList.contains('hidden')) {
            skillSection.classList.remove('hidden');
            skillSection.classList.add('visible');
        }
        else {
            skillSection.classList.remove('visible');
            skillSection.classList.add('hidden');
        }
    });
});
