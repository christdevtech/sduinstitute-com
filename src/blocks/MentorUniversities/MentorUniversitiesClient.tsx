'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Media } from '@/components/Media'
import { CMSLink } from '@/components/Link'
import { ExternalLink, MapPin, Users, GraduationCap } from 'lucide-react'
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
  // Helper function to format certification types
  const formatCertificationTypes = (partnershipTypes: string[] | string | undefined) => {
    if (!partnershipTypes) return null
    
    const types = Array.isArray(partnershipTypes) ? partnershipTypes : [partnershipTypes]
    const typeLabels = types.map(type => {
      switch (type) {
        case 'bachelors':
          return "Bachelor's"
        case 'masters':
          return "Master's"
        case 'phd':
          return 'PhD'
        default:
          return type
      }
    })
    
    if (typeLabels.length === 1) {
      return `${typeLabels[0]} Programs`
    } else if (typeLabels.length === 2) {
      return `${typeLabels.join(' & ')} Programs`
    } else {
      return `${typeLabels.slice(0, -1).join(', ')} & ${typeLabels[typeLabels.length - 1]} Programs`
    }
  }
  if (universities.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <GraduationCap className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No Partner Universities Found
          </h3>
          <p className="text-gray-600 max-w-md mx-auto">
            We're constantly expanding our network of partner institutions. Check back soon for
            updates.
          </p>
        </div>
      </div>
    )
  }

  const getGridCols = () => {
    switch (itemsPerRow) {
      case 1:
        return 'grid-cols-1'
      case 2:
        return 'grid-cols-1 lg:grid-cols-2'
      case 3:
        return 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
      case 4:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
      default:
        return 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
    }
  }

  const renderUniversityCard = (university: MentorUniversity) => (
    <Card
      key={university.id}
      className="group h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-0 shadow-md"
    >
      <CardHeader className="pb-4">
        {showLogos && university.logo && typeof university.logo === 'object' && (
          <div className="flex justify-center mb-6">
            <div className="relative overflow-hidden rounded-xl bg-white p-4 shadow-sm border">
              <Media resource={university.logo} imgClassName="h-full w-auto object-contain" />
            </div>
          </div>
        )}
        <div className="text-center space-y-2">
          <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {university.title}
          </CardTitle>
          {university.country && (
            <div className="flex items-center justify-center gap-1 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">{university.country}</span>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="pt-0 space-y-6">
        {university.partnershipType && (
          <div className="flex justify-center">
            <Badge
              variant="secondary"
              className="bg-blue-50 text-blue-700 hover:bg-blue-100 font-medium px-3 py-1"
            >
              {formatCertificationTypes(university.partnershipType)}
            </Badge>
          </div>
        )}

        {university.description && (
          <>
            <Separator className="my-4" />
            <div className="text-sm text-gray-700 leading-relaxed">
              <div dangerouslySetInnerHTML={{ __html: university.description }} />
            </div>
          </>
        )}

        {showPrograms &&
          university.programsOffered &&
          Array.isArray(university.programsOffered) &&
          university.programsOffered.length > 0 && (
            <>
              <Separator className="my-4" />
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-blue-600" />
                  <h4 className="font-semibold text-sm text-gray-900">Available Programs</h4>
                </div>
                <div className="space-y-2">
                  {university.programsOffered.slice(0, 3).map((program) => {
                    const programData =
                      typeof program === 'object' ? (program as AcademicProgram) : null
                    return programData ? (
                      <div
                        key={programData.id}
                        className="flex items-start gap-3 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700 font-medium">
                          {programData.title}
                        </span>
                      </div>
                    ) : null
                  })}
                  {university.programsOffered.length > 3 && (
                    <div className="text-xs text-gray-500 pl-5 font-medium">
                      +{university.programsOffered.length - 3} additional programs available
                    </div>
                  )}
                </div>
              </div>
            </>
          )}

        {showContactInfo && university.contactPerson && (
          <>
            <Separator className="my-4" />
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-600" />
                <h4 className="font-semibold text-sm text-gray-900">Contact Information</h4>
              </div>
              <div className="space-y-2 pl-6">
                {university.contactPerson.name && (
                  <p className="text-sm text-gray-700 font-medium">
                    {university.contactPerson.name}
                  </p>
                )}
                {university.contactPerson.email && (
                  <p className="text-sm text-gray-600">{university.contactPerson.email}</p>
                )}
                {university.contactPerson.phone && (
                  <p className="text-sm text-gray-600">{university.contactPerson.phone}</p>
                )}
              </div>
            </div>
          </>
        )}

        {university.website && (
          <>
            <Separator className="my-4" />
            <div className="pt-2">
              <CMSLink
                type="custom"
                {...university.website}
                label="Visit University Website"
                appearance="default"
                size="sm"
                newTab
                className="w-full justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                Visit Website
              </CMSLink>
            </div>
          </>
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
          <div className="space-y-8">
            {universities.map((university) => (
              <Card
                key={university.id}
                className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row">
                  {showLogos && university.logo && typeof university.logo === 'object' && (
                    <div className="lg:w-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
                      <div className="bg-white rounded-xl p-4 shadow-sm border">
                        <Media
                          resource={university.logo}
                          className="max-h-20 w-auto object-contain"
                        />
                      </div>
                    </div>
                  )}
                  <div className="flex-1 p-8">
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                          <h3 className="text-2xl font-bold text-gray-900">{university.title}</h3>
                          {university.partnershipType && (
                            <Badge
                              variant="secondary"
                              className="bg-blue-50 text-blue-700 font-medium px-3 py-1 w-fit"
                            >
                              {formatCertificationTypes(university.partnershipType)}
                            </Badge>
                          )}
                        </div>
                        {university.country && (
                          <div className="flex items-center gap-2 text-gray-600">
                            <MapPin className="w-4 h-4" />
                            <span className="font-medium">{university.country}</span>
                          </div>
                        )}
                      </div>

                      {university.description && (
                        <>
                          <Separator />
                          <div className="text-gray-700 leading-relaxed">
                            <div dangerouslySetInnerHTML={{ __html: university.description }} />
                          </div>
                        </>
                      )}

                      {showPrograms &&
                        university.programsOffered &&
                        Array.isArray(university.programsOffered) &&
                        university.programsOffered.length > 0 && (
                          <>
                            <Separator />
                            <div className="space-y-3">
                              <div className="flex items-center gap-2">
                                <GraduationCap className="w-5 h-5 text-blue-600" />
                                <h4 className="font-semibold text-gray-900">Available Programs</h4>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {university.programsOffered.slice(0, 6).map((program) => {
                                  const programData =
                                    typeof program === 'object'
                                      ? (program as AcademicProgram)
                                      : null
                                  return programData ? (
                                    <div
                                      key={programData.id}
                                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-50"
                                    >
                                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                                      <span className="text-sm text-gray-700 font-medium">
                                        {programData.title}
                                      </span>
                                    </div>
                                  ) : null
                                })}
                              </div>
                              {university.programsOffered.length > 6 && (
                                <p className="text-sm text-gray-500 font-medium">
                                  +{university.programsOffered.length - 6} additional programs
                                  available
                                </p>
                              )}
                            </div>
                          </>
                        )}

                      {showContactInfo && university.contactPerson && (
                        <>
                          <Separator />
                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <Users className="w-5 h-5 text-blue-600" />
                              <h4 className="font-semibold text-gray-900">Contact Information</h4>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pl-7">
                              {university.contactPerson.name && (
                                <div>
                                  <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                                    Contact Person
                                  </p>
                                  <p className="text-sm text-gray-900 font-medium">
                                    {university.contactPerson.name}
                                  </p>
                                </div>
                              )}
                              {university.contactPerson.email && (
                                <div>
                                  <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                                    Email
                                  </p>
                                  <p className="text-sm text-gray-700">
                                    {university.contactPerson.email}
                                  </p>
                                </div>
                              )}
                              {university.contactPerson.phone && (
                                <div>
                                  <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                                    Phone
                                  </p>
                                  <p className="text-sm text-gray-700">
                                    {university.contactPerson.phone}
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        </>
                      )}

                      {university.website && (
                        <>
                          <Separator />
                          <div className="flex justify-start">
                            <CMSLink
                              type="custom"
                              {...university.website}
                              label="Visit University Website"
                              appearance="default"
                              size="default"
                              newTab
                              className="gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Visit University Website
                            </CMSLink>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )

      case 'carousel':
        return (
          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-8 pb-6" style={{ width: `${universities.length * 360}px` }}>
                {universities.map((university) => (
                  <div key={university.id} className="flex-shrink-0 w-80">
                    {renderUniversityCard(university)}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-white to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-white to-transparent pointer-events-none" />
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
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6 mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Our Partner Universities
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We collaborate with prestigious universities worldwide to offer high-quality degree
            programs and create pathways for academic excellence and global opportunities.
          </p>
          {displayType !== 'all' && (
            <div className="flex flex-wrap justify-center gap-2 pt-4">
              {selectedPartnershipType && (
                <Badge variant="outline" className="text-blue-700 border-blue-200">
                  {formatCertificationTypes([selectedPartnershipType])}
                </Badge>
              )}
              <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                {universities.length} {universities.length === 1 ? 'University' : 'Universities'}
              </Badge>
            </div>
          )}
        </div>

        {renderContent()}
      </div>
    </div>
  )
}
