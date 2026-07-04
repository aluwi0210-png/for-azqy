<script src="script.js"></script>

const button = document.getElementById("openBtn");

button.addEventListener("click", () => {

    document.querySelector(".intro").scrollIntoView({

        behavior: "smooth"

    });

});
