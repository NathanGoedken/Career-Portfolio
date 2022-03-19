import React from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

import Layout from '../../components/layout';

const StyledWorkHistoryBodyContainer = styled.div`
    background-image: url(../images/work.jpg);
`;

const ContactMe = () =>
    <Layout>
        <Link href="/career-portfolio">
            <Button variant="contained" color="primary">{'Home'}</Button>
        </Link>
        <StyledWorkHistoryBodyContainer>
            <p>{'hello'}</p>
        </StyledWorkHistoryBodyContainer>
    </Layout>;

export default ContactMe;
