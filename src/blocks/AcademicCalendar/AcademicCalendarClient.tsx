'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, AlertCircle, Search, Filter, BookOpen, GraduationCap } from 'lucide-react'
import type { SchoolCalendar } from '@/payload-types'
import { extractTextFromRichText } from '@/utilities/extractTextFromRichText'
import RichText from '@/components/RichText'

type Props = {
  calendarItems: SchoolCalendar[]
  academicYear: string
  viewType?: 'overview' | 'calendar' | 'timeline'
  filterByCalendarType?: string
  filterBySemester?: string
  showFilters?: boolean
  showSearch?: boolean
  highlightUpcoming?: boolean
  showPriority?: boolean
  itemsToShow?: number
}

export const AcademicCalendarClient: React.FC<Props> = ({
  calendarItems,
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
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCalendarType, setSelectedCalendarType] = useState<string>(filterByCalendarType || '')
  const [selectedSemester, setSelectedSemester] = useState<string>(filterBySemester || '')

  // Filter calendar items based on search and filters
  const filteredItems = calendarItems.filter(item => {
    const descriptionText = extractTextFromRichText(item.description)
    const matchesSearch = !searchTerm || 
      item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      descriptionText.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCalendarType = !selectedCalendarType || item.calendarType === selectedCalendarType
    const matchesSemester = !selectedSemester || item.semester === selectedSemester
    
    return matchesSearch && matchesCalendarType && matchesSemester
  })

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  const formatDateRange = (startDate: string, endDate: string) => {
    const start = new Date(startDate)
    const end = new Date(endDate)
    
    if (start.toDateString() === end.toDateString()) {
      return formatDate(startDate)
    }
    
    return `${formatDate(startDate)} - ${formatDate(endDate)}`
  }

  const getCalendarTypeColor = (calendarType: string) => {
    const colors = {
      Academic: 'bg-blue-100 text-blue-800',
      Administrative: 'bg-gray-100 text-gray-800',
      Examination: 'bg-red-100 text-red-800',
      Holiday: 'bg-green-100 text-green-800',
    }
    return colors[calendarType as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  const getPriorityColor = (priority: string) => {
    const colors = {
      High: 'bg-red-100 text-red-800 border-red-200',
      Medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      Low: 'bg-green-100 text-green-800 border-green-200',
    }
    return colors[priority as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200'
  }

  const getCalendarTypeIcon = (calendarType: string) => {
    switch (calendarType) {
      case 'Academic':
        return <BookOpen className="h-4 w-4" />
      case 'Examination':
        return <GraduationCap className="h-4 w-4" />
      case 'Administrative':
        return <AlertCircle className="h-4 w-4" />
      case 'Holiday':
        return <Calendar className="h-4 w-4" />
      default:
        return <Calendar className="h-4 w-4" />
    }
  }

  const isUpcoming = (startDate: string) => {
    const now = new Date()
    const itemDate = new Date(startDate)
    const diffTime = itemDate.getTime() - now.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays >= 0 && diffDays <= 30 // Upcoming within 30 days
  }

  return (
    <div className="w-full py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Academic Calendar {academicYear}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Important academic dates, examination schedules, and administrative deadlines for the academic year.
          </p>
        </div>

        {/* Search and Filters */}
        {(showSearch || showFilters) && (
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              {showSearch && (
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search calendar items..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              )}
              
              {showFilters && (
                <div className="flex gap-2">
                  <Select value={selectedCalendarType} onValueChange={setSelectedCalendarType}>
                    <SelectTrigger className="w-48">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Types</SelectItem>
                      <SelectItem value="Academic">Academic</SelectItem>
                      <SelectItem value="Administrative">Administrative</SelectItem>
                      <SelectItem value="Examination">Examination</SelectItem>
                      <SelectItem value="Holiday">Holiday</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select value={selectedSemester} onValueChange={setSelectedSemester}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="All Semesters" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Semesters</SelectItem>
                      <SelectItem value="First Semester">First Semester</SelectItem>
                      <SelectItem value="Second Semester">Second Semester</SelectItem>
                      <SelectItem value="Summer Session">Summer Session</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Calendar Items Display */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-12">
            <Calendar className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No calendar items found</h3>
            <p className="text-gray-500">There are no calendar items for the selected criteria.</p>
          </div>
        ) : (
          <div className={`grid gap-6 ${
            viewType === 'timeline' ? 'grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-3'
          }`}>
            {filteredItems.map((item) => (
              <Card 
                key={item.id} 
                className={`hover:shadow-lg transition-shadow ${
                  highlightUpcoming && isUpcoming(item.startDate) 
                    ? 'ring-2 ring-blue-500 ring-opacity-50' 
                    : ''
                }`}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg flex items-center gap-2">
                      {getCalendarTypeIcon(item.calendarType || '')}
                      {item.title}
                    </CardTitle>
                    <div className="flex flex-col gap-1">
                      <Badge className={getCalendarTypeColor(item.calendarType || '')}>
                        {item.calendarType}
                      </Badge>
                      {showPriority && item.priority && (
                        <Badge variant="outline" className={getPriorityColor(item.priority)}>
                          {item.priority}
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDateRange(item.startDate, item.endDate)}</span>
                    </div>
                    
                    {item.semester && (
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{item.semester}</span>
                      </div>
                    )}
                    
                    {highlightUpcoming && isUpcoming(item.startDate) && (
                      <div className="flex items-center gap-2 text-blue-600">
                        <AlertCircle className="h-4 w-4" />
                        <span className="font-medium">Upcoming</span>
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent>
                  {item.description && (
                    <div className="text-gray-700 mb-4 line-clamp-3">
                      <RichText data={item.description} enableGutter={false} enableProse={false} />
                    </div>
                  )}
                  
                  {item.affectedPrograms && Array.isArray(item.affectedPrograms) && item.affectedPrograms.length > 0 && (
                    <div className="mb-4">
                      <div className="text-sm text-gray-600 mb-2">Affected Programs:</div>
                      <div className="flex flex-wrap gap-1">
                        {item.affectedPrograms.slice(0, 3).map((program, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {typeof program === 'object' && program.title ? program.title : 'Program'}
                          </Badge>
                        ))}
                        {item.affectedPrograms.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{item.affectedPrograms.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      View Details
                    </Button>
                    {item.calendarType === 'examination' && (
                      <Button size="sm" className="flex-1">
                        Exam Schedule
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