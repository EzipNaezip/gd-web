import React, { useState } from 'react';
import { Button } from 'flowbite-react';

export default function FollowButton() {
  const [Followed, setFollowed] = useState(false);

  // GalleryCardckarh: 사용자 상태를 참조하여 컴포넌트 상태 관리
  return (
    <>
      {!Followed ? (
        <Button
          className="bg-ezip-green hover:bg-ezip-green_hover duration-75"
          onClick={() => {
            setFollowed(true);
          }}
        >
          Follow
        </Button>
      ) : (
        <Button
          className="bg-white text-ezip-green hover:bg-gray-50 hover:text-ezip-green_hover duration-75"
          onClick={() => {
            setFollowed(false);
          }}
        >
          Follow
        </Button>
      )}
    </>
  );
}
