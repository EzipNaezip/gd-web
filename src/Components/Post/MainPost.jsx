import React, { useEffect, useState } from "react";
import PostUserComment from "./PostUserComment";
import PostComment from "./PostComment";
import PostCarousel from "./PostCarousel";
import ImageModal from "./ImageModal";
import { DiscoverFilterList } from "../Discover/DiscoverFilterList";
import { Link, useParams } from "react-router-dom";

export default function MainPost({ post, comment, follow, unfollow, bookmarking, liking, fetch }) {
  const [like, setLike] = useState(post.bookmark);
  const [bookMark, setBookMark] = useState(post.like);
  const [image, setImage] = useState(null);
  const [imgShow, setImgShow] = useState(false);
  const baseURL = "http://api.ezipnaezip.life:8080";
  const params = useParams();

  const onImageHandler = (e) => {
    setImage(e.target.src);
    setImgShow(true);
  };

  const checkImgURL = () => {
    const regExpHttp = /http:/g;
    const regExpHttps = /https:/g;

    if (regExpHttp.test(post.writerId.profileImgUrl) || regExpHttps.test(post.writerId.profileImgUrl)) return post.writerId.profileImgUrl;
    else return `${baseURL}${post.writerId.profileImgUrl}`;
  };

  const timeSlicing = () => {
    return post.timestamp.substring(0, 10);
  };

  useEffect(() => {
    if (!imgShow) document.body.style.overflow = "auto"; // 스크롤바 보이도록 설정
  }, [imgShow]);

  return (
    <>
      {post ? (
        <div className="flex-col rounded-lg h-full font-suiteMedium">
          <PostCarousel images={post.path.split("|")} onImageHandler={onImageHandler} />
          <ImageModal img={image} imgShow={imgShow} onClose={() => setImgShow(false)} />
          <section className="mt-4">
            <div className="grid grid-cols-2 border rounded-t-lg p-4">
              <div className="flex items-center">
                <img className="w-8 h-8 rounded-full mr-3" src={checkImgURL()} alt="" />
                <h1 className="font-suiteBold text-lg">
                  <Link to={`/mypage/${post.writerId.userId}`}>{post.writerId.name}</Link>
                </h1>
              </div>
              <div className="flex justify-end">
                {post.isMe ? (
                  <></>
                ) : (
                  <>
                    {!post.follow ? (
                      <button
                        type="button"
                        className="transition ease-in text-white bg-ezip-green border-2 border-ezip-green hover:bg-ezip-green_hover hover:border-ezip-green_hover font-suiteMedium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
                        onClick={() => follow(post.writerId.userId)}
                      >
                        팔로우
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="transition ease-in text-ezip-green bg-white border-2 border-ezip-green hover:bg-white_hover hover:border-ezip-green_hover font-suiteMedium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
                        onClick={() => unfollow(post.writerId.userId)}
                      >
                        팔로잉
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
            <div className="overflow-y-scroll border-l border-r border-b text-sm">
              <p className="mt-2 p-4">{post.description}</p>
              <div className="flex text-gray-600 font-suiteMedium text-sm p-3">
                {post.tagIds.map((tag) => (
                  <p className="mr-2">#{DiscoverFilterList.get(tag)}</p>
                ))}
              </div>
              <div className="font-suiteBold text-sm p-3">좋아요 {post.likesCount}개</div>
              <div className="grid grid-cols-2 p-3">
                <div>
                  <button className="mr-2">
                    {!like ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:fill-red-500 duration-300 w-6 h-6"
                        onClick={(e) => {
                          e.preventDefault();
                          setLike(!like);
                          liking.set(params.postNum);
                        }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="fill-red-500 duration-300 w-6 h-6"
                        onClick={(e) => {
                          e.preventDefault();
                          setLike(!like);
                          liking.remove(params.postNum);
                        }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                    )}
                  </button>
                  {!post.isMe ? (
                    <button>
                      {!bookMark ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:fill-ezip-green duration-300 w-6 h-6"
                          onClick={(e) => {
                            e.preventDefault();
                            setBookMark(!bookMark);
                            bookmarking.set(params.postNum);
                          }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="fill-ezip-green duration-300 w-6 h-6"
                          onClick={(e) => {
                            e.preventDefault();
                            setBookMark(!bookMark);
                            bookmarking.remove(params.postNum);
                          }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                        </svg>
                      )}
                    </button>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="font-suiteMedium text-right mr-3">{timeSlicing()}</div>
              </div>
            </div>
            <>
              <div className="border-r border-l">{comment && comment.length ? <h1 className="p-4 font-suiteBold">댓글 {comment.length}개</h1> : <h1 className="p-4 font-suiteBold">댓글 0개</h1>}</div>
              <PostUserComment className="p-4" postNum={post.postNum} fetch={fetch} commentLen={comment.length} />
              <div className={`flex-col rounded-b-lg border-l border-r ${comment.length ? "border-b" : ""} max-h-96 overflow-y-scroll`}>
                {comment && comment.length > 0 ? (
                  <>
                    {comment.map((data) => {
                      return <PostComment comment={data} fetch={fetch} />;
                    })}
                  </>
                ) : (
                  <></>
                )}
              </div>
            </>
          </section>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
