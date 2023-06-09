import React from 'react';
import { Avatar, ListGroup } from 'flowbite-react';
import FollowButton from './FollowButton';

export default function UserProfileCard({ state, user, followUser, unfollowUser }) {
  const baseURL = 'http://api.ezipnaezip.life:8080';

  return (
    <ListGroup.Item>
      <div className="flex justify-between w-full">
        <div className="flex justify-start">
          <Avatar className="mr-3" alt="User settings" img={`${baseURL}${user.profileImgUrl}`} rounded={true} />
          <div className="grid justify-items-start">
            <h2 className="text-sm font-medium text-black sm:text-base">{user.name}</h2>
          </div>
        </div>
        <div className="w-24">
          <FollowButton state={state} user={user} followUser={followUser} unfollowUser={unfollowUser} />
        </div>
      </div>
    </ListGroup.Item>
  );
}
