import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const StyledHeaderContainer = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: baseline;
        margin-top: 20px;
        margin-bottom: 20px;
`;
const StyledHeaderBorder = styled.div`
        border-bottom: 1px solid;
        border-color: #D3D3D3;
`;
const StyledLinksContainer = styled.div`
        width: 10%;
`;
const StyledLink = styled.a`
    color: #3D3A38;
    font-size: 20px;
    :hover {
        color: red;
        cursor: pointer;
        border-bottom: 2px solid;
        border-color: black;
    }
`;
const StyledLogo = styled.span`
    color: red;
    font-family: Arial;
    font-size: 26px;
`;
const Header = () =>
    <>
        <StyledHeaderContainer>
            <StyledLinksContainer>
                <Link href={'/career-portfolio/about-me'}>
                    <StyledLink>{'About Me'}</StyledLink>
                </Link>
            </StyledLinksContainer>
            <StyledLinksContainer>
                <Link href={'/career-portfolio/interests-and-hobbies'}>
                    <StyledLink>{'Interests and Hobbies'}</StyledLink>
                </Link>
            </StyledLinksContainer>
            <StyledLinksContainer>
                <Link href={'/career-portfolio/work-history'}>
                    <StyledLink>{'Work History'}</StyledLink>
                </Link>
            </StyledLinksContainer>
            <StyledLinksContainer>
                <Link href={'/career-portfolio/contact-me'}>
                    <StyledLink>{'Contact Me'}</StyledLink>
                </Link>
            </StyledLinksContainer>
        </StyledHeaderContainer>
        <StyledHeaderBorder />
    </>;
export default Header;