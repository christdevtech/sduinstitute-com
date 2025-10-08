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
      className="relative -mt-[12.9rem] pt-[10rem] min-h-[50vh] md:min-h-[60vh] flex items-center justify-center text-white"
      data-theme="dark"
    >
      {/* Background Media */}
      <div className="absolute inset-0 select-none">
        {media && typeof media === 'object' && (
          <Media fill imgClassName="object-cover" priority resource={media} />
        )}
      </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-cyan-800/40 to-blue-950/70"></div>

      {/* Content */}
      <div className="container py-16 z-30 relative flex items-center justify-center">
        <div className="max-w-[36.5rem] lg:max-w-[50rem] md:text-center">
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
    </div>
  )
}
