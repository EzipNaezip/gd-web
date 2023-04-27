import React from 'react';
import { Navbar, Dropdown, Avatar, TextInput } from 'flowbite-react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
export default function NavbarComponent() {
  return (
    <Navbar className="border-b" fluid={true} rounded={true}>
      <div className="grid grid-cols-2 items-center justify-items-end">
        <Navbar.Brand href="https://flowbite.com/">
          <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          <span className="self-center whitespace-nowrap text-xl font-suiteBold dark:text-white">내일의 집</span>
        </Navbar.Brand>

        <Navbar.Collapse>
          <Navbar.Link className="text-base text-slate-400" href="/navbars" active={false}>
            발견
          </Navbar.Link>
          <Navbar.Link className="text-base text-slate-400" href="/navbars" active={false}>
            컬렉션
          </Navbar.Link>
        </Navbar.Collapse>
      </div>

      <div className="grid grid-cols-4 gap-3 items-center justify-items-end">
        <TextInput className="w-80 col-span-3" icon={MagnifyingGlassIcon} sizing="sm" />
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={
            <Avatar
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
          <Dropdown.Item>마이페이지</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>로그아웃</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}
