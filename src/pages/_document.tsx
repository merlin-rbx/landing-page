import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link href="https://rsms.me/inter/inter.css" rel="stylesheet" />

                    {/* Primary Meta Tags */}
                    {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
                    <title>Merlin</title>
                    <meta name="title" content="Merlin" />
                    <meta name="description" content="Merlin is a Roblox moderation panel, built for scale." />

                    {/* Open Graph / Facebook */}
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://merlinrbx.com/" />
                    <meta property="og:title" content="Merlin" />
                    <meta property="og:description" content="Merlin is a Roblox moderation panel, built for scale." />

                    {/* Twitter */}
                    <meta property="twitter:url" content="https://merlinrbx.com/" />
                    <meta property="twitter:title" content="Merlin" />
                    <meta
                        property="twitter:description"
                        content="Merlin is a Roblox moderation panel, built for scale."
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
