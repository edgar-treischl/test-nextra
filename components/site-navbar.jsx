'use client'

import cn from 'clsx'
import NextLink from 'next/link'
import { MenuIcon } from 'nextra/icons'
import { setMenu, useMenu, useThemeConfig } from 'nextra-theme-docs'
import { DocumentationLink, ExamplesMenu, GitHubLink } from './examples-menu'
import styles from './site-nav.module.css'

export function SiteNavbar() {
  const themeConfig = useThemeConfig()
  const menu = useMenu()

  return (
    <header className={cn('nextra-navbar x:sticky x:top-0 x:z-30 x:w-full x:bg-transparent x:print:hidden')}>
      <div
        className={cn(
          'nextra-navbar-blur',
          'x:absolute x:-z-1 x:size-full',
          'nextra-border x:border-b',
          'x:backdrop-blur-md x:bg-nextra-bg/70'
        )}
      />
      <nav
        style={{ height: 'var(--nextra-navbar-height)' }}
        className={cn(
          'x:mx-auto x:flex x:max-w-(--nextra-content-width) x:items-center x:gap-4',
          'x:pl-[max(env(safe-area-inset-left),1.5rem)] x:pr-[max(env(safe-area-inset-right),1.5rem)]'
        )}
      >
        <NextLink
          href="/"
          aria-label="Home page"
          className={cn(
            'x:flex x:items-center x:me-auto x:transition-opacity x:focus-visible:nextra-focus x:hover:opacity-75'
          )}
        >
          <span className={styles.brand}>
            <span className={styles.brandMark}>A</span>
            <span className={styles.brandText}>
              <span className={styles.brandTitle}>Aurora Platform</span>
              <span className={styles.brandSubtitle}>Docs and product examples</span>
            </span>
          </span>
        </NextLink>

        <div className={styles.desktopNav}>
          <ExamplesMenu />
          <DocumentationLink />
          {themeConfig.search && <div className={styles.searchSlot}>{themeConfig.search}</div>}
          <GitHubLink />
        </div>

        <button
          type="button"
          aria-label="Menu"
          className={cn('nextra-hamburger x:md:hidden', menu && 'x:bg-gray-400/20')}
          onClick={() => setMenu((prev) => !prev)}
        >
          <MenuIcon height="24" className={cn(menu && 'open')} />
        </button>
      </nav>
    </header>
  )
}
