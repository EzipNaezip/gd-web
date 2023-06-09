import React from 'react';
import { ListGroup, Modal } from 'flowbite-react';
import UserProfileCard from './UserProfileCard';

export default function FollowModal({
  followState,
  followerShow,
  followerList,
  followingList,
  followUser,
  unfollowUser,
  onClose,
}) {
  return (
    <Modal className="h-screen animate-fade-in-down" size="md" popup={true} show={followerShow} onClose={onClose}>
      <Modal.Header>
        <h1 className="pl-4">{followState}</h1>
      </Modal.Header>
      <Modal.Body className="h-96">
        <ListGroup className="h-full overflow-auto">
          {followingList && followerList ? (
            <>
              {followState === 'following' ? (
                <>
                  {followingList.map((user) => (
                    <UserProfileCard
                      user={user.data.data.following}
                      followUser={followUser}
                      unfollowUser={unfollowUser}
                    />
                  ))}
                </>
              ) : (
                <>
                  {followerList.map((user) => (
                    <UserProfileCard
                      user={user.data.data.follower}
                      followUser={followUser}
                      unfollowUser={unfollowUser}
                    />
                  ))}
                </>
              )}
            </>
          ) : (
            <>
              <p
                className="font-suiteLight"
                onClick={() => {
                  console.log(followerList, followingList);
                }}
              >
                리스트를 불러올 수 없습니다
              </p>
            </>
          )}
        </ListGroup>
      </Modal.Body>
    </Modal>
  );
}
