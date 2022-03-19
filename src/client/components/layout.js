import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import Header from './layout-components/header';
import homePageBackground from '../../public/homepage.png';

const LayoutStyle = styled.div`
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
    height: 90%;
    margin-left: 10%;
    margin-right: 10%;
`;
const StyledBodyContentContainer = styled.div``;

const RedboxRx = props => (
    <LayoutStyle>
        <Header />
        <ContentStyle>
            {/* <div style={{background: homePageBackground}}>Text here</div> */}
            <StyledBodyContentContainer>
                {props.children}
            </StyledBodyContentContainer>
            {/* <Image src={homePageBackground} alt="homePage Background" /> */}
        </ContentStyle>
    </LayoutStyle>
);
export default RedboxRx;