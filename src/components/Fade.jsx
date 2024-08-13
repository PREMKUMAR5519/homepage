import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../styles/Fade.css';

const Fade = ({ in: inProp, children }) => {
  return (
    <CSSTransition in={inProp} timeout={500} classNames="fade" unmountOnExit>
      {children}
    </CSSTransition>
  );
};

export default Fade;
