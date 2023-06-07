import React, { useEffect, useState } from 'react';
import { Navbar, Dropdown, Avatar, TextInput, Button } from 'flowbite-react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
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
        <TextInput className="w-80 hidden md:block mr-4 ml-auto" icon={MagnifyingGlassIcon} sizing="sm" />
      </Navbar>
    </>
  );
}
