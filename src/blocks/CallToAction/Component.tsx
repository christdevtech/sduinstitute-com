'use client'

import React from 'react'

import type { CallToActionBlock as CTABlockProps } from '@/payload-types'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { motion } from 'framer-motion'

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

export const CallToActionBlock: React.FC<CTABlockProps> = ({ links, richText }) => {
  return (
    <div className="container">
      <motion.div
        className="bg-card rounded border-border border p-4 flex flex-col gap-8 md:flex-row md:justify-between md:items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="max-w-[48rem] flex items-center"
          variants={itemVariants}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {richText && <RichText className="mb-0" data={richText} enableGutter={false} />}
        </motion.div>
        <motion.div
          className="flex flex-col gap-8"
          variants={itemVariants}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {(links || []).map(({ link }, i) => {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.2,
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
      </motion.div>
    </div>
  )
}
