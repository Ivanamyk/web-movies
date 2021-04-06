import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { NewMovies } from './NewMovies'
import { Search } from './Search';

const Screens: FC = () => {
    return (
        <Router>
            <Switch>
                <Route path='/new-movies' component={NewMovies} />
                <Route path='/search' component={Search} />
                <Route path='/' component={Home} />
            </Switch>
        </Router>
    )
}
export { Screens }