import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import NavBar from '../NavBar/Navbar';
import './header.scss';

export default class Header extends Component {
  render() {
    return <AppBar position='static'><NavBar/></AppBar>;
  }
}
