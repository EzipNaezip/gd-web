import React from 'react';
import MainPost from '../Components/Post/MainPost';

export default function PostPage() {
  const mockSrcs = [
    {
      key: 1,
      src: 'https://picsum.photos/512/512',
    },
    {
      key: 2,
      src: 'https://picsum.photos/512/512',
    },
    {
      key: 3,
      src: 'https://picsum.photos/512/512',
    },
    {
      key: 4,
      src: 'https://picsum.photos/512/512',
    },
  ];
  const mockWriterInfo = {
    src: 'https://picsum.photos/200/300',
    id: '신현호',
  };
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
    {
      src: 'https://picsum.photos/200/300',
      id: '김관식',
      value: '테스트 댓글 입니다.',
    },
    {
      src: 'https://picsum.photos/200/300',
      id: '한종걸',
      value: '테스트 댓글 입니다.',
    },
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="flex-col max-w-3xl gap-5">
        <MainPost images={mockSrcs} writer={mockWriterInfo} description={mockDescription} comments={mockComments} />
      </div>
    </div>
  );
}
