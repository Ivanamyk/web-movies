import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './Home';

const Screens: FC = () => {
    return (
        <Router>
            <Switch>
                {/* <Route path='/tasks' component={Tasks} />
                <Route path='/users' component={Users} /> */}
                <Route path='/' component={Home} />
            </Switch>
        </Router>
    )
}
export { Screens }