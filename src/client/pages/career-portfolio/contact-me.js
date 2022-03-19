import React from 'react';
import styled from 'styled-components';

import Layout from '../../components/layout';

const styledContactType = styled.div`
    font-size: 30px;
`;

const ContactMe = () =>
    <Layout>
        <div>
            <p>{'You can contact me with the following:'}</p>
            <styledContactType>
                <span>{'Phone: 563-590-4506'}</span>
            </styledContactType> <br />
            <styledContactType>{'Email: '}</styledContactType>
            <a href="mailto:nagoedken@gmail.com">nagoedken@gmail.com</a> <br />
        </div>
    </Layout>;

export default ContactMe;
