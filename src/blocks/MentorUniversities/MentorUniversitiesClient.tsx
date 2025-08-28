'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Media } from '@/components/Media'
import { CMSLink } from '@/components/Link'
import type { MentorUniversity, AcademicProgram } from '@/payload-types'

type Props = {
  className?: string
  universities: MentorUniversity[]
  displayType?: 'all' | 'by-partnership-type' | 'featured'
  selectedPartnershipType?: string
  showLogos?: boolean
  showPrograms?: boolean
  showContactInfo?: boolean
  layout?: 'grid' | 'list' | 'carousel'
  itemsPerRow?: number
}

export const MentorUniversitiesClient: React.FC<Props> = ({
  className,
  universities,
  displayType = 'all',
  selectedPartnershipType,
  showLogos = true,
  showPrograms = true,
  showContactInfo = false,
  layout = 'grid',
  itemsPerRow = 3,
}) => {
  if (universities.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-gray-600">No mentor universities found.</div>
      </div>
    )
  }

  const getGridCols = () => {
    switch (itemsPerRow) {
      case 1:
        return 'grid-cols-1'
      case 2:
        return 'grid-cols-1 md:grid-cols-2'
      case 3:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      case 4:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
      default:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
    }
  }

  const renderUniversityCard = (university: MentorUniversity) => (
    <Card key={university.id} className="h-full">
      <CardHeader>
        {showLogos && university.logo && typeof university.logo === 'object' && (
          <div className="flex justify-center mb-4">
            <Media resource={university.logo} className="max-h-20 w-auto object-contain" />
          </div>
        )}
        <CardTitle className="text-center">{university.name}</CardTitle>
        {university.country && (
          <p className="text-sm text-gray-600 text-center">{university.country}</p>
        )}
      </CardHeader>
      <CardContent>
        {university.partnershipType && (
          <div className="mb-4">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              {university.partnershipType} Programs
            </span>
          </div>
        )}

        {university.description && (
          <div className="mb-4 text-sm text-gray-700">
            <div dangerouslySetInnerHTML={{ __html: university.description }} />
          </div>
        )}

        {showPrograms &&
          university.programsOffered &&
          Array.isArray(university.programsOffered) &&
          university.programsOffered.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold text-sm mb-2">Programs Offered:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {university.programsOffered.slice(0, 3).map((program) => {
                  const programData =
                    typeof program === 'object' ? (program as AcademicProgram) : null
                  return programData ? (
                    <li key={programData.id} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 flex-shrink-0"></span>
                      {programData.title}
                    </li>
                  ) : null
                })}
                {university.programsOffered.length > 3 && (
                  <li className="text-xs text-gray-500">
                    +{university.programsOffered.length - 3} more programs
                  </li>
                )}
              </ul>
            </div>
          )}

        {showContactInfo && university.contactPerson && (
          <div className="mb-4 text-sm">
            <h4 className="font-semibold mb-2">Contact:</h4>
            <div className="text-gray-600">
              {university.contactPerson.name && <p>{university.contactPerson.name}</p>}
              {university.contactPerson.email && <p>{university.contactPerson.email}</p>}
              {university.contactPerson.phone && <p>{university.contactPerson.phone}</p>}
            </div>
          </div>
        )}

        {university.website && (
          <div className="mt-4">
            <CMSLink
              type="custom"
              {...university.website}
              label="Visit Website"
              appearance="outline"
              size="sm"
              newTab
            />
          </div>
        )}
      </CardContent>
    </Card>
  )

  const renderContent = () => {
    switch (layout) {
      case 'grid':
        return (
          <div className={`grid gap-6 ${getGridCols()}`}>
            {universities.map(renderUniversityCard)}
          </div>
        )

      case 'list':
        return (
          <div className="space-y-6">
            {universities.map((university) => (
              <div key={university.id} className="border rounded-lg p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {showLogos && university.logo && typeof university.logo === 'object' && (
                    <div className="flex-shrink-0">
                      <Media
                        resource={university.logo}
                        className="max-h-16 w-auto object-contain"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{university.name}</h3>
                    {university.country && (
                      <p className="text-gray-600 mb-2">{university.country}</p>
                    )}
                    {university.partnershipType && (
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-3">
                        {university.partnershipType} Programs
                      </span>
                    )}
                    {university.description && (
                      <div className="text-gray-700 mb-4">
                        <div dangerouslySetInnerHTML={{ __html: university.description }} />
                      </div>
                    )}
                    {university.website && (
                      <CMSLink
                        type="custom"
                        {...university.website}
                        label="Visit Website"
                        appearance="outline"
                        size="sm"
                        newTab
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )

      case 'carousel':
        return (
          <div className="overflow-x-auto">
            <div className="flex gap-6 pb-4" style={{ width: `${universities.length * 320}px` }}>
              {universities.map((university) => (
                <div key={university.id} className="flex-shrink-0 w-80">
                  {renderUniversityCard(university)}
                </div>
              ))}
            </div>
          </div>
        )

      default:
        return (
          <div className={`grid gap-6 ${getGridCols()}`}>
            {universities.map(renderUniversityCard)}
          </div>
        )
    }
  }

  return (
    <div className={className}>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Partner Universities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We collaborate with prestigious universities worldwide to offer high-quality degree
            programs.
          </p>
        </div>

        {renderContent()}
      </div>
    </div>
  )
}
