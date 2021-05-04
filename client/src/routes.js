import { Switch, Route, Redirect } from 'react-router-dom'
import { TestButton } from "./pages/testButton";

export const useRoutes = () => {
    return (
        <Switch>
            <Route path = "/test">
                <TestButton />
            </Route>

            <Route path = "/a">
                <div>
                    Страница А
                </div>
            </Route>

            <Route path = "/b">
                <div>
                    Страница B
                </div>
            </Route>

            <Route path = "/notfound">
                <div>
                    Ты куда полез, пидр
                </div>
            </Route>

            <Redirect to = "/test" />
        </Switch>
    )
}
