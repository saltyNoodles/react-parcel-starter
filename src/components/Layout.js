import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

const Layout = ({ children, className }) => {
  return (
    <div className={className}>
      <main>{children}</main>
    </div>
  );
};

const background = '#123456';

export default styled(Layout)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  text-align: center;
  font-size: 1rem;
  font-weight: lighter;

  pre {
    display: inline;
    font-size: 1rem;
    background: ${lighten(0.1, background)};
    padding: 3px;
    transition: 125ms ease-out;
    &:hover {
      background: ${lighten(0.2, background)};
    }
  }
`;
