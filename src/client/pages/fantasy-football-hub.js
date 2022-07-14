import React from 'react';
import styled from 'styled-components';

import Link from 'next/link';

const IntroductionContainer = styled.div`
    margin-top: 100px;
`;

const IntroLine = styled.span`
    color: #50e169;
`;

const IntroName = styled.h1`
    color: #ccd6f6; 
    font-size: clamp(40px, 8vw, 80px);
    margin-bottom: 0;
    margin-top: 0;
`;

const IntroDescrip = styled.h1`
    color: #8893af; 
    font-size: clamp(40px, 8vw, 50px);
`;

const IntroBodyTextConatiner = styled.div`
    max-width: 75%;
    font-size: 20px;
`;

const IntroBodyText = styled.span`
    color: #8893af;
`;

const PageNavContainer = styled.div`
    margin-top: 25px;
`;

const StyledUnorderedList = styled.div`
    margin-top: 10px;
`;

const StyledPageNavLink = styled.a`
    color: #50e169;
    :hover {
        color: #50e169;
        cursor: pointer;
        border-bottom: 2px solid;
        border-color: #50e169;
    }
`;

const LandingPage = () =>
    <IntroductionContainer>
        <IntroLine>{'Hi my name is'}</IntroLine>
        <IntroName>
            {'Nathan Goedken'}
        </IntroName>
        <IntroDescrip>
            {'I build Digital Solutions for the Web and sometimes wander into the Data World'}
        </IntroDescrip>
        <IntroBodyTextConatiner>
            <IntroBodyText>{'I\'m a full stack engineer that enjoys building solutions that allow users to awesome digital experience while also making their lives easier! '}</IntroBodyText>
            <IntroBodyText>{'Previously I spent some years building out digital pharmacy solutions with an amazing team. ' +
            'Currently I am Focused/Working on Digital Coupons, Digital Deals as well as providing various other Digital Offers! '}</IntroBodyText>

            <PageNavContainer>
                <IntroBodyText>{'Feel Free to browse around and learn more about me, my work experience as well as how to contact me!'}</IntroBodyText>
                <StyledUnorderedList>
                    <Link href="/career-portfolio/about-me">
                        <StyledPageNavLink>{'About Me!'}</StyledPageNavLink>
                    </Link>
                </StyledUnorderedList>
                <StyledUnorderedList>
                    <Link href="/career-portfolio/work-history">
                        <StyledPageNavLink>{'Work History'}</StyledPageNavLink>
                    </Link>
                </StyledUnorderedList>
            </PageNavContainer>
        </IntroBodyTextConatiner>
    </IntroductionContainer>;

export default LandingPage;
