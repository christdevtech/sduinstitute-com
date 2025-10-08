import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'
import { formatDateTime } from '@/utilities/formatDateTime'

import type { AcademicProgram } from '@/payload-types'

import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import Link from 'next/link'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const programs = await payload.find({
    collection: 'academic-programs',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = programs.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function AcademicProgramPage({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const url = '/academic-programs/' + slug
  const program = await queryProgramBySlug({ slug })

  if (!program) return <PayloadRedirects url={url} />

  const programTypeLabels: Record<string, string> = {
    Basic: 'Basic Program',
    HND: 'Higher National Diploma (HND)',
    'Degree-TopUp': 'Degree - Top-up',
    'Degree-Direct': 'Degree - Direct Entry',
    Masters: 'Masters',
    PhD: 'PhD',
  }

  return (
    <article className="pb-16">
      <PageClient />

      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-muted/50 to-accent py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                  {programTypeLabels[program.programType] || program.programType}
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">{program.title}</h1>
              {program.department && typeof program.department === 'object' && (
                <p className="text-xl text-muted-foreground mb-4">{program.department.title}</p>
              )}
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Duration:</span>
                  <span>{program.duration}</span>
                </div>
                {program.mentorUniversity && typeof program.mentorUniversity === 'object' && (
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Partner University:</span>
                    <span>{program.mentorUniversity.title}</span>
                  </div>
                )}
              </div>
            </div>
            {program.featuredImage && typeof program.featuredImage === 'object' && (
              <div className="aspect-video rounded-lg overflow-hidden">
                <Media resource={program.featuredImage} className="w-full h-full object-cover" />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Curriculum Overview */}
            {program.curriculumOverview && (
              <section>
                <h2 className="text-2xl font-bold mb-6">Curriculum Overview</h2>
                <div className="prose dark:prose-invert max-w-none">
                  <RichText data={program.curriculumOverview} enableGutter={false} />
                </div>
              </section>
            )}

            {/* Career Prospects */}
            {program.careerProspects && (
              <section>
                <h2 className="text-2xl font-bold mb-6">Career Prospects</h2>
                <div className="prose dark:prose-invert max-w-none">
                  <RichText data={program.careerProspects} enableGutter={false} />
                </div>
              </section>
            )}

            {/* Entry Requirements */}
            {program.entryRequirements && program.entryRequirements.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-6">Entry Requirements</h2>
                <ul className="space-y-2">
                  {program.entryRequirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>{req.requirement}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Program Details Card */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Program Details</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Program Type</span>
                  <p className="font-medium">
                    {programTypeLabels[program.programType] || program.programType}
                  </p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Duration</span>
                  <p className="font-medium">{program.duration}</p>
                </div>
                {program.department && typeof program.department === 'object' && (
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">Department</span>
                    <p className="font-medium">{program.department.title}</p>
                  </div>
                )}
                {program.programCoordinator && typeof program.programCoordinator === 'object' && (
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">
                      Program Coordinator
                    </span>
                    <p className="font-medium">{program.programCoordinator.fullName}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Tuition Fees */}
            {program.tuitionFees &&
              (program.tuitionFees.local || program.tuitionFees.international) && (
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Tuition Fees</h3>
                  <div className="space-y-3">
                    {program.tuitionFees.local && (
                      <div>
                        <span className="text-sm font-medium text-muted-foreground">
                          Local Students
                        </span>
                        <p className="font-medium">{program.tuitionFees.local}</p>
                      </div>
                    )}
                    {program.tuitionFees.international && (
                      <div>
                        <span className="text-sm font-medium text-muted-foreground">
                          International Students
                        </span>
                        <p className="font-medium">{program.tuitionFees.international}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

            {/* Important Dates */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Important Dates</h3>
              <div className="space-y-3">
                {program.applicationDeadline && (
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">
                      Application Deadline
                    </span>
                    <p className="font-medium">{formatDateTime(program.applicationDeadline)}</p>
                  </div>
                )}
                {program.intakePeriods && program.intakePeriods.length > 0 && (
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">
                      Intake Periods
                    </span>
                    <div className="space-y-1 mt-1">
                      {program.intakePeriods.map((intake, index) => (
                        <p key={index} className="font-medium">
                          {intake.label || formatDateTime(intake.intakeDate)}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Download Brochure */}
            {program.brochure && typeof program.brochure === 'object' && (
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Download Brochure</h3>
                <Link
                  href={program.brochure.url || ''}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download PDF
                </Link>
              </div>
            )}

            {/* Apply Now CTA */}
            <div className="bg-primary text-primary-foreground rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Ready to Apply?</h3>
              <p className="text-sm mb-4 opacity-90">Start your journey with us today</p>
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 px-4 py-2 bg-background text-foreground rounded-md hover:bg-background/90 transition-colors"
              >
                Apply Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const program = await queryProgramBySlug({ slug })

  return generateMeta({ doc: program })
}

const queryProgramBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'academic-programs',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    depth: 2,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
