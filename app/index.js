import { App } from "./App.js";
import { Theme } from "./helpers/theme.js";


document.addEventListener("DOMContentLoaded", e => {
    App();

    setTimeout(() => {
        Theme();  
    }, 1600)
} );

window.addEventListener("hashchange", () => {
    App();
    setTimeout(() => {
        Theme();  
    }, 1600)
});
