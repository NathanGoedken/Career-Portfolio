import React from 'react';
import styled from 'styled-components';
import Header from './layout-components/header';

const LayoutStyle = styled.div`
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%'
`;
const ContentStyle = styled.div`
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
`;
const StyledBodyContainer = styled.div`
    display: flex;
    flex-direction: row;
`;
const StyledBodyContentContainer = styled.div`
    margin-top: 50px;
    margin-left: 15%;
    margin-right: 30%;
`;
const RedboxRx = props => (
    <LayoutStyle>
        <Header />
        <ContentStyle>
            <StyledBodyContainer>
                <StyledBodyContentContainer>
                    {props.children}
                </StyledBodyContentContainer>
            </StyledBodyContainer>
        </ContentStyle>
    </LayoutStyle>
);
export default RedboxRx;