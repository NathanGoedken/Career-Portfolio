import React from 'react';
import styled from 'styled-components';

import Header from './layout-components/header';
import SocialList from './layout-components/social-list';

const LayoutStyle = styled.div`
    background-color: #0a192e;
    display: 'flex';
    flexDirection: 'column';
    height: '100%';
    width: '100%';
`;
const ContentStyle = styled.div`
    position: absolute;
    top: 10%;
    left: 0;
    right: 0;
`;
const StyledBodyContentContainer = styled.div`
    margin-left: 10%;
    margin-right: 10%;
`;

const Layout = props => (
    <LayoutStyle>
        <Header />
        <ContentStyle>
            <StyledBodyContentContainer>
                {props.children}
            </StyledBodyContentContainer>
        </ContentStyle>
        <SocialList />
    </LayoutStyle>
);
export default Layout;
