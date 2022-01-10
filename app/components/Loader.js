export function Loader() {
    const $loader = document.createElement("img");
    $loader.classList.add("loader");
    $loader.src = "app/assets/circles.svg";
    $loader.alt = "Loading...";

    return $loader;
}