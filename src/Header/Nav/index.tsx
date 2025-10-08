'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  const buttons = data?.buttons || []

  return (
    <nav className="flex gap-3 items-center">
      {navItems.map(({ link }, i) => {
        return (
          <div
            key={i}
            style={{
              textShadow: '0px 0px 20px rgba(0, 0, 0, 0.6)',
            }}
          >
            <CMSLink {...link} appearance="link" className="text-md xl:text-lg" />
          </div>
        )
      })}
      {buttons.map(({ link }, i) => {
        return <CMSLink key={i} {...link} className={'block w-full text-center'} />
      })}
      <Link href="/search">
        <span className="sr-only">Search</span>
        <SearchIcon className="w-5 text-primary" />
      </Link>
      <ThemeSelector />
    </nav>
  )
}
