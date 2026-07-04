const button = document.getElementById("openBtn");

button.addEventListener("click", () => {

    document.querySelector(".intro").scrollIntoView({

        behavior: "smooth"

    });

});
