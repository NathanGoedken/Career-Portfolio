import React from 'react';
import styled from 'styled-components';
import GithubLogo from '../svgs/github-logo';
import TwitterLogo from '../svgs/twitter-logo';
import LinkedInLogo from '../svgs/linked-in-logo';

const SocialListContainer = styled.div`
    width: 40px;
    position: fixed;
    bottom: 0px;
    left: 40px;
    right: auto;
    z-index: 10;
    color: var(--light-slate);
`;

const ListContainer = styled.ul`
    list-style-type: none;
`;

const StyledList = styled.li`
    padding-bottom: 10px;
`;

const StyledLink = styled.a`
    color: #8893af;
    
    :hover {
        color: #50e169;
    }
`;

const SocialList = () =>
    <SocialListContainer>
        <ListContainer>
            <StyledList>
                <StyledLink
                    href="https://github.com/NathanGoedken"
                >
                    <GithubLogo
                        height='25px'
                        width='25px'
                    />
                </StyledLink>
            </StyledList>
            <StyledList>
                <StyledLink
                    href="https://github.com/NathanGoedken"
                >
                    <TwitterLogo
                        height='25px'
                        width='25px'
                    />
                </StyledLink>
            </StyledList>
            <StyledList>
                <StyledLink
                    href="https://www.linkedin.com/in/nathan-goedken-543129a7"
                >
                    <LinkedInLogo
                        height='25px'
                        width='25px'
                    />
                </StyledLink>
            </StyledList>
        </ListContainer>
    </SocialListContainer>;

export default SocialList;
