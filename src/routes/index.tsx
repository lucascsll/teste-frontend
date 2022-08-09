import React from "react";
import {Switch , Route} from "react-router-dom"

import Home from "../pages/Home";
import Members from "../pages/Members";
import MemberDetails from "../pages/MemberDetails";

const Routes: React.FC = () => (
    <Switch>
        <Route exact path="/"  component={Home}/>
        <Route  path="/public_members/orgs/:org"  component={Members}/>
        <Route path="/users/:login"  component={MemberDetails}/>
    </Switch>
)
export default Routes



