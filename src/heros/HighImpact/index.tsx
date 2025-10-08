'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  return (
    <div
      className="relative -mt-[12.9rem] pt-[10rem] flex items-end justify-center text-white"
      data-theme="dark"
    >
      <div className="container mb-8 z-30 relative flex items-end justify-center pb-16">
        <div className="max-w-[36.5rem] lg:max-w-[60rem] md:text-center">
          {richText && <RichText className="mb-6 text-lg" data={richText} enableGutter={false} />}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex md:justify-center gap-4">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink {...link} />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
      <div className="min-h-[80vh] md:min-h-[80vh] select-none">
        {media && typeof media === 'object' && (
          <Media fill imgClassName="-z-10 object-cover" priority resource={media} />
        )}
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-950/90 via-cyan-800/40 to-blue-950/70 z-0"></div>
    </div>
  )
}
