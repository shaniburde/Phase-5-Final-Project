import React from 'react';
import ClosetContainer from './ClosetContainer';

export default function MainContainer({ user }) {
  return (
    <div className="main-container">
      <ClosetContainer user={user}/>
    </div>
  )
}
