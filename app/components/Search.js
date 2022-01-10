export function Search() {
    const $form = document.createElement("form"),
        $search = document.createElement("input"),
        $searchDiv = document.createElement("div");
    $searchDiv.innerHTML = `
        <i class="uil uil-search"></i>
    `
    $form.appendChild($search);
    $searchDiv.appendChild($form);
    $searchDiv.dataset.el = "";
    $searchDiv.classList.add("search-div");
    $search.type = "search";
    $search.name = "search";
    $search.dataset.input = "";
    $search.placeholder = "Search for a country...";

    if (location.hash.includes("search")) {
        $search.value = localStorage.getItem("country-search");
    }

    document.addEventListener("submit", e => {
        if (!e.target === $search) return false;
        
        e.preventDefault();
        localStorage.setItem("country-search", e.target.search.value);
        location.hash = `#/search=${e.target.search.value}`;
    });
    return $searchDiv;
}