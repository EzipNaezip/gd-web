import axios from 'axios';

export default async function testDalleAxios(command) {
  const token = window.localStorage.getItem('test');
  const images = await axios.post(
    'http://api.ezipnaezip.life:8080/test/images',
    { sentence: command },
    { headers: { Authorization: `Bearer ${token}` } },
  );

  return images.data.data;
}
