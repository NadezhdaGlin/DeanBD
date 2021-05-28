import React from "react";
import AuthorizationForm from "./pages/AuthorizationForm"
import { Worktable } from "./pages/Worktable";

function App() {
    let isAuthorized = true;

    if (isAuthorized) {
        return (
            <Worktable />
        )
    }

    else {
        return (
            <div className="auth">
                <AuthorizationForm />
            </div>
        )
    }
}

export default App;
