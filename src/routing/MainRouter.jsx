import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../components/pages/Home'
import Settings from '../components/pages/Settings'

export default function MainRouter() {
    return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/settings" component={Settings} />
            </Switch>
    )
}
