import React from 'react';
import './InfoBar.css';
import closeIcon from '../../icons/close.png';
import onlineIcon from '../../icons/onlineIcon.png';
import logo from "../Join/assets/logo_transparent.png"
import userImage from '../InfoBar/assets/users.png'
// import settingImage from '../InfoBar/assets/settings.png'

const InfoBar = ({ room, users }) => {

    return (
        <div className="infoBar">
            <div className="leftInnerContainer">&nbsp;
                <img className="logo_image" src={logo} alt="logo" />
                <img className="onlineIcon" src={onlineIcon} alt="online" />
                <h4>{room}</h4> 
            </div>
            <div className="rightInnerContainer">
                <img className="users_image" src={userImage} alt="users" /><span className="user_count">{users.length}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                {/* <img className="settings" src={settingImage} alt="settings" />  Coming Soon !!!!!
                &nbsp;&nbsp;&nbsp;&nbsp; */}
                <a href="/"><img id="close-icon" src={closeIcon} alt="close" /></a>
            </div>
            </div>
    )
}

export default InfoBar;

