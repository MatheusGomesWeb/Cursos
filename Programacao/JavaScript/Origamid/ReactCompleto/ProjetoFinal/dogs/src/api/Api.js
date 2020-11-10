import React from 'react';
import PhotoGet from './endpoint/PhotoGet';
import PhotoPost from './endpoint/PhotoPost';
import TokenPost from './endpoint/TokenPost';
import UserPost from './endpoint/UserPost';

function Api() {
  return (
    <div>
      USER POST
      <UserPost />
      TOKEN POST
      <TokenPost />
      PHOTOPOST
      <PhotoPost />
      PHOTOGET
      <PhotoGet />
    </div>
  );
}

export default Api;
