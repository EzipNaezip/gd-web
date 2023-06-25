import axios from 'axios';

const token = sessionStorage.getItem('token');

export async function getPostList({ start, display }) {
  return await axios.get('http://api.ezipnaezip.life:8080/posts/list', {
    params: { start, display },
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function inquirePost(postNum, start, display) {
  return await axios.get(`http://api.ezipnaezip.life:8080/posts/list/${postNum}`, {
    params: { start, display },
    headers: { Authorization: `Bearer ${token}` },
  });
}
