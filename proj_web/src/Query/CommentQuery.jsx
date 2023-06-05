import axios from 'axios';

const token = window.localStorage.getItem('test');

export async function getComment({ start, display, postNum }) {
  return await axios.get(`http://api.ezipnaezip.life:8080/comments/list/${postNum}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function writeComment({ content, writerId, postNum }) {
  return await axios.post(
    'http://api.ezipnaezip.life:8080/comments',
    { content, writerId, postNum },
    { headers: { Authorization: `Bearer ${token}` } },
  );
}

export async function editComment({ serialNum, sentence }) {
  return await axios.put(
    `http://api.ezipnaezip.life:8080/comments/${serialNum}/update`,
    { sentence },
    { headers: { Authorization: `Bearer ${token}` } },
  );
}

export async function deleteComment({ serialNum }) {
  return await axios.delete(`http://api.ezipnaezip.life:8080/comments/${serialNum}/delete`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}
