export function Theme() {
    const $themeBtn = document.querySelector(".theme"),
        $bg = document.querySelector("[data-bg]"),
        $select = document.querySelector("[data-select]") || false,
        $input = document.querySelector("[data-input]") || false,
        $elements = document.querySelectorAll("[data-el]");

    const lighMode = () => {
        $themeBtn.classList.remove("uil-sun");
        $themeBtn.classList.add("uil-moon");
        $themeBtn.textContent = "DarkMode";

        $bg.classList.add("light-bg");
        $elements.forEach(el => {
            el.classList.add("light-el");
        })
        
        if ($select && $input) {
            $select.classList.add("light-select");
            $input.classList.add("light-input");
        }
        localStorage.setItem("theme", "light");
    }

    const darkMode = () => {
        $themeBtn.classList.remove("uil-moon");
        $themeBtn.classList.add("uil-sun");
        $themeBtn.textContent = "LightMode";
       
        $bg.classList.remove("light-bg");
        $elements.forEach(el => {
            el.classList.remove("light-el");
        })
        
        if ($select && $input) {
            $select.classList.remove("light-select");
            $input.classList.remove("light-input");
        }

        localStorage.setItem("theme", "dark");
    }

    document.addEventListener("click", e => {
        if (e.target !== $themeBtn) return false;

        if (e.target.textContent.includes("DarkMode")) {
            darkMode();
        } else {
            lighMode();
        }
    });

    if (localStorage.getItem("theme") === null) {
        localStorage.setItem("theme", "dark");
    }

    if (localStorage.getItem("theme") === "dark") {
        darkMode();
    }

    if (localStorage.getItem("theme") === "light") {
        lighMode();
    }
}