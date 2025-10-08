'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, MapPin, Users, Search, Filter } from 'lucide-react'
import type { Event, Department } from '@/payload-types'
import RichText from '@/components/RichText'
import { extractTextFromRichText } from '@/utilities/extractTextFromRichText'

type EventsCalendarClientProps = {
  id?: string
  events: Event[]
  departments: Department[]
  viewType?: 'upcoming' | 'calendar' | 'list'
  filterByDepartment?: string | Department
  filterByEventType?: string
  showSearch?: boolean
  showFilters?: boolean
  itemsToShow?: number
  dateRange?: 'week' | 'month' | 'semester' | 'year'
  showRegistrationStatus?: boolean
}

export const EventsCalendarClient: React.FC<EventsCalendarClientProps> = ({
  id,
  events,
  departments,
  viewType = 'upcoming',
  filterByDepartment: _filterByDepartment,
  filterByEventType: _filterByEventType,
  showSearch = true,
  showFilters = true,
  itemsToShow: _itemsToShow = 10,
  dateRange: _dateRange = 'month',
  showRegistrationStatus = true,
}) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all')
  const [selectedEventType, setSelectedEventType] = useState<string>('all')

  // Filter events based on search and filters
  const filteredEvents = events.filter((event) => {
    const descriptionText = event.description ? extractTextFromRichText(event.description) : ''
    const matchesSearch =
      !searchTerm ||
      event.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      descriptionText.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesDepartment =
      selectedDepartment === 'all' ||
      (typeof event.department === 'object' && event.department?.id === selectedDepartment)

    const matchesEventType = selectedEventType === 'all' || event.eventType === selectedEventType

    return matchesSearch && matchesDepartment && matchesEventType
  })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]
    return `${weekdays[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
  }

  const extractTimeFromDate = (dateString: string) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    const hours = date.getHours()
    const minutes = date.getMinutes()

    // Only show time if it's not midnight (00:00)
    if (hours === 0 && minutes === 0) return ''

    const ampm = hours >= 12 ? 'PM' : 'AM'
    const displayHour = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours
    const displayMinutes = minutes.toString().padStart(2, '0')
    return `${displayHour}:${displayMinutes} ${ampm}`
  }

  const getEventTimeDisplay = (event: Event) => {
    const formatTime = (timeString: string) => {
      if (!timeString) return ''
      const [hours, minutes] = timeString.split(':')
      const hour = parseInt(hours, 10)
      const ampm = hour >= 12 ? 'PM' : 'AM'
      const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour
      return `${displayHour}:${minutes} ${ampm}`
    }
    // If no dedicated time fields, extract from date fields
    const startTime = extractTimeFromDate(event.startDate)
    const endTime = event.endDate ? extractTimeFromDate(event.endDate) : ''

    return { startTime, endTime }
  }

  const getEventTypeColor = (eventType: string) => {
    const colors = {
      Academic: 'bg-blue-100 text-blue-800',
      Administrative: 'bg-gray-100 text-gray-800',
      Social: 'bg-green-100 text-green-800',
      Conference: 'bg-purple-100 text-purple-800',
      Workshop: 'bg-orange-100 text-orange-800',
      Graduation: 'bg-yellow-100 text-yellow-800',
      Orientation: 'bg-indigo-100 text-indigo-800',
    }
    return colors[eventType as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="w-full py-12" id={`block-${id}`}>
      <div className="container mx-auto px-4">
        {/* Search and Filters */}
        {(showSearch || showFilters) && (
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              {showSearch && (
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search events..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              )}

              {showFilters && (
                <div className="flex gap-2">
                  <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                    <SelectTrigger className="w-48">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="All Departments" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Departments</SelectItem>
                      {departments.map((dept) => (
                        <SelectItem key={dept.id} value={dept.id}>
                          {dept.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={selectedEventType} onValueChange={setSelectedEventType}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="Academic">Academic</SelectItem>
                      <SelectItem value="Administrative">Administrative</SelectItem>
                      <SelectItem value="Social">Social</SelectItem>
                      <SelectItem value="Conference">Conference</SelectItem>
                      <SelectItem value="Workshop">Workshop</SelectItem>
                      <SelectItem value="Graduation">Graduation</SelectItem>
                      <SelectItem value="Orientation">Orientation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Events Display */}
        {filteredEvents.length === 0 ? (
          <div className="text-center py-12">
            <Calendar className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
            <p className="text-gray-500">There are no events matching your criteria.</p>
          </div>
        ) : (
          <div
            className={`grid gap-6 ${
              viewType === 'list' ? 'grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-3'
            }`}
          >
            {filteredEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <Badge className={getEventTypeColor(event.eventType || '')}>
                      {event.eventType}
                    </Badge>
                  </div>

                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(event.startDate)}</span>
                      {event.endDate && event.endDate !== event.startDate && (
                        <span>- {formatDate(event.endDate)}</span>
                      )}
                    </div>

                    {(() => {
                      const { startTime, endTime } = getEventTimeDisplay(event)
                      return (
                        (startTime || endTime) && (
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>
                              {startTime}
                              {endTime && startTime !== endTime && ` - ${endTime}`}
                            </span>
                          </div>
                        )
                      )
                    })()}

                    {event.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                    )}

                    {event.department && typeof event.department === 'object' && (
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{event.department.title}</span>
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent>
                  {event.description && <RichText enableGutter={false} data={event.description} />}

                  {showRegistrationStatus && event.registrationRequired && (
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Registration Required</span>
                        {event.registrationDeadline && (
                          <span className="text-red-600">
                            Deadline: {formatDate(event.registrationDeadline)}
                          </span>
                        )}
                      </div>
                      {event.maxAttendees && (
                        <div className="text-sm text-gray-600 mt-1">
                          Max Attendees: {event.maxAttendees}
                        </div>
                      )}
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      View Details
                    </Button>
                    {event.registrationRequired && (
                      <Button size="sm" className="flex-1">
                        Register
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
