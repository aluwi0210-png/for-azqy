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
