import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './layout.scss';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
      
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
