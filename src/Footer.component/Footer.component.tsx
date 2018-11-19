import React from 'react';
import './Footer.css';

interface footerProps {
  score: number,
  difficulty: string
}

function Footer ({ score, difficulty } :footerProps) : JSX.Element {
  return (
    <div className="footer">
      <span>{`Score: ${score}`}</span>
      <br />
      <span>{`Difficulty: ${difficulty}`}</span>
    </div>
  );
}

export default Footer;