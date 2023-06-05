import React, { useEffect, useState } from 'react';
import MainPost from '../Components/Post/MainPost';
import { useMutation } from 'react-query';
import { inquirePost } from '../Query/PostQuery';
import { getComment } from '../Query/CommentQuery';
import { useRecoilValue } from 'recoil';
import { PostNumState } from '../Atoms/PostNumState';

export default function PostPage() {
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState(null);
  const currPostNum = useRecoilValue(PostNumState);

  const posts = useMutation(inquirePost, {
    onSuccess: (data) => {
      setPost(data.data.data.post);
      console.log('posts : ', data);
    },
  });
  const comments = useMutation(getComment, {
    onSuccess: (data) => {
      setComment(data);
      console.log('comments : ', data);
      console.log('none : ', comment);
    },
  });

  useEffect(() => {
    posts.mutate(currPostNum);
    comments.mutate({ currPostNum });
    // eslint-disable-next-line
  }, []);

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
        <MainPost post={post} comments={mockComments} />
      </div>
    </div>
  );
}
