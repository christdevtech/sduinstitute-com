import type {
  AcademicProgram,
  Department,
  AcademicProgramsBlock as AcademicProgramsBlockProps,
} from '@/payload-types'

import configPromise from '@payload-config'
import { getPayload, PaginatedDocs } from 'payload'
import React from 'react'
import { AcademicProgramsClient } from './AcademicProgramsClient'

export const AcademicProgramsBlock: React.FC<
  AcademicProgramsBlockProps & {
    id?: string
  }
> = async (props) => {
  const {
    id,
    displayType = 'all',
    selectedDepartment,
    selectedProgramType,
    showFilters = true,
    showSearch = true,
    itemsPerPage = 12,
    showApplicationCTA = true,
  } = props

  const payload = await getPayload({ config: configPromise })

  // Fetch programs based on display type
  let programsQuery: any = {
    depth: 2,
    limit: 1000, // Get all programs for client-side filtering
  }

  if (displayType === 'by-department' && selectedDepartment) {
    const departmentId =
      typeof selectedDepartment === 'object' ? selectedDepartment.id : selectedDepartment
    programsQuery.where = {
      department: {
        equals: departmentId,
      },
    }
  }

  if (displayType === 'by-type' && selectedProgramType) {
    programsQuery.where = {
      ...programsQuery.where,
      programType: {
        equals: selectedProgramType,
      },
    }
  }

  const programs: PaginatedDocs<AcademicProgram> = await payload.find({
    collection: 'academic-programs',
  })

  // Fetch all departments for filtering
  const departments = await payload.find({
    collection: 'departments',
    depth: 1,
    limit: 1000,
  })

  return (
    <div className="container my-16" id={`block-${id}`}>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Academic Programs</h2>
        <p className="text-muted-foreground">
          Explore our comprehensive range of academic programs designed to prepare you for success.
        </p>
      </div>

      <AcademicProgramsClient
        initialPrograms={programs.docs}
        departments={departments.docs}
        showFilters={showFilters ?? true}
        showSearch={showSearch ?? true}
        showApplicationCTA={showApplicationCTA ?? true}
        itemsPerPage={itemsPerPage ?? 12}
      />
    </div>
  )
}
