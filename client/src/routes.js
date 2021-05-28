import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom'
import { StudentsTable } from "./pages/StudentsTable";
import { AuthorizationForm } from "./pages/AuthorizationForm";

export const useRoutes = (isAuthorized) => {
    if (isAuthorized) {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path = "/students/:groupNumber" component={StudentsTable} />

                    <Route path = "/authorization">
                        <AuthorizationForm />
                    </Route>

                    <Route path = "/disciplines/:groupNumber">
                        <div>
                            Страница B
                        </div>
                    </Route>

                    <Route path = "/notfound">
                        <div>
                            <center><b>404</b></center>
                        </div>
                    </Route>

                    <Redirect to = "/notfound" />
                </Switch>
            </BrowserRouter>
        )
    }

    else {
        return <AuthorizationForm />
    }
}
