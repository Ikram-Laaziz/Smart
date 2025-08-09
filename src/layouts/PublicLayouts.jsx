// src/layouts/PublicLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PublicLayouts() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
