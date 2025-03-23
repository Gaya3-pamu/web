const openBtn = document.getElementById("closeformbtn");
const closeBtn = document.getElementById("close");
const popup = document.getElementById("popup");


openBtn.addEventListener("click", () => {
    popup.style.display = "flex";
});


closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});