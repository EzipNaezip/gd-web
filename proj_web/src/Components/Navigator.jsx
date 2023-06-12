import React, { useEffect, useState } from 'react';
import { Navbar, Dropdown, Avatar, Button } from 'flowbite-react';
import MainLogin from './Login/MainLogin';
import { useRecoilState } from 'recoil';
import { LoginState } from '../Atoms/LoginState';
import { useMutation } from 'react-query';
import { getUserInfo } from '../Query/MypageQuery';
import { Link } from 'react-router-dom';

export default function Navigator() {
  const [userInfo, setUserInfo] = useState(null);
  const [login, setLogin] = useRecoilState(LoginState);
  const [show, setShow] = useState(false);
  const myId = sessionStorage.getItem('userId');
  const baseURL = 'http://api.ezipnaezip.life:8080';
  const getInfo = useMutation(getUserInfo, {
    onSuccess: (data) => {
      console.log('navigator : ', data);
      setUserInfo(data.data.data.user);
    },
  });

  const checkImgURL = () => {
    const regExpHttp = /http:/g;
    const regExpHttps = /https:/g;

    if (regExpHttp.test(userInfo.profileImgUrl) || regExpHttps.test(userInfo.profileImgUrl))
      return userInfo.profileImgUrl;
    else return `${baseURL}${userInfo.profileImgUrl}`;
  };

  useEffect(() => {
    if (login && myId) getInfo.mutate(myId);
    else setLogin(false);
    // eslint-disable-next-line
  }, [login]);

  useEffect(() => {
    if (!show) document.body.style.overflow = 'auto'; // 스크롤바 보이도록 설정
  }, [show]);

  return (
    <>
      <Navbar className="sticky z-50 top-0 border-b opacity-90" fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <img className="w-8 h-8 mr-2" src={process.env.PUBLIC_URL + '/Images/logo.png'} alt="logo" />
          <span className="self-center whitespace-nowrap text-xl font-suiteBold dark:text-white mr-10">이집내집</span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {login ? (
            //{login ? ( 작업용 로그인 고정
            <>
              {userInfo ? (
                <Dropdown
                  className="transition ease-in"
                  arrowIcon={false}
                  inline={true}
                  label={
                    <Avatar
                      className="rounded-full border mr-3"
                      alt="User settings"
                      img={checkImgURL()}
                      rounded={true}
                    />
                  }
                >
                  <Dropdown.Header>
                    <span className="block text-sm">{userInfo.name}</span>
                    <span className="block truncate text-sm font-medium">{userInfo.email}</span>
                  </Dropdown.Header>
                  <Dropdown.Item className="transition ease-in font-suiteLight hover:text-ezip-green">
                    <Link to={`/mypage/${myId}`} className="w-full">
                      마이페이지
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      setLogin(false);
                      sessionStorage.removeItem('token');
                      setShow(false);
                    }}
                    className="transition ease-in font-suiteLight hover:text-red-500"
                  >
                    로그아웃
                  </Dropdown.Item>
                </Dropdown>
              ) : (
                <></>
              )}
            </>
          ) : (
            <>
              <Button
                onClick={() => setShow(true)}
                className="transition ease-in mr-3 bg-ezip-green hover:bg-ezip-green_hover"
              >
                로그인
              </Button>
              <MainLogin show={show} setShow={setShow} onClose={() => setShow(false)} />
            </>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="mr-auto">
          <Navbar.Link
            className="transition ease-in font-suiteMedium text-base text-slate-400 hover:text-ezip-green_hover md:hover:text-ezip-green_hover"
            href="/discover"
          >
            발견
          </Navbar.Link>
        </Navbar.Collapse>
        <div>
          <form>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-suiteMedium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path
                    fillRule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="키워드를 입력해주세요"
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                검색
              </button>
            </div>
          </form>
        </div>
      </Navbar>
    </>
  );
}
