import axios from 'axios';

const token = window.localStorage.getItem('test');

export async function getExample() {
  return await axios.get('http://api.ezipnaezip.life:8080/example', {
    headers: { Authorization: `Bearer ${token}` },
  });
}
