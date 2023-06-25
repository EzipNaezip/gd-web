import axios from 'axios';

const token = sessionStorage.getItem('test');

export async function getApiKeys() {
  return await axios.get('http://api.ezipnaezip.life:8080/api-keys/list', {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function setApiKeys({ apiKey, userId }) {
  return await axios.post(
    'http://api.ezipnaezip.life:8080/api-keys',
    { apiKey, userId },
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );
}

export async function editApiKeys({ apiKey, userId }) {
  return await axios.put(
    'http://api.ezipnaezip.life:8080/api-keys',
    { apiKey, userId },
    { headers: { Authorization: `Bearer ${token}` } },
  );
}

export async function deleteApiKeys() {
  return await axios.delete('http://api.ezipnaezip.life:8080/api-keys', {
    headers: { Authorization: `Bearer ${token}` },
  });
}
