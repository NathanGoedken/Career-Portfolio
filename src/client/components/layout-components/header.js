import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const StyledHeaderContainer = styled.div`
    background-color: #000000;
    width: 100%;
    height: 10%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
`;
const StyledHeaderContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;
const StyledLinksContainer = styled.div`
    margin-right: 10%;
`;
const StyledLink = styled.a`
    color: #FFFFFF;
    font-size: 20px;
    :hover {
        color: #FFFFFF;
        cursor: pointer;
        border-bottom: 2px solid;
        border-color: #FFFFFF;
    }
`;

const Header = () =>
    <StyledHeaderContainer>
        <StyledHeaderContentContainer>
            <StyledLinksContainer>
                <Link href={'/career-portfolio'}>
                    <StyledLink>{'Nathan Goedken'}</StyledLink>
                </Link>
            </StyledLinksContainer>
            <StyledLinksContainer>
                <Link href={'/career-portfolio/about-me'}>
                    <StyledLink>{'About Me'}</StyledLink>
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
        </StyledHeaderContentContainer>
    </StyledHeaderContainer>;

export default Header;
