import React, { Component } from 'react';
import './Header.css';

interface colorProp {
  color: string,
  difficulty: string
};

function Header ({ color, difficulty } :colorProp) :JSX.Element {
  return (
    <div className="header">
      {
        !difficulty
        ? <h3 style={{ background: color }}>{color}</h3>
        : <h3>{color}</h3>
      }
    </div>
  );
}

export default Header;