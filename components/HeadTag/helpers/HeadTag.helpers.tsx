import Script from 'next/script'
import { HTMLAttributeReferrerPolicy } from 'react'
import { HeadTagProps } from '../../../interfaces/HeadTag.interface'


export const listLinks = (linkTags: HeadTagProps["links"]) => linkTags.map((link, index) => (
        <link 
            key={`${index}link`} 
            rel={link.rel} 
            href={link.href}
            integrity={link?.integrity ?? ''}
            crossOrigin={link?.crossOrigin ?? ''}
            referrerPolicy={link?.referrerPolicy as HTMLAttributeReferrerPolicy ?? ''}
        />
    )
)
export const listScripts = (scriptTags: HeadTagProps["scripts"]) => scriptTags.map((script, index) => ( 
        <Script 
            key={`${index}script`}
            id={`script-${index}`}
            dangerouslySetInnerHTML={script?.dangerouslySetInnerHTML}
            async src={script?.src}
        />
    )
)