import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    {
      users
        ? (
            <div className="activeContainer">
              {users.map(({ name }) => (
                <div key={name} className="activeItem">
                  <img alt="Online Icon" src={onlineIcon} />
                  <p>{name}</p>
                </div>
              ))}
            </div>
        )
        : null
    }
  </div>
);

export default TextContainer;