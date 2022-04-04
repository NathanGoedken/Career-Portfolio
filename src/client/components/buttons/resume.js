import React from 'react';
import styled from 'styled-components';

const StyledEmailLink = styled.a`
    color: #64ffda;
    text-decoration: none;
    font-size: 20px;
    :hover {
        color: #64ffda;
        cursor: pointer;
        border-bottom: 2px solid;
        border-color: #64ffda;
    }
`;

const Resume = () =>
    <div>
        <StyledEmailLink
            href="/resume.pdf"
            rel="noopener noreferrer"
            target="_blank"
        >
            {'Resume'}
        </StyledEmailLink>
    </div>;

export default Resume;
