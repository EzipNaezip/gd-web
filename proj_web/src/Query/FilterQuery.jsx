import axios from 'axios';

const token = sessionStorage.getItem('token');

export async function topListing() {
  return await axios.get('http://api.ezipnaezip.life:8080/posts/popular', {
    params: {
      start: 0,
      display: 30,
    },
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

export async function searchListing(keyword, display) {
  return await axios.get('http://api.ezipnaezip.life:8080/posts/search', {
    params: {
      keyword,
      start: 0,
      display,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
