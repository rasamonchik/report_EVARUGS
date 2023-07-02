document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".animation");

    function checkScroll() {
        elements.forEach(function(element) {
            const position = element.getBoundingClientRect();
            if (position.top < window.innerHeight) {
                element.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});

function toggleDropdown() {
    const dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("open");
}
