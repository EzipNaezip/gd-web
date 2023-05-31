import React, { useState } from 'react';
import { Button } from 'flowbite-react';

export default function FollowButton() {
  const [Followed, setFollowed] = useState(false);

  // GalleryCardckarh: 사용자 상태를 참조하여 컴포넌트 상태 관리
  return (
    <div className="w-full">
      {Followed ? (
        <Button
          size="xs"
          className="w-full px-1 bg-white ring-2 ring-inset ring-ezip-green hover:bg-ezip-bg hover:text-ezip-green_hover hover:ring-ezip-green_hover duration-75 "
          onClick={() => {
            setFollowed(false);
          }}
        >
          <span className="text-base font-light text-ezip-green">Following</span>
        </Button>
      ) : (
        <Button
          size="xs"
          className="w-full px-1 bg-ezip-green hover:bg-ezip-green_hover duration-75"
          onClick={() => {
            setFollowed(true);
          }}
        >
          <span className="text-base font-light">Follow</span>
        </Button>
      )}
    </div>
  );
}
