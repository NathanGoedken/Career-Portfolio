import React from 'react';
import Link from 'next/link'

import Layout from '../../components/layout';

const AboutMe = () =>
    <Layout>
        <Link href="/career-portfolio">
            <a>Home</a>
        </Link>
        <div>
            <p>{'hello'}</p>
        </div>
    </Layout>;

export default AboutMe;