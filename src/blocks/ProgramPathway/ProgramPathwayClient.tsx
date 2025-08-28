'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ChevronRight, ArrowDown, Clock, BookOpen, GraduationCap } from 'lucide-react'
import { AcademicProgram } from '@/payload-types'

type ProgramType = 'Basic' | 'HND' | 'Degree-TopUp' | 'Degree-Direct' | 'Masters' | 'PhD'

interface ProgramPathwayClientProps {
  programs: AcademicProgram[]
  selectedDepartment?: {
    id: string
    name: string
  }
  showAllPathways?: boolean
  highlightedPathway?: string
  showDuration?: boolean
  showRequirements?: boolean
  layout?: 'horizontal' | 'vertical' | 'flowchart'
  enableInteractivity?: boolean
}

const pathwaySteps = [
  { type: 'Basic', label: 'Basic Programs', icon: BookOpen, color: 'bg-blue-100 text-blue-800' },
  {
    type: 'HND',
    label: 'Higher National Diploma',
    icon: GraduationCap,
    color: 'bg-green-100 text-green-800',
  },
  {
    type: 'Degree-TopUp',
    label: 'Degree (Top-up)',
    icon: GraduationCap,
    color: 'bg-purple-100 text-purple-800',
  },
  {
    type: 'Degree-Direct',
    label: 'Degree (Direct)',
    icon: GraduationCap,
    color: 'bg-purple-100 text-purple-800',
  },
  {
    type: 'Masters',
    label: 'Masters Programs',
    icon: GraduationCap,
    color: 'bg-orange-100 text-orange-800',
  },
  { type: 'PhD', label: 'PhD Programs', icon: GraduationCap, color: 'bg-red-100 text-red-800' },
]

export function ProgramPathwayClient({
  programs,
  selectedDepartment,
  showAllPathways = true,
  highlightedPathway = '',
  showDuration = true,
  showRequirements = true,
  layout = 'horizontal',
  enableInteractivity = true,
}: ProgramPathwayClientProps) {
  const getProgramsByType = (type: ProgramType): AcademicProgram[] => {
    return programs.filter((program) => program.programType === type)
  }

  const isHighlighted = (stepType: string): boolean => {
    switch (highlightedPathway) {
      case 'basic-to-hnd':
        return stepType === 'Basic' || stepType === 'HND'
      case 'hnd-to-degree':
        return stepType === 'HND' || stepType === 'Degree-TopUp' || stepType === 'Degree-Direct'
      case 'degree-to-masters':
        return stepType === 'Degree-TopUp' || stepType === 'Degree-Direct' || stepType === 'Masters'
      case 'masters-to-phd':
        return stepType === 'Masters' || stepType === 'PhD'
      case 'full-pathway':
        return true
      default:
        return false
    }
  }

  const renderPathwayStep = (step: (typeof pathwaySteps)[0], index: number) => {
    const stepPrograms = getProgramsByType(step.type as ProgramType)
    const highlighted = isHighlighted(step.type)
    const Icon = step.icon

    return (
      <div
        key={step.type}
        className={`relative ${
          enableInteractivity ? 'transition-all duration-300 hover:scale-105' : ''
        } ${highlighted ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}`}
      >
        <Card className={`${highlighted ? 'border-blue-500 shadow-lg' : 'border-gray-200'}`}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Icon className="h-5 w-5" />
              {step.label}
              <Badge className={step.color}>{stepPrograms.length}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {stepPrograms.length > 0 ? (
              <div className="space-y-2">
                {stepPrograms.slice(0, 3).map((program) => (
                  <div key={program.id} className="p-2 bg-gray-50 rounded-md">
                    <h4 className="font-medium text-sm">{program.title}</h4>
                    {showDuration && program.duration && (
                      <div className="flex items-center gap-1 text-xs text-gray-600 mt-1">
                        <Clock className="h-3 w-3" />
                        {program.duration}
                      </div>
                    )}
                    {showRequirements && program.entryRequirements && (
                      <div className="text-xs text-gray-600 mt-1">Requirements available</div>
                    )}
                    {program.mentorUniversity && typeof program.mentorUniversity === 'object' && (
                      <div className="text-xs text-blue-600 mt-1">
                        Partner: {program.mentorUniversity.name}
                      </div>
                    )}
                  </div>
                ))}
                {stepPrograms.length > 3 && (
                  <div className="text-xs text-gray-500 text-center">
                    +{stepPrograms.length - 3} more programs
                  </div>
                )}
              </div>
            ) : (
              <div className="text-sm text-gray-500 text-center py-4">No programs available</div>
            )}
          </CardContent>
        </Card>

        {/* Connector Arrow */}
        {index < pathwaySteps.length - 1 && (
          <div
            className={`absolute ${
              layout === 'horizontal'
                ? 'top-1/2 -right-4 transform -translate-y-1/2'
                : layout === 'vertical'
                  ? 'bottom-0 left-1/2 transform translate-y-2 -translate-x-1/2'
                  : 'top-1/2 -right-4 transform -translate-y-1/2'
            } z-10`}
          >
            {layout === 'vertical' ? (
              <ArrowDown className="h-6 w-6 text-gray-400" />
            ) : (
              <ChevronRight className="h-6 w-6 text-gray-400" />
            )}
          </div>
        )}
      </div>
    )
  }

  const containerClass = {
    horizontal: 'flex flex-wrap gap-8 justify-center items-start',
    vertical: 'flex flex-col gap-8 max-w-md mx-auto',
    flowchart: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
  }[layout]

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Academic Program Pathways</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore the academic progression opportunities at SDU Institute. From foundational
            programs to advanced degrees, discover your path to success.
          </p>
          {selectedDepartment && !showAllPathways && (
            <Badge variant="outline" className="mt-4">
              Showing pathways for: {selectedDepartment.name}
            </Badge>
          )}
        </div>

        <div className={containerClass}>
          {pathwaySteps.map((step, index) => renderPathwayStep(step, index))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Your Academic Journey</h3>
            <p className="text-blue-800 mb-4">
              Our flexible program structure allows you to start at any level and progress through
              your academic journey. Masters and PhD programs are offered in partnership with
              renowned mentor universities.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="default">View All Programs</Button>
              <Button variant="outline">Admission Requirements</Button>
              <Button variant="outline">Contact Admissions</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
