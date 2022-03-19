import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'

import Layout from '../../components/layout';

const StyledWorkHistoryBodyContainer = styled.div`
    background-image: url(../images/work.jpg);
`;

const ContactMe = () =>
    <Layout>
        <Link href="/career-portfolio">
            <a>Home</a>
        </Link>
        <StyledWorkHistoryBodyContainer>
            <p>{'hello'}</p>
        </StyledWorkHistoryBodyContainer>
    </Layout>;

export default ContactMe;
