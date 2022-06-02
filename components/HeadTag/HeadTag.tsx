import Head from 'next/head'
import { listLinks, listScripts } from './helpers/HeadTag.helpers'
import { HeadTagProps } from '../../interfaces/HeadTag.interface'

export default function HeadTag(props: HeadTagProps) {
    const { pageId, title, meta, links, scripts } = props
    const { titleText } = title
    const { metaName, contentText } = meta
    

    return ( 
    <div id={pageId}>
        <Head>
            <title>{titleText}</title>
            <meta name={metaName} content={contentText} />
            {listLinks(links)}
            {listScripts(scripts)}
        </Head>
    </div> 
    )
}

