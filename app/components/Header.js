export function Header() {
    const $header = document.createElement("header");
    $header.dataset.el = "";
    $header.innerHTML = `
        <a href="#/" class="main-header">
            <h2>Where in the world?</h2>
        <a/>
        <p class="theme">
        <i class="uil uil-sun"></i>
        LightMode</p>
    `

    return $header;
}