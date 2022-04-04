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

const SocialList = () =>
    <SocialListContainer>
        <ul>
            <li>
                <a href="https://github.com/NathanGoedken">
                    <GithubLogo />
                </a>
            </li>
            <li>
                <a href="https://github.com/NathanGoedken">
                    <TwitterLogo />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/nathan-goedken-543129a7">
                    <LinkedInLogo />
                </a>
            </li>
        </ul>
    </SocialListContainer>;

export default SocialList;
