import axios from 'axios';

export default async function CreateDalleImageAxios(command) {
  const token = window.localStorage.getItem('test');
  const images = await axios.post(
    'http://api.ezipnaezip.life:8080/gpt/images',
    { sentence: command },
    { headers: { Authorization: `Bearer ${token}` } },
  );
  return images.data.data;
}
