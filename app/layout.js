import Head from 'next/head';
import '../styles/globals.css';

const RootLayout = ({ children }) => (
    <html lang="en">
        <Head>
            <link rel="preconnect" href="https://stijndv.com" />
            <link
                rel="stylesheet"
                href="https://stijndv.com/fonts/Eudoxus-Sans.css"
            />
        </Head>
        <body>{children}</body>
    </html>
);

export default RootLayout;
