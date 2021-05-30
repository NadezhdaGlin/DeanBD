import React from "react";
import { useRoutes } from "./routes";

function App() {
    let routes = useRoutes(document.cookie.match("token") != null);

    return (
        <React.Fragment>
            {routes}
        </React.Fragment>
    )
}

export default App;
