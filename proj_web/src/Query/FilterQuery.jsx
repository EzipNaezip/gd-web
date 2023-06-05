import axios from 'axios';

const token = window.localStorage.getItem('test');

export async function TopListing() {
  return await axios.get('http://api.ezipnaezip.life:8080/posts/popular', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function TagListing({ tagName, start, display }) {
  return await axios.get(`http://api.ezipnaezip.life:8080/posts/${tagName}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
