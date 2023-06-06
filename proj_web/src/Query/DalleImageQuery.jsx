import axios from 'axios';

const token = window.localStorage.getItem('test');
export async function createDalleImage(sentence) {
  const images = await axios.post(
    'http://api.ezipnaezip.life:8080/gpt/images',
    { sentence },
    { headers: { Authorization: `Bearer ${token}` } },
  );
  return images.data.data;
}

export async function stopDalleImage() {
  return await axios.delete('http://api.ezipnaezip.life:8080/gpt/stop', {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function storeDalleImage(serialNum) {
  return await axios.post(
    `http://api.ezipnaezip.life:8080/gpt/store/${serialNum}`,
    {},
    { headers: { Authorization: `Bearer ${token}` } },
  );
}

export async function deleteDalleImage(serialNum) {
  return await axios.delete(`http://api.ezipnaezip.life:8080/gpt/delete/${serialNum}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}
