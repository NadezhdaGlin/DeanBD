function name() {
    fetch("http://localhost:3012/", {
        method: "GET"
    });
}

export const TestButton = () => {
    return (
        <div>
            <h1>
                Hello world!
            </h1>

            <button onClick={name}>Кнопка</button>
        </div>
    )
}
