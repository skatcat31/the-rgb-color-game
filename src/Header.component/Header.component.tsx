import React, { Component } from 'react';
import './Header.css';

interface colorProp {
  color: string
};

function Header ({ color } :colorProp) :JSX.Element {
  return (
    <div className="header">
      <span>{color}</span>
    </div>
  );
}

export default Header;