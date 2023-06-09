import React from 'react';
import { ListGroup, Modal } from 'flowbite-react';
import UserProfileCard from './UserProfileCard';
// import FollowButton from "./FollowButton";
// import CollectionItem from "../Collection/CollectionItem";

export default function FollowerModal({ state, followerShow, followUser, unfollowUser, onClose }) {
  const userList = new Array(24);
  for (let i = 0; i < userList.length; i++) userList[i] = i;

  return (
    <Modal className="h-screen animate-fade-in-down" size="md" popup={true} show={followerShow} onClose={onClose}>
      <Modal.Header>
        <h1 className="pl-4">{state}</h1>
      </Modal.Header>
      <Modal.Body className="h-96">
        <ListGroup className="h-full overflow-auto">
          {userList.map((val) => (
            <UserProfileCard state={state} userId={val} followUser={followUser} unfollowUser={unfollowUser} />
          ))}
        </ListGroup>
      </Modal.Body>
    </Modal>
  );
}
