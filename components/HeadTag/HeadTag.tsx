import Head from 'next/head'
import { listLinks, listScripts } from './helpers/HeadTag.helpers'
import { HeadTagProps } from '../../interfaces/HeadTag.interface'

export default function HeadTag(props: HeadTagProps) {
    const { title, meta, links, scripts } = props
    const { titleText } = title
    const { metaName, contentText } = meta
    
    return ( 
        <Head>
            <title>{titleText}</title>
            <meta name={metaName} content={contentText} />
            {listLinks(links)}
            {listScripts(scripts)}
        </Head>
    )
}

