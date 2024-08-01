import React from 'react'
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Outlet />

    </>
  )
}

export default Layout
