'use client'
import { Header } from '@/payload-types'
import { RowLabelProps, useRowLabel } from '@payloadcms/ui'
import { materialIcons } from '@/utilities/materialIcons'

export const RowLabel: React.FC<RowLabelProps> = () => {
  const data = useRowLabel<NonNullable<Header['navItems']>[number]>()

  const label = data?.data?.link?.label
    ? `Nav item ${data.rowNumber !== undefined ? data.rowNumber + 1 : ''}: ${data?.data?.link?.label}`
    : 'Row'

  return <div>{label}</div>
}

export const ButtonLabel: React.FC<RowLabelProps> = () => {
  const data = useRowLabel<NonNullable<Header['buttons']>[number]>()

  const label = data?.data?.link?.label
    ? `Button ${data.rowNumber !== undefined ? data.rowNumber + 1 : ''}: ${data?.data?.link?.label}`
    : 'Row'
  const Icon = data?.data?.link?.icon ? materialIcons[data?.data?.link?.icon] : null
  return (
    <div>
      {label} {Icon ? <Icon /> : <></>}
    </div>
  )
}
