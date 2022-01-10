export async function ajax(props) {
    let {url, cbSuccess} = props;

    await fetch(url)
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(data => cbSuccess(data))
        .catch(err => {
            document.querySelector("main").innerHTML = `
                <h1 class="error">No results found :(</h1>
            `
        });
}