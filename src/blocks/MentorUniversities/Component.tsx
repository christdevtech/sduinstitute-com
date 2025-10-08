import React from 'react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { MentorUniversitiesClient } from './MentorUniversitiesClient'
import type { MentorUniversitiesBlock, MentorUniversity } from '@/payload-types'

type Props = {
  className?: string
} & MentorUniversitiesBlock

export const MentorUniversitiesBlockComponent: React.FC<Props> = async ({
  className,
  displayType = 'all',
  selectedPartnershipType,
  showLogos = true,
  showPrograms = true,
  showContactInfo = false,
  layout = 'grid',
  itemsPerRow = 3,
}) => {
  const payload = await getPayload({ config: configPromise })

  // Build query conditions
  const whereConditions: any = {}

  if (displayType === 'by-partnership-type' && selectedPartnershipType) {
    whereConditions.partnershipType = {
      contains: selectedPartnershipType,
    }
  }

  // Fetch mentor universities
  const universities = await payload.find({
    collection: 'mentor-universities',
    depth: 2,
    where: Object.keys(whereConditions).length > 0 ? whereConditions : undefined,
  })

  return (
    <MentorUniversitiesClient
      className={className}
      universities={universities.docs}
      displayType={displayType}
      selectedPartnershipType={selectedPartnershipType ?? 'all'}
      showLogos={showLogos ?? false}
      showPrograms={showPrograms ?? false}
      showContactInfo={showContactInfo ?? false}
      layout={layout ?? 'grid'}
      itemsPerRow={itemsPerRow ?? 3}
    />
  )
}

export default MentorUniversitiesBlockComponent
