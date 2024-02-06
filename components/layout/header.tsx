import React from 'react'
import { ThemeSwitcher } from './components/theme-switcher/theme-switcher'
import { NavList } from './components/nav-list/nav-list'
import { Button } from '../ui/button'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export function Header() {
  return (
    <header className="flex items-center justify-between gap-2">
      <h1 className="text-xl">Dev Pedro Dias</h1>

      <NavList />

      <div className="flex gap-2">
        <Link href="https://github.com/devpedrodiass" target="_alt">
          <Button variant="outline" size="icon">
            <GitHubLogoIcon />
          </Button>
        </Link>
        <ThemeSwitcher />
      </div>
    </header>
  )
}

Header.displayName = 'Header'
