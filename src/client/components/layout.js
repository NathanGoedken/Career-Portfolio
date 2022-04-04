import React from 'react';
import styled from 'styled-components';

import Header from './layout-components/header';

const LayoutStyle = styled.div`
    display: 'flex';
    flexDirection: 'column';
    height: '100%';
    width: '100%';
`;
const ContentStyle = styled.div`
    position: absolute;
    background-color: #0a192e;
    top: 10%;
    left: 0;
    right: 0;
    height: 90%;
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
    </LayoutStyle>
);
export default Layout;
