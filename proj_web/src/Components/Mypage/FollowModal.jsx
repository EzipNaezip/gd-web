import React from 'react';
import { ListGroup, Modal } from 'flowbite-react';
// import FollowButton from "./FollowButton";
import UserCard from './userProfileCard';
// import CollectionItem from "../Collection/CollectionItem";

export default function FollowerModal({ followDirection, followerShow, onClose }) {
  const followingDirection = ['Following', 'Follower'];
  const userList = new Array(24);
  for (let i = 0; i < userList.length; i++) userList[i] = i;

  return (
    <Modal dismissible className="animate-fade-in-down" size="md" popup={true} show={followerShow} onClose={onClose}>
      <Modal.Header>
        <span className="pl-4">{`${followingDirection[followDirection]}`}</span>
      </Modal.Header>
      <Modal.Body className="h-96">
        <ListGroup className="h-full overflow-auto">
          {userList.map((val) => (
            <UserCard userId={val} />
          ))}
        </ListGroup>
      </Modal.Body>
    </Modal>
  );
}
