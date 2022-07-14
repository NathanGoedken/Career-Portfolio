import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Resume from '../buttons/resume';

const StyledHeaderContainer = styled.div`
    background-color: #000000;
    width: 100%;
    height: 70px;
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
                <Link href={'/fantasy-football-hub'}>
                    <StyledLink>{'Home'}</StyledLink>
                </Link>
            </StyledLinksContainer>
            <StyledLinksContainer>
                <Link href={'/fantasy-football-hub/game-logs'}>
                    <StyledLink>{'Game Logs'}</StyledLink>
                </Link>
            </StyledLinksContainer>
            <StyledLinksContainer>
                <Link href={'/fantasy-football-hub/about-fantasy-football-hub'}>
                    <StyledLink>{'About'}</StyledLink>
                </Link>
            </StyledLinksContainer>
            <StyledLinksContainer>
                <Link href={'/fantasy-football-hub/contact-me'}>
                    <Resume />
                </Link>
            </StyledLinksContainer>
        </StyledHeaderContentContainer>
    </StyledHeaderContainer>;

export default Header;
