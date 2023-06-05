import axios from 'axios';

const token = window.localStorage.getItem('test');

export async function getPostList({ start, display }) {
  return await axios.get('http://api.ezipnaezip.life:8080/posts/list', {
    params: { start, display },
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function inquirePost(postNum) {
  return await axios.get(`http://api.ezipnaezip.life:8080/posts/list/${postNum}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function searchPost({ start, display, keyword }) {
  return await axios.get('http://api.ezipnaezip.life:8080/posts/search', {
    params: { start, display, keyword },
    headers: { Authorization: `Bearer ${token}` },
  });
}
