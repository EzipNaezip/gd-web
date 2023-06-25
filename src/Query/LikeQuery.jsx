import axios from 'axios';

const token = sessionStorage.getItem('token');

export async function setLike(postNum) {
  return await axios.post(
    `http://api.ezipnaezip.life:8080/likes/create/${postNum}`,
    {},
    {
      headers: {
        Authorization: token,
      },
    },
  );
}

export async function setUnlike(postNum) {
  return await axios.delete(`http://api.ezipnaezip.life:8080/likes/delete/${postNum}`, {
    headers: {
      Authorization: token,
    },
  });
}
