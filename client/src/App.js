import React from "react";
import { useRoutes } from "./routes";

function App() {
    let routes = useRoutes(document.cookie.match("token") != null);
    // let routes = useRoutes(false);
    return (
        <React.Fragment>
            {routes}
        </React.Fragment>
    )
}

export default App;
