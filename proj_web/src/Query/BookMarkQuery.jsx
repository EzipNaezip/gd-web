import axios from 'axios';

const token = sessionStorage.getItem('token');

export async function setBookmark(postNum) {
  return await axios.post(
    `http://api.ezipnaezip.life:8080/bookmarks/create/${postNum}`,
    {},
    {
      headers: {
        Authorization: token,
      },
    },
  );
}

export async function unsetBookMark(postNum) {
  return await axios.delete(`http://api.ezipnaezip.life:8080/bookmarks/delete/${postNum}`, {
    headers: {
      Authorization: token,
    },
  });
}
