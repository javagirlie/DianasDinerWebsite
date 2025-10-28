const toggles = document.querySelectorAll(".menu-toggle");

toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        toggle.parentNode.classList.toggle("active");
    })
})



