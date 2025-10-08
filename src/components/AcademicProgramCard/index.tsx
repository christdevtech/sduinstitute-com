import React from 'react'
import Link from 'next/link'
import { Media } from '@/components/Media'
import type { AcademicProgram, Department } from '@/payload-types'

interface AcademicProgramCardProps {
  program: {
    id: string
    title: string
    slug?: string | null
    programType: "Basic" | "HND" | "Degree-TopUp" | "Degree-Direct" | "Masters" | "PhD"
    department: string | Department
    duration: string
    featuredImage?: any
    curriculumOverview?: any
    specialties?: Array<{ specialty: string }> | null
    tuitionFees?: {
      local?: string | null
      international?: string | null
    }
  }
}

export const AcademicProgramCard: React.FC<AcademicProgramCardProps> = ({ program }) => {
  const {
    title,
    slug,
    programType,
    department,
    duration,
    featuredImage,
    curriculumOverview,
    specialties,
    tuitionFees,
  } = program

  const programTypeLabels: Record<string, string> = {
    'Basic': 'Basic Program',
    'HND': 'Higher National Diploma (HND)',
    'Degree-TopUp': 'Degree - Top-up',
    'Degree-Direct': 'Degree - Direct Entry',
    'Masters': 'Masters',
    'PhD': 'PhD',
  }

  return (
    <Link href={`/academic-programs/${slug}`} className="group block">
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
          {/* Program Type Badge */}
          <div className="mb-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
              {programTypeLabels[programType] || programType}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>

          {/* Department */}
          {department && typeof department === 'object' && (
            <p className="text-sm text-muted-foreground mb-2">
              {department.title}
            </p>
          )}

          {/* Duration */}
          <p className="text-sm text-muted-foreground mb-4">
            Duration: {duration}
          </p>

          {/* Specialties for Masters/PhD programs */}
          {specialties && specialties.length > 0 && (programType === 'Masters' || programType === 'PhD') && (
            <div className="mb-4">
              <p className="text-sm font-medium mb-2">Specialties:</p>
              <div className="flex flex-wrap gap-1">
                {specialties.slice(0, 3).map((specialty, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200"
                  >
                    {specialty.specialty}
                  </span>
                ))}
                {specialties.length > 3 && (
                  <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-50 text-gray-600 border border-gray-200">
                    +{specialties.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Curriculum Overview (excerpt) */}
          {curriculumOverview && (
            <div className="text-sm text-muted-foreground mb-4 line-clamp-3">
              {/* Simple text extraction from rich text */}
              {typeof curriculumOverview === 'object' && 
               curriculumOverview.root?.children && 
               Array.isArray(curriculumOverview.root.children) &&
               curriculumOverview.root.children[0]?.children &&
               Array.isArray(curriculumOverview.root.children[0].children) &&
               curriculumOverview.root.children[0].children[0]?.text
                ? curriculumOverview.root.children[0].children[0].text.substring(0, 150) + '...'
                : 'Learn more about this program\'s curriculum and structure.'}
            </div>
          )}

          {/* Tuition Fees */}
          {tuitionFees && (tuitionFees.local || tuitionFees.international) && (
            <div className="border-t border-border pt-4">
              <p className="text-sm font-medium mb-1">Tuition Fees:</p>
              {tuitionFees.local && (
                <p className="text-sm text-muted-foreground">
                  Local: {tuitionFees.local}
                </p>
              )}
              {tuitionFees.international && (
                <p className="text-sm text-muted-foreground">
                  International: {tuitionFees.international}
                </p>
              )}
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-4 pt-4 border-t border-border">
            <span className="text-sm font-medium text-primary group-hover:underline">
              Learn More →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}