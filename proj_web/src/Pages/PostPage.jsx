import React, { useEffect, useState } from "react";
import MainPost from "../Components/Post/MainPost";
import { useMutation } from "react-query";
import { inquirePost } from "../Query/PostQuery";
import { getComment } from "../Query/CommentQuery";
import { useParams } from "react-router";
import { setFollow, setUnfollow } from "../Query/FollowQuery";
import { setLike, setUnlike } from "../Query/LikeQuery";
import { setBookmark, unsetBookMark } from "../Query/BookMarkQuery";

export default function PostPage() {
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState(null);
  const params = useParams();

  const posts = useMutation(inquirePost, {
    onSuccess: (data) => {
      setPost(data.data.data.post);
    },
  });
  const comments = useMutation(getComment, {
    onSuccess: (data) => {
      setComment(data.data.data.commentList);
    },
  });
  const followUser = useMutation(setFollow, {
    onSuccess: (data) => {
      fetchData();
    },
  });
  const unfollowUser = useMutation(setUnfollow, {
    onSuccess: (data) => {
      fetchData();
    },
  });
  const like = useMutation(setLike, {
    onSuccess: (data) => {
      fetchData();
    },
  });
  const unLike = useMutation(setUnlike, {
    onSuccess: (data) => {
      fetchData();
    },
  });
  const bookmark = useMutation(setBookmark, {
    onSuccess: (data) => {},
  });
  const unBookmark = useMutation(unsetBookMark, {
    onSuccess: (data) => {},
  });
  const fetchData = () => {
    posts.mutate(params.postNum);
    comments.mutate({ postNum: params.postNum });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="flex-col max-w-3xl gap-5">
        <>
          {post && comment ? (
            <MainPost
              post={post}
              comment={comment}
              follow={followUser.mutate}
              unfollow={unfollowUser.mutate}
              bookmarking={{ set: bookmark.mutate, remove: unBookmark.mutate }}
              liking={{ set: like.mutate, remove: unLike.mutate }}
              fetch={fetchData}
            />
          ) : (
            <></>
          )}
        </>
      </div>
    </div>
  );
}
