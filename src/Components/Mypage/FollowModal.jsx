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
        {followState === 'following' ? (
          <h1 className="pl-4 font-suiteBold">팔로잉 목록</h1>
        ) : (
          <h1 className="pl-4 font-suiteBold">팔로워 목록</h1>
        )}
      </Modal.Header>
      <Modal.Body className="h-96">
        <ListGroup className="h-full overflow-auto">
          {followingList && followerList ? (
            <>
              {followState === 'following' ? (
                <>
                  {followingList.length ? (
                    <>
                      {followingList.map((user) => (
                        <UserProfileCard user={user} followUser={followUser} unfollowUser={unfollowUser} />
                      ))}
                    </>
                  ) : (
                    <>
                      <p className="p-4 border font-suiteLight text-sm">팔로잉 목록이 없습니다.</p>
                    </>
                  )}
                </>
              ) : (
                <>
                  {followerList.length ? (
                    <>
                      {followerList.map((user) => (
                        <UserProfileCard user={user} followUser={followUser} unfollowUser={unfollowUser} />
                      ))}
                    </>
                  ) : (
                    <>
                      <p className="p-4 border font-suiteLight text-sm">팔로워 목록이 없습니다.</p>
                    </>
                  )}
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
