import React from 'react';
import { Outlet } from 'react-router-dom';

const Aboutlayout = ({ children }) => {
  return (
    <div>
      <Outlet />
      aboutlayout
    </div>
  );
};

export default Aboutlayout;
