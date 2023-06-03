import axios from 'axios';

export default function GalleryListingAxios() {
  const token = window.localStorage.getItem('test');
  return axios.get('http://api.ezipnaezip.life:8080/posts/popular', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
