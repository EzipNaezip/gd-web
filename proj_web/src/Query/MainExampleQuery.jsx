import axios from 'axios';

const token = sessionStorage.getItem('token');

export async function getExample() {
  return await axios.get('http://api.ezipnaezip.life:8080/example', {
    headers: { Authorization: `Bearer ${token}` },
  });
}
