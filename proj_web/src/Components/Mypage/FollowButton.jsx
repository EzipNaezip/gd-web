import React, { useState } from "react";
import { Button } from "flowbite-react";

export default function FollowButton({ state, user, followUser, unfollowUser }) {
  const [followed, setFollowed] = useState(state);

  return (
    <div className="w-full">
      {followed ? (
        <Button
          size="xs"
          className="w-full px-1 bg-white ring-2 ring-inset ring-ezip-green hover:bg-ezip-bg hover:text-ezip-green_hover hover:ring-ezip-green_hover duration-75 "
          onClick={(e) => {
            e.preventDefault();
            unfollowUser(user);
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
            setFollowed(true);
          }}
        >
          <span className="text-sm font-suiteLight">팔로우</span>
        </Button>
      )}
    </div>
  );
}
