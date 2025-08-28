import React from 'react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import type { SchoolCalendar } from '@/payload-types'
import { AcademicCalendarClient } from './AcademicCalendarClient'

type AcademicCalendarBlockProps = {
  academicYear?: string
  viewType?: 'overview' | 'calendar' | 'timeline'
  filterByCalendarType?: string
  filterBySemester?: string
  showFilters?: boolean
  showSearch?: boolean
  highlightUpcoming?: boolean
  showPriority?: boolean
  itemsToShow?: number
}

const AcademicCalendarBlock: React.FC<AcademicCalendarBlockProps> = async ({
  academicYear,
  viewType = 'overview',
  filterByCalendarType,
  filterBySemester,
  showFilters = true,
  showSearch = true,
  highlightUpcoming = true,
  showPriority = true,
  itemsToShow = 20,
}) => {
  // Get current academic year if not specified
  const getCurrentAcademicYear = () => {
    const now = new Date()
    const currentYear = now.getFullYear()
    const currentMonth = now.getMonth()

    // Academic year typically starts in September (month 8)
    if (currentMonth >= 8) {
      return `${currentYear}-${currentYear + 1}`
    } else {
      return `${currentYear - 1}-${currentYear}`
    }
  }

  const targetAcademicYear = academicYear || getCurrentAcademicYear()

  // Fetch calendar items from Payload
  const payload = await getPayload({ config: configPromise })

  // Build query conditions
  const whereConditions: any[] = [
    {
      academicYear: {
        equals: targetAcademicYear,
      },
    },
  ]

  if (filterByCalendarType) {
    whereConditions.push({
      calendarType: {
        equals: filterByCalendarType,
      },
    })
  }

  if (filterBySemester) {
    whereConditions.push({
      semester: {
        equals: filterBySemester,
      },
    })
  }

  const calendarItems = await payload.find({
    collection: 'school-calendar',
    where: {
      and: whereConditions,
    },
    limit: itemsToShow,
    sort: 'startDate',
  })

  return (
    <AcademicCalendarClient
      calendarItems={calendarItems.docs}
      academicYear={targetAcademicYear}
      viewType={viewType}
      filterByCalendarType={filterByCalendarType}
      filterBySemester={filterBySemester}
      showFilters={showFilters}
      showSearch={showSearch}
      highlightUpcoming={highlightUpcoming}
      showPriority={showPriority}
      itemsToShow={itemsToShow}
    />
  )
}

export default AcademicCalendarBlock
