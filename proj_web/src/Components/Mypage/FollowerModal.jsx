import React from 'react';
import { Avatar, ListGroup, Modal } from 'flowbite-react';

export default function FollowerModal({ followerShow, onClose }) {
  return (
    <Modal dismissible className="animate-fade-in-down" size="md" popup={true} show={followerShow} onClick={onClose}>
      <Modal.Header>
        <span className="pl-4">Followers</span>
      </Modal.Header>
      <Modal.Body className="h-96">
        <ListGroup className="h-full overflow-auto">
          <ListGroup.Item>
            <Avatar
              className="mr-3"
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded={true}
            />
            <div className="grid justify-items-start">
              <h2 className="text-sm font-medium text-black sm:text-base">김관식</h2>
              <p className="text-sm font-normal text-gray-500 sm:text-sm">연무동 개발자</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <Avatar
              className="mr-3"
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded={true}
            />
            <div className="grid justify-items-start">
              <h2 className="text-sm font-medium text-black sm:text-base">김관식</h2>
              <p className="text-sm font-normal text-gray-500 sm:text-sm">연무동 개발자</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <Avatar
              className="mr-3"
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded={true}
            />
            <div className="grid justify-items-start">
              <h2 className="text-sm font-medium text-black sm:text-base">김관식</h2>
              <p className="text-sm font-normal text-gray-500 sm:text-sm">연무동 개발자</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <Avatar
              className="mr-3"
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded={true}
            />
            <div className="grid justify-items-start">
              <h2 className="text-sm font-medium text-black sm:text-base">김관식</h2>
              <p className="text-sm font-normal text-gray-500 sm:text-sm">연무동 개발자</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <Avatar
              className="mr-3"
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded={true}
            />
            <div className="grid justify-items-start">
              <h2 className="text-sm font-medium text-black sm:text-base">김관식</h2>
              <p className="text-sm font-normal text-gray-500 sm:text-sm">연무동 개발자</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <Avatar
              className="mr-3"
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded={true}
            />
            <div className="grid justify-items-start">
              <h2 className="text-sm font-medium text-black sm:text-base">김관식</h2>
              <p className="text-sm font-normal text-gray-500 sm:text-sm">연무동 개발자</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <Avatar
              className="mr-3"
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded={true}
            />
            <div className="grid justify-items-start">
              <h2 className="text-sm font-medium text-black sm:text-base">김관식</h2>
              <p className="text-sm font-normal text-gray-500 sm:text-sm">연무동 개발자</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <Avatar
              className="mr-3"
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded={true}
            />
            <div className="grid justify-items-start">
              <h2 className="text-sm font-medium text-black sm:text-base">김관식</h2>
              <p className="text-sm font-normal text-gray-500 sm:text-sm">연무동 개발자</p>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
    </Modal>
  );
}
