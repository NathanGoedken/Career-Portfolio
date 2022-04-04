import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

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
        <Link href={'./resume.pdf'}>
            <StyledEmailLink
            >
                {'Resume'}
            </StyledEmailLink>
        </Link>
    </div>;

export default Resume;
