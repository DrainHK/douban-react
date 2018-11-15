import React from 'react'
import {Router, Route, browserHistory, IndexRoute, Redirect } from 'react-router'
import App from './App'
import Index from './pages/Index';
import Home from './pages/Home';
import Details from './pages/Details';
import List from './pages/List';

const routes = (
    <Route path='/' component={ App }>
        <IndexRoute component={ Index } />
        <Route path='/' component={ Index }>
            <Route path="/home" component={ Home } />
            <Route path="/details/:id" component={ Details } />
            <Route path="/list/:type" component={ List } />
        </Route>
    </Route>
)
export { routes }

