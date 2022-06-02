import Head from 'next/head'

export default function HeadMeta({ pageId, titleText }) {
    return ( <div id={pageId}>
        <Head>
            <title>{titleText}</title>
        </Head>
    </div> 
    )
}

