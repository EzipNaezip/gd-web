import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import { useParams } from 'react-router-dom';

export default function FollowButton({ state, user, fetch, followUser, unfollowUser }) {
  const [followed, setFollowed] = useState(state);
  const params = useParams();

  // GalleryCardckarh: 사용자 상태를 참조하여 컴포넌트 상태 관리
  return (
    <div className="w-full">
      {followed ? (
        <Button
          size="xs"
          className="w-full px-1 bg-white ring-2 ring-inset ring-ezip-green hover:bg-ezip-bg hover:text-ezip-green_hover hover:ring-ezip-green_hover duration-75 "
          onClick={(e) => {
            e.preventDefault();
            console.log(user, state);
            unfollowUser(user);
            fetch(params.userId);
            setFollowed(false);
          }}
        >
          <span className="text-sm font-suiteLight text-ezip-green">팔로잉</span>
        </Button>
      ) : (
        <Button
          size="xs"
          className="w-full px-1 bg-ezip-green hover:bg-ezip-green_hover duration-75"
          onClick={(e) => {
            e.preventDefault();
            followUser(user);
            console.log(user, state);
            fetch(params.userId);
            setFollowed(true);
          }}
        >
          <span className="text-sm font-suiteLight">팔로우</span>
        </Button>
      )}
    </div>
  );
}
