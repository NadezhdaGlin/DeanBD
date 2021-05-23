import { Switch, Route, Redirect } from 'react-router-dom'
import { StudentsTable } from "./pages/StudentsTable";
import {Authorization} from "./pages/Authorization";

export const useRoutes = () => {
    return (
        <Switch>
            <Route path = "/students">
                <StudentsTable />
            </Route>

            <Route path = "/authorization">
                <Authorization />
            </Route>

            <Route path = "/b">
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
    )
}
