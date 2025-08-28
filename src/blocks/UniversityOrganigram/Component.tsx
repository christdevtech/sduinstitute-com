import React from 'react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import type {
  UniversityOrganigramBlock as UniversityOrganigramBlockProps,
  Staff,
} from '@/payload-types'
import { UniversityOrganigramClient } from './UniversityOrganigramClient'

type Props = {
  displayType: UniversityOrganigramBlockProps['displayType']
  selectedDepartment?: UniversityOrganigramBlockProps['selectedDepartment']
  showContactInfo: UniversityOrganigramBlockProps['showContactInfo']
  showPhotos: UniversityOrganigramBlockProps['showPhotos']
  layout: UniversityOrganigramBlockProps['layout']
  maxLevels: UniversityOrganigramBlockProps['maxLevels']
}



export const UniversityOrganigramBlock: React.FC<Props> = async ({
  displayType,
  selectedDepartment,
  showContactInfo = true,
  showPhotos = true,
  layout = 'tree',
  maxLevels = 5,
}) => {
  const payload = await getPayload({ config: configPromise })

  // Build query conditions
  const whereConditions: any = {
    isActive: {
      equals: true,
    },
  }

  if (displayType === 'by-department' && selectedDepartment) {
    const deptId =
      typeof selectedDepartment === 'object' ? selectedDepartment.id : selectedDepartment
    whereConditions.department = {
      equals: deptId,
    }
  } else if (displayType === 'leadership-only') {
    const leadershipLevels = ['vice-chancellor', 'deputy-vc', 'registrar', 'dean', 'hod']
    whereConditions.hierarchyLevel = {
      in: leadershipLevels,
    }
  }

  // Fetch staff
  const staff = await payload.find({
    collection: 'staff',
    depth: 2,
    where: whereConditions,
  })

  return (
    <UniversityOrganigramClient
      staff={staff.docs}
      displayType={displayType}
      selectedDepartment={selectedDepartment}
      showContactInfo={showContactInfo}
      showPhotos={showPhotos}
      layout={layout}
      maxLevels={maxLevels}
    />
  )
}

export default UniversityOrganigramBlock
