/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import    HeaderBar  from 'components/Header';
import   FooterBar from 'components/Footer';
import withProgressBar from 'components/ProgressBar';

import { Layout } from 'antd';
const { Header , Footer, Sider, Content } = Layout;

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

//   <AppWrapper>
//     <Helmet
//       titleTemplate="%s - React.js Boilerplate"
//       defaultTitle="React.js Boilerplate"
//       meta={[
//         { name: 'description', content: 'A React.js Boilerplate application' },
//       ]}
//     />
//     <Header />
//     {React.Children.toArray(props.children)}
//     <Footer />
//   </AppWrapper>


export function App(props) {
  return (

    <Layout>
        <Header>

            <HeaderBar></HeaderBar>
        </Header>
        <Content style={{minHeight: 500,background:'#FFFFFF'}}>

            {React.Children.toArray(props.children)}
        </Content>
        <Footer>

            <FooterBar/>

        </Footer>
    </Layout>
    );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);
