import React, { useEffect, useState } from 'react';
import { Navbar, Dropdown, Avatar, TextInput, Button } from 'flowbite-react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import MainLogin from './Login/MainLogin';
import { useRecoilState } from 'recoil';
import { LoginState } from '../Atoms/LoginState';
import { Link } from 'react-router-dom';

export default function Navigator() {
  const [login, setLogin] = useRecoilState(LoginState);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!show) document.body.style.overflow = 'auto'; // 스크롤바 보이도록 설정
  }, [show]);

  return (
    <>
      <Navbar className="sticky z-50 top-0 border-b opacity-90" fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2 text-ezip-green_hover"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
            />
          </svg>
          <span className="self-center whitespace-nowrap text-xl font-suiteBold dark:text-white mr-10">이집내집</span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {login ? (
            <Dropdown
              className="transition ease-in"
              arrowIcon={false}
              inline={true}
              label={
                <Avatar
                  className="mr-3"
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded={true}
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">name@flowbite.com</span>
              </Dropdown.Header>
              <Dropdown.Item className="transition ease-in font-suiteLight hover:text-ezip-green">
                <Link to="/mypage" className="w-full">
                  마이페이지
                </Link>
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setLogin(false);
                  setShow(false);
                }}
                className="transition ease-in font-suiteLight hover:text-red-500"
              >
                로그아웃
              </Dropdown.Item>
            </Dropdown>
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
