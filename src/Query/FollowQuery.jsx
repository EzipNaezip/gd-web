import axios from 'axios';

const token = sessionStorage.getItem('token');

export async function getFollower(userId) {
  return await axios.get(`http://api.ezipnaezip.life:8080/follow/followers/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function getFollowing(userId) {
  return await axios.get(`http://api.ezipnaezip.life:8080/follow/followings/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function setFollow(followingId) {
  return await axios.post(
    `http://api.ezipnaezip.life:8080/follow/following/${followingId}`,
    {},
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );
}

export async function setUnfollow(followerId) {
  return await axios.delete(`http://api.ezipnaezip.life:8080/follow/unfollowing/${followerId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}
