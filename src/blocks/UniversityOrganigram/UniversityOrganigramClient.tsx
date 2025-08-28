'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Mail, Phone, MapPin, User } from 'lucide-react'
import type {
  UniversityOrganigramBlock as UniversityOrganigramBlockProps,
  Staff,
} from '@/payload-types'
import { Media } from '@/components/Media'

type Props = {
  staff: Staff[]
  displayType: UniversityOrganigramBlockProps['displayType']
  selectedDepartment?: UniversityOrganigramBlockProps['selectedDepartment']
  showContactInfo: UniversityOrganigramBlockProps['showContactInfo']
  showPhotos: UniversityOrganigramBlockProps['showPhotos']
  layout: UniversityOrganigramBlockProps['layout']
  maxLevels: UniversityOrganigramBlockProps['maxLevels']
}

const hierarchyOrder = [
  'vice-chancellor',
  'deputy-vc',
  'registrar',
  'dean',
  'hod',
  'senior-lecturer',
  'lecturer',
  'assistant-lecturer',
  'admin-staff',
  'unknown',
]

const getHierarchyLevel = (level: string): number => {
  const index = hierarchyOrder.indexOf(level)
  return index === -1 ? 999 : index
}

const getHierarchyLabel = (level: string): string => {
  const labelMap: Record<string, string> = {
    'vice-chancellor': 'Vice-Chancellor',
    'deputy-vc': 'Deputy VC',
    'registrar': 'Registrar',
    'dean': 'Dean',
    'hod': 'HOD',
    'senior-lecturer': 'Senior Lecturer',
    'lecturer': 'Lecturer',
    'assistant-lecturer': 'Assistant Lecturer',
    'admin-staff': 'Admin Staff',
    'unknown': 'Other Staff',
  }
  return labelMap[level] || level
}

const StaffCard: React.FC<{
  staff: Staff
  showContactInfo: boolean
  showPhotos: boolean
  layout: string
}> = ({ staff, showContactInfo, showPhotos, layout }) => {
  const isCompact = layout === 'compact'

  return (
    <Card className={`${isCompact ? 'p-2' : 'p-4'} hover:shadow-md transition-shadow`}>
      <CardHeader className={`${isCompact ? 'pb-2' : 'pb-4'}`}>
        <div className="flex items-center gap-3">
          {showPhotos && staff.profileImage && (
            <Avatar className={isCompact ? 'h-8 w-8' : 'h-12 w-12'}>
              <Media resource={staff.profileImage} />
            </Avatar>
          )}
          <div className="flex-1">
            <CardTitle className={`${isCompact ? 'text-sm' : 'text-base'} font-semibold`}>
              {staff.fullName}
            </CardTitle>
            <p className={`${isCompact ? 'text-xs' : 'text-sm'} text-muted-foreground`}>
              {staff.position}
            </p>
            {staff.department && typeof staff.department === 'object' && (
              <Badge variant="secondary" className={isCompact ? 'text-xs' : 'text-sm'}>
                {staff.department.name}
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>

      {showContactInfo && staff.contactInfo && (
        <CardContent className={`${isCompact ? 'pt-0' : 'pt-2'}`}>
          <div className="space-y-1">
            {staff.contactInfo.email && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-3 w-3" />
                <span className="truncate">{staff.contactInfo.email}</span>
              </div>
            )}
            {staff.contactInfo.phone && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-3 w-3" />
                <span>{staff.contactInfo.phone}</span>
              </div>
            )}
            {staff.contactInfo.office && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span>{staff.contactInfo.office}</span>
              </div>
            )}
          </div>
        </CardContent>
      )}
    </Card>
  )
}

const TreeView: React.FC<{
  staffByLevel: Record<string, Staff[]>
  showContactInfo: boolean
  showPhotos: boolean
  layout: string
  maxLevels: number
}> = ({ staffByLevel, showContactInfo, showPhotos, layout, maxLevels }) => {
  const levels = hierarchyOrder.slice(0, maxLevels)

  return (
    <div className="space-y-8">
      {levels.map((level) => {
        const staffAtLevel = staffByLevel[level] || []
        if (staffAtLevel.length === 0) return null

        return (
          <div key={level} className="space-y-4">
            <h3 className="text-lg font-semibold text-center">{getHierarchyLabel(level)}</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {staffAtLevel.map((staff) => (
                <div key={staff.id} className="w-full max-w-sm">
                  <StaffCard
                    staff={staff}
                    showContactInfo={showContactInfo}
                    showPhotos={showPhotos}
                    layout={layout}
                  />
                </div>
              ))}
            </div>
            {level !== levels[levels.length - 1] && (
              <div className="flex justify-center">
                <div className="w-px h-8 bg-border"></div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

const GridView: React.FC<{
  staff: Staff[]
  showContactInfo: boolean
  showPhotos: boolean
  layout: string
}> = ({ staff, showContactInfo, showPhotos, layout }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {staff.map((staffMember) => (
        <StaffCard
          key={staffMember.id}
          staff={staffMember}
          showContactInfo={showContactInfo}
          showPhotos={showPhotos}
          layout={layout}
        />
      ))}
    </div>
  )
}

export const UniversityOrganigramClient: React.FC<Props> = ({
  staff,
  displayType,
  selectedDepartment,
  showContactInfo = true,
  showPhotos = true,
  layout = 'tree',
  maxLevels = 5,
}) => {
  if (staff.length === 0) {
    return (
      <div className="text-center py-12">
        <User className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
        <h3 className="text-lg font-semibold mb-2">No Staff Found</h3>
        <p className="text-muted-foreground">
          {displayType === 'by-department' && selectedDepartment
            ? 'No staff members found for the selected department.'
            : 'No staff members found matching the current criteria.'}
        </p>
      </div>
    )
  }

  // Sort staff by hierarchy level
  const sortedStaff = staff.sort((a, b) => {
    const levelA = getHierarchyLevel(a.hierarchyLevel || '')
    const levelB = getHierarchyLevel(b.hierarchyLevel || '')
    return levelA - levelB
  })

  if (layout === 'tree') {
    // Group staff by hierarchy level for tree view
    const staffByLevel = sortedStaff.reduce(
      (acc, staffMember) => {
        const level = staffMember.hierarchyLevel || 'unknown'
        if (!acc[level]) {
          acc[level] = []
        }
        acc[level].push(staffMember)
        return acc
      },
      {} as Record<string, Staff[]>,
    )

    return (
      <div className="py-8">
        <div className="container mx-auto px-4">
          <TreeView
            staffByLevel={staffByLevel}
            showContactInfo={showContactInfo ?? false}
            showPhotos={showPhotos ?? false}
            layout={layout}
            maxLevels={maxLevels ?? 12}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <GridView
          staff={sortedStaff}
          showContactInfo={showContactInfo ?? false}
          showPhotos={showPhotos ?? false}
          layout={layout}
        />
      </div>
    </div>
  )
}