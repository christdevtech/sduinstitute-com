import React from 'react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import {
  AcademicProgram,
  AdmissionsInfoBlock as AdmissionsInfoBlockProps,
  Department,
} from '@/payload-types'
import { AdmissionsInfoClient } from './AdmissionsInfoClient'

export default async function AdmissionsInfoBlock({
  displayType = 'all-programs',
  selectedDepartment,
  selectedProgramType,
  showDeadlines = true,
  showFees = true,
  showRequirements = true,
  showApplicationSteps = true,
  layout = 'cards',
}: AdmissionsInfoBlockProps) {
  const payload = await getPayload({ config: configPromise })

  // Build query conditions
  const where: any = {}

  // Handle selectedDepartment - it can be string, Department object, or null
  const departmentId =
    typeof selectedDepartment === 'object' && selectedDepartment !== null
      ? selectedDepartment.id
      : typeof selectedDepartment === 'string'
        ? selectedDepartment
        : null

  if (displayType === 'by-department' && departmentId) {
    where.department = { equals: departmentId }
  }

  if (displayType === 'by-program-type' && selectedProgramType) {
    where.programType = { equals: selectedProgramType }
  }

  // Fetch academic programs
  const programs = await payload.find({
    collection: 'academic-programs',
    where,
    depth: 2,
  })

  // Transform selectedDepartment to the expected format for the client component
  const transformedDepartment =
    typeof selectedDepartment === 'object' && selectedDepartment !== null
      ? { id: selectedDepartment.id, title: selectedDepartment.title || '' }
      : null

  return (
    <AdmissionsInfoClient
      programs={programs.docs}
      displayType={displayType}
      selectedDepartment={transformedDepartment}
      selectedProgramType={selectedProgramType}
      showDeadlines={showDeadlines ?? true}
      showFees={showFees ?? true}
      showRequirements={showRequirements ?? true}
      showApplicationSteps={showApplicationSteps ?? true}
      layout={layout}
    />
  )
}
