import React, { useEffect, useRef, useState } from 'react';
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

  const searchRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const keyword = searchRef.current.value; // ref를 통해 input의 값을 가져옴
    // 입력된 검색어에 대한 작업 수행
    console.log('검색어:', keyword);
    // ...검색에 필요한 작업 수행
  };

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
        <div className="hidden md:block w-1/3 mr-5">
          <form className="flex items-center">
            <label htmlFor="simple-search" className="sr-only">
              검색
            </label>
            <div className="relative w-full">
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
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 font-suiteMedium text-sm rounded-lg focus:ring-ezip-green focus:border-ezip-green block w-full pl-10 p-2.5"
                placeholder="키워드를 입력하세요"
                ref={searchRef}
                required
              />
            </div>
            <button
              className="transition ease-in p-2 ml-2 text-sm font-suiteMedium text-white bg-ezip-green rounded-lg hover:bg-ezip-green_hover"
              onClick={handleSearch}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">검색</span>
            </button>
          </form>
        </div>
      </Navbar>
    </>
  );
}
