import React from 'react';
import Layout from '../components/layout';

const MyApp = ({ Component, pageProps }) =>
    <div>
        <style jsx global>{`
            body {
                background-color: #0a192e;
            }
        `}
        </style>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </div>;

export default MyApp;
