import React from 'react';
import { ListGroup, Modal } from 'flowbite-react';
import UserProfileCard from './UserProfileCard';

export default function FollowModal({
  state,
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
        <h1 className="pl-4">{state}</h1>
      </Modal.Header>
      <Modal.Body className="h-96">
        <ListGroup className="h-full overflow-auto">
          {followingList && followerList ? (
            <>
              {state === 'following' ? (
                <>
                  {followingList.map((user) => {
                    console.log(user);
                    return (
                      <UserProfileCard state={state} user={user} followUser={followUser} unfollowUser={unfollowUser} />
                    );
                  })}
                </>
              ) : (
                <>
                  {followerList.map((user) => (
                    <UserProfileCard state={state} user={user} followUser={followUser} unfollowUser={unfollowUser} />
                  ))}
                </>
              )}
            </>
          ) : (
            <></>
          )}
        </ListGroup>
      </Modal.Body>
    </Modal>
  );
}
