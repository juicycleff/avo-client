import React from 'react';
import Layout from '../../layout';
import { Hero } from './hero';

class HomePage extends React.Component {
  render() {
    return (
      <Layout noPadding>
        <Hero />
      </Layout>
    );
  }
}

export default HomePage;