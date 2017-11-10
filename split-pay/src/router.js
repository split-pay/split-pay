import React from 'react';
import { Switch, Route } from 'react-router-dom';

import DashboardFunc from './components/dashboard/Dashboard_Func'
import LandingPage from './components/landingPage/LandingPage_Func'

export default(
    <Switch>
        <Route exact path = '/' component={LandingPage} />
        <Route path ='/dashboard' component={DashboardFunc} />
    </Switch>
)