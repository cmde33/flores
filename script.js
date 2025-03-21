document.getElementById("showMessage").addEventListener("click", function() {
    document.getElementById("message").classList.add("show");
    createFlowers();
});

function createFlowers() {
    const container = document.querySelector(".flowers-container");

    for (let i = 0; i < 20; i++) {
        let flower = document.createElement("div");
        flower.classList.add("flower");
        flower.innerHTML = "🌻";
        flower.style.left = Math.random() * 100 + "vw";
        flower.style.animationDuration = (Math.random() * 3 + 3) + "s";
        container.appendChild(flower);

        setTimeout(() => {
            flower.remove();
        }, 5000);
    }
}