import React, { useContext } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../components/pages/Home'
import Settings from '../components/pages/Settings'
import Header from '../components/ui/Header';
import { WeatherContext } from '../context';

export default function MainRouter() {
    const [state, dispatch] = useContext(WeatherContext);
    return (
        <div className="page w-100 d-flex flex-column">
            <Header user={state.user}/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/settings" component={Settings} />
            </Switch>
        </div>
    )
}
