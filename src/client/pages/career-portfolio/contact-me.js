import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout';

const StyledWorkHistoryBodyContainer = styled.div`
    background-image: url(../images/work.jpg);
`;

const ContactMe = () =>
    <Layout>
        <StyledWorkHistoryBodyContainer>
            <p>{'hello'}</p>
        </StyledWorkHistoryBodyContainer>
    </Layout>;

export default ContactMe;
