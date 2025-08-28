import type {
  Department,
  Staff,
  AcademicProgram,
  DepartmentOverviewBlock as DepartmentOverviewBlockProps,
} from '@/payload-types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import { DepartmentOverviewClient } from './DepartmentOverviewClient'

export const DepartmentOverviewBlock: React.FC<
  DepartmentOverviewBlockProps & {
    id?: string
  }
> = async (props) => {
  const {
    id,
    selectedDepartment,
    showStaffList = true,
    showPrograms = true,
    showContactInfo = true,
    layout = 'default',
    maxStaffToShow = 6,
  } = props

  if (!selectedDepartment) {
    return (
      <div className="container my-16" id={`block-${id}`}>
        <div className="text-center py-12">
          <p className="text-muted-foreground">Please select a department to display.</p>
        </div>
      </div>
    )
  }

  const payload = await getPayload({ config: configPromise })
  const departmentId =
    typeof selectedDepartment === 'object' ? selectedDepartment.id : selectedDepartment

  // Fetch department with related data
  const department = await payload.findByID({
    collection: 'departments',
    id: departmentId,
    depth: 2,
  })

  // Fetch staff members for this department
  let staffMembers: Staff[] = []
  if (showStaffList) {
    const staffResult = await payload.find({
      collection: 'staff',
      depth: 1,
      limit: maxStaffToShow || 20,
      where: {
        department: {
          equals: departmentId,
        },
        isActive: {
          equals: true,
        },
      },
      sort: 'hierarchyLevel',
    })
    staffMembers = staffResult.docs
  }

  // Fetch academic programs for this department
  let programs: AcademicProgram[] = []
  if (showPrograms) {
    const programsResult = await payload.find({
      collection: 'academic-programs',
      depth: 1,
      limit: 20,
      where: {
        department: {
          equals: departmentId,
        },
      },
      sort: 'programType',
    })
    programs = programsResult.docs
  }

  return (
    <DepartmentOverviewClient
      id={id}
      department={department}
      staffMembers={staffMembers}
      programs={programs}
      showStaffList={showStaffList ?? true}
      showPrograms={showPrograms ?? true}
      showContactInfo={showContactInfo ?? true}
      layout={layout ?? 'default'}
    />
  )
}
