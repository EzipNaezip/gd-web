import { atom } from 'recoil';

export const PostMainState = atom({
  key: 'postMainState',
  default: 'https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg',
});
