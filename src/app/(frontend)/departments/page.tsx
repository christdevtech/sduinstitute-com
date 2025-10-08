import type { Metadata } from 'next/types'

import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import { DepartmentCard } from '@/components/DepartmentCard'
import PageClient from './page.client'

export const dynamic = 'force-static'
export const revalidate = 600

type Args = {
  searchParams: Promise<{
    page?: string
  }>
}

export default async function Page({ searchParams: searchParamsPromise }: Args) {
  const { page } = await searchParamsPromise
  const payload = await getPayload({ config: configPromise })

  const departments = await payload.find({
    collection: 'departments',
    depth: 2,
    limit: 12,
    page: page ? parseInt(page) : 1,
  })

  return (
    <div className="pt-24 pb-24">
      <PageClient />
      
      {/* Hero Section */}
      <div className="container mb-16">
        <div className="max-w-[48rem] mx-auto text-center">
          <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
            Academic Departments
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Explore our diverse academic departments, each offering specialized programs and expert faculty 
            to guide your educational journey.
          </p>
        </div>
      </div>



      <div className="container mb-8">
        <PageRange
          collectionLabels={{
            plural: 'Departments',
            singular: 'Department',
          }}
          currentPage={departments.page}
          limit={12}
          totalDocs={departments.totalDocs}
        />
      </div>

      {/* Departments Grid */}
      <div className="container mb-8">
        {departments.docs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.docs.map((department) => (
              <DepartmentCard key={department.id} department={department} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-semibold mb-2">No departments found</h3>
            <p className="text-muted-foreground">
              No departments are currently available.
            </p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {departments.totalPages > 1 && (
        <div className="container">
          <Pagination
            page={departments.page || 1}
            totalPages={departments.totalPages}
            className="mt-8"
          />
        </div>
      )}
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: "Academic Departments - St. David's University Institute",
    description: 'Explore our diverse academic departments offering specialized programs in nursing, midwifery, pharmacy, and laboratory technology.',
    openGraph: {
      title: "Academic Departments - St. David's University Institute",
      description: 'Explore our diverse academic departments offering specialized programs in nursing, midwifery, pharmacy, and laboratory technology.',
    },
  }
}