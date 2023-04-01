import * as React from 'react'

import cs from 'classnames'

import * as config from '@/lib/config'

import styles from './PageSocial.module.css'

interface SocialLink {
  name: string
  title: string
  icon: React.ReactNode
  href?: string
}

const socialLinks: SocialLink[] = [
  config.twitter && {
    name: 'Resume',
    href: `https://solcore1999.notion.site/Resume-76ccff1e3cb6431bae06d65c7c5ce651`,
    title: `Resume Liangengyang`,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" fill="5f5d59"></path>
      </svg>
    )
  },

  config.github && {
    name: 'instagram',
    href: `https://github.com/${config.github}`,
    title: `instagram Solcore01`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d="M62.947657 63.404052 62.947657 63.404052 62.947657 63.404052 62.947657 63.404052zM793.183054 543.821753c0 137.970328-111.877043 249.816672-249.816672 249.816672-137.970328 0-249.817696-111.846344-249.817696-249.816672 0-16.425088 1.62194-32.487925 4.714372-48.042179L130.206504 495.779573l0 332.058768c0 71.281463 57.740052 129.142266 129.142266 129.142266l568.034201 0c71.281463 0 129.142266-57.800427 129.142266-129.142266L956.525236 495.780597l-167.996179 0C791.562137 511.333828 793.183054 527.397688 793.183054 543.821753L793.183054 543.821753 793.183054 543.821753zM827.38297 130.661875 259.34877 130.661875c-71.342862 0-129.142266 57.830103-129.142266 129.143289L130.206504 399.696238l209.16174 0c45.218878-63.895239 119.713522-105.692181 203.998137-105.692181 84.282568 0 158.778236 41.796942 203.997114 105.692181l209.162764 0L956.526259 259.805164C956.525236 188.522678 898.694109 130.661875 827.38297 130.661875L827.38297 130.661875zM890.556779 290.161542c0 12.730952-10.387581 23.060205-23.059182 23.060205L798.377356 313.221748c-12.671601 0-23.060205-10.389628-23.060205-23.060205l0-69.180616c0-12.730952 10.419304-23.060205 23.060205-23.060205l69.12024 0c12.730952 0 23.059182 10.389628 23.059182 23.060205L890.556779 290.161542 890.556779 290.161542 890.556779 290.161542zM697.098695 543.821753c0-84.943624-68.849064-153.73436-153.733337-153.73436-84.883249 0-153.73436 68.790736-153.73436 153.73436s68.850088 153.733337 153.73436 153.733337C628.249631 697.55509 697.098695 628.7664 697.098695 543.821753L697.098695 543.821753 697.098695 543.821753z" fill="5f5d59"></path>
      </svg>
    )
  },

  config.linkedin && {
    name: 'linkedin',
    href: `mailto:liangengyangexc@qq.com`,
    title: `LinkedIn ${config.author}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z' />
      </svg>
    )
  },

  config.newsletter && {
    name: 'newsletter',
    href: `${config.newsletter}`,
    title: `Newsletter ${config.author}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M12 .64L8.23 3H5V5L2.97 6.29C2.39 6.64 2 7.27 2 8V18C2 19.11 2.9 20 4 20H20C21.11 20 22 19.11 22 18V8C22 7.27 21.61 6.64 21.03 6.29L19 5V3H15.77M7 5H17V9.88L12 13L7 9.88M8 6V7.5H16V6M5 7.38V8.63L4 8M19 7.38L20 8L19 8.63M8 8.5V10H16V8.5Z' />
      </svg>
    )
  },

  config.youtube && {
    name: 'youtube',
    href: `https://www.youtube.com/${config.youtube}`,
    title: `YouTube ${config.youtube}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z' />
      </svg>
    )
  }
].filter(Boolean)

export const PageSocial: React.FC = () => {
  return (
    <div className={styles.pageSocial}>
      {socialLinks.map((action) => (
        <a
          className={cs(styles.action, styles[action.name])}
          href={action.href}
          key={action.name}
          title={action.title}
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className={styles.actionBg}>
            <div className={styles.actionBgPane} />
          </div>

          <div className={styles.actionBg}>{action.icon}</div>
        </a>
      ))}
    </div>
  )
}
