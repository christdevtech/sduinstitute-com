'use client'
import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { motion } from 'framer-motion'

import type { Post } from '@/payload-types'

import { Media } from '@/components/Media'

export type CardPostData = Pick<Post, 'slug' | 'categories' | 'meta' | 'title'>

export const Card: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardPostData
  relationTo?: 'posts'
  showCategories?: boolean
  title?: string
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, doc, relationTo, showCategories, title: titleFromProps } = props

  const { slug, categories, meta, title } = doc || {}
  const { description, image: metaImage } = meta || {}

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const titleToUse = titleFromProps || title
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = `/${relationTo}/${slug}`

  return (
    <motion.article
      className={cn(
        'border border-border rounded-lg overflow-hidden bg-card hover:cursor-pointer',
        className,
      )}
      ref={card.ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{
        y: -5,
        scale: 1.02,
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="relative w-full"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {!metaImage && <div className="bg-muted flex items-center justify-center h-48 text-muted-foreground">No image</div>}
        {metaImage && typeof metaImage !== 'string' && <Media resource={metaImage} size="33vw" />}
      </motion.div>
      <motion.div
        className="p-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {showCategories && hasCategories && (
          <motion.div
            className="uppercase text-sm mb-4"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {showCategories && hasCategories && (
              <div>
                {categories?.map((category, index) => {
                  if (typeof category === 'object') {
                    const { title: titleFromCategory } = category

                    const categoryTitle = titleFromCategory || 'Untitled category'

                    const isLast = index === categories.length - 1

                    return (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        {categoryTitle}
                        {!isLast && <Fragment>, &nbsp;</Fragment>}
                      </motion.span>
                    )
                  }

                  return null
                })}
              </div>
            )}
          </motion.div>
        )}
        {titleToUse && (
          <motion.div
            className="prose"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <h3>
              <Link className="not-prose" href={href} ref={link.ref}>
                {titleToUse}
              </Link>
            </h3>
          </motion.div>
        )}
        {description && (
          <motion.div
            className="mt-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            {description && <p>{sanitizedDescription}</p>}
          </motion.div>
        )}
      </motion.div>
    </motion.article>
  )
}
