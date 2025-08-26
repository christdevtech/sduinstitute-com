import { Button, type ButtonProps } from '@/components/ui/button'
import { cn } from '@/utilities/ui'
import Link from 'next/link'
import React from 'react'

import type { Page, Post } from '@/payload-types'
import { materialIcons, type MaterialIconName } from '@/utilities/materialIcons'

type CMSLinkType = {
  appearance?: 'inline' | ButtonProps['variant']
  children?: React.ReactNode
  className?: string
  icon?: MaterialIconName | string | null
  iconPlacement?: 'left' | 'right' | null
  label?: string | null
  newTab?: boolean | null
  reference?: {
    relationTo: 'pages' | 'posts'
    value: Page | Post | string | number
  } | null
  size?: ButtonProps['size'] | null
  type?: 'custom' | 'reference' | null
  url?: string | null
}

export const CMSLink: React.FC<CMSLinkType> = (props) => {
  const {
    type,
    appearance = 'inline',
    children,
    className,
    icon,
    iconPlacement = 'right',
    label,
    newTab,
    reference,
    size: sizeFromProps,
    url,
  } = props

  const href =
    type === 'reference' && typeof reference?.value === 'object' && reference.value.slug
      ? `${reference?.relationTo !== 'pages' ? `/${reference?.relationTo}` : ''}/${
          reference.value.slug
        }`
      : url

  if (!href) return null

  const size = appearance === 'link' ? 'clear' : sizeFromProps
  const newTabProps = newTab ? { rel: 'noopener noreferrer', target: '_blank' } : {}

  // Render icon if provided
  const IconComponent = icon && materialIcons[icon as MaterialIconName]
  const renderIcon = IconComponent ? (
    <IconComponent className={cn('w-4 h-4', size === 'lg' ? 'w-6 h-6' : '')} />
  ) : null

  // Create content with icon placement
  const renderContent = () => {
    const textContent = label || children

    if (!renderIcon) {
      return textContent
    }

    if (iconPlacement === 'left') {
      return (
        <span className="flex items-center gap-2">
          {renderIcon}
          {textContent}
        </span>
      )
    }

    return (
      <span className="flex items-center gap-2">
        {textContent}
        {renderIcon}
      </span>
    )
  }

  /* Ensure we don't break any styles set by richText */
  if (appearance === 'inline') {
    return (
      <Link className={cn(className)} href={href || url || ''} {...newTabProps}>
        {renderContent()}
      </Link>
    )
  }

  return (
    <Button asChild className={className} size={size} variant={appearance}>
      <Link className={cn(className)} href={href || url || ''} {...newTabProps}>
        {renderContent()}
      </Link>
    </Button>
  )
}
