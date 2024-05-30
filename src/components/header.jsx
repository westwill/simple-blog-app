import React from 'react';
import { Link, NavLink, useLocation, useParams } from 'react-router-dom';

const Header = () => {
  const NavigationArray = [
    {
      id: 1,
      link: '/',
      label: 'Home',
    },
    {
      id: 2,
      link: '/about',
      label: 'About',
    },
    {
      id: 3,
      link: '/blog',
      label: 'Blog',
    },
    {
      id: 4,
      link: '/profile ',
      label: 'Profile',
    },
    {
      id: 5,
      link: '/contact ',
      label: 'Contact',
    },
  ];
  `
  `;
  // const pathname = useParams();
  return (
    <div className="flex items-center space-x-2 justify-between hover:bg-red-200 p-3">
      <div>Logo</div>
      <div>
        <nav className="flex items-center space-x-3">
          {/* {NavigationArray?.map((navigation) => ( */}
            {/* // <Link key={navigation.id} to={`${navigation.link}`}  */}
            {/* // className={`${pathname2?.pathname === navigation?.link ? "text-blue-700" : ""}`}> */}
            {/* //   {navigation.label} */}
            {/* // </Link> */}
          {/* // ))} */}

          {NavigationArray?.map((navigation) => (
            <NavLink
              key={navigation.id}
              to={`${navigation.link}`}
              className={({ isActive }) => (isActive ? 'text-red-600' : '')}
            >
              {navigation.label}
            </NavLink>
          ))}

          {/* <NavLink
            to="about"
            className={({ isActive }) => (isActive ? 'text-red-600' : '')}
          >
            about
          </NavLink> */}
          {/* <Link to="/about">about</Link> */}
          {/* <Link to="/blog">blog</Link>
          <Link to="/profile">profile</Link>
          <Link to="/contact us">contact</Link> */}
        </nav>
      </div>
    </div>
  );
};

export default Header;
