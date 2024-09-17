// script.ts
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the button and the skill section
    const toggleButton = document.getElementById('toggleButton') as HTMLButtonElement;
    const skillSection = document.getElementById('skillSection') as HTMLElement;

    // Add an event listener to the button
    toggleButton.addEventListener('click', () => {
        // Toggle the 'hidden' class on the skill section
        if (skillSection.classList.contains('hidden')) {
            skillSection.classList.remove('hidden');
            skillSection.classList.add('visible');
        } else {
            skillSection.classList.remove('visible');
            skillSection.classList.add('hidden');
        }
    });
});
