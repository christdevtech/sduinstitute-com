'use client'

import type { AcademicProgram, Department } from '@/payload-types'

import React, { useState, useEffect, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Media } from '@/components/Media'
import Link from 'next/link'
import RichText from '@/components/RichText'

type ProgramCardProps = {
  program: AcademicProgram
  showApplicationCTA: boolean
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program, showApplicationCTA }) => {
  const { title, slug, programType, department, duration, featuredImage, entryRequirements } =
    program
  const departmentName = typeof department === 'object' ? department.title : ''

  return (
    <article className="border border-border rounded-lg overflow-hidden bg-card hover:cursor-pointer transition-all hover:shadow-md">
      <div className="relative w-full h-48">
        {featuredImage && typeof featuredImage === 'object' ? (
          <Media resource={featuredImage} size="33vw" className="object-cover w-full h-full" />
        ) : (
          <div className="bg-muted flex items-center justify-center h-full">
            <span className="text-muted-foreground">No image</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="mb-2">
          <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded">
            {programType}
          </span>
          {departmentName && (
            <span className="inline-block bg-secondary/50 text-secondary-foreground text-xs font-medium px-2 py-1 rounded ml-2">
              {departmentName}
            </span>
          )}
        </div>

        <h3 className="text-lg font-semibold mb-2 line-clamp-2">
          <Link
            href={`/academic-programs/${slug}`}
            className="hover:text-primary transition-colors"
          >
            {title}
          </Link>
        </h3>

        <div className="text-sm text-muted-foreground mb-4">
          <p className="mb-1">
            <strong>Duration:</strong> {duration}
          </p>
          {entryRequirements && (
            <div className="line-clamp-3">
              <strong>Entry Requirements:</strong>
              <RichText data={entryRequirements} className="mt-1 text-xs"></RichText>
            </div>
          )}
        </div>

        <div className="flex gap-2">
          <Button asChild variant="outline" size="sm" className="flex-1">
            <Link href={`/academic-programs/${slug}`}>Learn More</Link>
          </Button>
          {showApplicationCTA && (
            <Button asChild size="sm" className="flex-1">
              <Link href={`/apply?program=${slug}`}>Apply Now</Link>
            </Button>
          )}
        </div>
      </div>
    </article>
  )
}

type FilterProps = {
  departments: Department[]
  selectedDepartment: string
  selectedProgramType: string
  searchTerm: string
  onDepartmentChange: (value: string) => void
  onProgramTypeChange: (value: string) => void
  onSearchChange: (value: string) => void
}

const Filters: React.FC<FilterProps> = ({
  departments,
  selectedDepartment,
  selectedProgramType,
  searchTerm,
  onDepartmentChange,
  onProgramTypeChange,
  onSearchChange,
}) => {
  const programTypes = ['Basic', 'HND', 'Degree-TopUp', 'Degree-Direct', 'Masters', 'PhD']

  return (
    <div className="mb-8 p-6 bg-muted/50 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="search" className="block text-sm font-medium mb-2">
            Search Programs
          </label>
          <input
            id="search"
            type="text"
            placeholder="Search by program name..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-3 py-2 border border-border rounded-md bg-background"
          />
        </div>

        <div>
          <label htmlFor="department" className="block text-sm font-medium mb-2">
            Department
          </label>
          <select
            id="department"
            value={selectedDepartment}
            onChange={(e) => onDepartmentChange(e.target.value)}
            className="w-full px-3 py-2 border border-border rounded-md bg-background"
          >
            <option value="">All Departments</option>
            {departments.map((dept) => (
              <option key={dept.id} value={dept.id}>
                {dept.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="programType" className="block text-sm font-medium mb-2">
            Program Type
          </label>
          <select
            id="programType"
            value={selectedProgramType}
            onChange={(e) => onProgramTypeChange(e.target.value)}
            className="w-full px-3 py-2 border border-border rounded-md bg-background"
          >
            <option value="">All Types</option>
            {programTypes.map((type) => (
              <option key={type} value={type}>
                {type === 'HND'
                  ? 'Higher National Diploma (HND)'
                  : type === 'Degree-TopUp'
                    ? 'Degree - Top-up'
                    : type === 'Degree-Direct'
                      ? 'Degree - Direct Entry'
                      : type}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

// Client component for filtering and search
export const AcademicProgramsClient: React.FC<{
  initialPrograms: AcademicProgram[]
  departments: Department[]
  showFilters: boolean
  showSearch: boolean
  showApplicationCTA: boolean
  itemsPerPage: number
}> = ({
  initialPrograms,
  departments,
  showFilters,
  showSearch,
  showApplicationCTA,
  itemsPerPage,
}) => {
  const [programs] = useState<AcademicProgram[]>(initialPrograms)
  const [selectedDepartment, setSelectedDepartment] = useState('')
  const [selectedProgramType, setSelectedProgramType] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  // Filter programs based on current filters
  const filteredPrograms = useMemo(() => {
    return programs.filter((program) => {
      const matchesSearch =
        !searchTerm || program.title?.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesDepartment =
        !selectedDepartment ||
        (typeof program.department === 'object' && program.department.id === selectedDepartment)

      const matchesType = !selectedProgramType || program.programType === selectedProgramType

      return matchesSearch && matchesDepartment && matchesType
    })
  }, [programs, searchTerm, selectedDepartment, selectedProgramType])

  // Pagination
  const totalPages = Math.ceil(filteredPrograms.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedPrograms = filteredPrograms.slice(startIndex, startIndex + itemsPerPage)

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, selectedDepartment, selectedProgramType])

  return (
    <>
      {(showFilters || showSearch) && (
        <Filters
          departments={departments}
          selectedDepartment={selectedDepartment}
          selectedProgramType={selectedProgramType}
          searchTerm={searchTerm}
          onDepartmentChange={setSelectedDepartment}
          onProgramTypeChange={setSelectedProgramType}
          onSearchChange={setSearchTerm}
        />
      )}

      {/* Results count */}
      <div className="mb-6">
        <p className="text-sm text-muted-foreground">
          Showing {paginatedPrograms.length} of {filteredPrograms.length} programs
        </p>
      </div>

      {/* Programs grid */}
      {paginatedPrograms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {paginatedPrograms.map((program) => (
            <ProgramCard
              key={program.id}
              program={program}
              showApplicationCTA={showApplicationCTA}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">No programs found matching your criteria.</p>
          <Button
            onClick={() => {
              setSearchTerm('')
              setSelectedDepartment('')
              setSelectedProgramType('')
            }}
            variant="outline"
          >
            Clear Filters
          </Button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2">
          <Button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            variant="outline"
            size="sm"
          >
            Previous
          </Button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              onClick={() => setCurrentPage(page)}
              variant={currentPage === page ? 'default' : 'outline'}
              size="sm"
            >
              {page}
            </Button>
          ))}

          <Button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            variant="outline"
            size="sm"
          >
            Next
          </Button>
        </div>
      )}
    </>
  )
}
