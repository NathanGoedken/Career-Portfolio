import React from 'react';
import styled from 'styled-components';

const StyledEmailLink = styled.a`
    color: #64ffda;
    backgroundColor: transparent;
    border: 1px solid #64ffda;
    borderRadius: 30px;
    padding: 1.25rem 1.75rem;
    fontSize: 20px;
    lineHeight: 1;
    textDecoration: none;
    cursor: pointer;
    marginTop: 50px;
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
