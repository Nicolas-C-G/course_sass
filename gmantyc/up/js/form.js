//Variables
//First page
const slidePage = document.querySelector('.register__content--form__page');
const firstNextBtn = document.querySelector('.next-1');

//Second page
const firstPrevBtn = document.querySelector('.prev-1');
const secondNextBtn = document.querySelector('.next-2');

//Second page
const secondPrevBtn = document.querySelector('.prev-2');
const thirdNextBtn = document.querySelector('.next-3');

//Second page
const thirdPrevBtn = document.querySelector('.prev-3');
const submitBtn = document.querySelector('.submit');

// Progress Step
const progressStep = document.querySelectorAll('.register__progress--step');

// Progress Number (The Span Element)
const progressNumber = document.querySelectorAll('.register__progress--step span');

// Progress Tick Mark
const progressTick = document.querySelectorAll('.fa-check');

let max = 4;
let current = 1;

//Next Btns Events
firstNextBtn.addEventListener("click", () => {
    slidePage.style.marginLeft = "-33%";
});

//Second Btns Events
secondNextBtn.addEventListener("click", () => {
    slidePage.style.marginLeft = "-100%";
});

//Third Btns Events
thirdNextBtn.addEventListener("click", () => {
    slidePage.style.marginLeft = "-200%";
});

//Submit Button Event Listener
submitBtn.addEventListener("click", () => {
    setTimeout(() => {
        alert("Your Form Has Been Successfully Submitted, Thank You My Friend");
        location.reload();
    }, 1000);
});

//Previous Btns Events