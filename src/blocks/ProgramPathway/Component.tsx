import React from 'react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { ProgramPathwayClient } from './ProgramPathwayClient'

interface ProgramPathwayBlockProps {
  selectedDepartment?: {
    id: string
    name: string
  }
  showAllPathways?: boolean
  highlightedPathway?: string
  showDuration?: boolean
  showRequirements?: boolean
  layout?: 'horizontal' | 'vertical' | 'flowchart'
  enableInteractivity?: boolean
}

export default async function ProgramPathwayBlock({
  selectedDepartment,
  showAllPathways = true,
  highlightedPathway = '',
  showDuration = true,
  showRequirements = true,
  layout = 'horizontal',
  enableInteractivity = true,
}: ProgramPathwayBlockProps) {
  const payload = await getPayload({ config: configPromise })

  // Build query conditions
  const where: any = {}

  if (!showAllPathways && selectedDepartment?.id) {
    where.department = { equals: selectedDepartment.id }
  }

  // Fetch academic programs
  const programs = await payload.find({
    collection: 'academic-programs',
    where,
    limit: 100,
    depth: 2,
  })

  return (
    <ProgramPathwayClient
      programs={programs.docs}
      selectedDepartment={selectedDepartment}
      showAllPathways={showAllPathways}
      highlightedPathway={highlightedPathway}
      showDuration={showDuration}
      showRequirements={showRequirements}
      layout={layout}
      enableInteractivity={enableInteractivity}
    />
  )
}
