import React from 'react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import type { Event, Department } from '@/payload-types'
import { EventsCalendarClient } from './EventsCalendarClient'

type EventsCalendarBlockProps = {
  viewType?: 'upcoming' | 'calendar' | 'list'
  filterByDepartment?: string | Department
  filterByEventType?: string
  showSearch?: boolean
  showFilters?: boolean
  itemsToShow?: number
  dateRange?: 'week' | 'month' | 'semester' | 'year'
  showRegistrationStatus?: boolean
}

export const EventsCalendarBlock: React.FC<
  EventsCalendarBlockProps & {
    id?: string
  }
> = async ({
  id,
  viewType = 'upcoming',
  filterByDepartment,
  filterByEventType,
  showSearch = true,
  showFilters = true,
  itemsToShow = 10,
  dateRange = 'month',
  showRegistrationStatus = true,
}) => {
  const payload = await getPayload({ config: configPromise })

  // Calculate date range
  const now = new Date()
  let startDate = new Date()
  let endDate = new Date()
  
  switch (dateRange) {
    case 'week':
      endDate.setDate(now.getDate() + 7)
      break
    case 'month':
      endDate.setMonth(now.getMonth() + 1)
      break
    case 'semester':
      endDate.setMonth(now.getMonth() + 6)
      break
    case 'year':
      endDate.setFullYear(now.getFullYear() + 1)
      break
  }

  // Build query conditions
  const whereConditions: any = {
    and: [
      {
        startDate: {
          greater_than_equal: startDate.toISOString(),
        },
      },
      {
        startDate: {
          less_than_equal: endDate.toISOString(),
        },
      },
    ],
  }

  // Add department filter if specified
  if (filterByDepartment) {
    whereConditions.and.push({
      department: {
        equals: typeof filterByDepartment === 'string' ? filterByDepartment : filterByDepartment.id,
      },
    })
  }

  // Add event type filter if specified
  if (filterByEventType) {
    whereConditions.and.push({
      eventType: {
        equals: filterByEventType,
      },
    })
  }

  // Fetch events
  const eventsResult = await payload.find({
    collection: 'events',
    where: whereConditions,
    limit: itemsToShow,
    sort: 'startDate',
    depth: 2,
  })

  // Fetch departments for filters
  let departments: Department[] = []
  if (showFilters) {
    const departmentsResult = await payload.find({
      collection: 'departments',
      limit: 100,
      sort: 'name',
    })
    departments = departmentsResult.docs
  }

  return (
    <EventsCalendarClient
      id={id}
      events={eventsResult.docs}
      departments={departments}
      viewType={viewType}
      filterByDepartment={filterByDepartment}
      filterByEventType={filterByEventType}
      showSearch={showSearch}
      showFilters={showFilters}
      itemsToShow={itemsToShow}
      dateRange={dateRange}
      showRegistrationStatus={showRegistrationStatus}
    />
  )
}