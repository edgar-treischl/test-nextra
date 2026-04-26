'use client'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import cn from 'clsx'
import { Anchor } from 'nextra/components'
import { ArrowRightIcon, GitHubIcon } from 'nextra/icons'
import { usePathname } from 'next/navigation'
import styles from './site-nav.module.css'

const exampleLinks = [
  {
    href: '/examples/automation-studio',
    title: 'Automation Studio'
  },
  {
    href: '/examples/customer-portal',
    title: 'Customer Portal'
  }
]

export function DocumentationLink() {
  const pathname = usePathname()
  const isActive = pathname.startsWith('/documentation')

  return (
    <Anchor
      href="/documentation"
      className={cn(styles.navLink, isActive && styles.navLinkActive)}
      aria-current={isActive ? 'page' : undefined}
    >
      Documentation
    </Anchor>
  )
}

export function ExamplesMenu() {
  const pathname = usePathname()
  const isActive = pathname.startsWith('/examples')

  return (
    <div>
      <Menu>
        <MenuButton
          className={({ focus, open }) =>
            cn(styles.menuButton, (focus || open) && styles.menuButtonFocused, isActive && styles.menuButtonActive)
          }
        >
          Examples
          <ArrowRightIcon
            height="14"
            className={cn(styles.menuIcon, isActive && styles.menuIconActive)}
          />
        </MenuButton>
        <MenuItems anchor={{ to: 'bottom', gap: 10, padding: 16 }} className={styles.menuItems}>
          {exampleLinks.map(({ href, title }) => (
            <MenuItem key={href} as={Anchor} href={href} className={styles.menuItem}>
              {title}
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  )
}

export function GitHubLink() {
  return (
    <Anchor
      href="https://github.com/edgar-treischl/test-nextra"
      className={styles.githubLink}
    >
      <GitHubIcon height="24" aria-label="Project repository" />
    </Anchor>
  )
}
