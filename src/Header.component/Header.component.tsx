import React, { Component } from 'react';
import './Header.css';

function Header (props :any) :JSX.Element {
  return (
    <div className="header">
      <span>{props.color}</span>
    </div>
  );
}

export default Header;