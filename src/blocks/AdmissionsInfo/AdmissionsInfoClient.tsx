'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CalendarDays, DollarSign, GraduationCap, FileText } from 'lucide-react'
import { AcademicProgram, AdmissionsInfoBlock } from '@/payload-types'

type AdmissionsInfoClientProps = {
  programs: AcademicProgram[]
  displayType?: 'all-programs' | 'by-department' | 'by-program-type'
  selectedDepartment?: { id: string; title: string } | null
  selectedProgramType?: string | null
  showDeadlines?: boolean
  showFees?: boolean
  showRequirements?: boolean
  showApplicationSteps?: boolean
  layout?: 'cards' | 'table' | 'accordion'
}

const applicationSteps = [
  {
    step: 1,
    title: 'Research Programs',
    description:
      'Browse our academic programs and find the one that matches your interests and career goals.',
  },
  {
    step: 2,
    title: 'Check Requirements',
    description:
      'Review the entry requirements and ensure you meet the academic and language prerequisites.',
  },
  {
    step: 3,
    title: 'Prepare Documents',
    description:
      'Gather all required documents including transcripts, certificates, and recommendation letters.',
  },
  {
    step: 4,
    title: 'Submit Application',
    description:
      'Complete the online application form and upload all required supporting documents.',
  },
  {
    step: 5,
    title: 'Pay Application Fee',
    description: 'Pay the non-refundable application fee to process your application.',
  },
  {
    step: 6,
    title: 'Track Application',
    description:
      'Monitor your application status through our online portal and respond to any requests.',
  },
]

export function AdmissionsInfoClient({
  programs,
  displayType = 'all-programs',
  selectedDepartment,
  selectedProgramType,
  showDeadlines = true,
  showFees = true,
  showRequirements = true,
  showApplicationSteps = true,
  layout = 'cards',
}: AdmissionsInfoClientProps) {
  const formatDate = (dateString: string) => {
    if (!dateString) return 'Not specified'
    const date = new Date(dateString)
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
  }

  const renderProgramCard = (program: AcademicProgram) => (
    <Card key={program.id} className="h-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg">{program.title}</CardTitle>
            <div className="flex gap-2 mt-2">
              {program.programType && typeof program.programType === 'object' && (
                <Badge variant="secondary">{program.programType}</Badge>
              )}
              {program.department && typeof program.department === 'object' && (
                <Badge variant="outline">{program.department?.title}</Badge>
              )}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <GraduationCap className="h-4 w-4" />
          <span>Duration: {program.duration}</span>
        </div>

        {showDeadlines && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium">
              <CalendarDays className="h-4 w-4" />
              <span>Application Deadline</span>
            </div>
            {program.applicationDeadline && (
              <p className="text-sm text-muted-foreground">
                {formatDate(program.applicationDeadline)}
              </p>
            )}
            {program.intakePeriods && program.intakePeriods.length > 0 && (
              <div>
                <p className="text-sm font-medium">Intake Periods:</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {program.intakePeriods.map((period, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {formatDate(period.intakeDate)}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {showFees && program.tuitionFees && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium">
              <DollarSign className="h-4 w-4" />
              <span>Tuition Fees</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {program.tuitionFees.local && (
                <div>
                  <span className="font-medium">Local:</span>
                  <p className="text-muted-foreground">{program.tuitionFees.local}</p>
                </div>
              )}
              {program.tuitionFees.international && (
                <div>
                  <span className="font-medium">International:</span>
                  <p className="text-muted-foreground">{program.tuitionFees.international}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {showRequirements && program.entryRequirements && program.entryRequirements.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium">
              <FileText className="h-4 w-4" />
              <span>Entry Requirements</span>
            </div>
            <div className="text-sm">
              <ul className="list-disc list-inside space-y-1">
                {program.entryRequirements.map((requirement, index) => (
                  <li key={index}>{requirement.requirement}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <Button className="w-full" variant="default">
          Apply Now
        </Button>
      </CardContent>
    </Card>
  )

  const renderTableView = () => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-50">
            <th className="border border-gray-200 px-4 py-2 text-left">Program</th>
            <th className="border border-gray-200 px-4 py-2 text-left">Type</th>
            <th className="border border-gray-200 px-4 py-2 text-left">Department</th>
            <th className="border border-gray-200 px-4 py-2 text-left">Duration</th>
            {showDeadlines && (
              <th className="border border-gray-200 px-4 py-2 text-left">Deadline</th>
            )}
            {showFees && <th className="border border-gray-200 px-4 py-2 text-left">Fees</th>}
            <th className="border border-gray-200 px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {programs.map((program) => (
            <tr key={program.id} className="hover:bg-gray-50">
              <td className="border border-gray-200 px-4 py-2 font-medium">{program.title}</td>
              <td className="border border-gray-200 px-4 py-2">
                <Badge variant="secondary">{program.programType}</Badge>
              </td>
              <td className="border border-gray-200 px-4 py-2">
                {typeof program.department === 'object' ? program.department.title : 'N/A'}
              </td>
              <td className="border border-gray-200 px-4 py-2">{program.duration}</td>
              {showDeadlines && (
                <td className="border border-gray-200 px-4 py-2">
                  {program.applicationDeadline ? formatDate(program.applicationDeadline) : 'N/A'}
                </td>
              )}
              {showFees && (
                <td className="border border-gray-200 px-4 py-2">
                  <div className="text-sm">
                    {program.tuitionFees?.local && <div>Local: {program.tuitionFees.local}</div>}
                    {program.tuitionFees?.international && (
                      <div>International: {program.tuitionFees.international}</div>
                    )}
                  </div>
                </td>
              )}
              <td className="border border-gray-200 px-4 py-2">
                <Button size="sm">Apply</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  const renderAccordionView = () => (
    <div className="space-y-4">
      {programs.map((program) => (
        <Card key={program.id}>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{program.title}</span>
              <div className="flex gap-2">
                <Badge variant="secondary">{program.programType}</Badge>
                <Badge variant="outline">
                  {typeof program.department === 'object' ? program.department.title : 'N/A'}
                </Badge>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <GraduationCap className="h-4 w-4" />
                  <span>Duration: {program.duration}</span>
                </div>

                {showDeadlines && (
                  <div>
                    <div className="flex items-center gap-2 text-sm font-medium mb-1">
                      <CalendarDays className="h-4 w-4" />
                      <span>Application Deadline</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {program.applicationDeadline
                        ? formatDate(program.applicationDeadline)
                        : 'N/A'}
                    </p>
                  </div>
                )}

                {showFees && program.tuitionFees && (
                  <div>
                    <div className="flex items-center gap-2 text-sm font-medium mb-1">
                      <DollarSign className="h-4 w-4" />
                      <span>Tuition Fees</span>
                    </div>
                    <div className="text-sm space-y-1">
                      {program.tuitionFees.local && <div>Local: {program.tuitionFees.local}</div>}
                      {program.tuitionFees.international && (
                        <div>International: {program.tuitionFees.international}</div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                {showRequirements &&
                  program.entryRequirements &&
                  program.entryRequirements.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 text-sm font-medium mb-1">
                        <FileText className="h-4 w-4" />
                        <span>Entry Requirements</span>
                      </div>
                      <div className="text-sm">
                        <ul className="list-disc list-inside space-y-1">
                          {program.entryRequirements.map((requirement, index) => (
                            <li key={index}>{requirement.requirement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                <Button className="w-full">Apply Now</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Admissions Information</h2>
        {displayType === 'by-department' && selectedDepartment && (
          <p className="text-lg text-muted-foreground">Programs in {selectedDepartment.title}</p>
        )}
        {displayType === 'by-program-type' && selectedProgramType && (
          <p className="text-lg text-muted-foreground">{selectedProgramType} Programs</p>
        )}
      </div>

      {showApplicationSteps && (
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Application Process</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {applicationSteps.map((step) => (
              <Card key={step.step}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                    <h4 className="font-semibold">{step.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {programs.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No programs found matching the selected criteria.</p>
        </div>
      ) : (
        <div>
          {layout === 'cards' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map(renderProgramCard)}
            </div>
          )}
          {layout === 'table' && renderTableView()}
          {layout === 'accordion' && renderAccordionView()}
        </div>
      )}
    </div>
  )
}
