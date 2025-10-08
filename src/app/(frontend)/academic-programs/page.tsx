import type { Metadata } from 'next/types'

import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import { AcademicProgramCard } from '@/components/AcademicProgramCard'
import PageClient from './page.client'

export const dynamic = 'force-static'
export const revalidate = 600

type Args = {
  searchParams: Promise<{
    page?: string
    programType?: string
    department?: string
  }>
}

export default async function Page({ searchParams: searchParamsPromise }: Args) {
  const { page = '1', programType, department } = await searchParamsPromise
  const payload = await getPayload({ config: configPromise })

  const currentPage = parseInt(page, 10) || 1

  // Build where clause for filtering
  const whereClause: {
    _status: { equals: string }
    programType?: { equals: string }
    department?: { equals: string }
  } = {
    _status: {
      equals: 'published',
    },
  }

  if (programType) {
    whereClause.programType = {
      equals: programType,
    }
  }

  if (department) {
    whereClause.department = {
      equals: department,
    }
  }

  const programs = await payload.find({
    collection: 'academic-programs',
    depth: 2,
    limit: 12,
    page: currentPage,
    overrideAccess: false,
    where: whereClause,
    select: {
      title: true,
      slug: true,
      programType: true,
      department: true,
      duration: true,
      featuredImage: true,
      curriculumOverview: true,
      tuitionFees: true,
      meta: true,
    },
  })

  // Get departments for filter
  const departments = await payload.find({
    collection: 'departments',
    limit: 100,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
    },
  })

  const programTypes = [
    { label: 'Basic Program', value: 'Basic' },
    { label: 'Higher National Diploma (HND)', value: 'HND' },
    { label: 'Degree - Top-up', value: 'Degree-TopUp' },
    { label: 'Degree - Direct Entry', value: 'Degree-Direct' },
    { label: 'Masters', value: 'Masters' },
    { label: 'PhD', value: 'PhD' },
  ]

  return (
    <div className="pt-24 pb-24">
      <PageClient />
      <div className="container mb-16">
        <div className="prose dark:prose-invert max-w-none">
          <h1>Academic Programs</h1>
          <p>
            Explore our comprehensive range of academic programs designed to prepare you for success
            in your chosen field.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="container mb-8">
        <div className="flex flex-wrap gap-4 p-6 bg-muted/50 rounded-lg">
          <div className="flex flex-col gap-2">
            <label htmlFor="programType" className="text-sm font-medium">
              Program Type
            </label>
            <select
              id="programType"
              className="px-3 py-2 border border-border rounded-md bg-background"
              defaultValue={programType || ''}
            >
              <option value="">All Types</option>
              {programTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="department" className="text-sm font-medium">
              Department
            </label>
            <select
              id="department"
              className="px-3 py-2 border border-border rounded-md bg-background"
              defaultValue={department || ''}
            >
              <option value="">All Departments</option>
              {departments.docs.map((dept) => (
                <option key={dept.id} value={dept.id}>
                  {dept.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="container mb-8">
        <PageRange
          collectionLabels={{
            plural: 'Academic Programs',
            singular: 'Academic Program',
          }}
          currentPage={programs.page}
          limit={12}
          totalDocs={programs.totalDocs}
        />
      </div>

      {/* Programs Grid */}
      <div className="container mb-8">
        {programs.docs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.docs.map((program) => (
              <AcademicProgramCard key={program.id} program={program} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-semibold mb-2">No programs found</h3>
            <p className="text-muted-foreground">
              Try adjusting your filters to see more programs.
            </p>
          </div>
        )}
      </div>

      <div className="container">
        {programs.totalPages > 1 && programs.page && (
          <Pagination page={programs.page} totalPages={programs.totalPages} />
        )}
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'Academic Programs | SDU Institute',
    description:
      'Explore our comprehensive range of academic programs designed to prepare you for success in your chosen field.',
  }
}
