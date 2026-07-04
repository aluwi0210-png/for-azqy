const button = document.getElementById("openBtn");

console.log(button);

button.addEventListener("click", () => {
    console.log("Button clicked!");

    const intro = document.querySelector(".intro");

    console.log(intro);

    intro.scrollIntoView({
        behavior: "smooth"
    });
});
const progressDot = document.querySelector(".progress-dot");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const percent = scrollTop / docHeight;

    const lineHeight = 180;

    progressDot.style.top = (percent * (lineHeight - 14)) + "px";

});
