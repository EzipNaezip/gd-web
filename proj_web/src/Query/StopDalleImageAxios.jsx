import axios from 'axios';

export default async function StopDalleImageAxios() {
  const token = window.localStorage.getItem('test');
  return await axios.delete('http://api.ezipnaezip.life:8080/gpt/stop', {
    headers: { Authorization: `Bearer ${token}` },
  });
}
