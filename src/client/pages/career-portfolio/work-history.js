import React from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';

import Layout from '../../components/layout';

const WorkHistory = () =>
    <Layout>
        <Link href="/career-portfolio">
            <Button variant="contained" color="primary">{'Home'}</Button>
        </Link>
        <div>
            <p>{'hello'}</p>
        </div>
    </Layout>;

export default WorkHistory;
