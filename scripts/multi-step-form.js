const progress = document.getElementById('progress');
const formSteps = document.querySelectorAll('.form-step');
const progressDots = document.querySelectorAll('.progress-dot');

let formStepsNum = 0; // Track the current step number

// Function to update the visibility and state of form steps with smooth transitions
function updateFormSteps() {
    formSteps.forEach((formStep, index) => {
        if (index === formStepsNum) {
            formStep.classList.add('form-step-active');
            formStep.classList.remove('form-step-hidden');
            
            setTimeout(() => {
                formStep.style.opacity = 1;
                formStep.style.transform = 'translateY(0)';
            }, 50);
        } else {
            formStep.style.opacity = 0;
            formStep.style.transform = 'translateY(-20px)';
            formStep.classList.add('form-step-hidden');
            formStep.classList.remove('form-step-active');
            // setTimeout(() => formStep.classList.remove('form-step-active'), 0);
        }
    });
}

// Function to update the progress bar state
function updateProgressbar() {
    progressDots.forEach((dot, index) => {
        dot.classList.toggle('progress-dot-active', index <= formStepsNum);
    });

    const progressWidth = (formStepsNum / (progressDots.length - 1)) * 100;
    progress.style.width = progressWidth + '%';
}

// Function to move to the next step
function nextStep() {
    if (formStepsNum < formSteps.length - 1) {
        formStepsNum++;
        updateFormSteps();
        updateProgressbar();
    }
}

// Function to move to the previous step
function prevStep() {
    if (formStepsNum > 0) {
        formStepsNum--;
        updateFormSteps();
        updateProgressbar();
    }
}

// Initialize form and progress bar on page load
document.addEventListener('DOMContentLoaded', () => {
    updateFormSteps();
    updateProgressbar();
});
