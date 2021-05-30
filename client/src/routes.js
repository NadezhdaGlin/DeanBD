import React from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom'
import { LeftBar } from "./pages/LeftBar";
import { StudentsTable } from "./pages/StudentsTable";
import { AuthorizationForm } from "./pages/AuthorizationForm";
import {DisciplinesTable} from "./pages/DisciplinesTable";

export const useRoutes = (isAuthorized) => {
    if (isAuthorized) {
        return (
            <React.Fragment>
                <div id="leftbar">
                    <div id="emptyTopLeftCorner">

                    </div>

                    <div id="groupsBar">
                        <LeftBar />
                    </div>
                </div>

                <div id="content">
                    <div id="navigation">

                    </div>

                    <div id="table">
                        <BrowserRouter>
                            <Switch>
                                <Route path = "/students/:groupNumber" component={StudentsTable} />

                                {/*<Route path = "/students/:groupNumber" component={DisciplinesTable} />*/}

                                <Route path = "/authorization">
                                    <AuthorizationForm />
                                </Route>

                                <Route path = "/disciplines">
                                    <div>
                                        <DisciplinesTable />
                                    </div>
                                </Route>
                            </Switch>
                        </BrowserRouter>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    else {
        return <AuthorizationForm />
    }
}