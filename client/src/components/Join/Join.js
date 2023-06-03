import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css';
import logo from '../Join/assets/logo_transparent.png';

const Join = ({ users }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <img className="logo" src={logo} alt="stealth chat logo"/>
                <div><input placeholder="Enter Display Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} required={true} /></div>
                <div><input placeholder="Enter Sneaky Link" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} required={true} /></div>
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit">Enter Room</button>
                </Link>
            </div>
        </div>
    )
}

export default Join;

// <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />