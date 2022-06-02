import { HeadTagProps } from '../../interfaces/HeadTag.interface'

const homeConstants = {
  headTagProps: {
    pageId: 'landing-page',
    title: {
      titleText: 'Kyle R. I. Pla',
    },
    meta: {
      metaName: 'description',
      contentText: 'Kyle R. I. Pla - Full Stack Developer',
    },
    links: [
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css',
        integrity:
          'sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==',
        crossOrigin: 'anonymous',
        referrerPolicy: 'no-referrer',
      },
    ],
    scripts: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=G-11BLYJLS9K`,
      },
      {
        dangerouslySetInnerHTML: {
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-11BLYJLS9K');
            `,
        },
      },
    ],
  } as HeadTagProps,
}

export default homeConstants
