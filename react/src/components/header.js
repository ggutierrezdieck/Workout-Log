import React from 'react';
import {useCookies} from 'react-cookie'

function Header () {
    const [token, deleteToken] = useCookies('mr-token');

    const logoutUser = () =>{
        deleteToken(['mr-token'])
    }
    //TODO: once token is deleted redirect to login page

    return (
        <header className="App-header">
            <div className='row '>
                <div className='col align-self-center'>
                <h1>Workout Log</h1>
                </div>
                <div className='col align-self-end'>
                <p onClick={logoutUser}>Log out</p>
                </div>
            </div>
        </header>
    )}

export {Header};