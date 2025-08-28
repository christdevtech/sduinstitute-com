'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Media } from '@/components/Media'
import { User, Mail, Phone, MapPin, GraduationCap } from 'lucide-react'
import type { Department, Staff, AcademicProgram } from '@/payload-types'
import { cn } from '@/utilities/ui'

type StaffCardProps = {
  staff: Staff
  layout: 'default' | 'compact' | 'detailed'
}

const StaffCard: React.FC<StaffCardProps> = ({ staff, layout }) => {
  const { fullName, position, slug, profileImage, bio, contactInfo } = staff

  return (
    <Card className="p-6 hover:shadow-md transition-shadow">
      <div className="flex gap-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
          {profileImage && typeof profileImage === 'object' ? (
            <Media resource={profileImage} size="64px" className="object-cover w-full h-full" />
          ) : (
            <div className="bg-muted flex items-center justify-center h-full">
              <User className="w-8 h-8 text-muted-foreground" />
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-lg mb-1">
            <Link href={`/staff/${slug}`} className="hover:text-primary transition-colors">
              {fullName}
            </Link>
          </h4>
          <p className="text-muted-foreground mb-2">{position}</p>

          {layout === 'detailed' && bio && (
            <div className="text-sm text-muted-foreground mb-3 line-clamp-3">
              <div dangerouslySetInnerHTML={{ __html: bio }} />
            </div>
          )}

          {contactInfo && (
            <div className="flex flex-wrap gap-3 text-sm">
              {contactInfo.email && (
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-3 h-3" />
                  Email
                </a>
              )}
              {contactInfo.phone && (
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-3 h-3" />
                  Call
                </a>
              )}
              {contactInfo.office && (
                <span className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  {contactInfo.office}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}

type ProgramCardProps = {
  program: AcademicProgram
  layout: 'default' | 'compact' | 'detailed'
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program, layout }) => {
  const { title, slug, programType, duration, featuredImage } = program

  if (layout === 'compact') {
    return (
      <div className="p-4 border border-border rounded-lg bg-card hover:shadow-sm transition-shadow">
        <div className="flex items-center gap-2 mb-2">
          <GraduationCap className="w-4 h-4 text-primary" />
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
            {programType}
          </span>
        </div>
        <h4 className="font-medium mb-1">
          <Link
            href={`/academic-programs/${slug}`}
            className="hover:text-primary transition-colors"
          >
            {title}
          </Link>
        </h4>
        <p className="text-sm text-muted-foreground">{duration}</p>
      </div>
    )
  }

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative w-full h-32">
        {featuredImage && typeof featuredImage === 'object' ? (
          <Media resource={featuredImage} size="33vw" className="object-cover w-full h-full" />
        ) : (
          <div className="bg-muted flex items-center justify-center h-full">
            <GraduationCap className="w-8 h-8 text-muted-foreground" />
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
            {programType}
          </span>
        </div>
        <h4 className="font-semibold mb-2">
          <Link
            href={`/academic-programs/${slug}`}
            className="hover:text-primary transition-colors"
          >
            {title}
          </Link>
        </h4>
        <p className="text-sm text-muted-foreground mb-3">{duration}</p>
        <Button asChild variant="outline" size="sm" className="w-full">
          <Link href={`/academic-programs/${slug}`}>Learn More</Link>
        </Button>
      </div>
    </Card>
  )
}

type DepartmentOverviewClientProps = {
  id?: string
  department: Department
  staffMembers: Staff[]
  programs: AcademicProgram[]
  showStaffList?: boolean
  showPrograms?: boolean
  showContactInfo?: boolean
  layout?: 'default' | 'compact' | 'detailed'
}

export const DepartmentOverviewClient: React.FC<DepartmentOverviewClientProps> = ({
  id,
  department,
  staffMembers,
  programs,
  showStaffList,
  showPrograms,
  showContactInfo,
  layout = 'default',
}) => {
  const { title, description, featuredImage, contactInfo, headOfDepartment } = department
  const headOfDept = typeof headOfDepartment === 'object' ? headOfDepartment : null

  return (
    <div className="container my-16" id={`block-${id}`}>
      {/* Department Header */}
      <div className="mb-12">
        <div
          className={cn('grid gap-8', layout === 'detailed' ? 'lg:grid-cols-3' : 'lg:grid-cols-2')}
        >
          <div
            className={cn('space-y-4', layout === 'detailed' ? 'lg:col-span-2' : 'lg:col-span-1')}
          >
            <h2 className="text-3xl font-bold">{title}</h2>

            {headOfDept && (
              <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  {headOfDept.profileImage && typeof headOfDept.profileImage === 'object' ? (
                    <Media
                      resource={headOfDept.profileImage}
                      size="48px"
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="bg-muted flex items-center justify-center h-full">
                      <User className="w-6 h-6 text-muted-foreground" />
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium">Head of Department</p>
                  <p className="text-sm text-muted-foreground">{headOfDept.fullName}</p>
                </div>
              </div>
            )}

            {description && (
              <div className="prose prose-sm max-w-none">
                <div dangerouslySetInnerHTML={{ __html: description }} />
              </div>
            )}
          </div>

          <div className="space-y-6">
            {featuredImage && typeof featuredImage === 'object' && (
              <div className="relative w-full h-64 rounded-lg overflow-hidden">
                <Media
                  resource={featuredImage}
                  size="100vw"
                  className="object-cover w-full h-full"
                />
              </div>
            )}

            {showContactInfo && contactInfo && (
              <Card className="p-4">
                <h3 className="font-semibold mb-3">Contact Information</h3>
                <div className="space-y-2">
                  {contactInfo.email && (
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      {contactInfo.email}
                    </a>
                  )}
                  {contactInfo.phone && (
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      {contactInfo.phone}
                    </a>
                  )}
                  {contactInfo.office && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {contactInfo.office}
                    </div>
                  )}
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Staff Section */}
      {showStaffList && staffMembers.length > 0 && (
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">Department Staff</h3>
            <Button asChild variant="outline">
              <Link href={`/staff?department=${department.slug}`}>View All Staff</Link>
            </Button>
          </div>

          <div
            className={cn(
              'grid gap-4',
              layout === 'compact'
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                : layout === 'detailed'
                  ? 'grid-cols-1 md:grid-cols-2'
                  : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
            )}
          >
            {staffMembers.map((staff) => (
              <StaffCard key={staff.id} staff={staff} layout={layout ?? 'default'} />
            ))}
          </div>
        </div>
      )}

      {/* Programs Section */}
      {showPrograms && programs.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">Academic Programs</h3>
            <Button asChild variant="outline">
              <Link href={`/academic-programs?department=${department.slug}`}>
                View All Programs
              </Link>
            </Button>
          </div>

          <div
            className={cn(
              'grid gap-4',
              layout === 'compact'
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                : layout === 'detailed'
                  ? 'grid-cols-1 md:grid-cols-2'
                  : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
            )}
          >
            {programs.map((program) => (
              <ProgramCard key={program.id} program={program} layout={layout ?? 'default'} />
            ))}
          </div>
        </div>
      )}

      {/* Empty state */}
      {!showStaffList && !showPrograms && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No additional information to display.</p>
        </div>
      )}
    </div>
  )
}
