import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import { Route, Link } from 'react-router-dom';
import Layout from '../components/Layout';

export const Page1 = ({ ...props }) => {
  return (
    <Layout {...props}>
      <h1>React Parcel Starter</h1>
      <h3>Page 1</h3>
      <div>
        Edit <pre>src/components/App.js</pre> to get started.
        <Link to="/page-2">Go to page 2</Link>
      </div>
    </Layout>
  );
};
