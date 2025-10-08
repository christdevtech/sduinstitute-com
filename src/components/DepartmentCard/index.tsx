import React from 'react'
import Link from 'next/link'
import { Media } from '@/components/Media'
import type { Department, Staff, AcademicProgram } from '@/payload-types'

interface DepartmentCardProps {
  department: Department
}

export const DepartmentCard: React.FC<DepartmentCardProps> = ({ department }) => {
  const {
    title,
    slug,
    description,
    featuredImage,
    contactInfo,
    headOfDepartment,
    programs,
    staffMembers,
  } = department

  // Extract text from rich text description
  const getDescriptionText = () => {
    if (!description || typeof description !== 'object') return null

    if (description.root?.children && Array.isArray(description.root.children)) {
      for (const child of description.root.children) {
        if (child.children && Array.isArray(child.children)) {
          for (const textNode of child.children) {
            if (textNode.text && typeof textNode.text === 'string') {
              return textNode.text.substring(0, 150) + '...'
            }
          }
        }
      }
    }
    return 'Learn more about this department.'
  }

  const programCount = programs && Array.isArray(programs) ? programs.length : 0
  const staffCount = staffMembers && Array.isArray(staffMembers) ? staffMembers.length : 0

  return (
    <Link href={`/departments/${slug}`} className="group block">
      <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
        {/* Featured Image */}
        {featuredImage && typeof featuredImage === 'object' && (
          <div className="aspect-video overflow-hidden">
            <Media
              resource={featuredImage}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
            />
          </div>
        )}

        <div className="p-6">
          {/* Title */}
          <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>

          {/* Description */}
          <div className="text-sm text-muted-foreground mb-4 line-clamp-3">
            {getDescriptionText()}
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
            {programCount > 0 && (
              <div className="flex items-center gap-1">
                <span className="font-medium">{programCount}</span>
                <span>{programCount === 1 ? 'Program' : 'Programs'}</span>
              </div>
            )}
            {staffCount > 0 && (
              <div className="flex items-center gap-1">
                <span className="font-medium">{staffCount}</span>
                <span>{staffCount === 1 ? 'Staff Member' : 'Staff Members'}</span>
              </div>
            )}
          </div>

          {/* Head of Department */}
          {headOfDepartment && typeof headOfDepartment === 'object' && (
            <div className="mb-4 p-3 bg-muted rounded-lg">
              <p className="text-xs text-muted-foreground mb-1">Head of Department</p>
              <p className="text-sm font-medium">{headOfDepartment.fullName}</p>
            </div>
          )}

          {/* Call to Action */}
          <div className="pt-4 border-t border-border">
            <span className="text-sm font-medium text-primary group-hover:underline">
              Explore Department →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
