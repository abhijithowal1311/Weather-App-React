import React, { useContext, useEffect } from 'react';
import { WeatherContext } from '../../context';
import locationAPI from '../../service/locationAPI';
import "../../styles/settings.scss"
import UserInfoForm from '../forms/UserInfoForm';

export default function Settings() {
    const [state, dispatch] = useContext(WeatherContext)

    useEffect(() => {
        locationAPI.getLatLong("Badlapur")
    }, [])
    console.log("state here",state)
    return (
        <div className="settings">
            <div className="page__title">Profile</div>
            <div className="text-muted">Please Add Your Info Here!</div>
            <UserInfoForm savedData={state.user}/>
        </div>
    )
}
