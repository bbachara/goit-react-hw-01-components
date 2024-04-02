import React from 'react';
import './FriendList.css';

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li key={friend.id} className="friend-item">
          <span
            className="status"
            style={{ backgroundColor: friend.isOnline ? 'green' : 'red' }}
          ></span>
          <img
            src={friend.avatar}
            alt="User avatar"
            className="friend-avatar"
            width="48"
          />
          <p className="friend-name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
