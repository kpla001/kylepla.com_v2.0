import Script from 'next/script'
import { HeadTagProps } from '../../../interfaces/HeadTag.interface'


export const listLinks = (linkTags: HeadTagProps["links"]) => linkTags.map((link, index) => (
    <>
        <link 
            key={index} 
            rel={link.rel} 
            href={link.href}
            integrity={link?.integrity ?? ''}
            crossOrigin={link?.crossOrigin ?? ''}
            referrerPolicy={link?.referrerPolicy ?? ''}
        />
        <br/>
    </> 
    )
)
export const listScripts = (scriptTags: HeadTagProps["scripts"]) => scriptTags.map((script, index) => ( 
    <> 
        <Script 
            key={index}
            id={`script-${index}`}
            dangerouslySetInnerHTML={script?.dangerouslySetInnerHTML}
            async src={script?.src}
        />
        <br/>
    </>
    )
)