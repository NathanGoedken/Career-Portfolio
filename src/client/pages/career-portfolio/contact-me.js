import React from 'react';
import styled from 'styled-components';

const styledContactType = styled.div`
    font-size: 30px;
`;

const ContactMe = () =>
    <div>
        <p>{'You can contact me with the following:'}</p>
        <styledContactType>
            <span>{'Phone: 563-590-4506'}</span>
        </styledContactType> <br />
        <styledContactType>{'Email: '}</styledContactType>
        <a href="mailto:nagoedken@gmail.com">nagoedken@gmail.com</a> <br />
    </div>;

export default ContactMe;
