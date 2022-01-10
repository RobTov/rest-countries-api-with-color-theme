export function Borders(props) {
    let { name, cca2 } = props,
        borderContent = name.common;

    // document.addEventListener("click", e => {
    //     if (!e.target.matches("#detail")) return false;

    //     localStorage.setItem("cca2", e.target.dataset.cca2);
    // })
    
    return `
        <a class="b-box v-detail" href="#/${borderContent}" data-el="" data-cca2="${cca2}">${borderContent}</a>
    `
}