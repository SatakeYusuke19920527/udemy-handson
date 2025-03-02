import React from 'react';
import { FaRocket } from 'react-icons/fa';
import NavItem from './NavItem';

interface NavItemType {
  id: number;
  label: string;
  link: string;
  icon: React.ReactNode;
}

const NavList = () => {
  const navList: NavItemType[] = [
    {
      id: 1,
      label: 'RAG extra 1',
      link: '/',
      icon: <FaRocket className="size-5" />,
    },
  ];
  return (
    <div className="mt-12">
      {navList.map((navItem) => {
        return (
          <NavItem
            label={navItem.label}
            link={navItem.link}
            icon={navItem.icon}
            key={navItem.id}
          />
        );
      })}
    </div>
  );
};

export default NavList;