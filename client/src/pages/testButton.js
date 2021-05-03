function name() {
    fetch("http://127.0.0.1:3012/", {
        method: "GET",
        origin: "http://127.0.0.1:3012/"
    })
    .then(res => res.text())
    .then(resText => {
        document.getElementById("smt").innerText = resText;
    });
}

export const TestButton = () => {
    return (
        <div>
            <h1 id="smt">
                Hello world!
            </h1>

            <button onClick={name}>Кнопка</button>
        </div>
    )
}
