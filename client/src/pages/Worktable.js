import React from 'react';
import { LeftBar } from "./LeftBar";
import { StudentsTable } from "./StudentsTable";

export const Worktable = () => {
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
                    <StudentsTable />
                </div>
            </div>
        </React.Fragment>
    )
}
