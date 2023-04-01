import * as React from 'react'

import * as config from '@/lib/config'
import { useDarkMode } from '@/lib/use-dark-mode'

import styles from './styles.module.css'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const FooterImpl: React.FC = () => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  const onToggleDarkMode = React.useCallback(
    (e) => {
      e.preventDefault()
      toggleDarkMode()
    },
    [toggleDarkMode]
  )

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>Copyright 2023 {config.author}</div>

      <div className={styles.settings}>
        {hasMounted && (
          <a
            className={styles.toggleDarkMode}
            href='#'
            role='button'
            onClick={onToggleDarkMode}
            title='Toggle dark mode'
          >
            {isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
          </a>
        )}
      </div>

      <div className={styles.social}>
        {config.twitter && (
          <a
            className={styles.twitter}
            href={`https://solcore1999.notion.site/Resume-76ccff1e3cb6431bae06d65c7c5ce651`}
            title={`Resume Liangengyang`}
            target='_blank'
            rel='noopener noreferrer'
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" fill="5f5d59"></path>
              </svg>
        )}

        {config.mastodon && (
          <a
            className={styles.mastodon}
            href={config.mastodon}
            title={`Mastodon ${config.getMastodonHandle()}`}
            rel='me'
        )}

        {config.zhihu && (
          <a
            className={styles.zhihu}
            href={`https://zhihu.com/people/${config.zhihu}`}
            title={`Zhihu @${config.zhihu}`}
            target='_blank'
            rel='noopener noreferrer'
        )}

        {config.github && (
          <a
            className={styles.github}
            href={`https://www.instagram.com/Solcore01/`}
            title={`Instagram Solcore01`}
            target='_blank'
            rel='noopener noreferrer'
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                <path d="M62.947657 63.404052 62.947657 63.404052 62.947657 63.404052 62.947657 63.404052zM793.183054 543.821753c0 137.970328-111.877043 249.816672-249.816672 249.816672-137.970328 0-249.817696-111.846344-249.817696-249.816672 0-16.425088 1.62194-32.487925 4.714372-48.042179L130.206504 495.779573l0 332.058768c0 71.281463 57.740052 129.142266 129.142266 129.142266l568.034201 0c71.281463 0 129.142266-57.800427 129.142266-129.142266L956.525236 495.780597l-167.996179 0C791.562137 511.333828 793.183054 527.397688 793.183054 543.821753L793.183054 543.821753 793.183054 543.821753zM827.38297 130.661875 259.34877 130.661875c-71.342862 0-129.142266 57.830103-129.142266 129.143289L130.206504 399.696238l209.16174 0c45.218878-63.895239 119.713522-105.692181 203.998137-105.692181 84.282568 0 158.778236 41.796942 203.997114 105.692181l209.162764 0L956.526259 259.805164C956.525236 188.522678 898.694109 130.661875 827.38297 130.661875L827.38297 130.661875zM890.556779 290.161542c0 12.730952-10.387581 23.060205-23.059182 23.060205L798.377356 313.221748c-12.671601 0-23.060205-10.389628-23.060205-23.060205l0-69.180616c0-12.730952 10.419304-23.060205 23.060205-23.060205l69.12024 0c12.730952 0 23.059182 10.389628 23.059182 23.060205L890.556779 290.161542 890.556779 290.161542 890.556779 290.161542zM697.098695 543.821753c0-84.943624-68.849064-153.73436-153.733337-153.73436-84.883249 0-153.73436 68.790736-153.73436 153.73436s68.850088 153.733337 153.73436 153.733337C628.249631 697.55509 697.098695 628.7664 697.098695 543.821753L697.098695 543.821753 697.098695 543.821753z" fill="5f5d59"></path>
              </svg>
        )}

        {config.linkedin && (
          <a
            className={styles.linkedin}
            href={`mailto:liangengyangexc@qq.com`}
            title={`Email Liangengyang`}
            target='_blank'
            rel='noopener noreferrer'
            icon: (
              <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"></path>
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"></path>
              </svg>
        )}

        {config.newsletter && (
          <a
            className={styles.newsletter}
            href={`${config.newsletter}`}
            title={`Newsletter ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
        )}

        {config.youtube && (
          <a
            className={styles.youtube}
            href={`https://www.youtube.com/${config.youtube}`}
            title={`YouTube ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
        )}
      </div>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
