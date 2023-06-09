import React from 'react';
import { Avatar, ListGroup } from 'flowbite-react';
import FollowButton from './FollowButton';

export default function UserProfileCard({ user, followUser, unfollowUser }) {
  const baseURL = 'http://api.ezipnaezip.life:8080';

  const checkImgURL = () => {
    const regExpHttp = /http:/g;
    const regExpHttps = /https:/g;

    if (regExpHttp.test(user.profileImgUrl) || regExpHttps.test(user.profileImgUrl)) return user.profileImgUrl;
    else return `${baseURL}${user.profileImgUrl}`;
  };

  return (
    <>
      <ListGroup.Item>
        <div className="flex justify-between w-full">
          <div className="flex justify-start">
            <Avatar className="mr-3" alt="User settings" img={checkImgURL()} rounded={true} />
            <div className="flex items-center justify-center">
              <h2 className="text-sm font-suiteMedium text-black sm:text-base">{user.name}</h2>
            </div>
          </div>
          <div className="w-24">
            <FollowButton state={user.follow} user={user} followUser={followUser} unfollowUser={unfollowUser} />
          </div>
        </div>
      </ListGroup.Item>
    </>
  );
}
