'use client'

import React from 'react'
import { motion } from 'framer-motion'

import type { ImageTextBlock as ImageTextBlockProps } from '@/payload-types'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
}

export const ImageTextBlock: React.FC<ImageTextBlockProps> = ({
  layout = 'imageLeft',
  image,
  title,
  richText,
  links,
}) => {
  const isImageLeft = layout === 'imageLeft'

  return (
    <div className="w-full bg-muted py-12">
      <div className="container">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Image Section */}
          <motion.div
            className={`${isImageLeft ? 'lg:order-1' : 'lg:order-2'} relative`}
            variants={itemVariants}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {image && typeof image === 'object' && (
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <Media resource={image} className="w-full h-auto object-cover" htmlElement="div" />
              </div>
            )}
          </motion.div>

          {/* Content Section */}
          <motion.div
            className={`${
              isImageLeft ? 'lg:order-2 lg:text-left' : 'lg:order-1 lg:text-right'
            } flex flex-col justify-center space-y-4`}
            variants={itemVariants}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Title */}
            {title && (
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
                variants={itemVariants}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {title}
              </motion.h2>
            )}

            {/* Rich Text Content */}
            {richText && (
              <motion.div
                className="prose prose-lg max-w-none text-foreground"
                variants={itemVariants}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <RichText data={richText} enableGutter={false} />
              </motion.div>
            )}

            {/* Links */}
            {links && links.length > 0 && (
              <motion.div
                className={`flex flex-wrap gap-4 ${isImageLeft ? 'justify-start' : 'lg:justify-end'}`}
                variants={itemVariants}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {links.map(({ link }, i) => {
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.5 + i * 0.1,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <CMSLink size="lg" {...link} />
                    </motion.div>
                  )
                })}
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
