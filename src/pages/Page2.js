import React from 'react';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';

import Layout from '../components/Layout';

export const Page2 = ({ ...props }) => {
  return (
    <Layout {...props}>
      <h1>React Parcel Starter</h1>
      <h3>Page 2</h3>
      <div>
        Edit <pre>src/components/App.js</pre> to get started.
        <Link to="/">Go to page 1</Link>
      </div>
    </Layout>
  );
};
