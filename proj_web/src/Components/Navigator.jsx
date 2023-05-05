import React, { useEffect, useState } from 'react';
import { Navbar, Dropdown, Avatar, TextInput, Button } from 'flowbite-react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { useRecoilState } from 'recoil';
import { LoginState } from '../Atoms/LoginState';
import MainLogin from './Login/MainLogin';

export default function Navigator() {
  const [show, setShow] = useState(false);
  const [login, setLogin] = useRecoilState(LoginState);

  useEffect(() => {
    if (!show) document.body.style.overflow = 'auto'; // 스크롤바 보이도록 설정
  }, [show]);

  return (
    <>
      <Navbar className="sticky z-50 top-0 border-b" fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          <span className="self-center whitespace-nowrap text-xl font-suiteBold dark:text-white mr-10">내일의 집</span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {login ? (
            <Dropdown
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
              <Dropdown.Item className="font-suiteLight">마이페이지</Dropdown.Item>
              <Dropdown.Item onClick={() => setLogin(false)} className="font-suiteLight">
                로그아웃
              </Dropdown.Item>
            </Dropdown>
          ) : (
            <>
              <Button onClick={() => setShow(!show)} className="mr-3">
                로그인
              </Button>
              <MainLogin
                show={show}
                onClose={() => setShow(false)}
                onLogin={() => {
                  setShow(false);
                  setLogin(true);
                }}
              />
            </>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="mr-auto">
          <Navbar.Link className="transition ease-in font-suiteMedium text-base text-slate-400" href="/discover">
            발견
          </Navbar.Link>
          <Navbar.Link className="transition ease-in font-suiteMedium text-base text-slate-400" href="/collection">
            컬렉션
          </Navbar.Link>
        </Navbar.Collapse>
        <TextInput className="w-80 hidden md:block mr-4 ml-auto" icon={MagnifyingGlassIcon} sizing="sm" />
      </Navbar>
    </>
  );
}
