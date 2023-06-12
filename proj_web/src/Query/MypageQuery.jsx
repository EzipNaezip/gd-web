import axios from 'axios';

const token = sessionStorage.getItem('token');

export async function getUserInfo(userId) {
  return await axios.get(`http://api.ezipnaezip.life:8080/user/info/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function deleteUserInfo(userId) {
  return await axios.delete(`http://api.ezipnaezip.life:8080/user/user/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function editUserInfo({ userId, name, profileImgUrl, description }) {
  console.log(userId, name, profileImgUrl, description);
  return await axios.put(
    'http://api.ezipnaezip.life:8080/user/update',
    {
      userId,
      name,
      profileImgUrl,
      description,
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );
}

export async function upload(file) {
  return await axios.post(
    'http://api.ezipnaezip.life:8080/upload',
    {
      file,
    },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    },
  );
}
