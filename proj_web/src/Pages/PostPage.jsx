import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { PostMainState } from '../Atoms/PostMainState';
import PostGallery from '../Components/Post/PostGallery';
import PostDescription from '../Components/Post/PostDescription';

export default function PostPage() {
  const mockSrcs = [
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
  ];
  const mockDescription =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget commodo est. Duis a ligula eget nulla\n' +
    '          porttitor ultricies in at massa. Nunc id libero quis dui imperdiet tempor. Nam at mattis tellus. Aliquam id\n' +
    '          ultricies ante.';
  const mockComments = [
    {
      src: 'https://picsum.photos/200/300',
      id: '이찬영',
      value: '테스트 댓글 입니다.',
    },
    {
      src: 'https://picsum.photos/200/300',
      id: '박동민',
      value: '테스트 댓글 입니다.',
    },
    {
      src: 'https://picsum.photos/200/300',
      id: '이태용',
      value: '테스트 댓글 입니다.',
    },
  ];
  const [main, setMain] = useRecoilState(PostMainState);

  const imageSelection = (url) => {
    setMain(url);
  };

  return (
    <div className="flex items-center gap-5">
      <PostGallery images={mockSrcs} mainImage={main} imageSelection={imageSelection} />
      <PostDescription writerId="Default writerID" description={mockDescription} comments={mockComments} />
    </div>
  );
}