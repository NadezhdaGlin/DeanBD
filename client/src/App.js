import React from "react";
import { useRoutes } from "./routes";

function App() {
    let routes = useRoutes(true);

    return (
        <React.Fragment>
            {routes}
        </React.Fragment>
    )
}

export default App;
