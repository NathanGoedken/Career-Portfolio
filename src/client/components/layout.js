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
    background-image: url(../images/homepage.jpeg);
    position: absolute;
    top: 10%;
    left: 0;
    right: 0;
    height: 90%;
    margin-left: 10%;
    margin-right: 10%;
`;
const StyledBodyContentContainer = styled.div``;

const RedboxRx = props => (
    <LayoutStyle>
        <Header />
        <ContentStyle>
            <StyledBodyContentContainer>
                {props.children}
            </StyledBodyContentContainer>
        </ContentStyle>
    </LayoutStyle>
);
export default RedboxRx;