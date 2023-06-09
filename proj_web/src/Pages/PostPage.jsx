import React, { useEffect, useState } from 'react';
import MainPost from '../Components/Post/MainPost';
import { useMutation } from 'react-query';
import { inquirePost } from '../Query/PostQuery';
import { getComment } from '../Query/CommentQuery';
import { useParams } from 'react-router';

export default function PostPage() {
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState(null);
  const params = useParams();

  const posts = useMutation(inquirePost, {
    onSuccess: (data) => {
      setPost(data.data.data.post);
      console.log('posts : ', data);
    },
  });
  const comments = useMutation(getComment, {
    onSuccess: (data) => {
      setComment(data.data.data.commentList);
      console.log('comments : ', data.data.data.commentList);
    },
  });

  const fetchData = () => {
    posts.mutate(Number(params.postNum));
    comments.mutate({ postNum: Number(params.postNum) });
  };

  useEffect(() => {
    console.log('params : ', params);
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="flex-col max-w-3xl gap-5">
        <MainPost post={post} comment={comment} fetch={fetchData} />
      </div>
    </div>
  );
}
