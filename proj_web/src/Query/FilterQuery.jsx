import axios from 'axios';

const token = window.localStorage.getItem('test');

export async function topListing() {
  return await axios.get('http://api.ezipnaezip.life:8080/posts/popular', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function tagListing(tagName) {
  return await axios.get(`http://api.ezipnaezip.life:8080/posts/filter/${tagName}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
