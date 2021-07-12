import React, { useContext } from 'react'
import { act } from 'react-dom/test-utils';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../components/pages/Home'
import Settings from '../components/pages/Settings'
import Header from '../components/ui/Header';
import { WeatherContext } from '../context';
import { ACTION_TYPES } from '../context/types';

export default function MainRouter() {
    const [state, dispatch] = useContext(WeatherContext);

    function changeTheme(theme) {
        dispatch({
            type: ACTION_TYPES.CHANGE_APP_THEME,
            payload: theme
        })
    }
    return (
        <div className={`${state.appTheme == "dark" ? "page_dark" : "page"} w-100 d-flex flex-column`}>
            <Header user={state.user} theme={state.appTheme} changeTheme={changeTheme}/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/settings" component={Settings} />
            </Switch>
        </div>
    )
}
