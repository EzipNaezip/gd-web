import axios from 'axios';

const token = sessionStorage.getItem('token');

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

export async function searchListing(keyword) {
  return await axios.get('http://api.ezipnaezip.life:8080/posts/search', {
    params: {
      keyword,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
