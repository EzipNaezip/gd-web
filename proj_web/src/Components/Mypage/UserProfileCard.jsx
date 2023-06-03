import React from 'react';
import { Avatar, ListGroup } from 'flowbite-react';
import FollowButton from './FollowButton';

export default function UserProfileCard({ state, userId }) {
  return (
    <ListGroup.Item>
      <div className="flex justify-between w-full">
        <div className="flex justify-start">
          <Avatar
            className="mr-3"
            alt="User settings"
            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            rounded={true}
          />
          <div className="grid justify-items-start">
            <h2 className="text-sm font-medium text-black sm:text-base">{userId}김관식</h2>
            <p className="text-sm font-normal text-gray-500 sm:text-sm">연무동 개발자</p>
          </div>
        </div>

        <div className="w-24">
          <FollowButton state={state} />
        </div>
      </div>
    </ListGroup.Item>
  );
}
