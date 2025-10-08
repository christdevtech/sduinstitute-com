'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { motion } from 'framer-motion'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText, title }) => {
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

      {/* Background Overlay - Reduced for better image visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-transparent to-slate-950/40"></div>

      {/* Content */}
      <div className="container py-16 z-30 relative flex items-center justify-center">
        <div className="max-w-[36.5rem] lg:max-w-[50rem] md:text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold mb-6"
            style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0px 0px 8px rgba(0, 0, 0, 0.6)'
            }}
          >
            {title}
          </motion.h1>
          {richText && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8), 0px 0px 6px rgba(0, 0, 0, 0.5)'
              }}
            >
              <RichText className="mb-6 text-lg font-bold" data={richText} enableGutter={false} />
            </motion.div>
          )}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex md:justify-center gap-4">
              {links.map(({ link }, i) => {
                return (
                  <motion.li
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    key={i}
                  >
                    <CMSLink {...link} />
                  </motion.li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
