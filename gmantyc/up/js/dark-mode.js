let checkbox = document.querySelector('input[name="theme"]');
let htmlElement = document.documentElement;

checkbox.addEventListener('change', () =>{
    if (checkbox.checked) {
        smoothTrans('dark');
        
    } else {
        smoothTrans('light');
        
    }
});

let smoothTrans = (theme) => {
    htmlElement.classList.add("transition");
    
    window.setTimeout(() => {
        htmlElement.classList.remove("transition");
        htmlElement.setAttribute('data-theme', theme);
    }, 1000);
};