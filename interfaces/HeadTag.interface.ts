import { HTMLAttributeReferrerPolicy } from 'react'

export interface HeadTagProps {
  title: {
    titleText: string
  }
  meta: {
    metaName: string
    contentText: string
  }
  links: {
    rel: string
    href: string
    integrity?: string
    crossOrigin?: string
    referrerPolicy?: string
  }[]
  scripts: {
    src?: string
    dangerouslySetInnerHTML?: {
      __html: string
    }
    [propName: string]: any
  }[]
}
